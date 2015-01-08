CityDashboard.Dashboard = function ( parameters ) {

	if ( parameters.anchor === undefined ) {
		throw new Error( 'Anchor ID is required.' )
	}
  
  this.map = parameters.map;
  this.info = parameters.info;

  var orientation = parameters.layout || 'none';

  this.layout = new CityDashboard.Layout( parameters.anchor, 'layout-' + orientation );

  this.layer = new CityDashboard.NullLayer();

};

CityDashboard.Dashboard.prototype = {

  constructor: CityDashboard.Dashboard,

  show: function () {

    this.layout.place( this.map, this.info, this.layer );
    
  },

  addLayer: function ( parameters ) {

    var newLayer = new CityDashboard.MarkerLayer( parameters, this.map );
    this.layer = newLayer.wrap( this.layer );
    this.layer.refreshZIndex();

    //subscribe the layer to the map events
    this.map.addObserver( this.layer );

    return this;

  }

};
