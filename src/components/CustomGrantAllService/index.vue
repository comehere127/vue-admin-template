<template>
  <div>
    <el-alert :title="language.hint" :closable="false" type="info" show-icon />
    <el-form ref="customForm" :model="dataModel" :label-width="width" style="margin-top:10px">
      <el-form-item
        :rules="{required: true, message: language.validate.accessType}"
        :label="language.accessType"
        prop="accessType"
      >
        <el-select v-model="dataModel.accessType" :placeholder="language.placeholder.accessType">
          <el-option v-for="val in accessType" :key="val" :label="val" :value="val" />
        </el-select>
      </el-form-item>
      <el-form-item
        v-if="appList.length>0"
        :label="dataModel.accessType===accessType[0]?language.appAccess:language.appNotAccess"
        :rules="{required: dataModel.accessType===accessType[0], message: language.validate.appAccess}"
        prop="appAccess"
      >
        <el-select
          v-model="dataModel.appAccess"
          :placeholder="language.placeholder.appAccess"
          filterable
          multiple
          value-key="key"
        >
          <el-option
            v-for="app in appList"
            :key="app.key"
            :label="getMappingProductValue(app)"
            :value="app"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    language: {
      type: Object,
      default() {
        return {}
      }
    },
    accessType: {
      type: Array,
      default() {
        return []
      }
    },
    appList: {
      type: Array,
      default() {
        return []
      }
    },
    width: {
      type: String,
      default: '120px'
    },
    value: {
      type: Object,
      default() {
        return {
          appAccess: []
        }
      }
    }
  },
  data() {
    return {
      dataModel: {
        appAccess: this.value.appAccess || [],
        accessType: this.value.accessType || this.accessType[0]
      }
    }
  },
  methods: {
    getMappingProductValue(item) {
      if (item.market === 'VIETNAM') {
        return item.mappingProdId
      }
      return `${item.mappingProdId}[${item.market}]`
    }
  }
}
</script>
