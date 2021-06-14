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
    <scroll-loader :loader-method="getImageList" :loader-disable="disable">
   <div>Loading...</div>
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
        disable: false,
        page: 1,
        pageSize: 30,
        images: [],
        d:''
      }
    },
    methods:{
      getImageList() {
        let p = this.page++
        this.$store.dispatch('getReposList',{ page: p }).then(
          

           // Stop scroll loading...
            // this.disable = this.data.items.length < this.pageSize
        )

          setTimeout(()=> this.$vuetify.goTo(0) , 1000)
          alert('page'+p)

      },
    },
    created() {
            
    },
    computed:{
        ...mapState({
          data: state => state.repos.ReposList,
      })
    }
  }
</script>
