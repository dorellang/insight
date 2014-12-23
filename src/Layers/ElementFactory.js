CityDashboard.ElementFactory = function( parameters ){
  this.type = parameters.type || 'circle';
  this.params = parameters;
};

CityDashboard.ElementFactory.prototype = {
  constructor: CityDashboard.ElementFactory,

  create: function ( svg ) {

    var figure;

    if ( this.type === 'rect' )
      figure = this.createRect( svg );

    else //if ( this.type === 'circle' )
      figure = this.createCircle( svg );

    figure.attr( 'fill', this.params.fill || 'black' );

    return figure;
  },

  moveElement: function ( element, coordenates ) {
    if ( this.type === 'circle' ) {
      element
      .attr( 'cx', coordenates.lat )
      .attr( 'cy', coordenates.lng );
    }

    else if ( this.type === 'rect' ) {
      element
      .attr( 'x', coordenates.lat - ( this.params.width / 2 ) )
      .attr( 'y', coordenates.lng - ( this.params.height / 2 ) );
    }
  },

  createRect: function ( svg ){
    var x, y, width, height, rx, ry;

    x = this.params.x || 0;
    y = this.params.y || 0;
    width = this.params.width || 50;
    height = this.params.height || 50;
    rx = this.params.rx || 0;
    ry = this.params.ry || 0;

    return svg.append( 'rect' )
    .attr( 'x', x )
    .attr( 'y', y )
    .attr( 'width', width )
    .attr( 'height', height )
    .attr( 'rx', rx )
    .attr( 'ry', ry );
  },

  createCircle: function ( svg ) {
    var cx, cy, r;

    cx = this.params.cy || 0;
    cy = this.params.cx || 0;
    r = this.params.r || 20;

    return svg.append( 'cirlce' )
    .attr( 'cx', cx )
    .attr( 'cy', cy )
    .attr( 'r', r );
  }
};