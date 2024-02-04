import { Button } from '../../../../packages/corpus'
import { Link } from '@remix-run/react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export default function AssessmentSignedOutPage() {
  const { i18n } = useTranslation()

  const searchParams = useMemo(() => {
    const params = new URLSearchParams()
    params.set('ui_locales', i18n.language)
    params.set('redirect', '/assessment')
    return params
  }, [i18n.language])

  return (
    <div className="flex">
      <Button />
      <Link
        to={{
          pathname: `/auth/login`,
          search: searchParams.toString(),
        }}
      >
        Login
      </Link>
      <Link
        to={{
          pathname: `/auth/register`,
          search: searchParams.toString(),
        }}
      >
        Register
      </Link>
    </div>
  )
}
