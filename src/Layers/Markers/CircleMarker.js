CityDashboard.CircleMarker = function( layer_params, attr, map, assoc_layer ){

  CityDashboard.Marker.call(this, layer_params, attr, map, assoc_layer);

  var myLatlng = new google.maps.LatLng( parseFloat(layer_params.lat), parseFloat(layer_params.lng) );

  var circle = new google.maps.Circle({
      center: myLatlng,
      map: map,
      radius: attr.radius || 400,
      strokeColor: attr.strokeColor || '#FF0000',
      strokeOpacity: attr.strokeOpacity || 0.8,
      strokeWeight: attr.strokeWeight || 2,
      fillColor: attr.fillColor || '#FF0000',
      fillOpacity: attr.fillOpacity || 0.35,
      title: layer_params.landmark || ''
  });

  this.marker = circle;

};

CityDashboard.CircleMarker.prototype = Object.create(CityDashboard.Marker.prototype);

CityDashboard.CircleMarker.prototype = {

  constructor: CityDashboard.CircleMarker,

  addEvents: function () {

    google.maps.event.addListener(this.marker, 'click', triggerEvent);

    var myself = this;

    function triggerEvent() {

      $('#infoWindow').trigger('marker-pressed', {'id': myself.layer.id , 'value': myself.layer_params, 'attr': myself.attr});

    }

  },

  triggerInitialEvent: function() {
    $('#infoWindow').trigger('marker-pressed', {'id': this.layer.id , 'value': this.layer_params, 'attr': this.attr});
  }

};

