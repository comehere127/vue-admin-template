<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import memberDashboard from './member'
import { PERMISSION } from '@/constants'

export default {
  name: 'Dashboard',
  components: { adminDashboard, memberDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters(['role'])
  },
  created() {
    if (this.role !== PERMISSION.USER.title) {
      this.currentRole = 'adminDashboard'
    } else {
      this.currentRole = 'memberDashboard'
    }
  }
}
</script>
