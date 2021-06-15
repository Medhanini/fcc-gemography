<template>
  <v-row>
    <v-col cols="2" >
      <TheAvatar :data="data.owner" />
    </v-col>
    <v-col class="details">
      <div>
        <TheName :name="data.name" />
        <TheDescription class="pt-5" :description="data.description" />
        <div class="d-flex btm-d" >
          <TheStarsNumber :stars="data.stargazers_count" class="mt-1" />
          <TheIssuesNumber :issues="data.open_issues_count" class="mt-1 ml-2" />
          <TheSubmitionTimeInterval class="ml-3 mt-2" :date_sub="data.pushed_at" :owner="data.owner.login" />
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import TheAvatar from './TheAvatar.vue'
import TheName from './TheName.vue'
import TheDescription from './TheDescription.vue'
import TheStarsNumber from './TheStarsNumber.vue'
import TheIssuesNumber from './TheIssuesNumber.vue'
import TheSubmitionTimeInterval from './TheSubmitionTimeInterval.vue'
export default {
  name:'TrendingRepos',
  components:{
    TheAvatar,
    TheName,
    TheDescription,
    TheStarsNumber,
    TheIssuesNumber,
    TheSubmitionTimeInterval
  },
  props:{
      data:{
        type:Object,
        require:true
      }
    }
}
</script>
<style lang="scss">
.details{
position: relative;
.btm-d{
  position: absolute;
  bottom: 4px;
}
}
</style>