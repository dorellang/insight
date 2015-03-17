var CityDashboard = CityDashboard || {};

/**
 * Extends {@link CityDashboard.Map} to use google maps as the
 * base
 *
 * @class
 * @extends CityDashboard.Map
 */
CityDashboard.GoogleMap = (function(CityDashboard, $) {
    "use strict";

    /**
     * Constructor of GoogleMap
     *
     * @param {Object} options - configuration options for the map
     */
    return function(options) {

        // Initialize parent
        var map = CityDashboard.Map(options);

        var googlemap = new google.maps.Map(map.container()[0], {
            zoom: map.zoom(),
            center: new google.maps.LatLng(map.lat(), map.lng()),
            disableDefaultUI: true
        });

        // Store the google map in the citydashboard
        // TODO: this is very poor practice
        CityDashboard.container('main')[0].data = googlemap;

        // Store the parent function
        var zoom = map.zoom;

        // Listen for zoom changes
        google.maps.event.addListener(googlemap, 'zoom_changed',
            function() {
                // Update the map zoom
                zoom(googlemap.getZoom());
            });

        /**
         * Set/get the zoom level for the map
         *
         * Overrides the functionality of CityDashboard.Map.zoom() by modifying
         * the underlying google map zoom level as well
         *
         * @override
         * @memberof CityDashboard.GoogleMap
         * @param {int=} zoom - zoom
         * @returns {int} zoom level of the map
         */
        map.zoom = function(level) {
            // Call parent zoom
            level = zoom(level);

            // Update the google map
            googlemap.setZoom(level);

            return level;
        };

        // Store the parent function
        var center = map.center;

        // Listen for center changes
        google.maps.event.addListener(googlemap, 'center_changed',
            function() {
                var c = googlemap.getCenter();

                // Update the center for the local object
                center(c.lat(), c.lng());
            });

        /**
         * Set/get the map center.
         *
         * Overrides the functionality of CityDashboard.Map.center() by modifying
         * the underlying google map center as well
         *
         * @override
         * @memberof CityDashboard.GoogleMap
         * @param {float=} lat - latitude for the map center
         * @param {float=} lng - longitude for the map center
         * @return {CityDashboard.Map.Coordinates} coordinates for the map center
         */
        map.center = function(lat, lng) {
            var c = center(lat, lng);

            // Update the map
            googlemap.setCenter({
                'lat': c.lat,
                'lng': c.lng
            });

            return c;
        };

        /**
         * Get the underlying google map object for further modification
         *
         * @returns (google.maps.Map) underlying map object
         */
        map.googlemap = function() {
            return googlemap;
        };

        return map;
    };
})(CityDashboard, jQuery);
