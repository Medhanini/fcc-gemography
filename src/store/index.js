import Vue from 'vue'
import Vuex from 'vuex'
import vuexActionInit from 'vuex-action-init'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    INIT () {
      console.log('Initalizing')
    }
  },
  plugins: [vuexActionInit()],
  modules: {
  }
})
