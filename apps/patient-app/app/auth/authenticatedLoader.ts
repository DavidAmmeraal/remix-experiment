import { redirect } from '@remix-run/node'
import { authenticator } from './auth.server'

export const authenticatedLoader = async (
  request: Request,
  { failureRedirect }: { failureRedirect: string },
) => {
  const user = await authenticator.isAuthenticated(request)

  if (!user) {
    throw redirect(failureRedirect)
  }
  return true
}
