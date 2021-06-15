<template>
    <v-btn
        outlined
        tile
        >
        issues : {{ issues }} 
    </v-btn>
</template>
<script>
export default {
    name:'TheIssuesNumber',
    props:{
        issues:{
            type:Number
        }
    }
}
</script>