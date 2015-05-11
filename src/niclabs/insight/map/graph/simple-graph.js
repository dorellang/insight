niclabs.insight.map.graph.SimpleGraph = (function($) {
  /**
   * TODO: Missing documentation
   */
  var SimpleGraph = function(dashboard, options) {
    if (!('data' in options)) {
      throw Error('No data provided for the graph');
    }

    var self = niclabs.insight.map.graph.Graph(dashboard, options);

    /**
     * TODO: Missing documentation
     */
    function googleMapsGraph(data) {
      var graphNodes = [];
      for (var i = 0; i < data.length; i++) {
        var latLng = new google.maps.LatLng(data[i].lat, data[i].lng);
        var marker = new google.maps.Marker({
          position: latLng,
          map: self.map.googlemap(),
          title: data[i].landmark || ''
        });
        graphNodes.push(marker);
      }
      var vertex = [];

      // Note: non directed graph
      for (i = 0; i < options.adj.length; i++) {
        for (var j = 0; j < i; j++) {
          if (options.adj[i][j] == 1) {
            var myLatlngArray = [];
            myLatlngArray[0] = new google.maps.LatLng(data[i].lat, data[i].lng);
            myLatlngArray[1] = new google.maps.LatLng(data[j].lat, data[j].lng);

            var polyline = new google.maps.Polyline({
              path: myLatlngArray,
              strokeColor: '#000000',
              strokeOpacity: 1.0,
              strokeWeight: 10
            });

            polyline.setMap(self.map.googlemap());
            //google.maps.event.addListener(polyline, 'click', changeColor);
            vertex.push(polyline);
          }
        }
      }

      return {
        nodes: graphNodes,
        edges: vertex,
        setMap: function(map) {
          for(var node in this.nodes) {
            this.nodes[node].setMap(map);
          }
          for(var edge in this.edges) {
            this.edges[edge].setMap(map);
          }
        }
      };
    }

    // Create the graph
    var graph = googleMapsGraph(options.data);

    // Set the options

    // Set the graph
    //graph.setMap(self.map.googlemap());

    // Store the parent
    var clear = self.clear;

    /**
     * TODO: Missing documentation
     */
    self.clear = function() {
      // Call the parent
      clear();

      // Remove the map
      graph.setMap(null);
    };

    self.graph = function() {
      return graph;
    };

    self.nodes = function() {
      return graph.nodes;
    };

    self.edges = function() {
      return graph.edges;
    };

    return self;
  };

  // Register the handler
  niclabs.insight.handler('simple-graph', 'graph', SimpleGraph);

  return SimpleGraph;
})(jQuery);
