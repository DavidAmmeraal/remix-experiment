// app/utils/auth.server.ts
import { Authenticator } from 'remix-auth'
import { sessionStorage } from './session.server'
import { KeycloakStrategy } from './auth.keycloak-strategy.server'

type KeycloakUser = {
  idToken: string
}

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<KeycloakUser>(sessionStorage)

export const createKeycloakStrategy = ({
  name = 'keycloak',
  callbackURL = process.env.AUTH_CALLBACK_URL as string,
}: {
  name?: string
  callbackURL?: string
} = {}) =>
  new KeycloakStrategy(
    {
      name,
      useSSL: true,
      domain: process.env.AUTH_KEYCLOAK_DOMAIN as string,
      realm: process.env.AUTH_KEYCLOAK_REALM as string,
      clientID: process.env.AUTH_KEYCLOAK_CLIENT_ID as string,
      clientSecret: process.env.AUTH_COOKIE_SECRET as string,
      callbackURL,
    },
    async params => {
      const { id_token } = params.extraParams
      // Get the user data from your DB or API using the tokens and profile
      return {
        idToken: id_token,
      }
    },
  )

authenticator.use(createKeycloakStrategy())
