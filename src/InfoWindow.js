CityDashboard.InfoWindow = function ( vizPropList ) {

  this.visualizations = {};
  this.dataSourceTable = {};// better name?

  for (var i = 0; i < vizPropList.length; i++) {
    this.createVisualization( vizPropList[i] );
  };

  //placing

  var infoWindow = $( CityDashboard['infoWindowID'] );

  var _this = this;

  var handler = function ( event, arg ){
    infoWindow.off( 'marker-pressed' );

    var action = arg['attr']['action'] || 'update';

    var vizs = _this.dataSourceTable[ arg.id ];

    if ( action === 'update' || ( action === 'create' && arg.attr.id in _this.visualizations ) ) {
      for (var i = vizs.length - 1; i >= 0; i--) {
        vizs[i].setData( arg.value );
        vizs[i].refresh();
      };
    }
    else if ( action === 'create' ) {
      var config =
      {
        'visualization': arg['attr']['visualization'],
        'id': arg['attr']['id'],
        'data-source': arg['id'],
        'data': arg.value,
        'title': arg['attr']['title'],
        'properties': arg['attr']['properties']
      };
      _this.createVisualization( config );
    }      

    infoWindow.on( 'marker-pressed', handler );
  };

  infoWindow.on( 'marker-pressed',handler );

  infoWindow.on('resize',function ( e ) {

    for (var key in _this.visualizations) {
      _this.visualizations[key].refresh();
    };

  });

};

CityDashboard.InfoWindow.prototype = {

  constructor: CityDashboard.InfoWindow,

  createVisualization: function ( props ) {

    var type = props.visualization;

    var viz;

    if ( type === 'summary-viz' )

      viz = new CityDashboard.SummaryVisualization( props );

    else if ( type === 'linechart-viz' )

      viz = new CityDashboard.ChartistVisualization( props, Chartist.Line );

    else if ( type === 'barchart-viz' )

      viz = new CityDashboard.ChartistVisualization( props, Chartist.Bar );

    else if ( type === 'piechart-viz' )

      viz = new CityDashboard.ChartistVisualization( props, Chartist.Pie );
    
    this.visualizations[viz.id] = viz;
    this.dataSourceTable[viz.data_source] = this.dataSourceTable[viz.data_source] || [];
    this.dataSourceTable[viz.data_source].push(viz);

    return viz;
  },
};