niclabs.insight.map.graph.GraphElement = (function($) {
    /**
     * Construct a new GraphElement
     *
     * @class niclabs.insight.map.graph.GraphElement
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this graph element belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.adj - adjacency matrix of the graph
     * @param {string} options.layer - identifier for the layer that this graph element belongs to
     * @param {float} options.lat - latitude for the graph graph element
     * @param {float} options.lng - longitude for the graph graph element
     * @param {string} options.landmark - landmark that the graph element indicates
     */
    var GraphElement = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The marker must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Markers are only supported for Google Maps at the moment");

        var listener;

        var self = {
            /**
             * Map view where the map belongs to
             * @memberof niclabs.insight.map.marker.Marker
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the marker belongs to
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Return the internal marker object associated with this Marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @abstract
             * @returns {google.maps.Marker} internal marker
             */
            graphElement: function() {
                return undefined;
            },

            /**
             * Get/activate clickable status for the marker
             *
             * When clicked the marker will trigger a {@link niclabs.insight.MapView#map_element_selected} event
             * with the particular data for the marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @param {boolean} [activate=true] - true to make clickable
             */
            clickable : function(activate) {

            },

            /**
             * Clear the marker from the map
             *
             * @memberof niclabs.insight.map.marker.Marker
             */
            clear: function() {
                var marker = self.graphElement();
                graphElement.setMap(null);
            },

            /**
             * Set/get the visibility for the marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @param {boolean=} visible - new value for the visibility of the marker
             * @returns {boolean} true if the marker is visible
             */
            visible: function(visible) {
                if (typeof visible === 'undefined') return self.graphElement().getVisible();
                else self.graphElement().setVisible(visible);

                return visible;
            }
        };

        return self;
    };

    return GraphElement;
})(jQuery);
