CityDashboard.SummaryVisualization = function ( props ) {

  CityDashboard.Visualization.call( this, props );

  this.viz.addClass('summary-viz').append( $('<div>').addClass('def-list') );

  this.refresh();
  
}

CityDashboard.SummaryVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );


CityDashboard.SummaryVisualization.prototype.refresh  = function () {

  CityDashboard.Visualization.prototype.refresh.call( this );

  $( this.id +' > div').append( $('<dl>').addClass('deflist') );

  this.createDefList(this.data);

};

