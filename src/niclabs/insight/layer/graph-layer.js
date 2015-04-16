niclabs.insight.layer.GraphLayer = (function($) {
    /**
     * Construct a new graph layer
     *
     */
    var GraphLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var graphOptions = options.heatmap || {
            'type': 'voronoi-graph'
        };

        function createGraph(data, obj) {
            var graph;
            if ('type' in obj) {
                var attr = {'layer': layer.id, 'data': data};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj);

                graph = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
              graph = obj;

                // Should we add a way to pass data to the heatmap?
            }

            return graph;
        }

        var graph;

        /**
         * Draw the heatmap according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.GraphLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the marker
         * @param {float} data[].lng - longitude for the marker
         * @param {string=} data[].description - description for the marker
         */
        layer.draw = function(data) {
            graph = createGraph(data, graphOptions);
        };

        /**
         * Clear the graph from the map
         *
         * @memberof niclabs.insight.layer.GraphLayer
         * @override
         */
        layer.clear = function() {
            if (graph) graph.clear();
        };

        /**
         * Filter the layer according to the provided function.
         *
         * @memberof niclabs.insight.layer.GraphLayer
         * @override
         * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
         */
        layer.filter = function(fn) {
            // TODO. not sure if possible
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('graph-layer', 'layer', GraphLayer);

    return GraphLayer;
})(jQuery);
