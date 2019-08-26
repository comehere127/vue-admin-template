import { get, put } from '@/utils/storage'
import { STORE_KEY_CONFIG_LANG, DEFAULT_LANGUAGE } from '@/constants'
const state = {
  sidebar: {
    opened: !+get('sidebarStatus'),
    withoutAnimation: false
  },
  device: 'desktop',
  language: get(STORE_KEY_CONFIG_LANG) || DEFAULT_LANGUAGE,
  size: get('size') || 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    if (state.sidebar.opened) {
      put('sidebarStatus', 1)
    } else {
      put('sidebarStatus', 0)
    }
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    put('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_LANGUAGE: (state, language) => {
    state.language = language
    put(STORE_KEY_CONFIG_LANG, language)
  },
  SET_SIZE: (state, size) => {
    state.size = size
    put('size', size)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
