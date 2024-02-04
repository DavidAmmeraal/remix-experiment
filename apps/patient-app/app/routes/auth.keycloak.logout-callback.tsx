import { LoaderFunction } from '@remix-run/node'
import { authenticator } from '~/auth/auth.server'

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.logout(request, {
    redirectTo: '/',
  })
}
