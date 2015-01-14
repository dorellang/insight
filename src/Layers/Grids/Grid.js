CityDashboard.Grid = function( grid_params, attr, map ){


  if ( attr.type === 'square' )
    CityDashboard.SquareGrid( grid_params, attr, map);

  else if ( attr.type === 'hexagonal' )
    CityDashboard.HexagonalGrid( grid_params, attr, map);

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Grid

};
