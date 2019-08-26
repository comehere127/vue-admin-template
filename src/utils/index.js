/**
 * Created by jiachenpan on 16/11/18.
 */
import {
  isObject,
  isArrayLikeObject,
  isEqual,
  isString,
  isNumber,
  isUndefined,
  isNull,
  differenceWith,
  isBoolean,
  lowerCase,
  indexOf,
  includes,
  filter,
  some,
  take,
  get,
  concat,
  keys,
  cloneDeep,
  size,
  isEmpty
} from 'lodash'
import { isArray } from './validate'
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xdc00 && code <= 0xdfff) i--
  }
  return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}
function convertArr(json) {
  if (isString(json)) {
    return json
  }
  if (isArrayLikeObject(json)) {
    return json.map(function(item) {
      return convertArr(item)
    })
  }
  return JSON.stringify(json)
}
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      if (isObject(json[key])) {
        json[key] = convertArr(json[key])
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function getHostName() {
  if (typeof window.location.origin === 'undefined') {
    return window.location.protocol + '//' + window.location.hostname
  }
  return window.location.origin
}

export function addTime(add) {
  var d = new Date()
  d.setTime(d.getTime() + add)
  return d
}

export function empty(obj) {
  if (isUndefined(obj) || isNull(obj)) {
    return true
  }
  if (isObject(obj)) {
    return isEmpty(obj)
  }
  return obj === ''
}

export function encodeData(data) {
  if (!isString(data)) {
    data = JSON.stringify(data)
  }
  try {
    if (!isUndefined(typeof window.escape)) {
      return window.escape(data)
    } else if (!isUndefined(typeof window.encodeURIComponent)) {
      return window.encodeURIComponent(data)
    } else if (!isUndefined(typeof window.encodeURI)) {
      return window.encodeURI(data)
    }
  } catch (ex) {
    console.error('encodeData', ex)
  }
  return null
}

export function decodeData(data) {
  if (isString(data)) {
    try {
      if (!isUndefined(typeof window.escape)) {
        return window.unescape(data)
      } else if (!isUndefined(typeof window.encodeURIComponent)) {
        return window.decodeURIComponent(data)
      } else if (!isUndefined(typeof window.encodeURI)) {
        return window.decodeURI(data)
      }
    } catch (ex) {
      console.error('decodeData', ex)
    }
  }
  return null
}

export function slugData(data, separator) {
  if (isString(data)) {
    let slug = lowerCase(data)
    // convert to english type
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    slug = slug.replace(/đ/gi, 'd')
    if (isString(separator)) {
      slug = slug.replace(/[^a-zA-Z0-9]/gi, separator)
    } else {
      slug = slug.replace(/[^a-zA-Z0-9]/gi, '')
    }
    return slug
  }
  return data
}

export function extend(...args) {
  // Variables
  var extended = {}
  var deep = false
  var i = 0
  var length = args.length
  // Check if a deep merge
  if (isBoolean(args[0])) {
    deep = args[0]
    i++
  }

  // Merge the object into the extended object
  var merge = function(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // If deep merge and property is an object, merge properties
        if (deep && isObject(obj[prop])) {
          extended[prop] = extend(true, extended[prop], obj[prop])
        } else {
          extended[prop] = obj[prop]
        }
      }
    }
  }

  // Loop through each object and conduct a merge
  for (; i < length; i++) {
    var obj = arguments[i]
    merge(obj)
  }

  return extended
}

export function filterDataCustom(search, dataSource, attributes) {
  if (!isString(search)) {
    return dataSource
  }
  const searchVal = slugData(search)
  return filter(dataSource, item => {
    if (isEmpty(attributes) || isUndefined(attributes) || size(attributes) < size(item)) {
      attributes = keys(item)
    }
    return some(attributes, att => {
      let data = get(item, att)
      if (isObject(data)) {
        data = JSON.stringify(data)
      }
      return includes(slugData(data), searchVal)
    })
  })
}
export function isTrue(string) {
  var areTrue = ['yes', 'true', true, 'y', 1, '1']
  if (isString(string)) {
    string = string.toLowerCase()
  }

  return indexOf(areTrue, string) > -1
}
export function addScript(url) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('SCRIPT')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', url + '?ts=' + getTime())
    script.setAttribute('charset', 'utf-8')
    script.setAttribute('defer', 'defer')
    script.setAttribute('async', 'async')
    script.setAttribute('id', url)
    document.getElementsByTagName('HEAD')[0].appendChild(script)
    script.onload = resolve
    script.onerror = reject
  })
}
export function extractValDeep(obj, isShowKey) {
  let dataRet = ''
  if (isObject(obj) && !isArrayLikeObject(obj)) {
    const keyArr = keys(obj).sort()
    if (isShowKey || keyArr.length === 1) {
      keyArr.forEach(key => {
        dataRet += ' [' + key + ':' + extractValDeep(obj[key], isShowKey) + '] '
      })
    } else {
      dataRet += ' ['
      keyArr.forEach((key, ind) => {
        if (ind > 0) {
          dataRet += '-'
        }
        dataRet += extractValDeep(obj[key], isShowKey)
      })
      dataRet += '] '
    }
  } else if (isArrayLikeObject(obj)) {
    obj.forEach((val, ind) => {
      dataRet += extractValDeep(val, isShowKey)
      if (ind < obj.length - 1) {
        dataRet += ' | '
      }
    })
  } else {
    dataRet = obj
  }
  return dataRet
}

export function getDataRequired(obj, arrRequired) {
  var objRet = {}
  if (isObject(obj) && !isArrayLikeObject(obj) && isArrayLikeObject(arrRequired)) {
    arrRequired.forEach(item => (objRet[item] = obj[item]))
  }
  return objRet
}

export function openNewTab(url) {
  // Create link in memory
  var a = window.document.createElement('a')
  a.target = '_blank'
  a.href = url

  // Dispatch fake click
  var e = window.document.createEvent('MouseEvents')
  e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)
}

export function getDataByList(...arg) {
  if (isArray(arg[0])) {
    let dataSource = cloneDeep(arg[0])
    let tmpPriorityArr
    let search, size, priorityArr
    if (isString(arg[1])) {
      search = arg[1]
    } else if (isNumber(arg[1])) {
      size = arg[1]
    } else if (isArray(arg[1])) {
      tmpPriorityArr = arg[1]
    }
    if (isNumber(arg[2])) {
      size = arg[2]
    } else if (isArray(arg[2])) {
      tmpPriorityArr = arg[2]
    }
    if (isArray(arg[3])) {
      tmpPriorityArr = arg[3]
    }
    if (!empty(tmpPriorityArr)) {
      priorityArr = cloneDeep(tmpPriorityArr)
      dataSource = differenceWith(dataSource, priorityArr, isEqual)
    } else {
      priorityArr = []
    }
    if (empty(size)) {
      size = 5
    }
    if (empty(search)) {
      return concat(priorityArr, take(dataSource, size))
    }
    return concat(priorityArr, take(filterDataCustom(search, dataSource), size))
  }
  return []
}
export function toBoolean(string) {
  var areTrue = ['yes', 'true', true, 'y', 1, '1']
  if (isString(string)) {
    string = string.toLowerCase()
  }

  return indexOf(areTrue, string) > -1
}
