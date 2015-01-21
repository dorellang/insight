function HeatmapSelector( layer_params, attr, map, assoc_layer ){

  if ( attr.type === 'point-heatmap' )
    return new CityDashboard.PointHeatmap( layer_params, attr, map, assoc_layer);

  else if ( attr.type === 'segment-heatmap' )
    return new CityDashboard.SegmentHeatmap( layer_params, attr, map, assoc_layer);

}