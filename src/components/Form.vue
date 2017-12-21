<template lang="pug">
  div This is Form Page
    HeadComp
    TextareaComp
    StringComp
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp'
import StringComp from '@/components/modules/StringComp'

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
    StringComp,
  }
}
</script>
