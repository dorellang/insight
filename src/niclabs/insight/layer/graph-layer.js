niclabs.insight.layer.GraphLayer = (function($) {
    /**
     * TODO: Missing documentation
     */
    var GraphLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var graphOptions = options.graph || {
            'type': 'simple-graph'
        };

        var nodes = [];
        var edges = [];

        function createGraph(data, obj) {
            var graph;
            if ('type' in obj) {
                var attr = {'layer': layer.id, 'data': data};

                // Extend the attributes with the data and the options for the graph
                $.extend(attr, obj);
                console.log(attr);

                graph = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
                graph = obj;

                // Should we add a way to pass data to the graph?
            }

            graph.clickable(true);
            /*
            for (var edge in edges){
                console.log(edge);
                edges[edge].clickable(true);
            }*/

            return graph;
        }

        function newNode(data, index, obj) {
            var node;
            if ('type' in obj) {
                var attr = {'layer': layer.id};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj, data[index]);

                node = niclabs.insight.handler('node')(dashboard, attr);
            }
            else {
                node = obj;
            }

            // Make the node clickable
            node.clickable(true);

            return node;
        }

        function newEdge(data, index, j, obj) {
            var edge;
            if ('type' in obj) {
                var attr = {'layer': layer.id};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj, {'startNode': data[index] , 'endNode': data[j]});

                edge = niclabs.insight.handler('edge')(dashboard, attr);
            }
            else {
                edge = obj;
            }

            // Make the edge clickable
            edge.clickable(true);

            return edge;
        }

        var graph;

        /**
         * TODO: Missing documentation
         */
        layer.draw = function(data) {
            for (var i = 0; i < data.length; i++) {
                nodes.push(newNode(data, i, graphOptions));
            }
            for (i = 0; i < graphOptions.adj.length; i++) {
              for (var j = 0; j < i; j++) {
                if (graphOptions.adj[i][j] == 1) {
                  edges.push(newEdge(data, i, j, graphOptions));
                }
              }
            }
        };

        /**
         * TODO: Missing documentation
         */
        layer.clear = function() {

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
