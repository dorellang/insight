CityDashboard.ChartistVisualization = function ( props, chartConstructor ) {

  CityDashboard.Visualization.call( this, props );
  
  this.chartConstructor = chartConstructor;

  this.viz.addClass('linechart-viz').append( $('<div>').addClass(this.properties['class']) );

  var options = this.properties['options'] || {};

  var responsiveOptions = this.properties['responsiveOptions'] || {};

  this.chart = new this.chartConstructor( this.id+' > div' , this.data || {'series':[{data:[]}],'labels':[]}, options, responsiveOptions);
  
}

CityDashboard.ChartistVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );


// CityDashboard.ChartistVisualization.prototype.update = function ( data ) {

//   CityDashboard.Visualization.prototype.update.call( this, data );

//   console.log(data);

//   this.chart.update(data);
// };