CityDashboard.Grid = function( grid_params, attr, map ){


  if ( attr.type === 'square' )
    CityDashboard.SquareGrid( grid_params, attr, map );

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Grid

};
