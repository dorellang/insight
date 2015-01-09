var markers = [];

CityDashboard.SimpleMarker = function( marker_id , marker_params, attr, map ){

  var myLatlng = new google.maps.LatLng( parseFloat(marker_params.lat), parseFloat(marker_params.lng) );

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: marker_params.value.landmark || ''
  });

  google.maps.event.addListener(marker, 'click', triggerEvent);
  markers.push(marker);
  
  triggerEvent();

  function triggerEvent() {

    $('.visualization').trigger('marker-pressed', {'id': marker_id , 'value': marker_params, 'attr': attr});

    for(var i = 0; i < markers.length; i++) {
      var myMarker = markers[i];
      if (myMarker == marker) {
        toggleBounceOn(myMarker);
      }
      else {
        toggleBounceOff(myMarker);
      }
    }

  }

  function toggleBounceOff(myMarker) {

    myMarker.setAnimation(null);

  }

  function toggleBounceOn() {

    marker.setAnimation(google.maps.Animation.BOUNCE);

  }


};

CityDashboard.SimpleMarker.prototype = {

  constructor: CityDashboard.SimpleMarker,

};
