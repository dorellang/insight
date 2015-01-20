CityDashboard.Heatmap = function( heatmap_params, attr, map ){

  var data = [];
  var n = heatmap_params.lat.length;

  for(var i = 0; i < n; i++){
    data[i] = new google.maps.LatLng( parseFloat(heatmap_params.lat[i]), parseFloat(heatmap_params.lng[i]) );
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

CityDashboard.Heatmap.prototype = {

  constructor: CityDashboard.Heatmap,

};


