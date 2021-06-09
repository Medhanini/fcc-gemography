<template>
    <h1> {{ name }} </h1>
</template>
<script>
export default {
    name:'TheName',
    props:{
        name:{
            type:String,
            require:true
        }
    }
}
</script>