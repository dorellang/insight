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
  var lat = this.center.lat;
  var lng = this.center.lng;
  var zoom = this.zoom;

  function initialize () {
    this.map = new google.maps.Map( $(containerID)[0], {
      zoom: zoom,
      center: new google.maps.LatLng(lat, lng)
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
};

CityDashboard.GoogleMap.prototype.latLngToPix = function () {
    function CanvasProjectionOverlay() {}
    CanvasProjectionOverlay.prototype = new google.maps.OverlayView();
    CanvasProjectionOverlay.prototype.constructor = CanvasProjectionOverlay;
    CanvasProjectionOverlay.prototype.onAdd = function(){};
    CanvasProjectionOverlay.prototype.draw = function(){};
    CanvasProjectionOverlay.prototype.onRemove = function(){};

    canvasProjectionOverlay = new CanvasProjectionOverlay();
    canvasProjectionOverlay.setMap(this.map);

    return function ( coordinates ) {
      var googleCoordinates = new google.maps.LatLng( coordinates.lat, coordinates.lng );
      var pixelCoordinates = canvasProjectionOverlay.getProjection().fromLatLngToContainerPixel(googleCoordinates);
      return [pixelCoordinates.x, pixelCoordinates.y];
    }
}();