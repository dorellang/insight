CityDashboard.PointHeatmap = function(layer_params, attr, map, assoc_layer) {
    var i;
    var data = [];

    var len = layer_params.points.length;

    if (layer_params.weights && layer_params.weights.length >= len) {
        for (i = 0; i < len; i++) {
            data[i] = {
                location: new google.maps.LatLng(
                    parseFloat(layer_params.points[i].lat),
                    parseFloat(layer_params.points[i].lng)
                ),
                weight: layer_params.weights[i]
            };
        }
    } else {
        for (i = 0; i < len; i++) {
            data[i] = new google.maps.LatLng(
                parseFloat(layer_params.points[i].lat),
                parseFloat(layer_params.points[i].lng)
            );
        }
    }

    var pointArray = new google.maps.MVCArray(data);

    this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray,
        radius: attr.radius || 10
    });

    this.heatmap.setMap(map);

};

CityDashboard.PointHeatmap.prototype = Object.create(CityDashboard.Heatmap.prototype);

CityDashboard.PointHeatmap.prototype = {

    constructor: CityDashboard.PointHeatmap,

};
