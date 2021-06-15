import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ScrollLoader from 'vue-scroll-loader'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
 
Vue.use(ScrollLoader)
Vue.use(VueMoment, {
  moment,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
