CityDashboard.HexagonalGrid = function( layer_params, attr, map, assoc_layer ){

  CityDashboard.Grid.call(this, layer_params, attr, map, assoc_layer);

};

CityDashboard.HexagonalGrid.prototype = Object.create(CityDashboard.Grid.prototype);

CityDashboard.HexagonalGrid.prototype = {

  constructor: CityDashboard.HexagonalGrid,

  build: function(mapBounds) {

    //console.log(this.layer_params)

    l = this.attr.size || 0.02;

    var n = this.tiles.length;

    for(var i = 0; i < n; i++) {
      this.tiles[i].setMap(null);
    }
    this.tiles = [];

    var zoom = this.map.getZoom();

    var init = l*(Math.pow(2,12));
    var array = [];
    for(var i = 0; i < 22; i++) {
      array.push(init);
      init = init/2;
    }
    
    var colorArray = [
    'transparent',
    'blue',     // Blue.
    'cyan',     // Cyan.
    'green',     // Green.
    'yellow',     // Yellow.
    'red'      // Red.
    ]

    var size = array[zoom];

    var NE = mapBounds.getNorthEast();
    var SW = mapBounds.getSouthWest();

    var h = Math.ceil((3/4)*Math.abs(SW.lat()-NE.lat())/size);
    var w = Math.ceil((5/8)*Math.abs(SW.lng()-NE.lng())/size);

    var v = size*Math.sin(Math.PI/6);
    var v2 = size*Math.cos(Math.PI/6);

    for (var i = 0; i < h; i++) {
      for (var j = 0; j < w; j++) {

        var x = NE.lat() - (size+v)*i;
        var y;
        if (i % 2 == 0)
          y = NE.lng() - 2*v2*j + v2;
        else
          y = NE.lng() - 2*v2*j;

        poly = [{x: x, y: y},{x: x-size, y: y},{x: x-size-v, y: y-v2},
                  {x: x-size, y: y-2*v2},{x: x, y: y-2*v2},{x: x+v, y: y-v2},{x: x, y: y}];

        var myLatlng = [
          new google.maps.LatLng(poly[0].x, poly[0].y),
          new google.maps.LatLng(poly[1].x, poly[1].y),
          new google.maps.LatLng(poly[2].x, poly[2].y),
          new google.maps.LatLng(poly[3].x, poly[3].y),
          new google.maps.LatLng(poly[4].x, poly[4].y),
          new google.maps.LatLng(poly[5].x, poly[5].y),
          new google.maps.LatLng(poly[6].x, poly[6].y)
        ];

        //data is in hexagon?
        pointsInScreen = [];
        weightsInScreen = [];
        for(var p = 0; p < this.layer_params.points.length; p++) {
          if (mapBounds.contains(new google.maps.LatLng(this.layer_params.points[p].lat,
                                                        this.layer_params.points[p].lng))) {
            pointsInScreen.push(this.layer_params.points[p]);
            weightsInScreen.push(this.layer_params.weights[p]);
          }
        }
        var fill = 0.0;
        var weight = 1/weightsInScreen.length;
        var sum = 0;
        for(var p = 0; p < weightsInScreen.length; p++) {
          sum = sum + weightsInScreen[p];
        }
        for(var p = 0; p < weightsInScreen.length; p++) {
          weightsInScreen[p] = weightsInScreen[p]/sum;
        }
        for(var p = 0; p < pointsInScreen.length; p++) {
          if (isPointInPoly(poly,{x: pointsInScreen[p].lat, y: pointsInScreen[p].lng}))
            fill = fill+weightsInScreen[p];
        }

        var hexagon = new google.maps.Polygon({
          paths: myLatlng,
          strokeColor: this.attr.color || '#000000',
          strokeOpacity: 0.5,
          strokeWeight: 2,
          fillColor: colorArray[Math.floor(fill*colorArray.length+0.5)] || '#000000',
          fillOpacity: 0.2,
          geodesic: true
        });

        hexagon.setMap(this.map);

        this.tiles.push(hexagon);

      }
    }

  },

  addEvents: function() {

    var myself = this;

    google.maps.event.addListener(this.map, 'bounds_changed', function() {
        window.setTimeout(myself.build(this.getBounds()), 50); 
      });

  }

};

function isPointInPoly(poly, pt){
    for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
        && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
        && (c = !c);
    return c;
}


