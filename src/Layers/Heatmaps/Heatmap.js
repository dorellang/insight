CityDashboard.Heatmap = function( heatmap_params, attr, map ){

  var data = [];
  var n = heatmap_params.lat.length;

  /*for(var i = 0; i < n; i++){
    data[i] = {lat: parseFloat(heatmap_params.lat[i]),lng: parseFloat(heatmap_params.lng[i]), count: 1};
  }

  var heatmap = new HeatmapOverlay(map, 
    {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 2,
    "maxOpacity": 1, 
    // scales the radius based on map zoom
    "scaleRadius": true, 
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries 
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
    }
  );

  var testData = {
          max: 1,
          data: data }

  heatmap.setData(testData);*/

  for(var i = 0; i < n; i++){
    data[i] = new google.maps.LatLng( parseFloat(heatmap_params.lat[i]), parseFloat(heatmap_params.lng[i]) );
  }

  var pointArray = new google.maps.MVCArray(data);

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray,
    //gradient: ['rgba(0,0,0,0)', '#9AB6B6', '#729A9A', '#578B8B', '#266B6B'],
    opacity: 0.6,
    radius: 7
  });

  heatmap.setMap(map);

};

CityDashboard.Heatmap.prototype = {

  constructor: CityDashboard.Heatmap,

};


