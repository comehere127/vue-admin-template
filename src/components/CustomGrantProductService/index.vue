<template>
  <div class="grantProdService">
    <el-alert :title="hint" :closable="false" type="info" effect="dark" />
    <el-tabs tab-position="top">
      <el-tab-pane :disabled="isDisabledDeny">
        <div slot="label">
          <el-switch
            v-model="denyAll.enable"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :disabled="isDisabledDeny"
          />
          {{ ACCESS_TYPE[0] }}
        </div>
        <grant-product-service
          v-model="denyAll"
          :class="!denyAll.enable || (empty(sourceDenyAll.service) && empty(denyAll.service))?'mask100':''"
          :source="sourceDenyAll"
          @input="changeDataModel(ACCESS_TYPE[0],$event)"
          @onType="typeChange=$event"
        />
      </el-tab-pane>
      <el-tab-pane :disabled="isDisabledAllow">
        <div slot="label">
          <el-switch
            v-model="allowAll.enable"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :disabled="isDisabledAllow"
          />
          {{ ACCESS_TYPE[1] }}
        </div>
        <grant-product-service
          v-model="allowAll"
          :class="!allowAll.enable?'mask100':''"
          :source="sourceAllowAll"
          @input="changeDataModel(ACCESS_TYPE[1],$event)"
          @onType="typeChange=$event"
        />
      </el-tab-pane>
    </el-tabs>
    <el-alert
      v-if="!empty(errorText)"
      :title="errorText"
      :closable="false"
      type="error"
      effect="dark"
    />
  </div>
</template>
<script>
import GrantProductService from './GrantProductService'
import { map, filter, cloneDeep, differenceWith } from 'lodash'
import { empty } from '@/utils'
export default {
  components: { GrantProductService },
  props: {
    hint: {
      type: String,
      default: ''
    },
    productList: {
      type: Array,
      default() {
        return []
      }
    },
    serviceList: {
      type: Array,
      default() {
        return []
      }
    },
    initData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      typeChange: '',
      sourceAllowAll: {
        service: [],
        product: []
      },
      sourceDenyAll: {
        service: [],
        product: []
      },
      allowAll: {
        enable: false,
        service: [],
        product: []
      },
      denyAll: {
        enable: false,
        service: [],
        product: []
      },
      errorText: '',
      dataSource: {},
      ACCESS_TYPE: ['DENY_ALL_ALLOW', 'ALLOW_ALL_DENY']
    }
  },
  computed: {
    isDisabledAllow() {
      return empty(this.sourceAllowAll.service) && empty(this.allowAll.service)
    },
    isDisabledDeny() {
      return empty(this.sourceDenyAll.service) && empty(this.denyAll.service)
    }
  },
  mounted() {
    this.prepareDataSource()
  },
  methods: {
    empty,
    prepareDataSource() {
      if (!empty(this.initData)) {
        if (!empty(this.initData[this.ACCESS_TYPE[0]])) {
          this.denyAll = this.initData[this.ACCESS_TYPE[0]]
        }
        if (!empty(this.initData[this.ACCESS_TYPE[1]])) {
          this.allowAll = this.initData[this.ACCESS_TYPE[1]]
        }
      }
      const serviceApi = map(filter(this.serviceList, item => item.serviceApiId !== 'GRANTALL'), item => ({ label: item.serviceApiId, key: item.serviceApiId }))
      const product = map(this.productList, item => ({ label: `${item.faCode}-${item.key}`, key: item.key }))
      this.$set(this.dataSource, 'service', serviceApi)
      this.$set(this.dataSource, 'product', product)
      this.sourceAllowAll = this.dataSource
      this.sourceDenyAll = this.dataSource
    },
    changeDataModel(permission, data) {
      const dataSource = cloneDeep(this.dataSource)
      if (permission === this.ACCESS_TYPE[0]) {
        if (this.typeChange === 'service') {
          const oldSourceAllowAll = cloneDeep(this.sourceAllowAll)
          oldSourceAllowAll.service = differenceWith(dataSource.service, data.service, (i, j) => i.key === j)
          this.sourceAllowAll = oldSourceAllowAll
          if (this.isDisabledAllow) {
            this.$set(this.allowAll, 'enable', false)
          }
        }
      } else {
        if (this.typeChange === 'service') {
          const oldSourceDenyAll = cloneDeep(this.sourceDenyAll)
          oldSourceDenyAll.service = differenceWith(dataSource.service, data.service, (i, j) => i.key === j)
          this.sourceDenyAll = oldSourceDenyAll
          if (this.isDisabledDeny) {
            this.$set(this.denyAll, 'enable', false)
          }
        }
      }
    }
  }
}
</script>
<style lang="scss">
.grantProdService {
  .el-alert {
    justify-content: center;
  }
  .el-tabs__nav {
    width: 100%;
    .el-tabs__active-bar {
      width: 50% !important;
    }
    .el-tabs__item {
      padding: 0;
      width: 50%;
      font-weight: 700;
      .el-switch {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
  .mask50::after,
  .mask100::after {
    content: '';
    background: rgba(242, 245, 248, 0.53);
    position: absolute;
    height: 100%;
    z-index: 9999;
  }
  .mask100::after {
    width: 100%;
  }
  .mask50::after {
    width: 50%;
  }
}
</style>
