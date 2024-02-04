import { createApiClient } from '@quin/patient-service-api'
import { LoaderFunctionArgs, redirect } from '@remix-run/node'
import { authenticator } from '~/auth/auth.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const isAuthenticated = await authenticator.isAuthenticated(request)
  if (!isAuthenticated) {
    return redirect('signed-out')
  }

  const api = createApiClient({ baseUrl: 'https://google.nl' })

  return true
}

export default function AssessmentPage() {
  return <div>assessment</div>
}
