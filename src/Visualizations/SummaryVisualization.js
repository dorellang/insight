CityDashboard.SummaryVisualization = function ( props ) {

  CityDashboard.Visualization.call( this, props );
  
}

CityDashboard.SummaryVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.SummaryVisualization.prototype.place = function ( container ) {

  var viz = CityDashboard.Visualization.prototype.place.call( this, container );

  viz.addClass('summary-viz').append( $('<div>').append( $('<ul>') ) );

  this.refreshData();

  return viz;
  
};

CityDashboard.SummaryVisualization.prototype.update  = function ( data ){

  CityDashboard.Visualization.prototype.update.call( this, data );

  this.refreshData();

};

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

