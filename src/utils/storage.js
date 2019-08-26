import Cookies from 'js-cookie'
import { isString, isObject, isFunction, startsWith, assignIn, trim } from 'lodash'
import { encodeData, decodeData, empty } from '@/utils'
const constant = {
  prefix_gtcore: 'gtadmin_',
  isEncode: false,
  cookieConfig: { path: window.location.pathname, domain: window.location.hostname, secure: true },
  expiresTimeDefinded: 2,
  hasStorage: (() => {
    var isValid = typeof localStorage !== 'undefined'
    if (!isValid) {
      return false
    }
    try {
      window.localStorage.setItem('gtCoretesting', 'tested')
      window.localStorage.removeItem('gtCoretesting')
      return true
    } catch (ex) {
      return false
    }
  })(),
  hasCookie: typeof document.cookie !== 'undefined'
}
const cookieHandler = (name, value, options) => {
  var val = value
  if (val === undefined) {
    if (constant.hasCookie) {
      val = Cookies.get(name)
    }
    return val
  }
  return Cookies.set(name, value, { expires: empty(options.expires) ? 1 : options.expires / 24, path: options.path, domain: options.domain, secure: options.secure })
}

export function put(...args) {
  try {
    var key, item, options, cb
    if (!isString(args[0])) {
      return console.error(' key, item invalid')
    } else {
      key = args[0]
      item = args[1]
    }

    if (isObject(args[2])) {
      options = args[2]
    } else if (isFunction(args[2])) {
      cb = args[2]
    }
    if (isFunction(args[3])) {
      cb = args[3]
    }
    if (!startsWith(key, constant.prefix_gtcore)) {
      key = constant.prefix_gtcore + key
    }
    var expTime = constant.expiresTimeDefinded * 60 * 60 * 24 // 1day
    if (expTime === undefined) {
      expTime = 0
    }
    if (expTime !== 0) {
      expTime *= 1000
    }
    if (!isObject(options)) {
      options = constant.cookieConfig
    }
    assignIn(options, { expires: expTime / (1000 * 60 * 60 * 24) }) // 1 day
    if (constant.hasStorage) {
      if (expTime !== 0) {
        expTime += new Date().getTime()
      }
      var data = { data: item, expires: expTime }
      if (constant.isEncode) {
        data = encodeData(data)
      } else {
        data = JSON.stringify(data)
      }
      window.localStorage.setItem(key, data)
    } else if (constant.hasCookie) {
      cookieHandler(key, constant.isEncode ? encodeData(item) : JSON.stringify(item), options)
    }
    if (isFunction(cb)) {
      cb()
    }
  } catch (e) {
    console.warn(e)
  }
}

export function get(key) {
  try {
    if (!startsWith(key, constant.prefix_gtcore)) {
      key = constant.prefix_gtcore + key
    }
    if (constant.hasStorage) {
      var item = window.localStorage.getItem(key)
      if (!isString(item)) {
        remove(key)
        return null
      } else {
        if (constant.isEncode) {
          item = decodeData(item)
        }
        var obj = !isString(item) ? {} : JSON.parse(item) || {}
        if (obj.expires === 0 || obj.expires > new Date().getTime()) {
          return obj.data
        }
        remove(key)
        return null
      }
    } else if (constant.hasCookie) {
      var dataStored = cookieHandler(key)
      if (!isString(dataStored)) {
        return JSON.parse(constant.isEncode ? decodeData(dataStored) : dataStored)
      }
    }
  } catch (e) {
    console.warn(e)
  }
  return null
}

export function remove(...args) {
  var key, cb
  try {
    key = args[0]
    if (isFunction(args[1])) {
      cb = args[1]
    }
    put(key, null, cb)
  } catch (ex) {
    console.warn(ex)
  }
}

export function clear() {
  if (constant.hasStorage) {
    console.log('CLEAR LOCALSTORAGE')
    Object.keys(localStorage).forEach(key => {
      var keyItem = trim(key)
      remove(keyItem.substring(constant.prefix_gtcore.length))
    })
  } else if (constant.hasCookie) {
    console.log('CLEAR COOKIE')
    var cookies = document.cookie.split(';')
    var length = cookies.length
    for (var i = 0; i < length; i++) {
      var cookie = trim(cookies[i])
      var cookieName = cookie.split('=')
      remove(cookieName[0].substring(constant.prefix_gtcore.length))
    }
  }
}
