<template>
  <v-row>
    <v-col cols="3" >
      <TheAvatar :data="data.owner" />
    </v-col>
    <v-col>
      <div>
        <TheName :name="data.name" />
        <TheDescription class="pt-12" :description="data.description" />
      </div>
    </v-col>
  </v-row>
</template>
<script>
import TheAvatar from './TheAvatar.vue'
import TheName from './TheName.vue'
import TheDescription from './TheDescription'
export default {
  name:'TrendingRepos',
  components:{
    TheAvatar,
    TheName,
    TheDescription
  },
  props:{
      data:{
        type:Object,
        require:true
      }
    }
}
</script>