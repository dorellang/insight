CityDashboard.Visualization = function ( props ) {

var id, data_source, title, properties;
  
  this.id = props['id'];

  this.data_source = props['data-source'] || this.id;
  this.properties = props['properties'] || {};
  this.title = props['title'] || '';
  this.data = props['data'] || {};

};

CityDashboard.Visualization.prototype = {
  constructor: CityDashboard.Visualization
};

CityDashboard.Visualization.prototype.place = function ( container ) {

  var id = this.id;

  if ( id.charAt(0) === '#'){
    id = this.id.substring(1);
  }

  var title = $( '<h4>' ).append(this.title);
  var viz = $('<div>').attr('id',id).addClass('visualization').append(title).append('<hr>');
  container.append( viz );

  var me = this;

  $( this.id ).on('marker-pressed',function (event, arg){
    if (arg.id === me.data_source){
      return me.update( arg.value );
    }
    return;
  });

  return viz.css(this.properties);

};

// CityDashboard.Visualization.prototype.getData = function () {

//   if (this.id === this.data_source) {
//     return this.data;
//   }

//   else if ( this.data_source.charAt(0) === '#' ){
//     return 
//   }
//   //placeholder
//   return [];
// };

CityDashboard.Visualization.prototype.update = function ( data ) {
  this.data = data;
};