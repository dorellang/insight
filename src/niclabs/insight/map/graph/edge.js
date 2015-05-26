niclabs.insight.map.graph.Edge = (function($) {
    /**
     * Constructor for graph edges
     *
     * Graph edge are shown in the map as basic segments, with no style options
     * TODO: make segment customizable
     *
     * @class niclabs.insight.map.graph.Edge
     * @extends niclabs.insight.map.graph.GraphElement
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this edge belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.adj - adjacency matrix of the graph
     * @param {string} options.layer - identifier for the layer that this edge belongs to
     * @param {Object} options.startNode - data for the first node that this edge connects to
     * @param {Object} options.endNode - data for the second node that this edge connects to
     * @param {float} options.startNode.lat - latitude for the first graph node
     * @param {float} options.startNode.lng - longitude for the first graph node
     * @param {string} options.startNode.landmark - landmark that the first node indicates
     * @param {float} options.endNode.lat - latitude for the second graph node
     * @param {float} options.endNode.lng - longitude for the second graph node
     * @param {string} options.endNode.landmark - landmark that the second node indicates
     */
    var Edge = function(dashboard, options) {
        var self = niclabs.insight.map.graph.GraphElement(dashboard, options);

        var myLatlngArray = [];

        myLatlngArray[0] = new google.maps.LatLng(options.startNode.lat, options.startNode.lng);
        myLatlngArray[1] = new google.maps.LatLng(options.endNode.lat, options.endNode.lng);

        var polyline = new google.maps.Polyline({
          path: myLatlngArray,
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 10
        });

        polyline.setMap(self.map.googlemap());

        // Re-write the graphElement function
        self.graphElement = function() {
            return polyline;
        };

        self.clickable = function() {
            var edge = self.graphElement();

            listener = google.maps.event.addListener(edge, 'click', function() {
              niclabs.insight.event.trigger('map_element_selected', options);

              if ('setOptions' in edge) {
                edge.setOptions({strokeColor: '#FF0000'});
                // Set timeout to stop the animation
                setTimeout(function() {
                    edge.setOptions({strokeColor: '#000000'});
                }, 1000);
              }

            });
            return listener;
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('edge', 'graph', Edge);

    return Edge;
})(jQuery);
