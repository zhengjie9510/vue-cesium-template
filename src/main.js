// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//CommonJS style require
//新版本的 cesium 不支持以前的 import 方式导入
var Cesium = require('cesium/Cesium');
var widgets = require('cesium/Widgets/widgets.css');
//

//此处将cesium 赋给全局
Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets
//

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
