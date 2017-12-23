<template lang="pug">
  p {{ string }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'stringComp',
  computed: mapGetters('String', {
    'string': 'getString'
  })
}
</script>
