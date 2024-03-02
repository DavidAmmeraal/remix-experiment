import { LoaderFunctionArgs } from '@remix-run/node'
import { authenticatedLoader } from '~/auth/authenticatedLoader'

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticatedLoader(request, {
    failureRedirect: 'signed-out',
  })

  return true
}

export default function AssessmentPage() {
  return <div>assessment here</div>
}
