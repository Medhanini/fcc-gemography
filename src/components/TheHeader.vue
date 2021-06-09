<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <TheHeadline :headline="headline" />
      </div>
    </v-app-bar>
</template>
<script>
import TheHeadline from './TheHeadline'
export default {
    name: 'TheHeader',
    components:{
        TheHeadline
    },
    computed:{
    headline(){
      return"Front-end Coding Challenge 'Trending Repos' "
    }
  },
}
</script>