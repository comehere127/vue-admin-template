<template>
  <div class="transferContainer">
    <div>
      <h3>Chọn danh sách dịch vụ</h3>
      <transfer-item
        v-model="serviceSelected"
        :parttern="parttern.service"
        :titles="titles.service"
        :source="dataSource.service"
        :disabled="disabled.service"
        :placeholder="placeholder.service"
      />
    </div>
    <div>
      <h3>Chọn danh sách sản phẩm</h3>
      <transfer-item
        v-model="productSelected"
        :parttern="parttern.product"
        :titles="titles.product"
        :source="dataSource.product"
        :disabled="disabled.product"
        :placeholder="placeholder.product"
      />
    </div>
  </div>
</template>
<script>
import TransferItem from './TransferItem'
export default {
  components: { TransferItem },
  props: {
    value: {
      type: Object,
      default() {
        return {
          service: [],
          product: []
        }
      }
    },
    titles: {
      type: Object,
      default() {
        return {
          service: ['Trái', 'Phải'],
          product: ['Trái', 'Phải']
        }
      }
    },
    parttern: {
      type: Object,
      default() {
        return {
          service: {
            label: 'label',
            key: 'key'
          },
          product: {
            label: 'label',
            key: 'key'
          }
        }
      }
    },
    source: {
      type: Object,
      default() {
        return {
          service: [],
          product: []
        }
      }
    },
    disabled: {
      type: Object,
      default() {
        return {
          service: [],
          product: []
        }
      }
    },
    placeholder: {
      type: Object,
      default() {
        return {
          service: 'Nhập thông tin tìm kiếm',
          product: 'Nhập thông tin tìm kiếm'
        }
      }
    }
  },
  data() {
    return {
      dataSource: {
        service: [],
        product: []
      },
      grantProductService: {},
      serviceSelected: [],
      productSelected: []
    }
  },
  watch: {
    source(val) {
      this.dataSource = val
    },
    value(val) {
      this.grantProductService = val
    },
    productSelected(val) {
      this.$emit('onType', 'product')
      this.$set(this.grantProductService, 'product', val)
      this.$emit('input', this.grantProductService)
    },
    serviceSelected(val) {
      this.$emit('onType', 'service')
      this.$set(this.grantProductService, 'service', val)
      this.$emit('input', this.grantProductService)
    }
  },
  mounted() {
    this.grantProductService = this.value
    this.dataSource = this.source
    setTimeout(() => {
      this.grantProductService = this.value
      this.dataSource = this.source
      this.serviceSelected = this.grantProductService.service
      this.productSelected = this.grantProductService.product
    }, 300)
  }
}
</script>

<style lang="scss">
.transferContainer {
  display: flex;
  justify-content: space-between;
  text-align: initial;
  > div > h3 {
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .el-transfer {
    display: flex;
    justify-content: center;
    .el-checkbox__label {
      overflow: unset;
      text-overflow: unset;
    }
    .el-transfer__buttons {
      vertical-align: middle;
      padding: 0 10px;
      margin: auto 0;
      text-align: center;
    }
  }
}
</style>
