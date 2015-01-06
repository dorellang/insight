CityDashboard.SummaryVisualization = function ( id, data_source, properties) {

  CityDashboard.Visualization.call(this, id, data_source, properties );
  
}

CityDashboard.SummaryVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.SummaryVisualization.prototype.parent = CityDashboard.Visualization.prototype;

CityDashboard.SummaryVisualization.prototype.place = function ( container ) {

  var viz = this.placeBasic(container);
  viz.addClass('summary-viz').css(this.properties);
  
};