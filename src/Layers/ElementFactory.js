CityDashboard.ElementFactory = function( parameters ){

  var elementFact;

  if ( parameters.type === 'rect' )
    elementFact = new CityDashboard.RectangleFactory( parameters );

  else if ( parameters.type === 'circle' )
    elementFact = new CityDashboard.CircleFactory( parameters );

  else if ( parameters.type === 'image' )
    elementFact = new CityDashboard.ImageFactory( parameters );

  return elementFact;

};
