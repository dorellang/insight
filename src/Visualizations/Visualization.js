CityDashboard.Visualization = function ( props ) {

var id, data_source, title, properties;
  
  this.id = props['id'];

  this.data_source = props['data-source'] || this.id;

  this.properties = props['properties'] || {};

  this.title = props['title'] || '';

  this.data = props['data'] || {};

  //placing

  var title = $( '<h4>' ).append(this.title);

  this.viz = $('<div>').setID( this.id ).addClass( 'visualization' ).append( title ).append( '<hr>' );
  $( CityDashboard['infoWindowID'] ).append( this.viz );

  this.viz.css( this.properties );

};

CityDashboard.Visualization.prototype = {

  constructor: CityDashboard.Visualization,

};