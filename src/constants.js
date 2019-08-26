export const STORE_KEY_CONFIG_LANG = 'LANGUAGE'
export const STORE_KEY_CONFIG_TOKEN = 'TOKEN'
export const STORE_KEY_CONFIG_USER_INFO = 'USER'
export const STORE_KEY_CONFIG_LAST_UPDATED = 'UPDATED'
export const STORE_KEY_CONFIG_ACCESS_SERVICE = 'ACCESS'

// app config
export const DEFAULT_LANGUAGE = 'vi'

// SSO login
export const SSO_LOGIN_URL = 'https://login.vng.com.vn/sso/login?renew=1&service='
const apiPath = 'admingw/api/'
// API
export const AUTHENTICATION = apiPath + 'auth/login'
export const VERIFY_TOKEN = apiPath + 'auth/verify'

// ERROR CODE
export const ERROR_CODE = {
  SUCCESS: 1,
  ERROR_INVALID_INPUT: -1,
  ERROR_INVALID_TICKET: -402,
  ERROR_INVALID_TOKEN: -401,
  ERROR_PERMISSION_DENY: -403
}

export const PERMISSION = {
  ADMIN: {
    id: 4,
    title: 'admin'
  },
  ADMIN_SERVICE: {
    id: 3,
    title: 'adminService'
  },
  SUPERVISOR: {
    id: 2,
    title: 'supervisor'
  },
  PQA: {
    id: 1,
    title: 'pqa'
  },
  USER: {
    id: 0,
    title: 'member'
  },
  getRoleTitle: role => {
    switch (role) {
      case 4:
        return PERMISSION.ADMIN.title
      case 3:
        return PERMISSION.ADMIN_SERVICE.title
      case 2:
        return PERMISSION.SUPERVISOR.title
      case 1:
        return PERMISSION.PQA.title
      case 0:
        return PERMISSION.USER.title
    }
  }
}
