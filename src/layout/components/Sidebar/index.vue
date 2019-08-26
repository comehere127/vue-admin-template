<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo && !isAdmin" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :show-timeout="200"
        :default-active="activeMenu"
        :collapse="isCollapse && !isAdmin"
        :unique-opened="true"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        mode="vertical"
        @open="openDefault"
      >
        <sidebar-item
          v-for="route in getRouter"
          :key="route.path"
          :item="route"
          :is-admin="isAdmin"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { PERMISSION } from '@/constants'
import { filter, findIndex } from 'lodash'
import adminRoute from '@/router/modules/adminPortal'
export default {
  components: { SidebarItem, Logo },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['permission_routers', 'sidebar', 'role']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    getRouter() {
      if (this.role === PERMISSION.ADMIN.title) {
        if (this.isAdmin) {
          return filter(this.permission_routers, item => findIndex(adminRoute, ['path', item.path]) >= 0)
        } else {
          return filter(this.permission_routers, item => findIndex(adminRoute, ['path', item.path]) < 0)
        }
      }
      return this.permission_routers
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    openDefault(path) {
      if (path !== '/webpayment/config') {
        this.$router.push({ path })
      }
    }
  }
}
</script>
<style lang="scss">
.el-menu-item {
  height: 50px;
  line-height: 50px;
}
.el-submenu__title,
.el-menu-item {
  height: 50px;
  line-height: 50px;
  padding-left: 10px !important;
}
.nest-menu {
  .el-menu-item {
    padding-left: 20px !important;
  }
  .el-submenu {
    .el-submenu__title {
      padding-left: 20px !important;
    }
    .nest-menu {
      .el-submenu__title,
      .el-menu-item {
        padding-left: 30px !important;
      }
      .el-menu {
        .el-menu-item {
          padding-left: 40px !important;
        }
      }
    }
    .el-menu-item {
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
