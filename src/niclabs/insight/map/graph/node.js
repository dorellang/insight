niclabs.insight.map.graph.Node = (function($) {
    /**
     * TODO: Missing documentation
     */
    var Node = function(dashboard, options) {
        var self = niclabs.insight.map.graph.GraphElement(dashboard, options);

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

        self.clickable = function() {
            var marker = self.marker();

            listener = google.maps.event.addListener(marker, 'click', function() {
                niclabs.insight.event.trigger('map_element_selected', options);

                myself = this;

                // TODO: make configurable?
                if ('setAnimation' in marker) {
                  marker.setAnimation(google.maps.Animation.BOUNCE);

                    // Set timeout to stop the animation
                    setTimeout(function() {
                      marker.setAnimation(null);
                    }, 1000);
                }
            });
            return listener;
        };

        //console.log(self.clickable);

        return self;

    };

    // Register the handler
    niclabs.insight.handler('node', 'graph', Node);

    return Node;
})(jQuery);
