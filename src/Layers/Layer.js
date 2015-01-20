CityDashboard.Layer = function( parameters, map ){

  this.wrappedLayer = undefined;

  if ( parameters.id === undefined ){
    throw Error( "All layers must have an ID." )
  }

  this.id = parameters.id;
  this.dataSource = parameters.dataSource;

  this.elements = parameters.data.length ? parameters.data : [ parameters.data ];
  this.elementsAttr = parameters.layer_attr || {'type': 'simple', 'action': 'update' } ;
  this.map = map;

};

CityDashboard.Layer.prototype = {

  constructor: CityDashboard.Layer,

  filter: function ( filterFun ) {},

  show: function () {}

};
