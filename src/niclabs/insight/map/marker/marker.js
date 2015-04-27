niclabs.insight.map.marker.Marker = (function($) {
    /**
     * Construct a new marker
     *
     * @class niclabs.insight.map.marker.Marker
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.layer - identifier for the layer that this marker belongs to
     * @param {float} options.lat - latitude for the marker
     * @param {float} options.lng - longitude for the marker
     * @param {string} options.landmark - landmark that the marker indicates
     */
    var Marker = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The marker must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Markers are only supported for Google Maps at the moment");

        var listener;

        var self = {
            /**
             * Map view where the map belongs to
             * @memberof niclabs.insight.map.marker.Marker
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the marker belongs to
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Return the internal marker object associated with this Marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @abstract
             * @returns {google.maps.Marker} internal marker
             */
            marker: function() {
                return undefined;
            },

            /**
             * Get/activate clickable status for the marker
             *
             * When clicked the marker will trigger a {@link niclabs.insight.MapView#map_element_selected} event
             * with the particular data for the marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @param {boolean} [activate=true] - true to make clickable
             */
            clickable : function(activate) {
                if (activate) {
                    var marker = self.marker();

                    listener = google.maps.event.addListener(marker, 'click', function() {
                        niclabs.insight.event.trigger('map_element_selected', options);

                        // TODO: make configurable?
                        if ('setAnimation' in marker) {
                            marker.setAnimation(google.maps.Animation.BOUNCE);
                        }

                        // Set timeout to stop the animation
                        setTimeout(function() {
                            marker.setAnimation(null);
                        }, 3000);
                    });
                }
                else if (typeof listener !== 'undefined') {
                    google.maps.event.removeListener(listener);
                    listener = undefined;
                }
                return (listener !== undefined);
            },

            /**
             * Clear the marker from the map
             *
             * @memberof niclabs.insight.map.marker.Marker
             */
            clear: function() {
                var marker = self.marker();
                marker.setMap(null);
            },

            /**
             * Set/get the visibility for the marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @param {boolean=} visible - new value for the visibility of the marker
             * @returns {boolean} true if the marker is visible
             */
            visible: function(visible) {
                if (typeof visible === 'undefined') return self.marker().getVisible();
                else self.marker().setVisible(visible);

                return visible;
            }
        };

        return self;
    };

    return Marker;
})(jQuery);
