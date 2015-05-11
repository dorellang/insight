niclabs.insight.layer.DiagramLayer = (function($) {
    /**
     * Construct a new diagram layer
     *
     * @class niclabs.insight.layer.DiagramLayer
     * @extends niclabs.insight.layer.Layer
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.id - identifier for the layer
     * @param {string|Object[]} options.data - uri or data array for the layer
     * @param {Object=} options.diagram - options for the diagram
     */
    var DiagramLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var diagramOptions = options.diagram || {
            'type': 'voronoi-diagram'
        };

        function createDiagram(data, obj) {
            var diagram;
            if ('type' in obj) {
                var attr = {'layer': layer.id, 'data': data};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj);

                diagram = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
              diagram = obj;
            }

            return diagram;
        }

        var diagram;

        /**
         * Draw the diagram according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.DiagramLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the marker
         * @param {float} data[].lng - longitude for the marker
         * @param {string=} data[].description - description for the marker
         */
        layer.draw = function(data) {
          diagram = createDiagram(data, diagramOptions);
        };

        /**
         * Clear the diagram from the map
         *
         * @memberof niclabs.insight.layer.DiagramLayer
         * @override
         */
        layer.clear = function() {
            if (diagram) diagram.clear();
        };

        /**
         * Filter the layer according to the provided function.
         *
         * @memberof niclabs.insight.layer.DiagramLayer
         * @override
         * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
         */
        layer.filter = function(fn) {
            // TODO. not sure if possible
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('diagram-layer', 'layer', DiagramLayer);

    return DiagramLayer;
})(jQuery);
