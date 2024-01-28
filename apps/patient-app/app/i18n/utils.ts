import { I18N_SUPPORTED_LANGS } from './i18n.constants'
import i18next from './i18next.server'

const supportedLangs = I18N_SUPPORTED_LANGS.map(i => `${i}`)

export async function extractLanguageFromRequest(request: Request) {
  const parsed = new URL(request.url)
  const { pathname } = parsed
  const parts = pathname.split('/')

  if (parts[1] && supportedLangs.includes(parts[1])) {
    return parts[1]
  }

  return await i18next.getLocale(request)
}

export function rewritePathWithLanguage(path: string, lng: string) {
  const parts = path.split('/').filter(v => v.trim())
  if (parts[0] && supportedLangs.includes(parts[0])) {
    parts[0] = lng
    return `/${parts.join('/')}`
  }

  return `/${lng}${parts.length > 0 ? `/${parts.join('/')}` : ``}`
}
