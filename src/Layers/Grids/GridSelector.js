function GridSelector( grid_params, attr, map, assoc_layer ){

  if ( attr.type === 'square' )
    return new CityDashboard.SquareGrid( grid_params, attr, map, assoc_layer);

  else if ( attr.type === 'hexagonal' )
    return new CityDashboard.HexagonalGrid( grid_params, attr, map, assoc_layer);

}
