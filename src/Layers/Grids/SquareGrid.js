CityDashboard.SquareGrid = function( grid_params, attr, map ){

  var square;
  var square2;

  var myLatlng = [
    new google.maps.LatLng(parseFloat(grid_params.lat), parseFloat(grid_params.lng)),
    new google.maps.LatLng(parseFloat(grid_params.lat)+0.01, parseFloat(grid_params.lng)),
    new google.maps.LatLng(parseFloat(grid_params.lat)+0.01, parseFloat(grid_params.lng)+0.01),
    new google.maps.LatLng(parseFloat(grid_params.lat), parseFloat(grid_params.lng)+0.01),
    new google.maps.LatLng(parseFloat(grid_params.lat), parseFloat(grid_params.lng))
  ];

  square = new google.maps.Polygon({
    paths: myLatlng,
    strokeColor: attr.color || 'blue',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: attr.color || 'blue',
    fillOpacity: 0.2,
    clickable:true
  });

  square.setMap(map);

  google.maps.event.addListener(square, 'mouseover', function(event) {
    square.setOptions({fillOpacity: 0.4});
  });

  google.maps.event.addListener(square, 'mouseout', function(event) {
    square.setOptions({fillOpacity: 0.2});
  });

};

CityDashboard.SquareGrid.prototype = {

  constructor: CityDashboard.SquareGrid,

};


