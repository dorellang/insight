CityDashboard.Marker = function( marker_params, attr, map, assoc_layer ){

  this.marker_params = marker_params;
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
