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
      }
    },
    computed:{
          ...mapState({
            data: state => state.repos.ReposList,
        }),
    }
  }
</script>
