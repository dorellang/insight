CityDashboard.SummaryVisualization = function ( props ) {

  CityDashboard.Visualization.call( this, props );
  
}

CityDashboard.SummaryVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.SummaryVisualization.prototype.place = function ( container ) {

  var viz = CityDashboard.Visualization.prototype.place.call( this, container );//this.placeBasic(container);
  viz.addClass('summary-viz').append( $('<ul>') );

  var data = this.getData();
  
  for (var i = 0; i < data.length; i++) {

    $( this.id ).find('ul').append( $('<li>').append(data[i]) );
  
  };
  
};

