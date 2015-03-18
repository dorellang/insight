CityDashboard.SegmentHeatmap = function(layer_params, attr, map, assoc_layer) {
    var i, j;
    var data = [];

    var n = layer_params.segments.length;

    for (i = 0; i < n; i++) {
        data[i] = [];
        for (j = 0; j < layer_params.segments[i].length; j++) {
            data[i][j] = {
                lat: parseFloat(layer_params.segments[i][j].lat),
                lng: parseFloat(layer_params.segments[i][j].lng)
            };
        }
    }

    var myData = [];

    for (i = 0; i < data.length; i++) {

        var m = data[i].length;

        for (j = 0; j < m - 1; j++) {

            var d = Math.sqrt(Math.pow((data[i][j + 1].lat - data[i][j].lat), 2) + Math.pow((data[i][j + 1].lng - data[i][j].lng), 2));

            //var n = Math.floor(d/0.000005);
            var l = Math.floor(d / 0.00001);

            var delta = {
                lat: (data[i][j + 1].lat - data[i][j].lat) / l,
                lng: (data[i][j + 1].lng - data[i][j].lng) / l
            };

            for (var k = 0; k < l; k++) {

                var lat = data[i][j].lat;
                var lng = data[i][j].lng;
                myData.push({
                    location: new google.maps.LatLng(lat + delta.lat * k, lng + delta.lng * k),
                    weight: layer_params.weights[i] || 1
                });
            }
        }

    }

    this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: myData,
    });

    this.heatmap.setMap(map);

};

CityDashboard.SegmentHeatmap.prototype = Object.create(CityDashboard.Heatmap.prototype);

CityDashboard.SegmentHeatmap.prototype = {

    constructor: CityDashboard.SegmentHeatmap,

};