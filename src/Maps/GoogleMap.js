CityDashboard.GoogleMap = function ( parameters ) {
	
	// this.observers = [];

  this.center = {
    'lat': parameters.lat || 0,
    'lng': parameters.lng || 0
  };

  this.zoom = parameters.zoom || 3;

  var mapContainer = $(CityDashboard['mapWindowID'])[0];

  this.googlemap = new google.maps.Map( mapContainer, {
    zoom: this.zoom,
    center: new google.maps.LatLng(this.center.lat, this.center.lng),
    disableDefaultUI: true
  });

  $(CityDashboard['mainContainerID'])[0].data = this.googlemap;  
  
};

CityDashboard.GoogleMap.prototype = {

  constructor: CityDashboard.Map

};
