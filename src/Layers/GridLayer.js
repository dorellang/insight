CityDashboard.GridLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);
  console.log(this.elementsAttr)

  new CityDashboard.Grid( this.elements[0], this.elementsAttr, this.map );

};

CityDashboard.GridLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.GridLayer.prototype = {

  constructor: CityDashboard.GridLayer,

};
