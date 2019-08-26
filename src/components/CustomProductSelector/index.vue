<template>
  <div class="prodSelector">
    <div :style="{width:width1}" class="prodSelector-list">
      <h3>{{ list1Title }}</h3>
      <draggable :list="list1" class="dragArea">
        <div
          v-for="element in list1"
          :key="`${element.mappingProdId}${element.market}`"
          class="list-complete-item"
          @click="selectElemnt(element)"
        >
          <div
            class="list-complete-item-handle"
          >[{{ element.faCode }} - {{ element.mappingProdId }}] {{ element.mappingProdName }}</div>
          <div style="position:absolute;right:0;top: 100%">
            <span
              style="float: right ;margin-top: -20px;margin-right:5px;"
              @click.prevent.stop="deleteEle(element)"
            >
              <i style="color:#ff4949" class="el-icon-delete" />
            </span>
          </div>
        </div>
      </draggable>
    </div>
    <div :style="{width:width2}" class="prodSelector-list">
      <h3>{{ list2Title }}</h3>
      <draggable :list="filterList2" class="dragArea">
        <div v-for="element in filterList2" :key="element.mappingProdId" class="list-complete-item">
          <div
            class="list-complete-item-handle2"
            @click="pushEle(element)"
          >[{{ element.faCode }} - {{ element.mappingProdId }}] {{ element.mappingProdName }}</div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'CustomProductSelector',
  components: { draggable },
  props: {
    list1: {
      type: Array,
      default() {
        return []
      }
    },
    list2: {
      type: Array,
      default() {
        return []
      }
    },
    list1Title: {
      type: String,
      default: 'list1'
    },
    list2Title: {
      type: String,
      default: 'list2'
    },
    width1: {
      type: String,
      default: '48%'
    },
    width2: {
      type: String,
      default: '48%'
    },
    selectElemnt: {
      type: Function,
      default: null
    }
  },
  computed: {
    filterList2() {
      return this.list2.filter(v => {
        if (this.isNotInList1(v)) {
          return v
        }
        return false
      })
    }
  },
  methods: {
    isNotInList1(v) {
      return this.list1.every(k => !(v.productKey === k.productKey && v.market === k.market))
    },
    isNotInList2(v) {
      return this.list2.every(k => !(v.productKey === k.productKey && v.market === k.market))
    },
    deleteEle(ele) {
      for (const item of this.list1) {
        if (item.mappingProdId === ele.mappingProdId) {
          const index = this.list1.indexOf(item)
          this.list1.splice(index, 1)
          break
        }
      }
      if (this.isNotInList2(ele)) {
        this.list2.unshift(ele)
      }
    },
    pushEle(ele) {
      this.list1.push(ele)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.prodSelector {
  background: #fff;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  .prodSelector-list {
    float: left;
    padding-bottom: 30px;
    &:first-of-type {
      margin-right: 2%;
    }
    .dragArea {
      overflow-y: auto;
      height: 100%;
      min-height: 450px;
      max-height: 450px;
      margin-top: 15px;
      padding-bottom: 30px;
    }
  }
}

.list-complete-item {
  cursor: pointer;
  position: relative;
  font-size: 14px;
  padding: 5px 12px;
  margin-top: 4px;
  border: 1px solid #bfcbd9;
  transition: all 1s;
}

.list-complete-item-handle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 50px;
}

.list-complete-item-handle2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 20px;
}

.list-complete-item.sortable-chosen {
  background: #4ab7bd;
}

.list-complete-item.sortable-ghost {
  background: #30b08f;
}

.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}
</style>
