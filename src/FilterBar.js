CityDashboard.FilterBar = function ( filterNumber, filters ) {
  this.filters = filters || { none: function(data){return data;} };
  this.filterNumber = filterNumber;

  var bar = $('<div>').setID(CityDashboard['filterBarID'])
  .css({
    'z-index': 1,
    'position': 'fixed',
    'right': 0,
    'top': 0
  });

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

  $( CityDashboard['mainContainerID'] ).append(bar);

  bar.append( $('<input>').addClass('search').attr('type','search').on('change',geocode) );

  /* filter options */
  for (var j = 0; j < this.filterNumber; j++) {
    var select = $('<select>');
    for (var key in this.filters) {
      var option = $('<option>');

      option.val(this.filters[key]);
      option.text(key);
      select.append(option)
    };
    bar.append(select);
  };

  /*<input type="search">
  <select>
  <option value="filer1">Filter1</option>
  <option value="filer2">Filter2</option>
  <option value="filer3">Filter3</option>
  <option value="filer4">Filter4</option>
  <option value="filer5">Filter5</option>
  </select>
  */
};

CityDashboard.FilterBar.prototype = {
  constructor: CityDashboard.FilterBar,
  addFilter: function ( filters ) {
    
  }
}