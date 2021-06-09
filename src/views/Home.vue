<template>
<div>
  <TrendingRepos />
  {{ data }}
</div>
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
