CityDashboard.Voronoi = function( layer_params, attr, map, assoc_layer ){

  CityDashboard.DTesselation.call(this, layer_params, attr, map, assoc_layer);

  var data = [];

  var deg2rad = Math.PI/180;
  var rad2deg = 180/Math.PI;

  var MapTriLines = [];
  var MapNgbrLines = [];

  var n = layer_params.points.length;

  for(var i = 0; i < n; i++){
    data[i] = new google.maps.LatLng( parseFloat(layer_params.points[i].lat), parseFloat(layer_params.points[i].lng) );
  }

  var myself = this;

  var PointsChanged = function() {

	myself.ClearOvlyArray(MapNgbrLines);
	
	var MapPositions = [];

	for (var i=0; i<data.length; i++)
	{
		var LatLng = data[i];
		var lat = deg2rad*LatLng.lat();
		var lng = deg2rad*LatLng.lng();
		var lc = Math.cos(lat);
		var pt = [lc*Math.cos(lng), lc*Math.sin(lng), Math.sin(lat)];
		// Add random offset to avoid collinearity
		for (var ic=0; ic<3; ic++)
			pt[ic] += 1e-10 * (2*Math.random() - 1);
		var sumsq = 0;
		for (var ic=0; ic<3; ic++)
			sumsq += pt[ic]*pt[ic];
		var norm = 1/Math.sqrt(sumsq);
		for (var ic=0; ic<3; ic++)
			pt[ic] *= norm;
		// Accept it
		MapPositions.push(pt);
	}
	var DT = FindDelaunayTriangulation(MapPositions);

	for (var i=0; i<DT.vor_edges.length; i++)
	{
		var edge = DT.vor_edges[i];
		if (edge[0] < 0) continue;
		if (edge[1] < 0) continue;
		myself.Add_GMapLine(MapNgbrLines, DT.vor_positions, edge, attr.color || '#578b8b', 2, 1, map);
	}
  }

  PointsChanged();

  markers = [];
  for (var i=0; i< data.length; i++) {
    var marker = new google.maps.Marker({
      position: data[i],
      map: map,
      draggable: true
    });

    markers[i] = marker;
  }

  var f = function() {
      for (var i=0; i< data.length; i++) {
        if(markers[i].position != data[i]){
          data[i] = this.position;
          break;
        }
      }
      PointsChanged();
  };

  for (var i=0; i< data.length; i++) {
    google.maps.event.addListener(markers[i], 'drag', f);
  }

};

CityDashboard.Voronoi.prototype = Object.create(CityDashboard.DTesselation.prototype);

CityDashboard.Voronoi.prototype = {

  constructor: CityDashboard.Voronoi,

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