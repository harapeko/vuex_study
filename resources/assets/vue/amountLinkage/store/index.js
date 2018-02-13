import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    message: 'hell world!',
}

// const getters = {
//     message(state) { return state.message }
// }

// const mutations = {
//     setMessage(state, payload) {
//         state.message = payload
//     },
// }

export default new Vuex.Store({
    state,
    // getters,
    // mutations,
})
