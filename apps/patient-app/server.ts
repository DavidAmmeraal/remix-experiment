/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import fs from 'node:fs'
import url from 'node:url'
import path from 'node:path'

import { createRequestHandler, getEarlyHintLinks } from '@mcansh/remix-fastify'
import { ServerBuild, broadcastDevReady, installGlobals } from '@remix-run/node'
import { fastifyEarlyHints } from '@fastify/early-hints'
import { fastifyStatic } from '@fastify/static'
import fastify from 'fastify'

installGlobals()

const BUILD_PATH = './build/index.js'
const VERSION_PATH = './build/version.txt'

/** @typedef {import('@remix-run/node').ServerBuild} ServerBuild */

/** @type {ServerBuild} */
const initialBuild = await import(BUILD_PATH)

const getLoadContext = () => ({})

let handler: ReturnType<typeof createRequestHandler>

if (process.env.NODE_ENV === 'development') {
  handler = await createDevRequestHandler(initialBuild, getLoadContext)
} else {
  handler = createRequestHandler({
    build: initialBuild,
    mode: initialBuild.mode,
    getLoadContext,
  })
}

const app = fastify()

app.addContentTypeParser('application/json', (_, payload, done) =>
  done(null, payload),
)
app.addContentTypeParser('*', (_, payload, done) => done(null, payload))

await app.register(fastifyEarlyHints, { warn: true })

await app.register(fastifyStatic, {
  root: path.join(import.meta.dirname, 'public'),
  prefix: '/',
  wildcard: false,
  cacheControl: true,
  dotfiles: 'allow',
  etag: true,
  maxAge: '1h',
  serveDotFiles: true,
  lastModified: true,
})

await app.register(fastifyStatic, {
  root: path.join(import.meta.dirname, 'public', 'build'),
  prefix: '/build',
  wildcard: true,
  decorateReply: false,
  cacheControl: true,
  dotfiles: 'allow',
  etag: true,
  maxAge: '1y',
  immutable: true,
  serveDotFiles: true,
  lastModified: true,
})

app.all('*', async (request, reply) => {
  if (process.env.NODE_ENV === 'production') {
    const links = getEarlyHintLinks(request, initialBuild)
    await reply.writeEarlyHintsLinks(links)
  }

  return handler(request, reply)
})

const port = process.env.PORT ? Number(process.env.PORT) || 3000 : 3000

const address = await app.listen({ port, host: '0.0.0.0' })
console.log(`✅ app ready: ${address}`)

if (process.env.NODE_ENV === 'development') {
  await broadcastDevReady(initialBuild)
}

/**
 * @param {ServerBuild} initialBuild
 * @param {import('@mcansh/remix-fastify').GetLoadContextFunction} [getLoadContext]
 * @returns {Promise<import('@mcansh/remix-fastify').RequestHandler>}
 */
async function createDevRequestHandler(
  initialBuild: ServerBuild,
  getLoadContext: any,
) {
  let build = initialBuild

  async function handleServerUpdate() {
    // 1. re-import the server build
    build = await reimportServer()
    // 2. tell Remix that this app server is now up-to-date and ready
    await broadcastDevReady(build)
  }

  const chokidar = await import('chokidar')
  chokidar
    .watch(VERSION_PATH, { ignoreInitial: true })
    .on('add', handleServerUpdate)
    .on('change', handleServerUpdate)

  return async (request: any, reply: any) => {
    const links = getEarlyHintLinks(request, build)
    await reply.writeEarlyHintsLinks(links)

    return createRequestHandler({
      build,
      getLoadContext,
      mode: 'development',
    })(request, reply)
  }
}

/** @returns {Promise<ServerBuild>} */
async function reimportServer() {
  const stat = fs.statSync(BUILD_PATH)

  // convert build path to URL for Windows compatibility with dynamic `import`
  const BUILD_URL = url.pathToFileURL(BUILD_PATH).href

  // use a timestamp query parameter to bust the import cache
  return import(BUILD_URL + '?t=' + stat.mtimeMs)
}
