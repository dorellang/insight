niclabs.insight.layer.GraphLayer = (function($) {
    /**
     * TODO: Missing documentation
     */
    var GraphLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var graphOptions = options.graph || {
            'type': 'simple-graph'
        };

        function createGraph(data, obj) {
            var graph;
            if ('type' in obj) {
                var attr = {'layer': layer.id, 'data': data};

                // Extend the attributes with the data and the options for the graph
                $.extend(attr, obj);

                graph = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
                graph = obj;

                // Should we add a way to pass data to the graph?
            }

            return graph;
        }

        var graph;

        /**
         * TODO: Missing documentation
         */
        layer.draw = function(data) {
          graph = createGraph(data, graphOptions);
        };

        /**
         * TODO: Missing documentation
         */
        layer.clear = function() {
            if (graph) graph.clear();
        };

        /**
         * TODO: Missing documentation
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
