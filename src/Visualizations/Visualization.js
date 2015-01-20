CityDashboard.Visualization = function ( props ) {

var id, data_source, title, properties;
  
  this.id = props['id'];

  this.data_source = props['data-source'] || this.id;

  this.properties = props['properties'] || {};

  this.title = props['title'] || '';

  this.data = props['data'] || {};

  this.dataPreprocess = props['preprocess'] || function (a) {return a;};

  //placing

  var title = $( '<h4>' ).append(this.title);

  // var close = $('<span>').addClass('close-button').text('X');

  // var _this = this;

  // close.on('click',function (event) {
  //    _this.remove();
  //    _this.viz.remove();
  // });

  var _this = this;
  this.viz = $('<div>').setID( this.id ).addClass( 'visualization' )
  .append( title )
  .append( '<hr>' ).movable().closable(function () {return _this.remove();});

  this.viz.append( $( '<h6>' ) );

  $( CityDashboard['infoWindowID'] ).append( this.viz );

  this.viz.css( this.properties );

};

CityDashboard.Visualization.prototype = {

  constructor: CityDashboard.Visualization,
  setData: function (data) {
    if (data)
      this.data = this.dataPreprocess(data);
  },
  refresh: function () {
    
    var h6 = $( this.id ).find('h6').empty();

  $( this.id ).find('div').last().empty();    

    var lat = this.data.lat, lng = this.data.lng;

    if ( lat && lng)
      h6.text('lat: ' + lat + ', lng: ' + lng).insertAfter( $( this.id ).find('hr') );

  },
  remove: function () {
    // signal infowindow to remove this viz.
    $(CityDashboard['infoWindowID']).trigger('remove-viz',{'id':this.id,'data-source':this.data_source});
  }

};