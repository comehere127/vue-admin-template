export default {
  bind(el, binding) {
    var value = binding.value
    if (value) {
      el.style.visibility = 'visible'
    } else {
      el.style.visibility = 'hidden'
    }
  },
  componentUpdated(el, binding) {
    var value = binding.value
    if (value) {
      el.style.visibility = 'visible'
    } else {
      el.style.visibility = 'hidden'
    }
  }
}
