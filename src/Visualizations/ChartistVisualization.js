CityDashboard.ChartistVisualization = function ( props, chartConstructor ) {

  CityDashboard.Visualization.call( this, props );
  
  this.chartConstructor = chartConstructor;

  this.viz.addClass('chartist-viz').append( $('<div>').addClass(this.properties['class']) );

  this.viz.append( $('<div>').addClass('def-list') );

  this.options = props['options'] || {};

  this.responsiveOptions = props['responsiveOptions'] || {};

  this.labels = props['labels'];

  this.refresh();
  
};

CityDashboard.ChartistVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.ChartistVisualization.prototype.refresh = function () {

  CityDashboard.Visualization.prototype.refresh.call( this );

  var data  = {
    'series': this.data.value || this.data,
    'labels': typeof this.labels === 'function' ? this.labels(this.data.value || this.data) : this.labels
  };

  if ( this.chart )
    this.chart.update( data );
  else
    this.chart = new this.chartConstructor( this.id+' > div' , data , this.options, this.responsiveOptions);

  $( this.id + '> div').last().append( $('<dl>').addClass('deflist') );

  if (! (this.data instanceof Array))

    this.createDefList(this.data);
};

CityDashboard.ChartistVisualization.prototype.remove = function () {
  CityDashboard.Visualization.prototype.remove.call( this );

  this.chart.detach();
};
