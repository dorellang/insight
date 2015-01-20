CityDashboard.GridLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);

  var grid = GridSelector( this.elements[0], this.elementsAttr, this.map, this );
  grid.addEvents();

};

CityDashboard.GridLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.GridLayer.prototype = {

  constructor: CityDashboard.GridLayer,

};
