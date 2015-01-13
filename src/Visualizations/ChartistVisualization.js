CityDashboard.ChartistVisualization = function ( props, chartConstructor ) {

  CityDashboard.Visualization.call( this, props );
  
  this.chartConstructor = chartConstructor;

  this.viz.addClass('chartist-viz').append( $('<div>').addClass(this.properties['class']) );

  this.viz.append( $('<div>').addClass('def-list') );

  this.options = props['options'] || {};

  this.responsiveOptions = props['responsiveOptions'] || {};
  // console.log(props);
  // console.log(options);
  // console.log(responsiveOptions);

  var data  = this.data.value || this.data || {'series':[{data:[]}],'labels':[]};

  this.refresh();

  var _this = this;
  
};

CityDashboard.ChartistVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.ChartistVisualization.prototype.refresh = function () {

  CityDashboard.Visualization.prototype.refresh.call( this );

  var data  = this.data.value || this.data || {'series':[{data:[]}],'labels':[]};

  if ( this.chart )
    this.chart.update( data );
  else
    this.chart = new this.chartConstructor( this.id+' > div' , data , this.options, this.responsiveOptions);

  var dl = $('<dl>');

  $( this.id + '> div').last().append( dl );//.find('div').filter(':eq(2)')

  $.each(data, function (key, value) {

    if( key !== 'labels' && key !== 'series')
      dl.append( $('<dt>').text( key) ).append( $( '<dd>' ).text(value) );

  });

};

CityDashboard.ChartistVisualization.prototype.remove = function () {
  CityDashboard.Visualization.prototype.remove.call( this );

  this.chart.detach();
};
