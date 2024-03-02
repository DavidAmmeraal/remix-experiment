// app/utils/auth.server.ts
import { Authenticator } from 'remix-auth'
import {
  QuinPatientSessionData,
  sessionStorage,
} from '../session/session.server'
import { KeycloakStrategy } from './auth.keycloak-strategy.server'

type KeycloakUser = QuinPatientSessionData['user']
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
    async args => {
      const {
        accessToken,
        refreshToken,
        extraParams: { id_token, expires_in, refresh_expires_in },
      } = args

      return {
        idToken: id_token,
        accessToken: {
          value: accessToken,
          expires: Date.now() + expires_in * 1000,
        },
        ...(refreshToken
          ? {
              refreshToken: {
                value: refreshToken,
                expires: Date.now() + refresh_expires_in * 1000,
              },
            }
          : {}),
      }
    },
  )

authenticator.use(createKeycloakStrategy())
