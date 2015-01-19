CityDashboard.DelaunayLayer = function( parameters , map ){

  this.wrappedLayer = undefined;

  if ( parameters.id === undefined ){
    throw Error( "All layers must have an ID." )
  }

  this.id = parameters.id;
  this.dataSource = parameters.dataSource;

  this.elements = parameters.data.length ? parameters.data : [ parameters.data ];
  this.elementsAttr = parameters.delaunay_attr;
  this.map = map;

  console.log

  new CityDashboard.DTesselation( this.elements[0], this.elementsAttr, this.map );

};

CityDashboard.DelaunayLayer.prototype = {

  constructor: CityDashboard.DelaunayLayer,

};
