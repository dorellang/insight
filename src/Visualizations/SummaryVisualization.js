CityDashboard.SummaryVisualization = function ( props ) {

  CityDashboard.Visualization.call( this, props );

  this.viz.addClass('summary-viz').append( $('<div>') );

  this.refreshData();
  
}

CityDashboard.SummaryVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );


CityDashboard.SummaryVisualization.prototype.refreshData  = function () {

  var div = $( this.id ).find('div').empty();

  var lat = this.data.lat, lng = this.data.lng;

  if ( lat && lng)
    div.append( '<h6>lat: ' + lat + ', lng: ' + lng + '</h6>');

  div.append( $('<dl>') );

  var id = this.id;
  
  var value = this.data.value || this.data;

  $.each(value, function (key, value) {

    $( id ).find('dl').append( $('<dt>').text( key) ).append( $( '<dd>' ).text(value) );

  });

};

