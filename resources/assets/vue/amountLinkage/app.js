import Vue from 'vue'
import { mapState } from 'vuex'
import store from './store'

new Vue({
    el: '#app',
    store,
    computed: {
        ...mapState(['message']),
    }
})
