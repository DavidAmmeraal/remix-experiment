import { createApiClient } from '@quin/patient-service-api'
import { authenticator } from '~/auth/auth.server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiCreator = (...parameters: Parameters<typeof createApiClient>) => any

const wrapBackendApi =
  <T extends ApiCreator>(apiCreator: T) =>
  (request: Request): ReturnType<T> => {
    const bearerToken = request.headers.get('Authorization')?.split(' ')[1]

    return apiCreator({
      baseUrl: process.env.BACKEND_URL as string,
      headers: { Authorization: () => `Bearer ${bearerToken}` },
    })
  }

export const createBackendServicesForRequest = (request: Request) => {
  const services = {
    patient: wrapBackendApi(createApiClient),
  }
  return Object.entries(services).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [key]: value(request),
      }
    },
    {} as { [K in keyof typeof services]: ReturnType<(typeof services)[K]> },
  )
}
