CityDashboard.PolylineMarker = function( layer_params, attr, map, assoc_layer ){

  CityDashboard.Marker.call(this, layer_params, attr, map, assoc_layer);

  var myLatlngArray = [];
  var n = layer_params.points.length;

  for(var i = 0; i < n; i++){
    myLatlngArray[i] = new google.maps.LatLng( parseFloat(layer_params.points[i].lat),
                                               parseFloat(layer_params.points[i].lng) );
  }

  var path = new google.maps.Polyline({
    path: myLatlngArray,
    strokeColor: attr.strokeColor || '#000000',
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
