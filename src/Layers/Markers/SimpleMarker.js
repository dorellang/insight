CityDashboard.SimpleMarker = function( marker_params, attr, map ){

  var myLatlng = new google.maps.LatLng( parseFloat(marker_params.lat), parseFloat(marker_params.lng) );

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: marker_params.value.landmark || ''
  });

};

CityDashboard.SimpleMarker.prototype = {

  constructor: CityDashboard.SimpleMarker,

};
