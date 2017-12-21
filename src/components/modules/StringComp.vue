<template lang="pug">
  p {{ string }}
</template>

<script>
export default {
  name: 'stringComp',
  data () {
    return {
      string: '入力された感想がここにでるでち'
    }
  }
}
</script>
