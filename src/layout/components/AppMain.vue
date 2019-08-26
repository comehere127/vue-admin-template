<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <div v-if="maintenance" class="serviceMaintenance">
          <funny-cat>
            <h1 slot="title">{{ $t('serviceMaintenance') }}</h1>
          </funny-cat>
        </div>
        <router-view v-else-if="isLoaded" :key="key" />
        <div
          v-else
          v-loading.fullscreen.lock="!isLoaded"
          element-loading-spinner="el-icon-loading"
          :element-loading-text="$t('status.loading')"
          element-loading-custom-class="dotLoading"
        />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { empty } from '@/utils'
import { mapGetters } from 'vuex'
import { includes } from 'lodash'
import FunnyCat from '@/components/FunnyCat'
export default {
  name: 'AppMain',
  components: { FunnyCat },
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    ...mapGetters(['serviceMaintenance']),
    cachedViews() {
      return this.$store.state.tagsview.cachedViews
    },
    key() {
      return this.$route.fullPath
    },
    maintenance() {
      if (!empty(this.$route.meta) && !empty(this.$route.meta.service)) {
        return includes(this.serviceMaintenance, this.$route.meta.service)
      }
      return false
    }
  },
  created() {
    this.doInitData().then(() => (this.isLoaded = true))
  },
  methods: {
    doInitData() {
      const orderPromise = []

      return Promise.all(orderPromise).then(data => {
        Promise.resolve()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  .notfound {
    max-width: 600px;
  }
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
