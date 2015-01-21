CityDashboard.FilterBar = function ( filterNumber ) {
  this.filters = { none: function (data) {return true;} };
  this.filterNumber = filterNumber;

  this.bar = $('<div>').setID(CityDashboard['filterBarID']).addClass('filterBar');

  /* Google maps geocoder and search bar*/

  var geocoder = new google.maps.Geocoder();

  var geocode = function () {
    var map = $(CityDashboard['mainContainerID'])[0].data;
    var address = $( CityDashboard['filterBarID'] + ' > .search' ).val();
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) 
        {
            map.setCenter(results[0].geometry.location);
            // map.setZoom(12);
            map.fitBounds(results[0].geometry.bounds);
        } 
        else 
        {
            $( CityDashboard['filterBarID'] + ' > .search' ).val('not found: '+address);
        }
    });
  }

  $( CityDashboard['mainContainerID'] ).append(this.bar);

  this.bar.append( $('<input>').addClass('search').attr('type','search').on('change',geocode) );

  var _this = this;
  this.select = [];

  for (var i = 0; i < this.filterNumber; i++) {
    this.select[i] = $( '<select>' ).on('change',function(){

      $( CityDashboard['mainContainerID'] ).trigger('filterChanged',function () {
        return _this.composeFilters();
      });

    });
    this.bar.append(this.select[i]);
  }
  this.placeFilters();

};

CityDashboard.FilterBar.prototype = {
  constructor: CityDashboard.FilterBar,
  addFilter: function ( filters ) {
    for( var key in filters){
      this.filters[key] = filters[key];
    }
    for (var i = this.select.length - 1; i >= 0; i--) {
      this.select[i].empty();
    };
    this.placeFilters();
  },
  placeFilters: function () {
    var _this = this;
    for (var j = 0; j < this.filterNumber; j++) {
      for (var key in this.filters) {
        var option = $('<option>');

        option.val(function(){return _this.filters[key];});
        option.text(key);
        this.select[j].append(option)
      };
    };
  },
  composeFilters: function () {
    var l = [];
    for (var i = this.select.length - 1; i >= 0; i--) {
      l[l.length] = Function('return ' + this.select[i].val())();
    };
    return function (data) {
      for (var i = l.length - 1; i >= 0; i--) {
        if ( !l[i](data) )
          return false;
      };
      return true;
    }
  }
}