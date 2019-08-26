<template>
  <div class="login-container">
    <div class="login-form">
      <div class="title-container">
        <h3 class="title">GT FRAMEWORK</h3>
        <lang-select
          class="set-language"
          :locale="{changedSuccess: $t('navbar.changeLangSuccess')}"
        />
      </div>
      <el-tabs type="card">
        <el-tab-pane label="O365">
          <el-button
            size="large"
            type="primary"
            style="width:100%;margin-bottom:30px;"
            @click="genNewToken(redirect)"
          >{{ $t('login.sso') }}</el-button>
        </el-tab-pane>
        <el-tab-pane :label="$t('login.loginTitle.ldap')">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            auto-complete="on"
            label-position="left"
          >
            <el-form-item prop="username">
              <span class="svg-container">
                <svg-icon icon-class="user" />
              </span>
              <el-input
                ref="username"
                v-model="loginForm.username"
                :placeholder="$t('login.placeholder.username')"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
              />
            </el-form-item>

            <el-tooltip
              v-model="capsTooltip"
              :content="$t('login.capsLockOn')"
              placement="right"
              manual
            >
              <el-form-item prop="password">
                <span class="svg-container">
                  <svg-icon icon-class="password" />
                </span>
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  :type="passwordType"
                  :placeholder="$t('login.placeholder.password')"
                  name="password"
                  tabindex="2"
                  auto-complete="on"
                  @keyup.native="checkCapslock"
                  @blur="capsTooltip = false"
                  @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
              </el-form-item>
            </el-tooltip>

            <el-button
              :loading="loading"
              size="large"
              type="primary"
              style="width:100%;margin-bottom:10px;"
              @click.native.prevent="handleLogin"
            >{{ $t('login.submit') }}</el-button>
            <el-alert :title="$t('login.notice')" :closable="false" type="info" effect="dark" />
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
import { genNewToken } from '@/controller/auth'
import { empty } from '@/utils'
export default {
  name: 'Login',
  components: { LangSelect },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (empty(value)) {
        callback(new Error(this.$t('login.error.username')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (empty(value)) {
        callback(new Error(this.$t('login.error.password')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    genNewToken,
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if ((shiftKey && (key >= 'a' && key <= 'z')) || (!shiftKey && (key >= 'A' && key <= 'Z'))) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          if (this.loginForm.username === 'tudhm' && this.loginForm.password === 'tudhm') {
            this.loading = false
          }
          // this.$store
          //   .dispatch('user/login', this.loginForm)
          //   .then(() => {
          //     this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          //     this.loading = false
          //   })
          //   .catch(() => {
          //     this.loading = false
          //   })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  display: flex;
  align-items: center;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    // padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .el-tabs__nav-scroll .el-tabs__nav.is-top {
      width: 100%;
      div {
        width: 50%;
        text-align: center;
        color: #fff;
        font-weight: 700;
      }
      .is-active {
        background: #fff;
        color: $bg;
      }
    }
    .el-alert--info.is-dark {
      background: transparent;
    }
    .el-alert {
      padding: 5px;
      .el-alert__content {
        flex: 1;
        text-align: center;
        padding: 0;
        .el-alert__title {
          font-size: 12px;
        }
      }
    }
    .el-tabs__content {
      height: 250px;
    }
    .el-button--primary.el-button--large {
      font-weight: 700;
      background: $bg;
      color: #fff;
      border-color: #fff;
      &:hover {
        background: #fff;
        color: $bg;
        border-color: $bg;
      }
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 0;
      font-size: 30px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    width: 100%;
  }
  .el-divider__text {
    background-color: $bg;
    padding: 0 10px;
    color: $light_gray;
  }
  .container-login100-form-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .wrap-login100-form-btn {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 4px;
    button {
      outline: none !important;
      border: none;
      background: transparent;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .login100-form-bgbtn {
    position: absolute;
    z-index: -1;
    width: 300%;
    height: 100%;
    background: #a64bf4;
    background: linear-gradient(to right, $blue, $orange, $blue, $orange);
    top: 0;
    left: -100%;
    transition: all 0.4s;
  }

  .login100-form-btn {
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 40px;
  }

  .wrap-login100-form-btn:hover .login100-form-bgbtn {
    left: 0;
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .el-tab-pane {
    animation: appear 0.5s linear 1;
  }
}
</style>
