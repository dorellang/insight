CityDashboard.ChartistVisualization = function ( props, chartConstructor ) {

  CityDashboard.Visualization.call( this, props );
  
  this.chartConstructor = chartConstructor;

  this.viz.addClass('chartist-viz').append( $('<div>').addClass(this.properties['class']) );

  this.options = props['options'] || {};

  this.responsiveOptions = props['responsiveOptions'] || {};

  this.labels = props['labels'];

  //checkbox

  this.checkbox_handler = props['checkbox-handler'] || function (array,data) {
        var out = [];
        for (var i = 0; i < array.length; i++) {
          if (array[i]){
            out[out.length] = data[i];
          }
        };
        return out;
      };

  this.refresh();
  
};

CityDashboard.ChartistVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.ChartistVisualization.prototype.refresh = function () {

  CityDashboard.Visualization.prototype.refresh.call( this );

  var d = this.getData();

  this.viz.append( $('<dl>').addClass('deflist') );

  if (! (d instanceof Array))

    this.createDefList(d);

  d = d.value || d;
  console.log(d);
  var data  = {
    'series': d,
    'labels': typeof this.labels === 'function' ? this.labels(d.value || d) : this.labels
  };

  if ( this.chart && this.chart.optionsProvider){
    this.chart.update( data );}
  else
    this.chart = new this.chartConstructor( this.id+' > div' , data , this.options, this.responsiveOptions);

};

CityDashboard.ChartistVisualization.prototype.remove = function () {
  CityDashboard.Visualization.prototype.remove.call( this );

  this.chart.detach();
};
