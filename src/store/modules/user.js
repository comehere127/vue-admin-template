import { set } from 'lodash'
import { empty } from '@/utils'
import { STORE_KEY_CONFIG_TOKEN, STORE_KEY_CONFIG_USER_INFO, STORE_KEY_CONFIG_LAST_UPDATED, STORE_KEY_CONFIG_ACCESS_SERVICE, PERMISSION } from '@/constants'
import { get, put, remove } from '@/utils/storage'
import { resetRouter } from '@/router'

const state = {
  userInfo: {},
  jtoken: false,
  isLogged: false,
  role: PERMISSION.USER.title,
  serviceMaintenance: [],
  lastUpdated: null,
  serviceAccess: {}
}

const mutations = {
  GET_USERINFO: (state, { jtoken, userInfo }) => {
    set(state, 'jtoken', jtoken)
    set(state, 'userInfo', userInfo)
    set(state, 'role', PERMISSION.getRoleTitle(userInfo.admin))
    set(state, 'isLogged', true)
  },
  GET_USER_ACCESSINFO: (state, { serviceAccess, lastUpdated }) => {
    set(state, 'lastUpdated', lastUpdated)
    if (empty(serviceAccess)) {
      set(state, 'serviceAccess', {})
    } else {
      set(state, 'serviceAccess', serviceAccess)
    }
  },
  SET_SERVICE_MAINTENANCE: (state, serviceMaintenance) => {
    if (empty(serviceMaintenance)) {
      set(state, 'serviceMaintenance', [])
    } else {
      set(state, 'serviceMaintenance', serviceMaintenance)
    }
  },
  RESET_ACCESS(state) {
    set(state, 'lastUpdated', null)
    set(state, 'serviceAccess', {})
    remove(STORE_KEY_CONFIG_LAST_UPDATED)
    remove(STORE_KEY_CONFIG_ACCESS_SERVICE)
  },
  LOGOUT(state) {
    remove(STORE_KEY_CONFIG_TOKEN)
    remove(STORE_KEY_CONFIG_USER_INFO)
    state.isLogged = false
  },
  SET_ROLES: (state, role) => {
    set(state, 'role', role)
  }
}

const actions = {
  GetUserInfoFromLocaleStorage({ commit }) {
    const jtoken = get(STORE_KEY_CONFIG_TOKEN)
    const userInfo = get(STORE_KEY_CONFIG_USER_INFO)
    if (!empty(jtoken) && !empty(userInfo)) {
      commit('GET_USERINFO', { userInfo, jtoken })
    }
  },
  GetAccessInfoFromLocaleStorage({ commit }) {
    const lastUpdated = get(STORE_KEY_CONFIG_LAST_UPDATED)
    const serviceAccess = get(STORE_KEY_CONFIG_ACCESS_SERVICE)
    if (!empty(serviceAccess)) {
      commit('GET_USER_ACCESSINFO', { lastUpdated, serviceAccess })
    } else {
      commit('RESET_ACCESS')
    }
  },

  SetServiceMaintenance({ commit }, serviceMaintenance) {
    commit('SET_SERVICE_MAINTENANCE', serviceMaintenance)
  },

  SetUserAccessInfo({ commit }, payload) {
    commit('GET_USER_ACCESSINFO', payload)
    put(STORE_KEY_CONFIG_LAST_UPDATED, payload.lastUpdated)
    put(STORE_KEY_CONFIG_ACCESS_SERVICE, payload.serviceAccess)
  },

  SetUserInfo({ commit }, payload) {
    commit('GET_USERINFO', payload)
    put(STORE_KEY_CONFIG_TOKEN, payload.jtoken)
    put(STORE_KEY_CONFIG_USER_INFO, payload.userInfo)
  },
  async ClearUserInfo({ commit }) {
    await commit('LOGOUT')
    await commit('RESET_ACCESS')
    await commit('SET_ROLES', [])
    await resetRouter()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
