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

};
