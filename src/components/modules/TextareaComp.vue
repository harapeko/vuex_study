<template lang="pug">
  div
    p.error {{ error }}
    textarea(v-model="impression")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'textareaComp',
  computed: {
    impression: {
      get () {
        return this.$store.state.impression
      },
      set (value) {
        this.$store.commit('updateImpression', value)
      }
    },
    ...mapGetters('Textarea', {
      'error': 'getError'
    })
  }
}
</script>

<style scoped lang="sass">
.error
  color: tomato
</style>