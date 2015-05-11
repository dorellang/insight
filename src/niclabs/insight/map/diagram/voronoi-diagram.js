niclabs.insight.map.diagram.VoronoiDiagram = (function($) {
    /**
     * Data point for VoronoiDiagram
     *
     * @typedef niclabs.insight.map.diagram.VoronoiDiagram.Data
     * @type {Object}
     * @param {float} lat - latitude for the diagram point
     * @param {float} lng - longitude for the diagram point
     * @param {string} landmark - landmark that the point indicates
     */

    /**
     * Draw a voronoi diagram over the map
     *
     * In a voronoi diagram, each data point is a location where the voronoi diagram
     * is based on. A voronoi diagram is drawn with the provided configuration.
     *
     * @class niclabs.insight.map.diagram.VoronoiDiagram
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this diagram belongs to
     * @param {Object} options - configuration options for the diagram
     * @param {niclabs.insight.map.diagram.VoronoiDiagram.Data[]} options.data - array of points to draw the graph
     * @param {string} [options.strokeColor='#ff0000'] - Color for the diagram edges
     * @param {float} [options.strokeWeight=2] - Width for the diagram edges
     * @param {float} [options.strokeOpacity=1] - Opacity for the diagram edges.
     */
    var VoronoiDiagram = function(dashboard, options) {
        if (!('data' in options)) {
            throw Error('No data provided for the diagram');
        }

        var self = niclabs.insight.map.diagram.Diagram(dashboard, options);

        /**
         * Create a google map voronoi diagram
         */
        function googleMapsVoronoiDiagram(data) {

            var MapNgbrLines = [];

            var n = data.length;

            var latlngArray = [];

            for(var i = 0; i < n; i++){
                latlngArray[i] = new google.maps.LatLng( data[i].lat,data[i].lng );
            }

            // Pre-process data input
            var MapPositions = niclabs.insight.map.diagram.transformMapPositions(data);

            // Delaunay triangulation
            var DT = FindDelaunayTriangulation(MapPositions);

            // Create Polylines
            var Polylines = [];
            for (i=0; i<DT.vor_edges.length; i++) {
                var edge = DT.vor_edges[i];
                if (edge[0] < 0) continue;
                if (edge[1] < 0) continue;

                MapNgbrLines = niclabs.insight.map.diagram.createLines(DT.vor_positions,edge);

                var GLLs = [];
                for (var j = 0; j < MapNgbrLines.length; j++) {
                    GLLs.push(new google.maps.LatLng(MapNgbrLines[j][0],MapNgbrLines[j][1]));
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

        // Create the diagram
        var diagram = googleMapsVoronoiDiagram(options.data);

        // Set the options. Done in creation for better performance
        // Pseudocode below...

        /*diagram.set('strokeColor', options.color || '#578b8b');
        diagram.set('strokeWeight', options.thickness || 2);
        diagram.set('strokeOpacity', options.opacity || 2);*/

        // Set the diagram
        self.setMap(diagram, self.map.googlemap());

        // Store the parent
        var clear = self.clear;

        /**
         * Clear the map
         *
         * @memberof niclabs.insight.map.diagram.VoronoiDiagram
         * @overrides
         */
        self.clear = function() {
            // Call the parent
            clear();

            // Remove the map
            self.setMap(diagram, null);
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('voronoi-diagram', 'diagram', VoronoiDiagram);

    return VoronoiDiagram;
})(jQuery);
