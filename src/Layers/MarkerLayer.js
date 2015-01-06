CityDashboard.MarkerLayer = function( parameters ){

  this.wrappedLayer = undefined;

  if ( parameters.id === undefined ){
    throw Error( "All layers must have an ID." )
  }

  this.id = parameters.id;
  this.dataSource = parameters.dataSource;

  this.elements = parameters.data.length ? parameters.data : [ parameters.data ];

  this.elementFact = new CityDashboard.ElementFactory( parameters.marker_attr );

};

CityDashboard.MarkerLayer.prototype = {

  constructor: CityDashboard.MarkerLayer,

  wrap: function ( wrappedLayer ){

    this.wrappedLayer = wrappedLayer;

    return this;
  },

  refreshZIndex: function ( z ) {

    this.zIndex = z || 1;
    this.wrappedLayer.refreshZIndex( this.zIndex + 1 );
  },

  place: function ( container ) {

    // creates a new div of class layer
    var divLayer = d3.select( container ).append( 'div' )
    .attr( 'class', 'layer' )
    .attr( 'id', this.id)
    .style( 'z-index', this.zIndex );

    var svg = divLayer.append( 'svg' );
    svg.style('width', $( container ).innerWidth() );

    for (var i = this.elements.length - 1; i >= 0; i--) {
      // asign a marker object to each data package
      this.elements[i].marker =  this.elementFact.create( svg );
    };

    this.wrappedLayer.place( container );
  },

  refreshElements: function ( pixelChangeMethod ) {
    var coord, element;

    for (var i = this.elements.length - 1; i >= 0; i--) {

      element = this.elements[i];
      
      coord = pixelChangeMethod( { 'lat': element.lat, 'lng': element.lng } );
      this.elementFact.moveElement ( element.marker, coord );
    };
  },

  update: function ( message ) {
    this.refreshElements( message.method );
  }

};
