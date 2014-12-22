CityDashboard.Layout = function ( anchorID, orientation ) {
  
  this.anchor = anchorID
  this.orientation = orientation;
};

CityDashboard.Layout.prototype = {
  constructor: CityDashboard.Layout,

  place: function ( map, info ) {

    var container = d3.select(this.anchor).append('div')
    .attr('id','city-dashboard')
    .attr('class',this.orientation);
    
    if ( this.orientation !== 'layout-none' ) {
      
      container.append('div').attr('id','infoWindow')
      .style('background-color','blue');
    
      info.place( '#infoWindow' );
    }

    container.append("div").attr('id','mapWindow')
    .style('background-color','red');

    map.place( '#mapWindow' );
  }
};