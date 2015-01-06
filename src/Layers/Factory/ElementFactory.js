CityDashboard.ElementFactory = function( parameters ){

  var element;

  if ( parameters.type === 'rect' )
    element = new CityDashboard.Rectangle( parameters );

  else if ( parameters.type === 'circle' )
    element = new CityDashboard.Circle( parameters );

  else if ( parameters.type === 'image' )
    element = new CityDashboard.Image( parameters );

  return element;

};
