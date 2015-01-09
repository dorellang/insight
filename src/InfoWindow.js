CityDashboard.InfoWindow = function ( vizPropList ) {

  this.visualizations = [];

  for (var i = vizPropList.length - 1; i >= 0; i--)

    this.addVisualization( vizPropList[i] );

};

CityDashboard.InfoWindow.prototype = {

  constructor: CityDashboard.InfoWindow,

  place: function ( containerID ) {

    var cont = $( containerID ).resizable( 'e' );
    
    for (var i = this.visualizations.length - 1; i >= 0; i--) 

      this.visualizations[i].place( cont );

    var viz = this.visualizations;

    $('#infoWindow').on('resize',function () {

      for (var i = viz.length - 1; i >= 0; i--)

        viz[i].update();

    });

  },

  addVisualization: function ( props ) {

    var type = props.visualization;

    var viz;

    if ( type === 'summary-viz' )

      viz = new CityDashboard.SummaryVisualization(props);

    else if ( type === 'linechart-viz' )

      viz = new CityDashboard.ChartistVisualization(props,Chartist.Line);

    else if ( type === 'barchart-viz' )

      viz = new CityDashboard.ChartistVisualization(props,Chartist.Bar);

    else if ( type === 'piechart-viz' )

      viz = new CityDashboard.ChartistVisualization(props,Chartist.Pie);
    
    this.visualizations[this.visualizations.length] = viz;
  }
};