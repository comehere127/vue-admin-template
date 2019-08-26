<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style rel="stylesheet/scss" lang="scss">
// ::-webkit-scrollbar {
//   width: 4px;
//   height: 4px;
//   background-color: $color-gray;
// }
// ::-webkit-scrollbar-button ::-webkit-scrollbar-track {
//   display: none;
//   ::-webkit-scrollbar-thumb {
//     background-color: $color-silver-light;
//   }
//   ::-webkit-scrollbar-thumb:hover {
//     background-color: $color-black-exact-light;
//   }
// }
hr {
  border: 1px solid #ebeef5;
}
.stickyHeader {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  background: #fff;
  transition: all 0.3s;
}
.app-wrapper.openSidebar {
  .stickyHeader {
    width: calc(100% - 220px);
  }
}
.app-wrapper.hideSidebar {
  .stickyHeader {
    width: calc(100% - 36px);
  }
}
.el-collapse.custom-collapse-list {
  .el-collapse-item {
    .el-collapse-item__header {
      position: relative;
      > div {
        width: 100%;
      }
      .el-collapse-item__arrow {
        position: absolute;
        right: 0px;
      }
    }
  }
}

.el-collapse {
  padding-top: 5px;
  border: none;
}
.el-collapse-item__header {
  font-weight: bold;
  font-size: 16px;
}
.custom-collapse-list .el-collapse-item__header {
  margin-bottom: 5px;
}
.el-collapse-item.is-active .el-collapse-item__header {
  margin-bottom: 0;
}
.el-collapse-item__content {
  padding-bottom: 5px;
}
.md-card {
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-bottom: 30px;
}
.displayflex {
  display: flex;
  width: 100%;
}
.box-data {
  display: block;
  color: #555;
  font-size: 13px;
  > div {
    display: flex;
    word-break: break-all;
    border-bottom: 1px solid #e1e1e1;
    background: #eaf4ff;
    padding: 10px;
    &:last-child {
      border: none;
    }
  }

  span {
    flex: 0 0 125px;
    display: inline-block;
    font-weight: bold;
    color: #666;
    font-size: 13px;
  }
  .sub-box {
    width: 100%;
    display: block;
    > div {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #e1e1e1;
      padding: 10px;
      background: #fff;
      &:last-child {
        border: none;
      }
    }
    > span {
      margin-bottom: 15px;
    }
  }
}

.app-container {
  .searchingWrapper {
    position: absolute;
    width: 100%;
    left: 0;
    border: 1px solid #e9eef6;
    top: -62px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    > div {
      padding: 0;
    }
    .searching.mid {
      width: 50%;
    }

    .selectGroup {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      height: 40px;
      align-items: center;
      .el-select > .el-input {
        padding: 0;
      }
    }
  }
  .el-table td,
  .el-table th {
    position: static;
  }
  .el-table th > .cell {
    position: static;
    color: $color-theme;
    text-transform: capitalize;
  }
  .el-table {
    margin-top: 70px;
    overflow: unset;
    &.not-search {
      margin: 0;
      padding-top: 0px;
      border-top: 0;
    }
    .el-table__header .has-gutter th {
      border-top: 1px solid #ebeef5;
    }
  }
}
.el-form-item__label {
  color: $color-theme;
}
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.el-tag {
  height: auto;
  white-space: inherit;
}
.errorMess {
  width: 100%;
  font-size: 18px;
}
.infoMess {
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
}
.el-dialog__body {
  margin: 10px 0;
  padding: 20px;
  max-height: 50vh;
  height: 100%;
  overflow-y: overlay;
}
.el-card__header {
  text-align: center;
  padding: 15px;
  // background: $color-theme;
  color: #616161;
  font-weight: bold;
  span {
    text-transform: capitalize;
    font-weight: bold;
  }
  h3 {
    margin: 0;
  }
}
.view-sf {
  p {
    color: #666;
    font-size: 14px;
    padding: 10px;
    margin: 0;
    background: rgba($color-theme, 0.075);
    &:nth-child(2n) {
      background: #fafafa;
    }
    span {
      font-weight: bold;
      display: inline-block;
      margin-right: 10px;
      color: $color-theme;
      width: 105px;
    }
  }
}

.el-select {
  display: block;
}

.el-form-item.postInfo-container-item.el-form-item--medium {
  width: 100%;
  .el-select--medium {
    width: 100%;
  }
}
.customSwitch {
  .el-switch__label {
    position: absolute;
    left: 50px;
    opacity: 0;
    &--left,
    &--right {
      margin: 0;
    }
    &.is-active {
      opacity: 1;
    }
  }
}
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 20px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
    }
  }
}
.more-btn {
  float: right;
  background-color: transparent;
  border: none;
}
.__object-form-item .el-row > [class*='el-col-'] {
  padding: 0;
}
.__object-form-item > [class*='-layout'] {
  padding: 0;
}
.__object-form-item {
  margin: 0;
}
.box-card {
  .el-card__header {
    text-transform: uppercase;
    font-weight: 700;
  }
}
.listVlan {
  span {
    display: inline-block;
    margin-right: 5px;
    &:after {
      content: ',';
      display: inline-block;
    }
    &:last-child:after {
      display: none;
    }
  }
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected:after {
  content: '';
}
.title-applist {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  h3 {
    font-size: 20px;
    text-transform: uppercase;
  }
  .right-content {
    display: flex;
    align-items: center;
    b {
      display: inline-block;
      margin: 0 10px;
    }
  }
}

@include colorDots($color-theme, '');
.dotLoading p:after {
  content: '.';
  @include dotLoading('');
}
</style>
