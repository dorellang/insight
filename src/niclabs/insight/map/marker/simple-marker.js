niclabs.insight.map.marker.SimpleMarker = (function($) {
    /**
     * Constructor for simple markers
     *
     * Simple markers are shown in the map as basic waypoints, with no style options
     *
     * @class niclabs.insight.map.marker.SimpleMarker
     * @extends niclabs.insight.map.marker.Marker
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.layer - identifier for the layer that this marker belongs to
     * @params {float} options.lat - latitude for the marker
     * @params {float} options.lng - longitude for the marker
     * @params {string} options.landmark - landmark that the marker indicates
     */
    var SimpleMarker = function(dashboard, options) {
        var self = niclabs.insight.map.marker.Marker(dashboard, options);

        var latLng = new google.maps.LatLng(parseFloat(options.lat), parseFloat(options.lng));

        var marker = new google.maps.Marker({
            position: latLng,
            map: self.map.googlemap(),
            title: options.landmark || ''
        });

        // Re-write the marker function
        self.marker = function() {
            return marker;
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('simple-marker', 'marker', SimpleMarker);

    return SimpleMarker;
})(jQuery);
