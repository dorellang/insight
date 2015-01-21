function GridSelector( layer_params, attr, map, assoc_layer ){

  if ( attr.type === 'square' )
    return new CityDashboard.SquareGrid( layer_params, attr, map, assoc_layer);

  else if ( attr.type === 'hexagonal' )
    return new CityDashboard.HexagonalGrid( layer_params, attr, map, assoc_layer);

}
