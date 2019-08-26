import { SSO_LOGIN_URL, ERROR_CODE } from '@/constants'
import { doVerifyToken } from '@/api/auth'
import store from '@/store'
import { Message } from 'element-ui'

export function genNewToken(path) {
  window.location.href = SSO_LOGIN_URL + window.location.origin + (!path ? '/' : path)
}

export function verifyToken() {
  return new Promise((resolve, reject) => {
    doVerifyToken(store.getters.jtoken, store.getters.lastUpdated).then(resp => {
      if (resp.returnCode === ERROR_CODE.SUCCESS) {
        store.dispatch('user/SetServiceMaintenance', resp.data.maintenance)
        if (resp.data.lastUpdated !== store.getters.lastUpdated) {
          store.dispatch('user/SetUserAccessInfo', resp.data).then(resolve)
        } else {
          resolve()
        }
      } else {
        Message.error(`[${resp.returnCode}] - ${resp.returnMessage}`)
        reject()
      }
    })
  })
}
