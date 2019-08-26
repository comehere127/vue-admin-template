import router from '@/router'
import store from '@/store'
import { verifyToken } from '@/controller/auth'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { doAuthentication } from '@/api/auth'
import { PERMISSION, ERROR_CODE } from '@/constants'
import getPageTitle from '@/utils/get-page-title'
import Vue from 'vue'
import { get } from 'lodash'
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// permission judge function
function hasPermission(role, permissionRoles) {
  if (role === PERMISSION.ADMIN.title) return true // admin permission passed directly
  if (!permissionRoles) return true
  return permissionRoles.indexOf(role) >= 0
}

const whiteList = ['/404', '/401'] // no redirect whitelist
const loginPage = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  NProgress.start() // start progress bar
  document.title = getPageTitle(get(Vue.prototype.locale.messages, `${Vue.prototype.locale.locale}.route.${to.meta.title}`))
  if (whiteList.indexOf(to.path) !== -1) {
    next()
    NProgress.done()
  } else {
    await store.dispatch('user/GetUserInfoFromLocaleStorage')
    if (store.getters.isLogged) {
      if (to.path === '/login') {
        // if is logged in, redirect to the home page
        next({ path: '/' })
        NProgress.done()
      } else if (store.getters.addRouters.length === 0) {
        try {
          await store.dispatch('user/GetAccessInfoFromLocaleStorage')
          await verifyToken()
          await store.dispatch('permission/GenerateRoutes', {
            role: store.getters.role,
            userAccess: store.getters.userAccess
          })
          router.addRoutes(store.getters.addRouters)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/ClearUserInfo')
          setTimeout(() => {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          }, 2000)
        }
      } else {
        if (hasPermission(store.getters.role, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true }})
        }
      }
    } else {
      if (loginPage.indexOf(to.path) !== -1) {
        // in the free login whitelist, go directly
        next()
      } else {
        var ticketArr = /(?:&|\?)ticket=([^&]+)/.exec(window.location.href)
        if (Array.isArray(ticketArr)) {
          try {
            const userInfoResp = await doAuthentication(ticketArr[1], window.location.origin + window.location.pathname)
            const { returnCode, data, returnMessage } = userInfoResp
            if (returnCode === ERROR_CODE.SUCCESS) {
              await store.dispatch('user/SetUserInfo', data)
              // hack method to ensure that addRoutes is complete
              // set the replace: true, so the navigation will not leave a history record
              next({ path: to.path, replace: true })
            } else if (returnCode === ERROR_CODE.ERROR_INVALID_TICKET) {
              Message.error(`[${returnCode}] - ${returnMessage}`)
              await store.dispatch('user/ClearUserInfo')
              setTimeout(() => {
                next(`/login?redirect=${to.path}`)
              }, 2000)
            } else if (returnCode === ERROR_CODE.ERROR_PERMISSION_DENY) {
              Message.error(`[${returnCode}] - ${returnMessage}`)
              next({ path: '/401', replace: true, query: { noGoBack: true }})
            } else {
              Message.error(`[${returnCode}] - ${returnMessage}`)
            }
          } catch (error) {
            Message.error(JSON.stringify(error))
            await store.dispatch('user/ClearUserInfo')
            next({ path: '/404', replace: true, query: { noGoBack: true }})
          } finally {
            NProgress.done()
          }
        } else {
          // other pages that do not have permission to access are redirected to the login page.
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
