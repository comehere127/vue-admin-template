import { constantRouterMap } from '@/router'
import adminRoute from '@/router/modules/adminPortal'
import serviceRoute from '@/router/modules/service'
import { PERMISSION } from '@/constants'
import Layout from '@/layout'
import { isTrue } from '@/utils'
import { some, isEmpty, includes, forEach, concat, map, isUndefined, filter, size, toLower, find } from 'lodash'

function hasPermission(role, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role)
  }
  return true
}

function filterAdminRouter(routes, role) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(role, tmp)) {
      if (tmp.children) {
        tmp.children = filterAdminRouter(tmp.children, role)
      }
      res.push(tmp)
    }
  })

  return res
}

function filterServiceRouter(routes, serviceAccess) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    // console.log(serviceAccess, tmp)
    let name = tmp.name
    if (isEmpty(name)) {
      const defaultRoute = find(tmp.children, r => {
        // console.log('r.path', r.path, isEmpty(r.path))
        return isEmpty(r.path)
      })
      if (!isEmpty(defaultRoute)) {
        name = defaultRoute.name
      }
    }
    let customRoute = true
    const { serviceApi } = serviceAccess
    if (isEmpty(tmp.children) && !isTrue(tmp.meta.isDefault)) {
      customRoute = some(serviceApi, api => api.serviceExtInfo.extParams.ui === tmp.name) || size(filter(serviceApi, api => isUndefined(api.serviceExtInfo.extParams.ui))) === size(serviceApi)
    }
    if (includes(toLower(name), toLower(serviceAccess.key)) && customRoute) {
      if (!isEmpty(tmp.children)) {
        tmp.children = filterServiceRouter(tmp.children, serviceAccess)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routers: constantRouterMap,
  addRouters: []
}

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers
    state.routers = constantRouterMap.concat(routers)
  }
}

const actions = {
  GenerateRoutes({ commit }, data) {
    return new Promise(resolve => {
      const { role, userAccess } = data
      let accessedRouters = []
      if (role === PERMISSION.ADMIN.title) {
        accessedRouters = concat(adminRoute, serviceRoute)
      } else {
        forEach(userAccess, (serviceApi, key) => {
          accessedRouters = concat(filterServiceRouter(serviceRoute, { key, serviceApi }), accessedRouters)
        })
        accessedRouters = concat(filterAdminRouter(adminRoute, role), accessedRouters)
      }
      accessedRouters = map(accessedRouters, item => ({ ...item, component: Layout }))
      accessedRouters.push({
        path: '*',
        redirect: '/404',
        hidden: true
      })
      commit('SET_ROUTERS', accessedRouters)
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
