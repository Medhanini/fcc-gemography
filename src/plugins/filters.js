import Vue from 'vue'

export function truncate(string, value) {
if(string.length >= value){
    return (string || '').substring(0, value) + '…'
    }
    else{
        return (string || '').substring(0, value)
    }
}

Vue.filter('truncate', truncate)