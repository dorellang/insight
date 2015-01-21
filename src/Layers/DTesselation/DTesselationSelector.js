function DTesselationSelector( delaunay_params, attr, map, assoc_layer ){

  if ( attr.type === 'delaunay' )
    return new CityDashboard.Delaunay( delaunay_params, attr, map, assoc_layer);

  else if ( attr.type === 'voronoi' )
    return new CityDashboard.Voronoi( delaunay_params, attr, map, assoc_layer);

}