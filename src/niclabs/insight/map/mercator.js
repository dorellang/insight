/**
 * Defines a mercator projection on the map
 *
 * Source: {@link https://developers.google.com/maps/documentation/javascript/examples/map-coordinates}
 *
 * @mixin niclabs.insight.map.Mercator
 */
niclabs.insight.map.Mercator = (function() {
    // Source
    var TILE_SIZE = 256;

    var origin = {x: TILE_SIZE / 2, y: TILE_SIZE / 2};
    var pixelsPerLonDegree = TILE_SIZE / 360;
    var pixelsPerLonRadian = TILE_SIZE / (2 * Math.PI);

    function bound(value, opt_min, opt_max) {
        if (opt_min !== null) value = Math.max(value, opt_min);
        if (opt_max !== null) value = Math.min(value, opt_max);
        return value;
    }

    return {
        /**
         * Convert cartesian coordinates to geographic coordinates using a
         * spherical mercator projection
         *
         * @memberof niclabs.insight.map.Mercator
         * @param {niclabs.insight.map.Point} - cartesian coordinates of the point
         * @returns {niclabs.insight.map.LatLng} - geographic coordinates of the point
         */
        geographic: function(point) {
            var lng = (point.x - origin.x) / pixelsPerLonDegree;
            var latRadians = (point.y - origin.y) / -pixelsPerLonRadian;
            var lat = (2 * Math.atan(Math.exp(latRadians)) - Math.PI / 2).toDeg();

            return {'lat': lat, 'lng': lng};
        },

        /**
         * Convert geographic coordinates to cartesian coordinates using a
         * spherical mercator projection (Google Maps style)
         *
         * For more information see {@link https://alastaira.wordpress.com/2011/01/23/the-google-maps-bing-maps-spherical-mercator-projection/}
         *
         * @memberof niclabs.insight.map.Mercator
         * @param {niclabs.insight.map.latLng} coord - geographic coordinates of the point
         * @returns {niclabs.insight.map.Point} - cartesian coordinates of the point
         */
        cartesian: function(coord) {
            var x = origin.x + coord.lng * pixelsPerLonDegree;

            // Truncating to 0.9999 effectively limits latitude to 89.189. This is
            // about a third of a tile past the edge of the world tile.
            var siny = bound(Math.sin(coord.lat.toRad()), -0.9999, 0.9999);
            var y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) * -pixelsPerLonRadian;

            return {'x': x, 'y': y};
        }
    };
})();
