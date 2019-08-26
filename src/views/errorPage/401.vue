<template>
  <funny-cat>
    <h1 slot="title">{{ $t('errorPage.401.title') }}</h1>
    <p slot="content" class="text-err">{{ $t('errorPage.401.contactInfo') }}</p>
  </funny-cat>
</template>
<script>
import FunnyCat from '@/components/FunnyCat'

export default {
  components: { FunnyCat }
}
</script>
