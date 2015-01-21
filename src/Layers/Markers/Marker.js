CityDashboard.Marker = function( layer_params, attr, map, assoc_layer ){

  this.layer_params = layer_params;
  this.attr =  attr;
  this.map = map;
  this.marker = undefined;
  this.layer = assoc_layer;

};

CityDashboard.Marker.prototype = {

  constructor: CityDashboard.Marker,

  addEvents: function () {},

  triggerInitialEvent: function() {}

};
