import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(firestorePlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
