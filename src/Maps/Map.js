var CityDashboard = CityDashboard || {};

CityDashboard.Map = (function(CityDashboard, $){
    "use strict";

    return function(options) {
        var center = {
            lat: options.lat || 0,
            lng: options.lng || 0
        };

        var zoom = options.zoom || 12;

        // jQuery container for the map
        var container = CityDashboard.container('map');

        return {
            /**
             * Set/get the map center.
             * Overriding implementations should modify this method so the
             * map reflects the new center.
             *
             * @param (float) lat optional latitude for the map
             * @param (float) lng optional longitude for the map
             * @returns (Object) {lat: <center latitude>, lng: <center longitude>}
             */
            center: function(lat, lng) {
                center.lat = lat = typeof lat === 'undefined' ? center.lat : lat;
                center.lng = lng = typeof lng === 'undefined' ? center.lng : lng;

                return center;
            },

            /**
             * Get the latitude for the map center
             *
             * @return (float) latitude for the map center
             */
            lat: function() {
                return center.lat;
            },

            /**
             * Get the longitude for the map center
             *
             * @return (float) longitude for the map center
             */
            lng: function() {
                return center.lng;
            },

            /**
             * Set/get the map zoom level.
             * Overriding implementations should modify this method so the
             * map reflects the new zoom.
             *
             * @param (int) zoom optional zoom
             * @returns (int) zoom level of the map
             */
            zoom: function(level) {
                zoom = level = typeof level === 'undefined' ? zoom : level;

                return zoom;
            },

            /**
             * Get the jquery object for the html element of the map
             *
             * @return (jQuery) container for the map
             */
            container: function() {
                return container;
            }
        };
    };
})(CityDashboard, jQuery);
