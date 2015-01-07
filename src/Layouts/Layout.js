CityDashboard.Layout = function ( anchorID, orientation ) {
  
  this.anchor = anchorID
  this.orientation = orientation;

};

CityDashboard.Layout.prototype = {

  constructor: CityDashboard.Layout,

  place: function ( map, info, layer ) {

    // var container = d3.select( this.anchor ).append( 'div' )
    // .attr( 'id', 'city-dashboard' )
    // .attr( 'class', this.orientation );

    var container = $( '<div>' )
    .attr('id','city-dashboard')
    .addClass( this.orientation );
    
    $( this.anchor ).append( container );
    
    if ( this.orientation !== 'layout-none' ) {
      
      container.append( $('<div>')
        .attr( 'id', 'infoWindow' ));
    
      info.place( '#infoWindow' );
    }

    var mapWindow = $('<div>')
    .attr( 'id', 'mapWindow' );

    container.append( mapWindow );

    map.place( '#mapWindow' );

    layer.place( '#mapWindow' );
  }
  
};