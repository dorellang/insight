CityDashboard.SimpleMarker = function( marker_params, attr, map ){

  var myLatlng = new google.maps.LatLng( parseFloat(marker_params.lat), parseFloat(marker_params.lng) );

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: marker_params.value.landmark || ''
  });

  google.maps.event.addListener(marker, 'click', toggleBounce);

  function toggleBounce() {

    $('.visualization').trigger('marker-pressed', {'id': '#simpleMarker' , 'value': marker_params});

    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

};

CityDashboard.SimpleMarker.prototype = {

  constructor: CityDashboard.SimpleMarker,

};
