window.onload= init;

function init(){
    const map = new ol.Map({
      view: new ol.View({
        center: [339363.7764039488, 4406001.5500074215],
        zoom: 12,
        maxZoom: 16, 
        minZoom:7
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'js-map'
    })
    map.on('click' , function(e){
      console.log(e.coordinate);
    })
}