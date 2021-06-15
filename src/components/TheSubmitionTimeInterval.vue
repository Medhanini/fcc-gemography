<template>
    <p>
        {{ TimeInterval }} 
        by
        <strong>
        {{ owner}}
        </strong> 
    </p>    
</template>
<script>
export default {
    name:'TheSubmitionTimeInterval',
    props:{
        owner:{
            type: String
        },
        date_sub:{
            type:String
        }
    },
    computed:{
        TimeInterval(){
            var date1 = new Date(this.date_sub);
            var date2 = new Date();
                
            // To calculate the time difference of two dates
            var Difference_In_Time = date2.getTime() - date1.getTime();
                
            // To calculate the no. of days between two dates
            var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
            if( Difference_In_Days > 0 ){
                return 'Submited '+Difference_In_Days+' days ago '
            }else{
                return 'Submited few hours ago '
            }
            
        }
    }
}
</script>