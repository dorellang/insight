CityDashboard.ImageMarker = function( layer_params, attr, map, assoc_layer ){

  CityDashboard.Marker.call(this, layer_params, attr, map, assoc_layer);

  var myLatlng = new google.maps.LatLng( parseFloat(layer_params.lat), parseFloat(layer_params.lng) );

  var image = {url: attr.src || '../src/Layers/Markers/not_found.svg', scaledSize: new google.maps.Size(30,50)}

  var imageMarker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: layer_params.landmark || ''
  });

};

CityDashboard.ImageMarker.prototype = Object.create(CityDashboard.Marker.prototype);

CityDashboard.ImageMarker.prototype = {

  constructor: CityDashboard.ImageMarker,

  addEvents: function () {},

  triggerInitialEvent: function() {}

};


