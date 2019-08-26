<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
        <el-tooltip placement="top" :content="$t('button.backTop')">
          <back-to-top
            :custom-style="myBackToTopStyle"
            :visibility-height="300"
            :back-position="0"
            transition-name="fade"
          />
        </el-tooltip>
      </div>
      <app-main />
      <right-panel v-if="isAdmin">
        <settings />
      </right-panel>
      <a class="feedbackWrapper" @click="openFeedbackForm">{{ $t('dashboard.feedback.button') }}</a>
      <feedback
        :is-opened="feedbackData.opened"
        :is-view="false"
        @opened="feedbackData.opened=$event"
        @submit="submitFeedback"
      />
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { Navbar, Sidebar, AppMain, TagsView, Settings } from './components'
import BackToTop from '@/components/BackToTop'
import ResizeMixin from './mixin/ResizeHandler'
import Feedback from '@/components/Feedback'
import { Message } from 'element-ui'
import { mapState } from 'vuex'
import { PERMISSION } from '@/constants'

export default {
  name: 'Layout',
  components: {
    RightPanel,
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    BackToTop,
    Settings,
    Feedback
  },
  mixins: [ResizeMixin],
  data() {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px',
        background: '#e7eaf1'
      },
      feedbackData: {}
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader,
      isAdmin: state => state.user.role === PERMISSION.ADMIN.title
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    openFeedbackForm() {
      this.$set(this.feedbackData, 'opened', true)
    },
    submitFeedback(feedback) {
      this.$set(this.feedbackData, 'opened', false)
      Message.success(this.$t('dashboard.feedback.thankful'))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;

  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
.feedbackWrapper {
  height: 20px;
  width: 100px;
  background: $orange;
  position: fixed;
  bottom: 20px;
  left: 20px;
  // transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  font-weight: 700;
  color: #fff;
  animation: attention 1s linear infinite;
}
@keyframes attention {
  0% {
    box-shadow: rgba($orange, 1) 0 0 0 0;
  }
  50% {
    box-shadow: rgba($orange, 1) 0 0 5px 2px;
  }
  100% {
    box-shadow: rgba($orange, 0) 0 0 20px 10px;
  }
}
</style>
