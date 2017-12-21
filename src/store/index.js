import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {
    button: ["確認", "送信"]
  },
  mutations: {},
  actions: {
    buttonAction({ commit, state, rootState }) {
      console.log('buttonAction')
      commit('setStepCount', null, {root: true}) //rootへのアクセス
    }
  },
  getters: {
    getButton(state, getters, rootState) {
      return state.button[rootState.stepCount]
    }
  }
}

const Head = {
  state: {
    title: ['感想を入力するでち', '確認画面でち', '送信完了でち']
  },
  mutations: {},
  actions: {},
  getters: {
    getTitle(state, getters, rootState) {
      return state.title[rootState.stepCount]
    }
  },
}

export default new Vuex.Store({
  state: {
    stepMax: 3,
    stepCount: 0,
  },
  mutations: {
    setStepCount (state) {
      console.log("rootsetStepCount")
      console.log( state.stepOffset )
      state.stepCount++

      if(state.stepCount == state.stepMax) {
        state.stepCount = 0
      }
    }
  },
  modules: {
    Form,
    Head
  }
})