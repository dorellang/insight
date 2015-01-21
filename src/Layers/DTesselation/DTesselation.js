CityDashboard.DTesselation = function( layer_params, attr, map, assoc_layer ){

	this.layer_params = layer_params;
	this.attr = attr;
	this.map = map;
	this.layer = assoc_layer;

};

CityDashboard.DTesselation.prototype = {

  constructor: CityDashboard.DTesselation,

  build: function () {},

  addEvents: function () {},

  Add_GMapLine: function (StoreArr, Positions, Verts, Color, Thickness, Opacity, map) {

	var rad2deg = 180/Math.PI;
	if (Verts.length < 2) return;
	
	var p0 = Positions[Verts[0]];
	var poss = [p0];
	
	for (var i=1; i<Verts.length; i++)
	{
		var p = Positions[Verts[i]];
		poss = poss.concat(this.SplitSegment(p0,p),[p]);
		p0 = p;
	}
	
	var GLLs = [];
	for (var j=0; j<poss.length; j++)
	{
		var p = poss[j];
		var lat = rad2deg*Math.atan2(p[2],Math.sqrt(p[0]*p[0]+p[1]*p[1]));
		var lng = rad2deg*Math.atan2(p[1],p[0]);
		GLLs.push(new google.maps.LatLng(lat,lng));
	}
	var GPln = new google.maps.Polyline(
	{
		path: GLLs,
		strokeColor: Color,
		strokeWeight: Thickness,
		strokeOpacity: Opacity,
		clickable: false
	});
        GPln.setMap(map);
	StoreArr.push(GPln);
  },

  SplitSegment: function (p0,p1) {

	var diff = 0.0;
	for (var ic=0; ic<3; ic++)
	{
		var dfc = p1[ic] - p0[ic];
		diff += dfc*dfc;
	}
	var empty = [];
	if (diff < 0.01) return empty;
	
	var px = new Array(3);
	for (var ic=0; ic<3; ic++)
		px[ic] = p0[ic] + p1[ic];
	var asqr = 0;
	for (var ic=0; ic<3; ic++)
	{
		pc = px[ic];
		asqr += pc*pc;
	}
	var normmult = 1/Math.sqrt(asqr);
	for (var ic=0; ic<3; ic++)
		px[ic] *= normmult;
	
	return empty.concat(this.SplitSegment(p0,px),[px],this.SplitSegment(px,p1));
  },

  ClearOvlyArray: function (OvlyArray) {
	while (OvlyArray.length > 0)
	{
		var ovly = OvlyArray.pop();
		ovly.setMap(null);
	}
  }

};
