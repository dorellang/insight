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

    var me = this;

    var fun = function(e, arg){

      $('#infoWindow').off('marker-pressed',fun);

      var act = arg['attr']['action'] || 'update';

      if ( act === 'update' )

        $( '.visualization' ).trigger('marker-pressed',arg);

      else {

        var props = arg['attr']['config'];

        props['data-source'] = arg['id'];

        props['data'] = arg.value.value;

        me.addVisualization( props ).place( cont );

      }

      $('#infoWindow').on('marker-pressed',fun);

    };

    $('#infoWindow').on('marker-pressed',fun);

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

    return viz;
  }
};