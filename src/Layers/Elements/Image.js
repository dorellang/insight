CityDashboard.Image = function( parameters ){

  this.type = 'image';
  this.params = parameters;

  //create method MUST change these values.
  this.width = undefined;
  this.height = undefined;

};

CityDashboard.Image.prototype = {

  constructor: CityDashboard.Image,

  create: function ( svg ) {

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

  },

  moveElement: function ( element, coordenates ) {

    element
    .attr( 'x', coordenates.lat - ( this.width / 2 ) ) 
    .attr( 'y', coordenates.lng - ( this.height / 2 ) );

  }

};
