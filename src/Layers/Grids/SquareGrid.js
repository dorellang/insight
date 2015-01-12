CityDashboard.SquareGrid = function( grid_params, attr, map ){

  google.maps.event.addDomListener(window, 'load',function () {

    var mapBounds = map.getBounds();

    var size = attr.size || 0.03

    //var x = parseFloat(grid_params.lat);
    //var y = parseFloat(grid_params.lng);

    var NE = mapBounds.getNorthEast();
    var SW = mapBounds.getSouthWest();

    var h = Math.ceil(Math.abs(SW.lat()-NE.lat())/size);
    var w = Math.ceil(Math.abs(SW.lng()-NE.lng())/size);

    for (var i = 0; i < h; i++) {
      for (var j = 0; j < w; j++) {

        var x = NE.lat() - size*i;
        var y = NE.lng() - size*j;

        var myLatlng = [
          new google.maps.LatLng(x, y),
          new google.maps.LatLng(x-size, y),
          new google.maps.LatLng(x-size, y-size),
          new google.maps.LatLng(x, y-size),
          new google.maps.LatLng(x, y)
        ];

        var square = new google.maps.Polygon({
          paths: myLatlng,
          strokeColor: attr.color || 'blue',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: attr.color || 'blue',
          fillOpacity: 0.2,
          clickable:true
        });

        google.maps.event.addListener(square, 'mouseover', function(event) {
            this.setOptions({fillOpacity: 0.4});
          });

        google.maps.event.addListener(square, 'mouseout', function(event) {
            this.setOptions({fillOpacity: 0.2});
          });

        square.setMap(map);

      }
    }

  });

};

CityDashboard.SquareGrid.prototype = {

  constructor: CityDashboard.SquareGrid,

};


