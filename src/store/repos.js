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
        var day = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day)
        const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(day)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day)
      axios.get(`https://api.github.com/search/repositories?q=created:>${ye}-${mo}-${da}&sort=stars&order=desc`,{ 
        params
      })
      .then((response) => {
        //console.log(response.data)
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