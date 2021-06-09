import Vue from 'vue'
import Vuex from 'vuex'
import vuexActionInit from 'vuex-action-init'
Vue.use(Vuex)

import repos from './repos'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    INIT ({dispatch}) {
      dispatch('getReposList')
      console.log('Initalizing')
    }
  },
  plugins: [vuexActionInit()],
  modules: {
    repos
  }
})
