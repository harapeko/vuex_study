<template lang="pug">
  div
    | Thanksページ
    HeadCompo
    | 送信ありがとうでち！
    p: a(href="/") 戻る
</template>

<script>
import HeadCompo from '@/components/modules/HeadComp'
import { mapAttions, mapGetters } from 'vuex'

export default {
  name: 'thanks',
  components: {
    HeadCompo
  }
}
</script>