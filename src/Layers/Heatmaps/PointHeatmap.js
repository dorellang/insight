CityDashboard.PointHeatmap = function( layer_params, attr, map, assoc_layer ){

  var data = [];
  var n = layer_params.lat.length;

  for(var i = 0; i < n; i++){
    data[i] = new google.maps.LatLng( parseFloat(layer_params.lat[i]), parseFloat(layer_params.lng[i]) );
  }

  var pointArray = new google.maps.MVCArray(data);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray,
    radius: attr.radius || 10
  });

  heatmap.setMap(map);

};

CityDashboard.PointHeatmap.prototype = Object.create(CityDashboard.Heatmap.prototype);

CityDashboard.PointHeatmap.prototype = {

  constructor: CityDashboard.PointHeatmap,

};


