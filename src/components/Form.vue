<template lang="pug">
  div This is Form Page
    HeadComp
    component(:is="isComponent")
    button(@click="buttonAction") {{ button }}
</template>

<script>
import HeadComp from '@/components/modules/HeadComp'
import TextareaComp from '@/components/modules/TextareaComp'
import StringComp from '@/components/modules/StringComp'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FormComp',
  methods: mapActions('Form', {
    'buttonAction': 'buttonAction'
  }),
  computed: mapGetters('Form', {
    'button': 'getButton',
    'isComponent': 'getComponent',
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp,
  },
}
</script>
