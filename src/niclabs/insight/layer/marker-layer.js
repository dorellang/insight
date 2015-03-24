niclabs.insight.layer.MarkerLayer = (function($) {
    /**
     * Construct a new marker layer
     *
     * @class niclabs.insight.layer.MarkerLayer
     * @extends niclabs.insight.layer.Layer
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.id - identifier for the layer
     * @param {string|Object[]} options.data - uri or data array for the layer
     */
    var MarkerLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var attr = options.marker || {
            'type': 'simple-marker'
        };

        var markers = [];

        /**
         * Create marker from the type attribute
         *
         * @param {Object[]} data - layer data
         * @param {number} index - index of the marker in the data array
         * @param {Object} obj - configuration for the new marker
          */
        function newMarker(data, index, obj) {
            var marker;
            if ('type' in obj) {
                var attr = {'layer': layer.id};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj, data[index]);

                marker = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
                marker = obj;
            }

            // Make the marker clickable
            marker.clickable(true);

            return marker;
        }

        /**
         * Draw the markers according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.MarkerLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the marker
         * @param {float} data[].lng - longitude for the marker
         * @param {string=} data[].description - description for the marker
         */
        layer.draw = function(data) {
            for (var i = 0; i < data.length; i++) {
                markers.push(newMarker(data, i, attr));
            }
        };

        /**
         * Clear the markers from the map
         *
         * @memberof niclabs.insight.layer.MarkerLayer
         * @override
         */
        layer.clear = function() {
            for (var i = 0; i < markers.length; i++) {
                markers[i].clear();
            }
        };

        /**
         * Filter the layer according to the provided function.
         *
         * @memberof niclabs.insight.layer.MarkerLayer
         * @override
         * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
         */
        layer.filter = function(fn) {
            var data = layer.data();
            for (var i = 0; i < markers.length; i++) {
                markers[i].visible(fn(data[i]));
            }
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('marker-layer', 'layer', MarkerLayer);

    return MarkerLayer;
})(jQuery);
