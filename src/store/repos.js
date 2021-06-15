import axios from 'axios'

//to handle state
const state = {
  ReposList: [],
  page : 0
}

//to handle state
const getters = {
}

//to handle actions
const actions = {
  getReposList({commit},params) {
    return new Promise( (resolve, reject) => {
      axios.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc',{ 
        params
      })
      .then((response) => {
        console.log(response.data)
        commit('setReposList', response.data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
const mutations = {
  setReposList(state, payload) {
    state.ReposList = payload
  },
  SetNextPage(state) {
    state.page++
  },
  SetPrevPage(state) {
    state.page--
  }
}
export default {
    state,
    mutations,
    actions,
    getters
   }