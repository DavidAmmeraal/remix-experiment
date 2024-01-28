import LanguageSelector from '~/components/LanguageSelector'

export default function PageLayoutWithHeader({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <nav>
        <LanguageSelector />
      </nav>
      <div>{children}</div>
    </>
  )
}
