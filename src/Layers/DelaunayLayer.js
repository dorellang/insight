CityDashboard.DelaunayLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);

  var DT = DTesselationSelector( this.elements[0], this.elementsAttr, this.map, this );
  DT.addEvents();

};

CityDashboard.DelaunayLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.DelaunayLayer.prototype = {

  constructor: CityDashboard.DelaunayLayer,

};
