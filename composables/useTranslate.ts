import { useAppStore, type Locale } from '~/store/appStore'

import es from '~/i18n/lang/es.json'
import en from '~/i18n/lang/en.json'
import pt from '~/i18n/lang/pt.json'

const messages: Record<Locale, unknown> = { es, en, pt }

const lookup = (lang: Locale, key: string) =>
  key.split('.').reduce<unknown>(
    (node, part) => (node && typeof node === 'object' ? (node as Record<string, unknown>)[part] : undefined),
    messages[lang],
  )

/** Dotted-key lookup (`cafeInfo.ingredients.water`) in the current language, falling back to Spanish. */
export const useTranslate = () => {
  const appStore = useAppStore()

  const t = (key: string): string => {
    const value = lookup(appStore.language, key) ?? lookup('es', key)
    return typeof value === 'string' ? value : key
  }

  return { t }
}
