CityDashboard.GeneralVisualization = function ( props ) {
  CityDashboard.Visualization.call( this, props );

  this.viz.addClass('general-viz');

  this.dom = props['dom'];

  this.refresh();
}

CityDashboard.GeneralVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );


CityDashboard.GeneralVisualization.prototype.refresh  = function () {

  CityDashboard.Visualization.prototype.refresh.call( this );

  this.viz.append(this.dom);

  // this.viz.append( $('<dl>').addClass('deflist') );
  // this.createDefList(this.data);

};


CityDashboard.GeneralVisualization.prototype.remove = function () {
  CityDashboard.Visualization.prototype.remove.call( this );
}