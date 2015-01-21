CityDashboard.PointHeatmap = function( layer_params, attr, map, assoc_layer ){

  var data = [];
  var n = layer_params.lat.length;

  for(var i = 0; i < n; i++){
    data[i] = new google.maps.LatLng( parseFloat(layer_params.lat[i]), parseFloat(layer_params.lng[i]) );
  }

  var pointArray = new google.maps.MVCArray(data);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray,
    //gradient: ['rgba(0,0,0,0)', '#9AB6B6', '#729A9A', '#578B8B', '#266B6B'],
    opacity: 0.6,
    radius: 7
  });

  heatmap.setMap(map);

};

CityDashboard.PointHeatmap.prototype = Object.create(CityDashboard.Heatmap.prototype);

CityDashboard.PointHeatmap.prototype = {

  constructor: CityDashboard.PointHeatmap,

};


