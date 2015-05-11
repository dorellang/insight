niclabs.insight.map.GoogleMap = (function($) {
    "use strict";

    /**
     * Constructor of GoogleMap
     *
     * @class niclabs.insight.map.GoogleMap
     * @extends {niclabs.insight.MapView}
     * @param {Object} options - configuration options for the map
     * @param {integer} [options.zoom=12] - starting zoom level of the map
     * @param {float} [options.lat=0] - latitude for the map center
     * @param {float} [options.lng=0] - lng for the map center
     */
    var GoogleMap = function(dashboard, options) {

        // Initialize parent
        var map = niclabs.insight.MapView(options);

        var googlemap = new google.maps.Map(map.element, {
            zoom: map.zoom(),
            center: new google.maps.LatLng(map.lat, map.lng),
            disableDefaultUI: true
        });

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
         * Overrides the functionality of niclabs.insight.MapView.zoom() by modifying
         * the underlying google map zoom level as well
         *
         * @override
         * @memberof niclabs.insight.map.GoogleMap
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
         * Overrides the functionality of {@link niclabs.insight.MapView.center} by modifying
         * the underlying google map center as well
         *
         * @override
         * @memberof niclabs.insight.map.GoogleMap
         * @param {float=} lat - latitude for the map center
         * @param {float=} lng - longitude for the map center
         * @return {niclabs.insight.map.LatLng} coordinates for the map center
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

    // Register the handler
    niclabs.insight.handler('google-map', 'map-view', GoogleMap);

    return GoogleMap;
})(jQuery);
