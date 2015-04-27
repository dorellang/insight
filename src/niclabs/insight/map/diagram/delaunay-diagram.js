niclabs.insight.map.diagram.DelaunayDiagram = (function($) {
    /**
     * Data point for DelaunayDiagram
     *
     * @typedef niclabs.insight.map.diagram.DelaunayDiagram.Data
     * @type {Object}
     * @param {float} lat - latitude for the diagram point
     * @param {float} lng - longitude for the diagram point
     * @param {string} landmark - landmark that the point indicates
     */

    /**
     * Draw a delaunay triangulation over the map
     *
     * In a delaunay triangulation, each data point is a location where the delaunay triangulation
     * is based on. A delaunay diagram is drawn with the provided configuration.
     *
     * @class niclabs.insight.map.diagram.DelaunayDiagram
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this diagram belongs to
     * @param {Object} options - configuration options for the diagram
     * @param {niclabs.insight.map.diagram.DelaunayDiagram.Data[]} options.data - array of points to draw the graph
     * @param {string} [options.strokeColor='#ff0000'] - Color for the diagram edges
     * @param {float} [options.strokeWeight=2] - Width for the diagram edges
     * @param {float} [options.strokeOpacity=1] - Opacity for the diagram edges.
     */
    var DelaunayDiagram = function(dashboard, options) {
        if (!('data' in options)) {
            throw Error('No data provided for the diagram');
        }

        var self = niclabs.insight.map.diagram.Diagram(dashboard, options);

        /**
         * Create a google map delaunay diagram
         */
        function googleMapsDelaunayDiagram(data) {

            var MapTriLines = [];

            var n = data.length;

            var latlngArray = [];

            for(var i = 0; i < n; i++){
                latlngArray[i] = new google.maps.LatLng( data[i].lat,data[i].lng );
            }

            var MapPositions = niclabs.insight.map.diagram.transformMapPositions(data);

            var DT = FindDelaunayTriangulation(MapPositions);

            var Polylines = [];
            for (i=0; i<DT.edges.length; i++) {
                var edge = DT.edges[i];

                MapTriLines = niclabs.insight.map.diagram.createLines(DT.positions,edge.verts);

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

        // Create the diagram
        var diagram = googleMapsDelaunayDiagram(options.data);

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
         * @memberof niclabs.insight.map.diagram.DelaunayDiagram
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
    niclabs.insight.handler('delaunay-diagram', 'diagram', DelaunayDiagram);

    return DelaunayDiagram;
})(jQuery);
