CityDashboard.MarkerLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);
  this.markers = [];

  for (var i = this.elements.length - 1; i >= 0; i--) {
    // asign a marker object to each data package
    var marker = MarkerSelector( this.elements[i], this.elementsAttr, this.map, this );
    this.markers.push(marker);
    marker.addEvents();
  };

  this.markers[0].triggerInitialEvent();

};

CityDashboard.MarkerLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.MarkerLayer.prototype = {

  constructor: CityDashboard.MarkerLayer,

  filter: function ( filterFun ) {
    for(i = 0; i < this.markers.length; i++) {
      if(!filterFun(this.markers[i].marker_params))
        this.markers[i].marker.setVisible(false);
      else
        this.markers[i].marker.setVisible(true);
    }
    for(i = 0; i < this.markers.length; i++) {
      if(this.markers[i].marker.getVisible()) {
        this.markers[i].triggerInitialEvent();
        break;
      }
    }
    
  },

  getMarkers: function () {
  	return this.markers;
  }

};
