import { I18N_DEFAULT_NAMESPACE, I18N_SUPPORTED_LANGS } from './i18n.constants'

export default {
  // This is the list of languages your application supports
  supportedLngs: [...I18N_SUPPORTED_LANGS],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: 'en',
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: I18N_DEFAULT_NAMESPACE,
  // Disabling suspense is recommended
  react: { useSuspense: false },
}
