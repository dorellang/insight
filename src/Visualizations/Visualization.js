CityDashboard.Visualization = function ( props ) {

var id, data_source, title, properties;
  
  this.id = props['id'];

  if ( this.id.charAt(0) !== '#')

    this.id = '#' + this.id;

  this.data_source = props['data-source'] || this.id;

  this.properties = props['properties'] || {};

  this.title = props['title'] || '';

  this.data = props['data'] || {};

};

CityDashboard.Visualization.prototype = {

  constructor: CityDashboard.Visualization,

  place: function ( container ) {

    var id = this.id.substring(1);

    var title = $( '<h4>' ).append(this.title);

    var viz = $('<div>').attr('id',id).addClass('visualization').append(title).append('<hr>');

    container.append( viz );

    var me = this;

    $( this.id ).on('marker-pressed',function (event, arg){

      if (arg.id === me.data_source)

        return me.update( arg.value );

      return;

    });

    return viz.css(this.properties);

  },

  update: function ( data ) {

    this.data = data || this.data;

  }
  
};