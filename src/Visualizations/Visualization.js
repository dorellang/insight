CityDashboard.Visualization = function ( props ) {

var id, data_source, title, properties;
  
  this.id = props['id'];

  this.data_source = props['data-source'] || this.id;

  this.properties = props['properties'] || {};

  this.title = props['title'] || '';

  this.dataPreprocess = props['preprocess'] || function (a) {return a;};

  this.setData( props['data'] || {});

  //placing

  var title = $( '<h4>' ).append(this.title).addClass('viz-title');

  var _this = this;
  this.viz = $('<div>').setID( this.id ).addClass( 'visualization' )
  .append( title )
  .append( $('<hr>').addClass('viz-bar') );

  if (this.properties['closable'] === undefined || this.properties['closable']){
    this.viz.closable(function () {return _this.remove();});
  }
  if (this.properties['movable'] === undefined || this.properties['movable']){
    this.viz.movable();
  }

  this.viz.append( $( '<h6>' ).addClass('latlngView') );

  $( CityDashboard['infoWindowID'] ).append( this.viz );

  this.viz.css( this.properties );

  // checkbox handling

  this.checkbox_handler = props['checkbox-handler'] || function (a,d){return d;};

  if (props.checkbox)
    this.addCheckbox( props['checkbox'] );

};

CityDashboard.Visualization.prototype = {

  constructor: CityDashboard.Visualization,
  setData: function (data) {
    if ( !(data instanceof Array) )
      data =  jQuery.extend({}, data);

    if (!data || Object.keys(data).length === 0)
      this.data = {};
    else
      this.data = this.dataPreprocess(data);
  },
  getData: function () {
    return this.data;
  },
  refresh: function () {
    
    var latlngView = $( this.id ).find('.latlngView').empty();

    this.viz.find('.deflist').remove();

    var data = this.getData();

    var lat = data.lat, lng = data.lng;

    if ( lat && lng)
      latlngView.text('lat: ' + lat + ', lng: ' + lng).insertAfter( $( this.id ).find('hr') );

  },
  remove: function () {
    // signal infowindow to remove this viz.
    $(CityDashboard['infoWindowID']).trigger('remove-viz',{'id':this.id,'data-source':this.data_source});
  },
  createDefList: function ( value ) {
    var id = this.id;
    $.each(value, function (key, value) {

      if (key !== 'lat' && key !== 'lng' && key !=='value') {
        $( id ).find('.deflist').append( $('<dt>').text( key).addClass('deflist-key') )
        .append( $( '<dd>' ).text(value).addClass('deflist-value') );
      }

    });
  },
  addCheckbox: function ( keys ) {
    //keys: {name1:true,name2:false,name3:true,...}
    //each element of the object indicates the label of each checkbox. The number of keys indicates the number of checboxes.
    //handler :  function ([true, false, true, ...],data)
    //each element of the array corresponds to each checkbox state.
    
    var checkpanel = $( "<span>" ).addClass('checkbox-panel');

    var arr = [];

    for (var key in keys) {
      var checkbox = $('<input>').attr('type','checkbox');

      arr[arr.length] = checkbox[0].checked = keys[key];
      checkpanel.append(checkbox);

      var _this = this;

      checkbox.on('change',function () {

        var array = $(this).parent().children('input:checkbox').map(function(){
          return $(this).prop('checked');
        }).get();

        _this.getData = function () {
          return _this.checkbox_handler(array,jQuery.extend({}, _this.data));
        };

        _this.refresh();

      })

      checkbox.after( $('<label>').text(key) );
    }

    this.viz.append(checkpanel);

    _this.getData = function () {
      return _this.checkbox_handler(arr,jQuery.extend({}, _this.data));
    };
  }

};