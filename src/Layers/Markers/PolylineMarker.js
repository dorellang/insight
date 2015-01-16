CityDashboard.PolylineMarker = function( layer_id, marker_params, attr, map ){

  var myLatlngArray = [];
  var n = marker_params.lat.length;

  for(var i = 0; i < n; i++){
    myLatlngArray[i] = new google.maps.LatLng( parseFloat(marker_params.lat[i]), parseFloat(marker_params.lng[i]) );
  }

  var path = new google.maps.Polyline({
    path: myLatlngArray,
    strokeColor: attr.strokeColor || '#578b8b',
    strokeOpacity: attr.strokeOpacity || 1.0,
    strokeWeight: attr.strokeWeight || 2
  });
  
  path.setMap(map);

};

CityDashboard.PolylineMarker.prototype = {

  constructor: CityDashboard.PolylineMarker,

};