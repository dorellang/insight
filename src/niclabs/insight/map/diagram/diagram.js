niclabs.insight.map.diagram.Diagram = (function($) {
    /**
     * Construct a Diagram over the map
     *
     * @class niclabs.insight.map.diagram.Diagram
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this diagram belongs to
     * @param {Object} options - configuration options for the diagram
     */
    var Diagram = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The Diagram must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Diagrams are only supported for Google Maps at the moment");

        var self = {
            /**
             * Map view where the diagram belongs to
             * @memberof niclabs.insight.map.diagram.Diagram
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the diagram belongs to
             *
             * @memberof niclabs.insight.map.diagram.Diagram
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Clear the diagram from the map
             *
             * @memberof niclabs.insight.map.diagram.Diagram
             */
            clear: function() {
            },

            /**
             * Set the map of the diagram.
             * TODO: can be done better?
             *
             * @memberof niclabs.insight.map.diagram.Diagram
             */
            setMap: function(aDiagram, map) {
                for (var polylineKey in aDiagram.Polylines) {
                    aDiagram.Polylines[polylineKey].setMap(map);
                }

                for (var markerKey in aDiagram.Markers) {
                    aDiagram.Markers[markerKey].setMap(map);
                }
            }

        };

        return self;
    };

    return Diagram;
})(jQuery);
