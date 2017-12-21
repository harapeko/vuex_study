<template lang="pug">
  div This is Form Page
    HeadComp
    TextareaComp
    StringComp
    button(@click="buttonAction") {{ button }}
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp'
import StringComp from '@/components/modules/StringComp'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FormComp',
  data () {
    return {
      button: '確認'
    }
  },
  methods: mapActions('Form', {
    'buttonAction': 'buttonAction'
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp,
  },
}
</script>
