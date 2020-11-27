<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
// 文件 node_modules\vue-cli-plugin-cesium\index.js 中已经全局引入 Cesium，因此无需再次 import

// 也可注释掉全局引用，通过 require 引用
// var Cesium = require('cesium/Cesium');//To require all of CesiumJS
// 也可以通过 import 引用
// import {Viewer} from 'cesium/Cesium';//这里有坑，不能 import Cesium
export default {
  name: "",
  mounted() {
    var viewer = new Cesium.Viewer("cesiumContainer");

    var imageryLayers = viewer.imageryLayers;
    // ArcGIS 影像服务
    imageryLayers.addImageryProvider(
      // eslint-disable-next-line no-undef
      new Cesium.ArcGisMapServerImageryProvider({
        url:
          "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      })
    );

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

