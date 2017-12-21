<template lang="pug">
  div This is Form Page
    head-comp
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'

export default {
  name: 'FormPage',
  data () {
    return {
      msg: 'ようこそでち'
    }
  },
  components: {
    HeadComp
  }
}
</script>
