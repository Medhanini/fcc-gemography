<template>
  <v-row>
    <v-col cols="3" >
      <TheAvatar :data="data.owner" />
    </v-col>
    <v-col>

    </v-col>
  </v-row>
</template>
<script>
import TheAvatar from './TheAvatar.vue'
export default {
  name:'TrendingRepos',
  components:{
    TheAvatar
  },
  props:{
    data:{
      type:Object,
      require:true
    }
    }
}
</script>