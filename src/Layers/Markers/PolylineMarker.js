CityDashboard.PolylineMarker = function( marker_params, attr, map ){

console.log(marker_params);
console.log(attr);

  var myLatlngArray = [];
  var n = marker_params.lat.length;

  for(var i = 0; i < n; i++){
    myLatlngArray[i] = new google.maps.LatLng( parseFloat(marker_params.lat[i]), parseFloat(marker_params.lng[i]) );
  }

  var path = new google.maps.Polyline({
    path: myLatlngArray,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  
  path.setMap(map);

};

CityDashboard.PolylineMarker.prototype = {

  constructor: CityDashboard.PolylineMarker,

};
