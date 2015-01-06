CityDashboard.Circle = function( parameters ){

  this.type = 'circle';
  this.params = parameters;

  //create method MUST change these values.
  this.width = undefined;
  this.height = undefined;

};

CityDashboard.Circle.prototype = {

  constructor: CityDashboard.Circle,

  create: function ( svg ) {

    var cx, cy, r, fill;

    cx = this.params.cy || 0;
    cy = this.params.cx || 0;
    r = this.params.r || 20;
    fill = this.params.fill || 'black';

    this.width = 2 * r;
    this.height = 2 * r;

    return svg.append( 'circle' )
    .attr( 'cx', cx )
    .attr( 'cy', cy )
    .attr( 'r', r )
    .attr( 'fill', fill );

  },

  moveElement: function ( element, coordenates ) {

    element
    .attr( 'cx', coordenates.lat )
    .attr( 'cy', coordenates.lng );

  }

};
