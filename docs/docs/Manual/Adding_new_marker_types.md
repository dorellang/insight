# Adding new marker types

On this tutorial we will learn how to extend our Dashboard to add new marker types.

## Where to work

Each marker is located in `\src\Layers\Markers`. We start by adding a new type of marker, for example, consider `Circle` as a new marker.

## How to:

To do so, we create our new `CircleMarker.js` extending the marker class, replacing constructor and marker methods, such as `addEvents` and `triggerInitialEvent`. Consider the code of our Circle type:

``` javascript
CityDashboard.CircleMarker = function( layer_params, attr, map, assoc_layer ){

  //Call parent constructor
  CityDashboard.Marker.call(this, layer_params, attr, map, assoc_layer);

  //Parse coordinates
  var myLatlng = new google.maps.LatLng( parseFloat(layer_params.lat), parseFloat(layer_params.lng) );

  //Creating the circle, using googlemaps API
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

  //marker field now references to circle
  this.marker = circle;

};

// Inheritance
CityDashboard.CircleMarker.prototype = Object.create(CityDashboard.Marker.prototype);

CityDashboard.CircleMarker.prototype = {

  constructor: CityDashboard.CircleMarker,

  // addEvents replacement
  addEvents: function () {

    google.maps.event.addListener(this.marker, 'click', triggerEvent);

    var myself = this;

    function triggerEvent() {

      $('#infoWindow').trigger('marker-pressed', {'id': myself.layer.id , 'value': myself.layer_params, 'attr': myself.attr});

    }

  },

  // triggerInitialEvent replacement
  triggerInitialEvent: function() {
    $('#infoWindow').trigger('marker-pressed', {'id': this.layer.id , 'value': this.layer_params, 'attr': this.attr});
  }

};

```

We now have to add the new type in `MarkerSelector.js` so the new type can be parsed:

``` javascript
function MarkerSelector( layer_params, attr, map, assoc_layer ){

  // Our new type
  if ( attr.type === 'circle' )
    return new CityDashboard.CircleMarker( layer_params, attr, map, assoc_layer );

  else if ( attr.type === 'image' )
    return new CityDashboard.ImageMarker( layer_params, attr, map, assoc_layer );

  else if ( attr.type === 'polyline' )
    return new CityDashboard.PolylineMarker( layer_params, attr, map, assoc_layer );

  else if ( attr.type === 'simple' )
    return new CityDashboard.SimpleMarker( layer_params, attr, map, assoc_layer );

};
```

## Before we finish

We should add the new path `Layers/Markers/CircleMarker` in `server.config` (right below the parent class), so the server knows where to look for our new class.

```
lib/utils
CityDashboard
Maps/GoogleMap
Layers/Markers/Marker
Layers/Markers/CircleMarker
Layers/Markers/ImageMarker
```