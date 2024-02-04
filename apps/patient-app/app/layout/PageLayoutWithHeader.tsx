import { Link } from '@remix-run/react'
import LanguageSelector from '~/components/LanguageSelector'
import PageContainer from '~/components/PageContainer'
import { rewritePathWithLanguage } from '~/i18n/utils'

export default function PageLayoutWithHeader({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <PageContainer as="nav" className="flex flex-row">
        <div className="flex-1">
          <h1>Quin</h1>
        </div>
        <div className="flex justify-self-end">
          <LanguageSelector />
          <Link to={rewritePathWithLanguage('auth/logout', 'en')}>Log out</Link>
        </div>
      </PageContainer>
      <PageContainer>{children}</PageContainer>
    </>
  )
}
