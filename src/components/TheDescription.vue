<template>
    <p> {{ description }} </p>
</template>
<script>
export default {
    name:'TheDescription',
    props:{
        description:{
            type:String
        }
    }
}
</script>