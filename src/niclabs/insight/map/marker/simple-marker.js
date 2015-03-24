niclabs.insight.map.marker.SimpleMarker = (function($) {
    var SimpleMarker = function(dashboard, options) {
        var self = niclabs.insight.map.marker.Marker(dashboard, options);

        var latLng = new google.maps.LatLng(parseFloat(options.lat), parseFloat(options.lng));

        var marker = new google.maps.Marker({
            position: latLng,
            map: self.map.googlemap(),
            title: options.description || ''
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
