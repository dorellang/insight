CityDashboard.LineChartVisualization = function ( props ) {

  CityDashboard.Visualization.call( this, props );
  
}

CityDashboard.LineChartVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.LineChartVisualization.prototype.place = function ( container ) {
  
  var viz = CityDashboard.Visualization.prototype.place.call( this, container );//this.placeBasic(container);
  viz.addClass('linechart-viz').append( $('<div>').addClass('ct-chart ct-golden-section') );


  new Chartist.Line( this.id+' > div' , {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  });

  
};

