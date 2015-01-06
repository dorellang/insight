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

    var id, data_source, properties;
    
    id = props['id'];
    data_source = props['data-source'];
    properties = props['properties'];

    if ( props.visualization === 'summary-viz' ){
      this.visualizations[this.visualizations.length] = new CityDashboard.SummaryVisualization(id, data_source, properties);
    }
  }
};