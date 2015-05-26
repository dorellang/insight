niclabs.insight.map.graph.Node = (function($) {
    /**
     * Constructor for graph nodes
     *
     * Graph nodes are shown in the map as basic waypoints, with no style options
     *
     * @class niclabs.insight.map.graph.Node
     * @extends niclabs.insight.map.graph.GraphElement
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this node belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.adj - adjacency matrix of the graph
     * @param {string} options.layer - identifier for the layer that this node belongs to
     * @param {float} options.lat - latitude for the graph node
     * @param {float} options.lng - longitude for the graph node
     * @param {string} options.landmark - landmark that the node indicates
     */
    var Node = function(dashboard, options) {
        var self = niclabs.insight.map.graph.GraphElement(dashboard, options);

        var latLng = new google.maps.LatLng(parseFloat(options.lat), parseFloat(options.lng));

        var marker = new google.maps.Marker({
            position: latLng,
            map: self.map.googlemap(),
            title: options.landmark || ''
        });

        // Re-write the graphElement function
        self.graphElement = function() {
            return marker;
        };

        self.clickable = function() {
            var marker = self.graphElement();

            listener = google.maps.event.addListener(marker, 'click', function() {
                niclabs.insight.event.trigger('map_element_selected', options);

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

        return self;

    };

    // Register the handler
    niclabs.insight.handler('node', 'graph', Node);

    return Node;
})(jQuery);
