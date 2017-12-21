<template lang="pug">
  div
    p.error {{ error }}
    textarea
</template>

<script>
export default {
  name: 'textareaComp',
  data () {
    return {
      error: '入力は必須でち'
    }
  }
}
</script>

<style scoped lang="sass">
.error
  color: tomato
</style>