<template>
  <el-transfer
    v-model="selectedList"
    filterable
    :filter-method="filterMethod"
    :filter-placeholder="placeholder"
    :data="data"
    :titles="titles"
    :button-texts="['', '']"
  />
</template>

<script>
import { slugData } from '@/utils'
import { includes, map } from 'lodash'
export default {
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    source: {
      type: Array,
      default() {
        return []
      }
    },
    titles: {
      type: Array,
      default() {
        return ['Trái', 'Phải']
      }
    },
    parttern: {
      type: Object,
      default() {
        return {
          label: 'label',
          key: 'key'
        }
      }
    },
    disabled: {
      type: Array,
      default() {
        return []
      }
    },
    placeholder: {
      type: String,
      default: 'Nhập thông tin tìm kiếm'
    }
  },
  data() {
    return {
      data: [],
      selectedList: []
    }
  },
  watch: {
    value(val) {
      this.selectedList = val
    },
    source(val) {
      this.prepareData(val)
    },
    selectedList(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.selectedList = this.value
    setTimeout(() => {
      this.selectedList = this.value
      this.prepareData(this.source)
    }, 300)
  },
  methods: {
    filterMethod(query, item) {
      return includes(slugData(JSON.stringify(item)), slugData(query))
    },
    prepareData(source) {
      this.data = map(source, item => ({
        label: item[this.parttern.label],
        key: item[this.parttern.key],
        disabled: includes(this.disabled, item[this.parttern.key])
      }))
    }
  }
}
</script>
