var CityDashboard = {
  REVISION: '0',
  mainContainerID:'#city-dashboard',
  mapWindowID: '#mapWindow',
  infoWindowID: '#infoWindow',
  getData: function ( url, callback, props ) {
    if ( url.charAt(0) !== '#' ){
      $.getJSON(url,function( json ){
        props.data = json;
        return callback( props );
      });
    }
    else {
      return callback( props );
    }
  }
};