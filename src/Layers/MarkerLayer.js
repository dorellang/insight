CityDashboard.MarkerLayer = function( parameters ){
  this.wrappedLayer = undefined;
  this.zIndex = 1;

  if ( parameters.id === undefined ){
    throw Error( "All layers must have an ID." )
  }
  this.id = parameters.id;
  this.dataSource = parameters.dataSource;

  this.elements = parameters.data.length == 0 ? [parameters.data] : parameters.data;

  this.elementFact = new CityDashboard.ElementFactory( parameters.marker_attr );
};

CityDashboard.MarkerLayer.prototype = {
  constructor: CityDashboard.MarkerLayer,

  wrap: function ( wrappedLayer ){

    this.wrappedLayer = wrappedLayer;

    return this;
  },

  refreshZIndex: function (zIndex) {

    this.zIndex = zIndex || 1;
    this.wrappedLayer.refreshZIndex( zIndex + 1 );
  },

  place: function ( container ) {

    var divLayer = d3.select( container ).append( 'div' )
    .attr( 'class', 'layer' )
    .style( 'z-index', this.zIndex );

    var svg = divLayer.append( 'svg' );
    svg.style('width', $( '#map-container' ).innerWidth() );

    for (var i = this.elements.length - 1; i >= 0; i--) {
      // asign a marker object to each data package
      this.elements[i].marker =  this.elementFact.create( svg );
    };

    this.wrappedLayer.place( container );
  },

  placeElements: function ( pixelChangeMethod ) {
    var coord, element;

    for (var i = this.elements.length - 1; i >= 0; i--) {

      element = this.elements[i];

      coord = pixelChangeMethod( { 'lat': element.lat, 'lng': element.lng } );
      this.elementFact.moveElement ( element.marker, coord );
    };
  },

  update: function ( message ) {
    //change/update the position of elements
    // if ( message.event == 'idle_changed' ) {
      this.placeElements( message.method );
    // }
  }

};