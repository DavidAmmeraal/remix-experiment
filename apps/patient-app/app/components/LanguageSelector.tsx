import {
  I18N_LANG_TRANSLATIONS,
  I18N_SUPPORTED_LANGS,
} from '~/i18n/i18n.constants'
import { ChangeEventHandler, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from '@remix-run/react'
import { rewritePathWithLanguage } from '~/i18n/utils'

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const location = useLocation()

  const current = useMemo(() => {
    const lang = i18n.language as (typeof I18N_SUPPORTED_LANGS)[number]
    return lang
  }, [i18n.language])

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    e => {
      i18n.changeLanguage(e.target.value)
      window.location.href = rewritePathWithLanguage(
        location.pathname,
        e.target.value,
      )
    },
    [i18n, location.pathname],
  )

  return (
    <select onChange={handleChange} value={current}>
      {I18N_SUPPORTED_LANGS.map(v => {
        return (
          <option key={v} value={v}>
            {I18N_LANG_TRANSLATIONS[v]}
          </option>
        )
      })}
    </select>
  )
}
