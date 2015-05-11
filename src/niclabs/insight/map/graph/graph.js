niclabs.insight.map.graph.Graph = (function($) {
    /**
     * TODO: Missing documentatino
     */
    var Graph = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The graph must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Graphs are only supported for Google Maps at the moment");

        var self = {
            /**
             * TODO: Missing documentation
             */
            get map () {
                return map;
            },

            /**
             * TODO: Missing documentation
             */
            get layer () {
                return layer;
            },

            /**
             * TODO: Missing documentation
             */
            clear: function() {
            },

            /**
             * TODO: Missing documentation
             */
            graph: function() {
                return undefined;
            },

            /**
             * TODO: Missing documentation
             */
            nodes: function() {
                return undefined;
            },

            /**
             * TODO: Missing documentation
             */
            edges: function() {
                return undefined;
            },

            /**
             * TODO: Missing documentation
             */
            clickable : function(activate) {
                var listener;
                if (activate) {
                    listener = {};
                    var edges = self.edges();
                    for (var edge in edges) {
                        listener.edges = self.edgeClickable(edges[edge]);
                    }
                    var nodes = self.nodes();
                    for (var node in nodes) {
                        listener.nodes = self.nodeClickable(nodes[node]);
                    }
                }
                else if (typeof listener !== 'undefined') {
                    google.maps.event.removeListener(listener);
                    listener = undefined;
                }
                return (listener !== undefined);
            },

            /**
             * TODO: Missing documentation
             */
            edgeClickable : function(edge) {
                listener = google.maps.event.addListener(edge, 'click', function() {
                  niclabs.insight.event.trigger('map_element_selected', options);
                  //edge = this;
                  edge.setOptions({strokeColor: '#FF0000'});
                  // Set timeout to stop the animation
                  setTimeout(function() {
                      edge.setOptions({strokeColor: '#000000'});
                  }, 1000);

                });
                return listener;
            },

            /**
             * TODO: Missing documentation
             */
            nodeClickable : function(node) {
                listener = google.maps.event.addListener(node, 'click', function() {
                    niclabs.insight.event.trigger('map_element_selected', options);

                    // TODO: make configurable?
                    if ('setAnimation' in node) {
                        node.setAnimation(google.maps.Animation.BOUNCE);
                    }

                    // Set timeout to stop the animation
                    setTimeout(function() {
                        node.setAnimation(null);
                    }, 1000);
                });
                return listener;
            }
        };

        return self;
    };

    return Graph;
})(jQuery);
