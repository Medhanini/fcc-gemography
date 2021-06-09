import axios from 'axios'

//to handle state
const state = {
  AboutList: [],
}

//to handle state
const getters = {
}

//to handle actions
const actions = {
  getAboutList({commit}, payload) {
    return new Promise( (resolve, reject) => {
      axios.get('http://localhost:3000/about')
      .then((response) => {
        commit('setAboutList', response.data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
const mutations = {
  setAboutList(state, payload) {
    state.AboutList = payload
  }
}
export default {
    state,
    mutations,
    actions,
    getters
   }