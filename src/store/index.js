import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {
    button: ["確認", "送信", "戻る"]
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

const Textarea = {
  namespaced: true,
  state: {
    errorMsg: "入力は必須です",
  },
  getters: {
    getError(state, getters, rootState) {
      if(rootState.errorFlag) {
        return null
      } else {
        return state.errorMsg
      }
    }
  }
}

export default new Vuex.Store({
  state: {
    stepMax: 3,
    stepCount: 0,
    impression: "",
    errorFlag: false, //trueなら通貨
  },
  mutations: {
    setStepCount (state) {
      console.log("rootsetStepCount")
      console.log( state.stepOffset )
      state.stepCount++

      if(state.stepCount == state.stepMax) {
        state.stepCount = 0
      }
    },
    updateImpression(state, value) {
      state.impression = value
  
      if (state.impression) {
        state.errorFlag = true
      } else {
        state.errorFlag = false
      }
    },
  },
  modules: {
    Form,
    Head,
    Textarea
  }
})