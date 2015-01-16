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

    // var action = arg['attr']['action'] || 'update';

    var vizs = _this.dataSourceTable[ arg.id ] || [];

    if ( vizs.length !== 0 && ( !arg.attr.id || arg.attr.id in _this.visualizations ) ) {
      for (var i = vizs.length - 1; i >= 0; i--) {
        vizs[i].setData( arg.value );
        vizs[i].refresh();
      };
    }
    else {

      var config =
      {
        'visualization': arg['attr']['visualization'],
        'id': arg['attr']['id'],
        'data-source': arg['id'],
        'data': arg.value,
        'preprocess': arg['attr']['preprocess'],
        'title': arg['attr']['title'],
        'properties': arg['attr']['properties'],
        'viz': arg['attr']['viz'] || null,
        'labels': arg['attr']['labels']

      };
      
      _this.createVisualization( config );
    }      

    infoWindow.on( 'marker-pressed', handler );
  };

  infoWindow.on( 'marker-pressed', handler );

  infoWindow.on( 'resize', function ( e ) {

    for (var key in _this.visualizations) {
      _this.visualizations[key].refresh();
    };

  });

  infoWindow.on( 'remove-viz', function ( e, arg ) {
    delete _this.visualizations[arg.id];
    _this.dataSourceTable[arg['data-source']].splice(arg.id,1);
  });

};

CityDashboard.InfoWindow.prototype = {

  constructor: CityDashboard.InfoWindow,

  createVisualization: function ( props ) {

    var _this = this;
    var type = props.visualization;

    var callback = function(pr) {

      var viz;

      if (!type)
        return;

      else if ( type === 'summary-viz' )

        viz = new CityDashboard.SummaryVisualization( pr );

      else if ( type === 'linechart-viz' )

        viz = new CityDashboard.ChartistVisualization( pr, Chartist.Line );

      else if ( type === 'barchart-viz' )

        viz = new CityDashboard.ChartistVisualization( pr, Chartist.Bar );

      else if ( type === 'piechart-viz' )

        viz = new CityDashboard.ChartistVisualization( pr, Chartist.Pie );

      else if ( type === 'd3-viz' )

        viz = new CityDashboard.D3Visualization( pr );

      _this.visualizations[viz.id] = viz;
      _this.dataSourceTable[viz.data_source] = _this.dataSourceTable[viz.data_source] || [];
      _this.dataSourceTable[viz.data_source].push(viz);

      return viz;
    }

    return CityDashboard.getData(props['data-source'],callback,props);
  },
};