import {
  AUTH_CALLBACK_URL,
  AUTH_KEYCLOAK_CLIENT_ID,
  AUTH_KEYCLOAK_DOMAIN,
  AUTH_KEYCLOAK_REALM,
} from './constants'

export function createKeycloakRegisterURL({
  language,
  redirectAfter,
}: {
  language: string
  redirectAfter?: string
}) {
  const url = new URL(
    `https://${AUTH_KEYCLOAK_DOMAIN}/realms/${AUTH_KEYCLOAK_REALM}/protocol/openid-connect/registrations`,
  )
  const callbackUrl = new URL(AUTH_CALLBACK_URL)
  if (redirectAfter) callbackUrl.searchParams.set('redirect', redirectAfter)
  url.searchParams.set('client_id', AUTH_KEYCLOAK_CLIENT_ID)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', 'openid email')
  url.searchParams.set('redirect_uri', callbackUrl.toString())
  url.searchParams.set('ui_locales', language)

  return url.toString()
}

export function createKeycloakLoginURL({
  language,
  redirectAfter,
}: {
  language: string
  redirectAfter?: string
}) {
  const url = new URL(
    `https://${AUTH_KEYCLOAK_DOMAIN}/realms/${AUTH_KEYCLOAK_REALM}/protocol/openid-connect/auth`,
  )
  const callbackUrl = new URL(AUTH_CALLBACK_URL)
  if (redirectAfter) callbackUrl.searchParams.set('redirect', redirectAfter)
  url.searchParams.set('client_id', AUTH_KEYCLOAK_CLIENT_ID)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', 'openid email profile')
  url.searchParams.set('redirect_uri', AUTH_CALLBACK_URL)
  url.searchParams.set('ui_locales', language)

  return url.toString()
}
