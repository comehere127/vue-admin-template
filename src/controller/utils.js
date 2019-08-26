import { ERROR_CODE } from '@/constants'
import router from '../router'
import store from '../store'
import { isFunction } from 'lodash'
import { Message } from 'element-ui'
export function handleRespApi(resp, conf = { alertSuccess: false, cbError: null }) {
  return new Promise((resolve, reject) => {
    switch (resp.returnCode) {
      case ERROR_CODE.SUCCESS:
        if (conf.alertSuccess) {
          Message.success(`[${resp.returnCode}] - ${resp.returnMessage}`)
        }
        resolve(resp.data)
        break
      case ERROR_CODE.ERROR_PERMISSION_DENY:
        reject(resp)
        setTimeout(() => {
          router.push({ path: '/401' })
        }, 100)
        break
      case ERROR_CODE.ERROR_INVALID_TOKEN:
        reject(resp)
        store.dispatch('user/ClearUserInfo')
        setTimeout(() => {
          router.push({ path: '/login' })
        }, 100)
        break
      default:
        reject(resp)
        Message.error(`[${resp.returnCode}] - ${resp.returnMessage}`)
        if (isFunction(conf.cbError)) {
          conf.cbError(resp)
        }
        break
    }
  })
}
