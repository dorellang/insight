CityDashboard.HeatmapLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);

  var heatmap = new HeatmapSelector( this.elements[0], this.elementsAttr, this.map, this );

};

CityDashboard.HeatmapLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.HeatmapLayer.prototype = {

  constructor: CityDashboard.HeatmapLayer,

};
