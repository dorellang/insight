CityDashboard.Dashboard = function ( parameters ) {

	if ( parameters.anchor === undefined ) {
		throw new Error( 'Anchor ID is required.' )
	}

	this.anchorID = parameters.anchor;
	this.map = parameters.map;
};

CityDashboard.Dashboard.prototype = {
	constructor: CityDashboard.Dashboard,

	show: function () {
		map.place( this.anchorID );
	}
};