CityDashboard.RectangleFactory = function( parameters ){

  this.type = 'rect';
  this.params = parameters;

  //create method MUST change these values.
  this.width = undefined;
  this.height = undefined;

};

CityDashboard.RectangleFactory.prototype = {

  constructor: CityDashboard.RectangleFactory,

  create: function ( svg ) {

    var x, y, width, height, rx, ry, fill;

    x = this.params.x || 0;
    y = this.params.y || 0;
    rx = this.params.rx || 0;
    ry = this.params.ry || 0;
    fill = this.params.fill || 'black';

    this.width = this.params.width || 50;
    this.height = this.params.height || 50;

    return svg.append( 'rect' )
    .attr( 'x', x )
    .attr( 'y', y )
    .attr( 'width', this.width )
    .attr( 'height', this.height )
    .attr( 'rx', rx )
    .attr( 'ry', ry )
    .attr( 'fill', fill );

  },

  moveElement: function ( element, coordenates ) {

    element
    .attr( 'x', coordenates.lat - ( this.width / 2 ) ) 
    .attr( 'y', coordenates.lng - ( this.height / 2 ) );

  }

};
