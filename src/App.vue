<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <TheHeadline :headline="headline" />
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheHeadline from './components/TheHeadline'
export default {
  name: 'App',
  components:{
    TheHeadline
  },
  computed:{
    headline(){
      return"Front-end Coding Challenge"
    }
  },
  data: () => ({
  }),
};
</script>
