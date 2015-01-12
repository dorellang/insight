CityDashboard.Marker = function( layer_id, marker_params, attr, map ){

  // map is a GoogleMap Object
  // map.map is the actual map

  if ( attr.type === 'circle' )
    CityDashboard.CircleMarker( layer_id, marker_params, attr, map.map );

  else if ( attr.type === 'image' )
    CityDashboard.ImageMarker( layer_id, marker_params, attr, map.map );

  else if ( attr.type === 'polyline' )
    CityDashboard.PolylineMarker( layer_id, marker_params, attr, map.map );

  else if ( attr.type === 'simple' ){
    CityDashboard.SimpleMarker( layer_id, marker_params, attr, map.map );
  }

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Marker

};
