<template>
  <div id="cesiumContainer"></div>
</template>

<script>
//CommonJS style require
//新版本的 cesium 不支持以前的 import 方式导入
var Cesium = require("cesium/Cesium");
var widgets = require("cesium/Widgets/widgets.css");
//
// ES6 style import,不能导入 Cesium
// 使用以下方式导入需要注释掉 main.js 中的导入
// import { Viewer } from "cesium/Cesium";
// require("cesium/Widgets/widgets.css");
//
export default {
  name: "cesiumView",
  mounted() {
    var viewer = new Cesium.Viewer("cesiumContainer", {});
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

<style>
#cesiumContainer {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>