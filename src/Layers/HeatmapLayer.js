CityDashboard.HeatmapLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);

  new CityDashboard.Heatmap( this.elements[0], this.elementsAttr, this.map );

};

CityDashboard.HeatmapLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.HeatmapLayer.prototype = {

  constructor: CityDashboard.HeatmapLayer,

};
