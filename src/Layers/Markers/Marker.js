CityDashboard.Marker = function( marker_id, marker_params, attr, map ){

  // map is a GoogleMap Object
  // map.map is the actual map

  if ( attr.type === 'circle' )
    CityDashboard.CircleMarker( marker_id, marker_params, attr, map.map );

  else if ( attr.type === 'image' )
    CityDashboard.ImageMarker( marker_id, marker_params, attr, map.map );

  else if ( attr.type === 'polyline' )
    CityDashboard.PolylineMarker( marker_id, marker_params, attr, map.map );

  else {
    CityDashboard.SimpleMarker( marker_id, marker_params, attr, map.map );
  }

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Marker

};
