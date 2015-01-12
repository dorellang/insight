CityDashboard.MarkerLayer = function( parameters , map ){

  this.wrappedLayer = undefined;

  if ( parameters.id === undefined ){
    throw Error( "All layers must have an ID." )
  }

  this.id = parameters.id;
  this.dataSource = parameters.dataSource;

  this.elements = parameters.data.length ? parameters.data : [ parameters.data ];
  this.elementsAttr = parameters.marker_attr || {'type': 'simple', 'action': 'update' } ;
  this.map = map;

  for (var i = this.elements.length - 1; i >= 0; i--) {
    // asign a marker object to each data package
    new CityDashboard.Marker( this.id, this.elements[i], this.elementsAttr, this.map );
  };

};

CityDashboard.MarkerLayer.prototype = {

  constructor: CityDashboard.MarkerLayer,

};
