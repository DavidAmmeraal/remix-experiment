import { LoaderFunctionArgs, redirect } from '@remix-run/node'
import { authenticator, createKeycloakStrategy } from '~/auth/auth.server'
import { createKeycloakRegisterURL } from '~/auth/utils'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const { action } = params
  const url = new URL(request.url)
  const internalRedirect = url.searchParams.get('redirect')
  const callbackURL = new URL(process.env.AUTH_CALLBACK_URL as string)
  if (internalRedirect) {
    callbackURL.searchParams.set('internal_redirect', internalRedirect || '/')
  }
  authenticator.use(
    createKeycloakStrategy({ callbackURL: callbackURL.toString() }),
    'custom',
  )
  /*
  authenticator.use(
    createKeycloakStrategy({
      callbackURL: callbackURL.toString(),
    }),
    'custom',
  )
  */

  if (action === 'login') {
    return authenticator.authenticate('custom', request)
  }

  return redirect(createKeycloakRegisterURL({ language: 'en' }))
}
