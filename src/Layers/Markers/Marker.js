CityDashboard.Marker = function( layer_params, attr, map, assoc_layer ){

  this.layer_params = layer_params;
  this.attr =  attr;
  this.map = map;
  this.marker = undefined;
  this.layer = assoc_layer;

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Marker,

  addEvents: function () {
      
    google.maps.event.addListener(this.marker, 'click', triggerEvent);

    var myself = this;

    function triggerEvent() {

      $('#infoWindow').trigger('marker-pressed', {'id': myself.layer.id , 'value': myself.layer_params, 'attr': myself.attr});

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

  triggerInitialEvent: function() {},

};
