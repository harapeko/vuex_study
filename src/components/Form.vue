<template lang="pug">
  div This is Form Page
    HeadComp
    TextareaComp
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp'

export default {
  name: 'FormComp',
  data () {
    return {
      msg: 'ようこそでち'
    }
  },
  components: {
    HeadComp,
    TextareaComp,
  }
}
</script>
