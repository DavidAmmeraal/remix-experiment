#!/usr/bin/env npx tsx
import yargs from 'yargs/yargs'
import fs from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import { exec } from 'promisify-child-process'
import { promisify } from 'node:util'

const mkdtmp = promisify(fs.mkdtemp)
const rm = promisify(fs.rm)

const createTempDir = async () => {
  const tmpDir = await mkdtmp('quin-api-gen-')
  return tmpDir
}

const cleanupTempDir = async (tmpDir: string) => {
  await rm(tmpDir, { recursive: true, force: true })
}

const cloneRepo = async ({
  repo,
  branch,
  dir,
}: {
  repo: string
  branch: string
  dir: string
}) => {
  await exec(`git clone ${branch ? `--branch=${branch}` : ``} ${repo} ${dir}`)
}

const parser = yargs(process.argv.slice(2)).options({
  r: { type: 'string', alias: 'repo', demandOption: true },
  b: { type: 'string', alias: 'branch', demandOption: true },
  path: { type: 'string', demandOption: true, describe: 'path to generate' },
  v: { type: 'boolean', alias: 'verbose' },
  output: { type: 'string', alias: 'o', demandOption: true },
})

let DEBUG = false

const log = console.log

const info = (...args: unknown[]) => {
  log(chalk.green(...args))
}
const debug = (...args: unknown[]) => {
  if (DEBUG) log(chalk.blue.bold('DEBUG:'), chalk.blue(...args))
}

const main = async () => {
  const argv = await parser.parse()
  info("Welcome to quin's api-gen")

  let tmpDir: string | undefined = undefined
  if (argv.v) DEBUG = true

  let err
  try {
    debug(`Creating temp dir ${tmpDir}`)
    tmpDir = await createTempDir()
    debug(`Created temp dir ${tmpDir}`)

    info(`Cloning repo ${argv.repo}...`)
    await cloneRepo({
      repo: argv.r,
      branch: argv.b,
      dir: tmpDir,
    })
    info(`Done cloning repo!`)

    info(`Generating api from spec ${argv.path}...`)

    const child = exec(
      `npx openapi-typescript "${path.join(tmpDir, argv.path)}" --output ${path.join(process.cwd(), argv.output)}`,
    )
    child.stdout?.on('data', data => {
      debug(data)
    })
    await child
  } catch (e) {
    err = e
    console.error(`Failed to create temp dir`, e)
  } finally {
    if (tmpDir) await cleanupTempDir(tmpDir)
    if (err) process.exit(1)
  }
}

main()
