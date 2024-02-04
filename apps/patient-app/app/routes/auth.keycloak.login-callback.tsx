import { LoaderFunction } from '@remix-run/node'
import { authenticator } from '~/auth/auth.server'

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url)
  const internalRedirect = url.searchParams.get('internal_redirect')

  return authenticator.authenticate('custom', request, {
    successRedirect: internalRedirect || '/dashboard',
    failureRedirect: '/login',
  })
}
