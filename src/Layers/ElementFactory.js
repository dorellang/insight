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

    else if ( this.type === 'circle' )
      figure = this.createCircle( svg );

    else if ( this.type === 'image' )
      figure = this.createImage( svg );

    //the z-index of figures must be the same of its container layer
    figure.style( 'z-index', 'inherit' );

    return figure;
  },

  moveElement: function ( element, coordenates ) {
    if ( this.type === 'circle' ) {
      element
      .attr( 'cx', coordenates.lat )
      .attr( 'cy', coordenates.lng )
    }

    else if ( this.type === 'rect' ) {
      element
      .attr( 'x', coordenates.lat - ( this.params.width / 2 ) ) //TODO: If the width or height is not given, what happens?
      .attr( 'y', coordenates.lng - ( this.params.height / 2 ) );
    }

    else if ( this.type === 'image' ) {
      element
      .attr( 'x', coordenates.lat )
      .attr( 'y', coordenates.lng );
    }
  },

  createRect: function ( svg ){
    var x, y, width, height, rx, ry, fill;

    x = this.params.x || 0;
    y = this.params.y || 0;
    width = this.params.width || 50;
    height = this.params.height || 50;
    rx = this.params.rx || 0;
    ry = this.params.ry || 0;
    fill = this.params.fill || 'black';

    return svg.append( 'rect' )
    .attr( 'x', x )
    .attr( 'y', y )
    .attr( 'width', width )
    .attr( 'height', height )
    .attr( 'rx', rx )
    .attr( 'ry', ry )
    .attr( 'fill', fill );
  },

  createCircle: function ( svg ) {
    var cx, cy, r, fill;

    cx = this.params.cy || 0;
    cy = this.params.cx || 0;
    r = this.params.r || 20;
    fill = this.params.fill || 'black';

    return svg.append( 'circle' )
    .attr( 'cx', cx )
    .attr( 'cy', cy )
    .attr( 'r', r )
    .attr( 'fill', fill );
  },

  createImage: function ( svg ) {
    var x, y, width, height, src;

    x = this.params.x || 0;
    y = this.params.y || 0;
    width = this.params.width || 50;
    height = this.params.height || 50;
    src = this.params.src || 'not_found.svg';

    return svg.append( 'svg:image' )
    .attr('x',x)
    .attr('y',y)
    .attr('width',width)
    .attr('height',height)
    .attr('xlink:href',src);
  }
};