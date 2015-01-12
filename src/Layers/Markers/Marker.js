CityDashboard.Marker = function( layer_id, marker_params, attr, map ){

  if ( attr.type === 'circle' )
    CityDashboard.CircleMarker( layer_id, marker_params, attr, map );

  else if ( attr.type === 'image' )
    CityDashboard.ImageMarker( layer_id, marker_params, attr, map );

  else if ( attr.type === 'polyline' )
    CityDashboard.PolylineMarker( layer_id, marker_params, attr, map );

  else if ( attr.type === 'simple' ){
    CityDashboard.SimpleMarker( layer_id, marker_params, attr, map );
  }

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Marker

};
