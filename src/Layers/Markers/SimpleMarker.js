CityDashboard.SimpleMarker = function( layer_params, attr, map, assoc_layer ){

  CityDashboard.Marker.call(this, layer_params, attr, map, assoc_layer);

  var myLatlng = new google.maps.LatLng( parseFloat(layer_params.lat), parseFloat(layer_params.lng) );

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: layer_params.landmark || ''
  });

  this.marker = marker;

};

CityDashboard.SimpleMarker.prototype = Object.create(CityDashboard.Marker.prototype);

CityDashboard.SimpleMarker.prototype = {

  constructor: CityDashboard.SimpleMarker,

  addEvents: function () {
      
    google.maps.event.addListener(this.marker, 'click', triggerEvent);

    var myself = this;

    function triggerEvent() {

      $('#infoWindow').trigger('marker-pressed', {'id': myself.layer.id , 'value': myself.marker_params, 'attr': myself.attr});

      for(var i = 0; i < myself.layer.markers.length; i++) {
        var myMarker = myself.layer.markers[i].marker;
        if (myMarker == this) {
          myMarker.setAnimation(google.maps.Animation.BOUNCE);
        }
        else {
          myMarker.setAnimation(null);
        }
      }

    }

  },

  triggerInitialEvent: function() {
    $('#infoWindow').trigger('marker-pressed', {'id': this.layer.id , 'value': this.marker_params, 'attr': this.attr});
    for(i = 0; i < this.layer.markers.length; i++) {
      this.layer.markers[i].marker.setAnimation(null);
    }
    this.marker.setAnimation(google.maps.Animation.BOUNCE);
  }

};
