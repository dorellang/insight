CityDashboard.SegmentHeatmap = function( layer_params, attr, map, assoc_layer ){

  var data = [];
  var n = layer_params.lat.length;
  
  for(var i = 0; i < n; i++){
    data[i] = [];
    for (var j = 0; j < layer_params.lat[i].length; j++) {
      data[i][j] = { lat: parseFloat(layer_params.lat[i][j]), lng: parseFloat(layer_params.lng[i][j]) };
    }; 
  }

  var myData = [];

  for(var i = 0; i < data.length; i++) {

    var m = data[i].length

    for(var j = 0; j < m-1; j++){

      var d = Math.sqrt( Math.pow((data[i][j+1].lat - data[i][j].lat),2) 
        + Math.pow((data[i][j+1].lng - data[i][j].lng),2) );

      //var n = Math.floor(d/0.000005);
      var l = Math.floor(d/0.00001);

      var delta = { lat: (data[i][j+1].lat - data[i][j].lat)/l , lng: (data[i][j+1].lng - data[i][j].lng)/l };

      for(var k = 0; k < l; k++){
        
        var lat = data[i][j].lat;
        var lng = data[i][j].lng;
        myData.push({
          location: new google.maps.LatLng(lat + delta.lat*k, lng + delta.lng*k), 
          weight: layer_params.weights[i] || 1})
      }
    }

  }

  var pointArray = new google.maps.MVCArray(myData);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: myData,
  });

  heatmap.setMap(map);

};

CityDashboard.SegmentHeatmap.prototype = Object.create(CityDashboard.Heatmap.prototype);

CityDashboard.SegmentHeatmap.prototype = {

  constructor: CityDashboard.SegmentHeatmap,

};


