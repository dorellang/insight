niclabs.insight.map.marker.ImageMarker = (function($) {
    /**
     * Constructor for an image marker
     *
     * An image marker includes an image for each waypoint
     *
     * @class niclabs.insight.map.marker.ImageMarker
     * @extends niclabs.insight.map.marker.Marker
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.layer - identifier for the layer that this marker belongs to
     * @param {float} options.lat - latitude for the marker
     * @param {float} options.lng - longitude for the marker
     * @param {string} options.landmark - landmark that the marker indicates
     * @param {string} options.src - image source
     */
    var ImageMarker = function(dashboard, options) {
        var self = niclabs.insight.map.marker.Marker(dashboard, options);

        var latLng = new google.maps.LatLng(parseFloat(options.lat), parseFloat(options.lng));

        if (!('src' in options))
            throw new Error('An image source must be provided for using image markers');

        var image = {
            url: options.src,
            scaledSize: new google.maps.Size(30, 50)
        };

        var marker = new google.maps.Marker({
            position: latLng,
            map: self.map.googlemap(),
            icon: image,
            title: options.landmark || ''
        });

        // Re-write the marker function
        self.marker = function() {
            return marker;
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('image-marker', 'marker', ImageMarker);

    return ImageMarker;
})(jQuery);
