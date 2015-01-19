var markers = [];
var once = 1;

CityDashboard.SimpleMarker = function( layer_id , marker_params, attr, map ){

  var myLatlng = new google.maps.LatLng( parseFloat(marker_params.lat), parseFloat(marker_params.lng) );

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: marker_params.landmark || ''
  });

  google.maps.event.addListener(marker, 'click', triggerEvent);
  markers.push(marker);
  
  // Trigger an event only for the first marker
  if(once) {
    triggerEvent();
    once = 0;
  }

  function triggerEvent() {

    $('#infoWindow').trigger('marker-pressed', {'id': layer_id , 'value': marker_params, 'attr': attr});

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

  filter: function ( filterFun ) {
    console.log('hi');
  }

};
