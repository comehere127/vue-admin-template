import Vue from 'vue'
import Element from 'element-ui'
import vueNcform from '@ncform/ncform'

import { get } from '@/utils/storage'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/element-variables.scss'

import '@/styles/index.scss' // global css
import ncformStdComps from '@ncform/ncform-theme-elementui'

import App from '@/App'
import router from '@/router'
import store from '@/store'

import i18n from '@/lang' // Internationalization
import '@/icons' // icon
import '@/permission' // permission control

import * as filters from '@/filters' // global filters

import adaptive from '@/directive/el-table'
adaptive.install(Vue)
Vue.use(vueNcform, {
  extComponents: ncformStdComps
})
Vue.use(Element, {
  size: get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
