CityDashboard.DelaunayLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);

  new CityDashboard.DTesselation( this.elements[0], this.elementsAttr, this.map );

};

CityDashboard.DelaunayLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.DelaunayLayer.prototype = {

  constructor: CityDashboard.DelaunayLayer,

};
