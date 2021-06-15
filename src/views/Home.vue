<template>
  <v-container >
    <v-skeleton-loader
      v-if="!data.items"
      v-bind="attrs"
      type="article, actions"
    ></v-skeleton-loader>
    <TrendingRepos 
      v-for="(value , index) in data.items"
      :key="index" 
      :data="value" 
    />
    <scroll-loader :loader-method="getDataList" :loader-disable="disable">
    </scroll-loader>
  </v-container>
</template>

<script>
  import TrendingRepos from '../components/TrendingRepos'
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    components: {
      TrendingRepos,
    },
    data(){
      return{
        attrs: {
          class: 'mb-6',
          boilerplate: false,
        },
        disable: false
      }
    },
    methods:{
      getDataList() {
        this.$store.commit('SetNextPage')
        this.$store.dispatch('getReposList',{ page: this.page })
        setTimeout(()=> this.$vuetify.goTo(0) , 1000)
      },
    },
    computed:{
        ...mapState({
          data: state => state.repos.ReposList,
          page: state => state.repos.page
      })
    }
  }
</script>
