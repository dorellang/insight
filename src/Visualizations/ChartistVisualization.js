CityDashboard.ChartistVisualization = function ( props, chartConstructor ) {

  CityDashboard.Visualization.call( this, props );
  this.chartConstructor = chartConstructor;
  
}

CityDashboard.ChartistVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.ChartistVisualization.prototype.place = function ( container ) {
  
  var viz = CityDashboard.Visualization.prototype.place.call( this, container );//this.placeBasic(container);
  viz.addClass('linechart-viz').append( $('<div>').addClass(this.properties['class']) );


  var options = this.properties['options'] || {};
  var responsiveOptions = this.properties['responsiveOptions'] || {};

  this.chart = new this.chartConstructor( this.id+' > div' , this.data, options, responsiveOptions);
};

CityDashboard.ChartistVisualization.prototype.update = function () {
  this.chart.update();
};