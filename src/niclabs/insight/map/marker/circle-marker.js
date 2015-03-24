niclabs.insight.map.marker.CircleMarker = (function($) {
    /**
     * Constructor for circle markers
     *
     * Circle markers are drawn in the map as circular waypoints
     *
     * @class niclabs.insight.map.marker.SimpleMarker
     * @extends niclabs.insight.map.marker.Marker
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.layer - identifier for the layer that this marker belongs to
     * @params {float} options.lat - latitude for the marker
     * @params {float} options.lng - longitude for the marker
     * @params {string} options.description - description for the marker
     * @params {number} [options.radius=400] - radius for the circle
     * @params {string} [options.strokeColor='#ff0000'] - color for the circle perimenter line
     * @params {float} [options.strokeOpacity=0.8] - opacity for the circle perimeter line
     * @params {string} [options.fillColor='#ff0000'] - color for the circle filling
     * @params {float} [options.fillOpacity=0.35] - opacity for the circle filling
     */
    var CircleMarker = function(dashboard, options) {
        var self = niclabs.insight.map.marker.Marker(dashboard, options);

        var latLng = new google.maps.LatLng(parseFloat(options.lat), parseFloat(options.lng));

        var marker = new google.maps.Circle({
            center: latLng,
            map: self.map.googlemap(),
            radius: options.radius || 400,
            strokeColor: options.strokeColor || '#FF0000',
            strokeOpacity: options.strokeOpacity || 0.8,
            strokeWeight: options.strokeWeight || 2,
            fillColor: options.fillColor || '#FF0000',
            fillOpacity: options.fillOpacity || 0.35,
            title: options.description || ''
        });

        // Re-write the marker function
        self.marker = function() {
            return marker;
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('circle-marker', 'marker', CircleMarker);

    return CircleMarker;
})(jQuery);
