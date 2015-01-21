CityDashboard.SegmentHeatmap = function( layer_params, attr, map, assoc_layer ){

  var data = [];
  var n = layer_params.lat.length;

  console.log(layer_params.weights);
  
  for(var i = 0; i < n; i++){
    data[i] = { lati: parseFloat(layer_params.lat[i][0]), lngi: parseFloat(layer_params.lng[i][0]),
                latf: parseFloat(layer_params.lat[i][1]), lngf: parseFloat(layer_params.lng[i][1]) };
  }

  var myData = [];

  for(var i = 0; i < data.length; i++) {

    var d = Math.sqrt( Math.pow((data[i].latf - data[i].lati),2) + Math.pow((data[i].lngf - data[i].lngi),2) );

    var n = Math.floor(d/0.0001);

    var delta = { lat: (data[i].latf - data[i].lati)/n , lng: (data[i].lngf - data[i].lngi)/n };

    for(var j = 0; j < n; j++){
      var lat = data[i].lati;
      var lng = data[i].lngi;
      //myData.push(new google.maps.LatLng(lat + delta.lat*j, lng + delta.lng*j));
      myData.push({location: new google.maps.LatLng(lat + delta.lat*j, lng + delta.lng*j), weight: layer_params.weights[i]})
    }

  }

  var pointArray = new google.maps.MVCArray(myData);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: myData,
    //opacity: 0.6,
    //radius: 10,
    //dissipating: false
  });

  heatmap.setMap(map);

};

CityDashboard.SegmentHeatmap.prototype = Object.create(CityDashboard.Heatmap.prototype);

CityDashboard.SegmentHeatmap.prototype = {

  constructor: CityDashboard.SegmentHeatmap,

};


