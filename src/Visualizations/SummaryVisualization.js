CityDashboard.SummaryVisualization = function ( props ) {

  CityDashboard.Visualization.call( this, props );

  this.viz.addClass('summary-viz').append( $('<div>').addClass('def-list') );

  this.refresh();
  
}

CityDashboard.SummaryVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );


CityDashboard.SummaryVisualization.prototype.refresh  = function () {

  CityDashboard.Visualization.prototype.refresh.call( this );

  var id = this.id;

  $( id +' > div').append( $('<dl>') );
  
  var value =  this.data;

  $.each(value, function (key, value) {

    if (key !== 'lat' && key !== 'lng') 
      $( id ).find('dl').append( $('<dt>').text( key) ).append( $( '<dd>' ).text(value) );

  });

};

