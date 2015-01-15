var squares = [];

CityDashboard.SquareGrid = function( grid_params, attr, map ){

  l = attr.size || 0.03;

  //draws the grid
  var drawMeLikeOneOfYourFrenchGrids = function () {

    var n = squares.length;

    for(var i = 0; i < n; i++) {
      squares[i].setMap(null);
    }
    squares = [];

    var zoom = map.getZoom();

    var mapBounds = map.getBounds();

    var init = l*(Math.pow(2,12));
    var array = [];
    for(var i = 0; i < 22; i++) {
      array.push(init);
      init = init/2;
    }

    var size = array[zoom];

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
          strokeColor: attr.color || '#578b8b',
          strokeOpacity: 0.5,
          strokeWeight: 2,
          fillColor: attr.color || '#578b8b',
          fillOpacity: 0.0,
          geodesic: true
        });

        google.maps.event.addListener(square, 'mouseover', function(event) {
            this.setOptions({fillOpacity: 0.2});
          });

        google.maps.event.addListener(square, 'mouseout', function(event) {
            this.setOptions({fillOpacity: 0.0});
          });

        square.setMap(map);

        squares.push(square);

      }
    }

  }

  // wait for better performance
  var wait = function () {
      window.setTimeout(drawMeLikeOneOfYourFrenchGrids, 50);
  }

  google.maps.event.addListener(map, 'bounds_changed', wait );

};

CityDashboard.SquareGrid.prototype = {

  constructor: CityDashboard.SquareGrid,

};


