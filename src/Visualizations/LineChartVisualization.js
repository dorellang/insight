CityDashboard.LineChartVisualization = function ( props ) {

  CityDashboard.Visualization.call( this, props );
  
}

CityDashboard.LineChartVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.LineChartVisualization.prototype.place = function ( container ) {

  var chart = $('<div>');

  // var data = this.getData();
  
  // for (var i = 0; i < data.length; i++) {

  //   $( this.id ).find('ul').append( $('<li>').append(data[i]) );
  
  // };

  new Chartist.Line(chart, {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  });

  var viz = CityDashboard.Visualization.prototype.place.call( this, container );//this.placeBasic(container);
  viz.addClass('linechart-viz').append( chart );
  
};

