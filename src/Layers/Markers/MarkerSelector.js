function MarkerSelector( marker_params, attr, map, assoc_layer ){

  if ( attr.type === 'circle' )
    return new CityDashboard.CircleMarker( marker_params, attr, map, assoc_layer );

  else if ( attr.type === 'image' )
    return new CityDashboard.ImageMarker( marker_params, attr, map, assoc_layer );

  else if ( attr.type === 'polyline' )
    return new CityDashboard.PolylineMarker( marker_params, attr, map, assoc_layer );

  else if ( attr.type === 'simple' )
    return new CityDashboard.SimpleMarker( marker_params, attr, map, assoc_layer );

};