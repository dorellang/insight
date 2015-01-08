CityDashboard.Marker = function( marker_params, attr, map ){

  // map is a GoogleMap Object
  // map.map is the actual map

  if ( attr.type === 'simple' )
    CityDashboard.SimpleMarker( marker_params, attr, map.map );

  else if ( attr.type === 'circle' )
    CityDashboard.CircleMarker( marker_params, attr, map.map );

  else if ( attr.type === 'image' )
    CityDashboard.ImageMarker( marker_params, attr, map.map );

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Marker

};
