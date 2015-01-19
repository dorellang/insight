CityDashboard.DTesselation = function( delaunay_params, attr, map ){


  if ( attr.type === 'delaunay' )
    CityDashboard.Delaunay( delaunay_params, attr, map);

  else if ( attr.type === 'voronoi' )
    CityDashboard.Voronoi( delaunay_params, attr, map);

};

CityDashboard.DTesselation.prototype = {

  constructor: CityDashboard.DTesselation

};
