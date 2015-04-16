niclabs.insight.map.graph.VoronoiGraph = (function($) {

    var VoronoiGraph = function(dashboard, options) {
        if (!('data' in options)) {
            throw Error('No data provided for the graph');
        }

        var self = niclabs.insight.map.graph.Graph(dashboard, options);

        /**
         * Create a google map graph
         */
        function googleMapsVoronoiGraph(data) {

            //var data = [];

            var MapNgbrLines = [];

            var n = data.length;

            var latlngArray = [];

            for(var i = 0; i < n; i++){
              latlngArray[i] = new google.maps.LatLng( data[i].lat,data[i].lng );
            }

            var MapPositions = transformMapPositions(data);

            var DT = FindDelaunayTriangulation(MapPositions);

            for (i=0; i<DT.vor_edges.length; i++) {
              var edge = DT.vor_edges[i];
              if (edge[0] < 0) continue;
              if (edge[1] < 0) continue;

              MapNgbrLines = createLine(DT.vor_positions,edge);

              var GLLs = [];
              for (var j = 0; j < MapNgbrLines.length; j++) {
                GLLs.push(new google.maps.LatLng(MapNgbrLines[j][0],MapNgbrLines[j][1]));
              }

              console.log(options);
              var GPln = new google.maps.Polyline(
            	{
            		path: GLLs,
            		strokeColor: '#578b8b',
            		strokeWeight: 2,
            		strokeOpacity:  2,
            		clickable: false
            	});

              GPln.setMap(self.map.googlemap());
            }

            markers = [];
            for (i=0; i< latlngArray.length; i++) {
              var marker = new google.maps.Marker({
                position: latlngArray[i],
                map: self.map.googlemap()
              });

              markers[i] = marker;
            }

            return 1;
        }

        // Create the graph
        var graph = googleMapsVoronoiGraph(options.data);

        // Set the options

        // Set the graph

        graph.setMap(self.map.googlemap());

        // Store the parent
        //var clear = self.clear;

        /**
         * Clear the map
         *
         * @memberof niclabs.insight.map.graph.VoronoiGraph
         * @overrides
         */
        self.clear = function() {
            // Call the parent
            clear();

            // Remove the map
            graph.setMap(null);
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('voronoi-graph', 'graph', VoronoiGraph);

    return VoronoiGraph;
})(jQuery);
