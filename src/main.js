import Vue from 'vue'
import App from './App.vue'
import 'cesium/Widgets/widgets.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
