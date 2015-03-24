/**
 * Map compatibility for the insight dashboard
 *
 * @namespace
 */
niclabs.insight.map = (function () {
    /**
     * Helper method to assign/get the map view to/from the dashboard
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
