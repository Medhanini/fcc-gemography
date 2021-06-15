<template>
    <div>
        <v-img
        :src="data.avatar_url"
        :lazy-src="data.avatar_url"
        aspect-ratio="1"
        class="grey lighten-3"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
</template>
<script>
export default {
    name:'TheAvatar',
    props:{
        data:{
            type:Object,
            require:true
        }
    }
}
</script>