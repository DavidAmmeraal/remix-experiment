import { LoaderFunctionArgs, redirect } from '@remix-run/node'
import { authenticator } from '~/auth/auth.server'
import { AUTH_KEYCLOAK_DOMAIN, AUTH_KEYCLOAK_REALM } from '~/auth/constants'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const user = await authenticator.isAuthenticated(request)
  const redirectURL = new URL(`${url.origin}/auth/keycloak/logout-callback`)
  const keycloakUrl = new URL(
    `https://${AUTH_KEYCLOAK_DOMAIN}/realms/${AUTH_KEYCLOAK_REALM}/protocol/openid-connect/logout`,
  )
  keycloakUrl.searchParams.set(
    'post_logout_redirect_uri',
    redirectURL.toString(),
  )
  if (user) {
    keycloakUrl.searchParams.set('id_token_hint', user.idToken)
  }

  return redirect(keycloakUrl.toString())
}
