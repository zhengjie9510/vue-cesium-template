<template>
  <div id="cesiumContainer"></div>
</template>

<script>
// ES6 style import,不能导入 Cesium
// 使用以下方式导入需要注释掉 main.js 中的导入
// import { Viewer } from "cesium/Cesium";
// require("cesium/Widgets/widgets.css");
export default {
  name: "cesiumView",
  mounted() {
    var viewer = new this.Cesium.Viewer("cesiumContainer", {});
    var imageryLayers = viewer.imageryLayers;
    // ArcGIS 影像服务
    imageryLayers.addImageryProvider(
      new this.Cesium.ArcGisMapServerImageryProvider({
        url:
          "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      })
    );
    // // 谷歌地图 会报错，原因未知
    // imageryLayers.addImageryProvider(
    //   new this.Cesium.WebMapTileServiceImageryProvider({
    //     url:
    //       "http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}",
    //     subdomains: "0123",
    //   })
    // );
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