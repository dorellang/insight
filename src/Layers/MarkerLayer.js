CityDashboard.MarkerLayer = function( parameters , map ){

  CityDashboard.Layer.call(this, parameters, map);
  console.log(this)

  for (var i = this.elements.length - 1; i >= 0; i--) {
    // asign a marker object to each data package
    new CityDashboard.Marker( this.id, this.elements[i], this.elementsAttr, this.map );
  };

};

CityDashboard.MarkerLayer.prototype = Object.create(CityDashboard.Layer.prototype);

CityDashboard.MarkerLayer.prototype = {

  constructor: CityDashboard.MarkerLayer,

};
