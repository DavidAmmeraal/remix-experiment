import createClient from 'openapi-fetch'
import { paths } from './generated'
import { OutgoingHttpHeaders } from 'node:http'

type HeaderSetters = {
  [K in keyof OutgoingHttpHeaders]: () => OutgoingHttpHeaders[K]
}

type CreateApiClientOptions = {
  baseUrl: string
  headers?: HeaderSetters
}

const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] as const

export const createApiClient = async ({
  headers = {},
  baseUrl,
}: CreateApiClientOptions) => {
  const clientMethods = createClient<paths>({ baseUrl })

  const data = await clientMethods.GET('/patients/self')

  /*

  const applyHeaders = () =>
    Object.entries(headers).reduce(
      (acc, [key, setter]) => ({ ...acc, [key]: setter() }),
      {},
    )

  return methods.reduce(
    (acc, method) => {
      return {
        ...acc,
        [method]: ([path, options, ...rest]: Parameters<
          (typeof clientMethods)['GET']
        >) =>
          (clientMethods[method] as any)(
            path,
            { ...options, headers: { ...applyHeaders(), ...options?.headers } },
            ...rest,
          ),
      }
    },
    {} as typeof clientMethods,
  )
  */
}
