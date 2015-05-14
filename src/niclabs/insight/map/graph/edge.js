niclabs.insight.map.graph.Edge = (function($) {
    /**
     * TODO: Missing documentation
     */
    var Edge = function(dashboard, options) {
        var self = niclabs.insight.map.marker.Marker(dashboard, options);

        var myLatlngArray = [];

        myLatlngArray[0] = new google.maps.LatLng(options[0].lat, options[0].lng);
        myLatlngArray[1] = new google.maps.LatLng(options[1].lat, options[1].lng);

        var polyline = new google.maps.Polyline({
          path: myLatlngArray,
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 10
        });

        polyline.setMap(self.map.googlemap());

        // Re-write the marker function
        self.marker = function() {
            return polyline;
        };

        self.clickable = function() {
            edge = self.marker();

            listener = google.maps.event.addListener(edge, 'click', function() {
              niclabs.insight.event.trigger('map_element_selected', options);
              //edge = this;
              edge.setOptions({strokeColor: '#FF0000'});
              // Set timeout to stop the animation
              setTimeout(function() {
                  edge.setOptions({strokeColor: '#000000'});
              }, 1000);

            });
            return listener;
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('edge', 'graph', Edge);

    return Edge;
})(jQuery);
