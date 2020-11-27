<template>
  <div class="map-box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
var Cesium = require("cesium/Cesium");
var widgets = require("cesium/Widgets/widgets.css");
export default {
  name: "",
  mounted() {
    var viewer = new Cesium.Viewer("cesiumContainer");
    //谷歌影像
    var googleImagery = new Cesium.UrlTemplateImageryProvider({
      url:
        "http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}",
      subdomains: "0123",
    });
    viewer.imageryLayers.addImageryProvider(googleImagery);
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

