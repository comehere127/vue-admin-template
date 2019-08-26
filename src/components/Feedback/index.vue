<template>
  <el-dialog
    :visible.sync="opened"
    :show-close="true"
    :close-on-press-escape="false"
    custom-class="feedbackDialog"
    :title="isView ? $t('dashboard.feedback.title'):$t('dashboard.feedback.titleNew')"
  >
    <div v-if="isView">
      <h3>{{ data.subject }}</h3>
      <div v-html="data.content" />
    </div>
    <div v-else>
      <el-form
        ref="formData"
        :model="formData"
        label-position="top"
        label-width="150px"
        :rules="getRuleInput"
      >
        <el-form-item :label="$t('dashboard.feedback.subject')" prop="subject">
          <el-input v-model="formData.subject" />
        </el-form-item>
        <el-form-item :label="$t('dashboard.feedback.content')" prop="content">
          <tinymce v-model="formData.content" :height="200" />
        </el-form-item>
      </el-form>
      <el-row :gutter="20">
        <el-col :span="6" :offset="9">
          <el-button type="primary" style="width:100%" @click="onSubmit">{{ $t('button.submit') }}</el-button>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { forEach, isNumber } from 'lodash'
import { empty } from '@/utils'
export default {
  name: 'Feedback',
  components: { Tinymce },
  props: {
    isView: {
      type: Boolean,
      default: true
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      formData: {}
    }
  },
  computed: {
    getRuleInput() {
      const paramsDefined = ['subject', 'content']
      const rules = {}
      forEach(paramsDefined, item => {
        this.$set(rules, item, [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (!empty(value) || isNumber(value)) {
                return callback()
              }
              callback(new Error(this.$t('dashboard.feedback.' + rule.field) + this.$t('formValidate.required')))
            },
            trigger: 'blur'
          }
        ])
      })
      return rules
    },
    opened: {
      get() {
        return this.isOpened
      },
      set(val) {
        this.$emit('opened', val)
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['formData'].validate(valid => {
        if (valid) {
          this.$emit('submit', this.formData)
        } else {
          this.$message({
            message: this.$t('status.formInvalid'),
            type: 'error'
          })
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.feedbackDialog {
  margin-top: 1vh;
  width: 80%;
  .el-dialog__body {
    max-height: 80vh;
  }
  .el-dialog__header {
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
