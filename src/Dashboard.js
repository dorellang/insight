CityDashboard.Dashboard = function ( parameters ) {

	if ( parameters.anchor === undefined ) {
		throw new Error( 'Anchor ID is required.' )
	}
  this.anchor = parameters.anchor;
	this.map = parameters.map;
  this.info = parameters.info;

  var orientation = parameters.layout || 'none';

  this.layout = new CityDashboard.Layout( parameters.anchor, 'layout-' + orientation );
};

CityDashboard.Dashboard.prototype = {
	constructor: CityDashboard.Dashboard,

	show: function () {
    this.layout.place( this.map, this.info );
  }
};