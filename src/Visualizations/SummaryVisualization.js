CityDashboard.SummaryVisualization = function ( props ) {

  CityDashboard.Visualization.call( this, props );
  
}

CityDashboard.SummaryVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.SummaryVisualization.prototype.place = function ( container ) {

  var viz = CityDashboard.Visualization.prototype.place.call( this, container );//this.placeBasic(container);
  viz.addClass('summary-viz').append( $('<div>').append( $('<ul>') ) );

  this.refreshData();
  
};

CityDashboard.SummaryVisualization.prototype.update  = function ( data ){
  CityDashboard.Visualization.prototype.update.call( this, data );

  this.refreshData();
  // $( this.id + ' > div' ).text( 'sfdbasdkbakjdf' );
};

CityDashboard.SummaryVisualization.prototype.refreshData  = function () {
  var div = $( this.id ).find('div').empty();

  var lat = this.data.lat || '?', lng = this.data.lng || '?';

  div.append( '<h6>lat: ' + lat + ', lng: ' + lng + '</h6>');

  div.append( $('<ul>') );

  var id = this.id;
  // var data = this.data;
  
  var value = this.data.value || this.data;

  $.each(value, function (key, value) {
    $( id ).find('ul').append( $('<li>').append( key + ' - ' + value ) );
  });

  // for (var i = 0; i < data.length; i++) {

  //   $( this.id ).find('ul').append( $('<li>').append(data[i]) );
  
  // };

};

