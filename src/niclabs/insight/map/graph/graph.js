niclabs.insight.map.graph.Graph = (function($) {
    /**
     * Construct a Graph over the map
     *
     * @class niclabs.insight.map.graph.Graph
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this graph belongs to
     * @param {Object} options - configuration options for the graph
     */
    var Graph = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The Graph must be associated to a layer');

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
             * Map view where the graph belongs to
             * @memberof niclabs.insight.map.graph.Graph
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the graph belongs to
             *
             * @memberof niclabs.insight.map.graph.Graph
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Clear the graph from the map
             *
             * @memberof niclabs.insight.map.graph.Graph
             */
            clear: function() {
            },

            /**
             * Set the map of the graph.
             * TODO: can be done better?
             *
             * @memberof niclabs.insight.map.graph.Graph
             */
            setMap: function(aGraph, map) {
                for (var polylineKey in aGraph.Polylines) {
                    aGraph.Polylines[polylineKey].setMap(map);
                }

                for (var markerKey in aGraph.Markers) {
                    aGraph.Markers[markerKey].setMap(map);
                }
            }

        };

        return self;
    };

    return Graph;
})(jQuery);
