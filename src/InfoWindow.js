CityDashboard.InfoWindow = function ( vizPropList ) {
  this.visualizations = [];

  for (var i = vizPropList.length - 1; i >= 0; i--) {
    this.addVisualization( vizPropList[i] );
  };
};

CityDashboard.InfoWindow.prototype = {
  constructor: CityDashboard.InfoWindow,

  place: function ( containerID ) {

    var cont = $( containerID )
    
    for (var i = this.visualizations.length - 1; i >= 0; i--) {
      this.visualizations[i].place( cont );
    };

  },

  addVisualization: function ( props ) {
    var type = props.visualization;
    var viz;
    if ( type === 'summary-viz' ){
      viz = new CityDashboard.SummaryVisualization(props);
    }
    else if ( type === 'linechart-viz' ) {
      viz = new CityDashboard.LineChartVisualization(props);
    }
    this.visualizations[this.visualizations.length] = viz;
  }
};