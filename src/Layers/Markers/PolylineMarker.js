CityDashboard.PolylineMarker = function( marker_params, attr, map, assoc_layer ){

  CityDashboard.Marker.call(this, marker_params, attr, map, assoc_layer);

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

CityDashboard.PolylineMarker.prototype = Object.create(CityDashboard.Marker.prototype);

CityDashboard.PolylineMarker.prototype = {

  constructor: CityDashboard.PolylineMarker,

  addEvents: function () {},

  triggerInitialEvent: function() {}

};
