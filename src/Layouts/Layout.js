CityDashboard.Layout = function ( anchorID, orientation ) {
  
  this.anchor = anchorID
  this.orientation = orientation;

};

CityDashboard.Layout.prototype = {

  constructor: CityDashboard.Layout,

  place: function ( map, info, layer ) {

    var container = d3.select( this.anchor ).append( 'div' )
    .attr( 'id', 'city-dashboard' )
    .attr( 'class', this.orientation );
    
    if ( this.orientation !== 'layout-none' ) {
      
      container.append( 'div' )
      .attr( 'id', 'infoWindow' );
    
      info.place( '#infoWindow' );
    }

    var mapWindow = container.append( 'div' )
    .attr( 'id', 'mapWindow' );

    mapWindow.append('div')
    .attr( 'id', 'mapWindow' );

    map.place( '#mapWindow' );

    layer.place( '#mapWindow' );
  }
  
};