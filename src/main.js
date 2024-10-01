import Vue from 'vue'
import App from './App.vue'
import CompHeader from "./Components/Header_footer/AppHeader.vue";

Vue.config.productionTip = false

Vue.component('app-header', CompHeader)

new Vue({
  render: h => h(App),
}).$mount('#app')
