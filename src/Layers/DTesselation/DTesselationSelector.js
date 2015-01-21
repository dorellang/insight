function DTesselationSelector( layer_params, attr, map, assoc_layer ){

  if ( attr.type === 'delaunay' )
    return new CityDashboard.Delaunay( layer_params, attr, map, assoc_layer);

  else if ( attr.type === 'voronoi' )
    return new CityDashboard.Voronoi( layer_params, attr, map, assoc_layer);

}