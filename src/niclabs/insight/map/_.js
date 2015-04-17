/**
 * Map compatibility for the insight dashboard
 *
 * @namespace
 */
niclabs.insight.map = (function () {
    /** Converts numeric degrees to radians */
    if (typeof Number.prototype.toRad === "undefined") {
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
        };
    }

    /** Converts numeric radians to degrees */
    if (typeof Number.prototype.toDeg === "undefined") {
        Number.prototype.toDeg = function() {
            return this * 180 / Math.PI;
        };
    }

    /**
     * Object to represent geographic coordinates
     *
     * @typedef {Object} niclabs.insight.map.LatLng
     * @property {float} lat - latitude
     * @property {float} lng - longitude
     */

     /**
      * Cartesian coordinates
      *
      * @typedef {Object} niclabs.insight.map.Point
      * @property {float} x - horizontal coordinate
      * @property {float} y - vertical coordinate
      */


    /**
     * Helper method to assign/get the map view to/from the dashboard
     *
     * @example
     * ```javascript
     * // Create the map
     * var map = niclabs.insight.map({
     *      'handler': 'google-map', // Map constructor
     *      'lat': 48.8583,
     *      'lng': 2.2944,
     *      'zoom': 15
     * });
     * ```
     *
     * @memberof niclabs.insight
     * @variation 2
     * @param {Object|niclabs.insight.MapView} [obj] - configuration for the map view or map view object
     * @param {String} obj.handler - name of the handler to construct the map view
     * @returns {niclabs.insight.MapView} the dashboard map view
     */
    var map = function (obj) {
        var dashboard = niclabs.insight.dashboard();
        if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");
        return dashboard.map(obj);
    };

    return map;
})();
