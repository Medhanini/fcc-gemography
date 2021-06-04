<template>
    <span> {{ headline }} </span>
</template>
<script>
export default {
    name:"TheHeadline",
    props:{        
        headline:{
            type:String,
            require:true
        }
        }
    }
</script>