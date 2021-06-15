<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <TheHeadline :headline="headline" />
      </div>
      <v-spacer></v-spacer>
      <v-icon
      :disabled="page<=1"
        @click="prevP()"
      >
      mdi-arrow-left-bold
      </v-icon>
      <v-icon
        @click="nextP()"
      >
      mdi-arrow-right-bold
      </v-icon>
    </v-app-bar>
</template>
<script>

  import { mapState } from 'vuex'
import TheHeadline from './TheHeadline'
export default {
    name: 'TheHeader',
    components:{
        TheHeadline
    },
    computed:{
    headline(){
      return"Front-end Coding Challenge 'Trending Repos' "
    },
    ...mapState({
          page: state => state.repos.page
      })
  },

    methods:{
      nextP(){
        this.$store.commit('SetNextPage')
        this.$store.dispatch('getReposList',{ page: this.page })
        setTimeout(()=> this.$vuetify.goTo(0) , 1000)
      },
      prevP(){
        this.$store.commit('SetPrevPage')
        this.$store.dispatch('getReposList',{ page: this.page })
        setTimeout(()=> this.$vuetify.goTo(0) , 1000)
      }
    }
}
</script>