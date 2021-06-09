<template>
<v-container >
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
    computed:{
          ...mapState({
            data: state => state.repos.ReposList,
        }),
    }
  }
</script>
