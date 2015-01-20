CityDashboard.CircleMarker = function( layer_id, marker_params, attr, map ){

  var myLatlng = new google.maps.LatLng( parseFloat(marker_params.lat), parseFloat(marker_params.lng) );

  var circle = new google.maps.Circle({
      center: myLatlng,
      map: map,
      radius: attr.radius || 400,
      strokeColor: attr.strokeColor || '#FF0000',
      strokeOpacity: attr.strokeOpacity || 0.8,
      strokeWeight: attr.strokeWeight || 2,
      fillColor: attr.fillColor || '#FF0000',
      fillOpacity: attr.fillOpacity || 0.35,
      title: marker_params.landmark || ''
  });

};

CityDashboard.CircleMarker.prototype = {

  constructor: CityDashboard.CircleMarker,

};


