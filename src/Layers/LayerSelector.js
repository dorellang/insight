function LayerSelector( parameters, map ){

  if ( parameters.layer === 'grid-layer' )
    return new CityDashboard.GridLayer( parameters, map );

  else if ( parameters.layer === 'marker-layer' )
    return new CityDashboard.MarkerLayer( parameters, map );

  else if ( parameters.layer === 'heatmap-layer' )
    return new CityDashboard.HeatmapLayer( parameters, map );

  else if ( parameters.layer === 'delaunay-layer' )
    return new CityDashboard.DelaunayLayer( parameters, map );

}