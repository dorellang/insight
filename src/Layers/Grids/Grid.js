CityDashboard.Grid = function( grid_params, attr, map ){

  // map is a GoogleMap Object
  // map.map is the actual map

  if ( attr.type === 'square' )
    CityDashboard.SquareGrid( grid_params, attr, map.map );

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Grid

};
