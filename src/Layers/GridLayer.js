CityDashboard.GridLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);

  this.grid = GridSelector( this.elements[0], this.elementsAttr, this.map, this );
  this.grid.addEvents();

};

CityDashboard.GridLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.GridLayer.prototype = {

  constructor: CityDashboard.GridLayer,

  clear: function() {
    for (var j = 0; j < this.grid.tiles.length; j++) {
      this.grid.tiles[i].setMap(null);
    };
  }

};
