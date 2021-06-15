<template>
    <v-btn
        outlined
        tile
        >
        Stars : {{ stars }} 
    </v-btn>
</template>
<script>
export default {
    name:'TheStarsNumber',
    props:{
        stars:{
            type:Number
        }
    }
}
</script>