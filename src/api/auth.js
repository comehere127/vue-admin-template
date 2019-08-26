import { AUTHENTICATION, VERIFY_TOKEN } from '@/constants'
import request from '@/utils/request'

export function doAuthentication(ticket, service) {
  return request({ url: AUTHENTICATION, method: 'post', data: { ticket, service }})
}

export function doVerifyToken(jtoken, lastUpdated) {
  return request({ url: VERIFY_TOKEN, method: 'post', data: { jtoken, lastUpdated }})
}
