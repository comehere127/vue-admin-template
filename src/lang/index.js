import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementViLocale from 'element-ui/lib/locale/lang/vi' // element-ui lang
import enLocale from './en'
import viLocale from './vi'
import { STORE_KEY_CONFIG_LANG, DEFAULT_LANGUAGE } from '@/constants'
import { get } from '@/utils/storage'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  vi: {
    ...viLocale,
    ...elementViLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | vi
  locale: get(STORE_KEY_CONFIG_LANG) || DEFAULT_LANGUAGE,
  // set locale messages
  messages
})

Vue.prototype.locale = i18n
export default i18n
