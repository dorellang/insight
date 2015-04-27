niclabs.insight.map.graph.DelaunayGraph = (function($) {
    /**
     * Data point for DelaunayGraph
     *
     * @typedef niclabs.insight.map.graph.DelaunayGraph.Data
     * @type {Object}
     * @param {float} lat - latitude for the graph point
     * @param {float} lng - longitude for the graph point
     * @param {string} landmark - landmark that the point indicates
     */

    /**
     * Draw a delaunay triangulation over the map
     *
     * In a delaunay triangulation, each data point is a location where the delaunay triangulation
     * is based on. A delaunay graph is drawn with the provided configuration.
     *
     * @class niclabs.insight.map.graph.DelaunayGraph
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this graph belongs to
     * @param {Object} options - configuration options for the graph
     * @param {niclabs.insight.map.graph.DelaunayGraph.Data[]} options.data - array of points to draw the graph
     * @param {string} [options.strokeColor='#ff0000'] - Color for the graph edges
     * @param {float} [options.strokeWeight=2] - Width for the graph edges
     * @param {float} [options.strokeOpacity=1] - Opacity for the graph edges.
     */
    var DelaunayGraph = function(dashboard, options) {
        if (!('data' in options)) {
            throw Error('No data provided for the graph');
        }

        var self = niclabs.insight.map.graph.Graph(dashboard, options);

        /**
         * Create a google map delaunay graph
         */
        function googleMapsDelaunayGraph(data) {

            var MapTriLines = [];

            var n = data.length;

            var latlngArray = [];

            for(var i = 0; i < n; i++){
                latlngArray[i] = new google.maps.LatLng( data[i].lat,data[i].lng );
            }

            var MapPositions = niclabs.insight.map.graph.transformMapPositions(data);

            var DT = FindDelaunayTriangulation(MapPositions);

            var Polylines = [];
            for (i=0; i<DT.edges.length; i++) {
                var edge = DT.edges[i];

                MapTriLines = niclabs.insight.map.graph.createLines(DT.positions,edge.verts);

                var GLLs = [];
                for (var j = 0; j < MapTriLines.length; j++) {
                    GLLs.push(new google.maps.LatLng(MapTriLines[j][0],MapTriLines[j][1]));
                }

                var GPln = new google.maps.Polyline(
              	{
                		path: GLLs,
                    strokeColor: options.strokeColor || '#FF0000',
                    strokeWeight: options.strokeWeight || 2,
                    strokeOpacity: options.strokeOpacity || 1,
                		clickable: false
              	});

                Polylines.push(GPln);
                //GPln.setMap(self.map.googlemap());
            }

            markers = [];
            for (i=0; i< latlngArray.length; i++) {
              var marker = new google.maps.Marker({
                position: latlngArray[i],
                title: data[i].landmark || ''
              });

              markers[i] = marker;
            }

            return {'Polylines': Polylines, 'Markers': markers };
        }

        // Create the graph
        var graph = googleMapsDelaunayGraph(options.data);

        // Set the options. Done in creation for better performance
        // Pseudocode below...

        /*graph.set('strokeColor', options.color || '#578b8b');
        graph.set('strokeWeight', options.thickness || 2);
        graph.set('strokeOpacity', options.opacity || 2);*/

        // Set the graph
        self.setMap(graph, self.map.googlemap());

        // Store the parent
        var clear = self.clear;

        /**
         * Clear the map
         *
         * @memberof niclabs.insight.map.graph.DelaunayGraph
         * @overrides
         */
        self.clear = function() {
            // Call the parent
            clear();

            // Remove the map
            self.setMap(graph, null);
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('delaunay-graph', 'graph', DelaunayGraph);

    return DelaunayGraph;
})(jQuery);
