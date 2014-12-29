CityDashboard.ElementFactory = function( parameters ){

  this.type = parameters.type || 'circle';
  this.params = parameters;

  //create methods MUST change this values.
  this.width = undefined;
  this.height = undefined;

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
    //figure.style( 'z-index', 'inherit' );

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
      .attr( 'x', coordenates.lat - ( this.width / 2 ) ) 
      .attr( 'y', coordenates.lng - ( this.height / 2 ) );
    }

    else if ( this.type === 'image' ) {
      element
      .attr( 'x', coordenates.lat - ( this.width / 2 ) ) 
      .attr( 'y', coordenates.lng - ( this.height / 2 ) );
    }
  },

  createRect: function ( svg ){

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

  createCircle: function ( svg ) {

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

  createImage: function ( svg ) {

    var x, y, width, height, src;

    x = this.params.x || 0;
    y = this.params.y || 0;
    src = this.params.src || 'not_found.svg';

    this.width = this.params.width || 50;
    this.height = this.params.height || 50;

    return svg.append( 'svg:image' )
    .attr( 'x', x )
    .attr( 'y', y )
    .attr( 'width', this.width )
    .attr( 'height', this.height )
    .attr( 'xlink:href', src );

  }
};