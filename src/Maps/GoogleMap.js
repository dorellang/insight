var googleMapProjection;

CityDashboard.GoogleMap = function ( parameters ) {
	
	CityDashboard.Map.call( this );

  this.center = {
    'lat': parameters.lat || 0,
    'lng': parameters.lng || 0
  };

  this.zoom = parameters.zoom || 3;

  this.map = undefined;
};

CityDashboard.GoogleMap.prototype = Object.create ( CityDashboard.Map.prototype );

CityDashboard.GoogleMap.prototype.place  = function ( containerID ) {

  var lat, lng, zoom;

  lat = this.center.lat;
  lng = this.center.lng;
  zoom = this.zoom;

  // create googlemaps
  this.map = new google.maps.Map( $(containerID)[0], {
    zoom: zoom,
    center: new google.maps.LatLng(lat, lng)
  });

  // create this overlay so we can use latlng conversion
  function CanvasProjectionOverlay() {}
  CanvasProjectionOverlay.prototype = new google.maps.OverlayView();
  CanvasProjectionOverlay.prototype.constructor = CanvasProjectionOverlay;
  CanvasProjectionOverlay.prototype.onAdd = function() {};
  CanvasProjectionOverlay.prototype.draw = function() {};
  CanvasProjectionOverlay.prototype.onRemove = function() {};

  var canvasProjectionOverlay = new CanvasProjectionOverlay();
  canvasProjectionOverlay.setMap( this.map );

  var googleMapProjection  = function ( coordinates ) {

    var googleCoordinates = new google.maps.LatLng( coordinates.lat, coordinates.lng );
    var pixelCoordinates = canvasProjectionOverlay.getProjection().fromLatLngToContainerPixel(googleCoordinates);
    return {'lat': pixelCoordinates.x, 'lng': pixelCoordinates.y};
  };

  var gmap = this;

  google.maps.event.addListener(this.map,'center_changed', function(){
    gmap.notify({
      'event': 'center_changed',
      'method': googleMapProjection
    });
  });
  google.maps.event.addListener(this.map,'zoom_changed', function(){
    gmap.notify({
      'event': 'zoom_changed',
      'method': googleMapProjection
    });
  });
  google.maps.event.addListener(this.map,'idle', function(){
    gmap.notify({
      'event': 'idle_changed',
      'method': googleMapProjection
    });
  });
};
