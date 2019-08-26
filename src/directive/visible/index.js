import visible from './visible'

const install = function(Vue) {
  Vue.directive('visible', visible)
}

if (window.Vue) {
  window['visible'] = visible
  Vue.use(install) // eslint-disable-line
}

visible.install = install
export default visible
