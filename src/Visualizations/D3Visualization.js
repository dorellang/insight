CityDashboard.D3Visualization = function ( props ) {
  CityDashboard.Visualization.call( this, props );

  var el = $( this.id );

  var svg = d3.select( this.id ).append('svg');
  
  

  props.create( svg, this.data , el.width(), el.height() );

};

CityDashboard.D3Visualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.D3Visualization.prototype.refresh = function () {
  //CityDashboard.Visualization.prototype.refresh.call( this );
};

CityDashboard.D3Visualization.prototype.remove = function () {
  //CityDashboard.Visualization.prototype.remove.call( this );
};