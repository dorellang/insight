CityDashboard.ImageMarker = function( marker_id, marker_params, attr, map ){

  var myLatlng = new google.maps.LatLng( parseFloat(marker_params.lat), parseFloat(marker_params.lng) );

  var image = {url: attr.src || '../src/Layers/Markers/not_found.svg', scaledSize: new google.maps.Size(30,50)}

  var imageMarker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: marker_params.value.landmark || ''
  });

};

CityDashboard.ImageMarker.prototype = {

  constructor: CityDashboard.ImageMarker,

};


