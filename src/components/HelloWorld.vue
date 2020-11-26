<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
// 文件 node_modules\vue-cli-plugin-cesium\index.js 中已经引入 Cesium，因此无需再次 import
// 也可注释之后通过 require 引用
// var Cesium = require('cesium/Cesium');//To require all of CesiumJS
// 也可以通过 import 引用
// import {Viewer} from 'cesium/Cesium';//这里有坑，不能 import Cesium
export default {
  name: "",
  mounted() {
    // eslint-disable-next-line no-undef
    var viewer = new Cesium.Viewer("cesiumContainer");

    // eslint-disable-next-line no-console
    console.log(viewer);
  },
};
</script> 
<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>

