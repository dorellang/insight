/**
 * Visualization layers for the dashboard
 *
 * @namespace
 */
niclabs.insight.layer = (function () {
    /**
     * Helper method to add/get a {@link niclabs.insight.layer.Layer} for the dashboard
     *
     * A layer acts as a link between a source of data and a visualization on the map
     *
     * - If a number or string is provided as value for obj, the layer with that id is returned
     * - If a generic object is provided with the handler defined in the 'handler' property, a new layer
     * is created using the handler and the layer is added to the list of
     * layers of the dashboard
     * - If an object is provided without handler, it is assumed to be a Layer object and added to the
     * layer list as is.
     *
     * @memberof niclabs.insight
     * @variation 2
     * @param {string|number|Object| niclabs.insight.layer.Layer} obj - layer id to get or configuration options for the new layer
     * @param {boolean} [activate=false] - if true, set the layer as the active layer of the dashboard
     * @returns {niclabs.insight.info.Layer} - layer for the provided id
     */
    var layer = function (obj, activate) {
        var dashboard = niclabs.insight.dashboard();
        if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");

        return dashboard.layer(obj, activate);
    };

    return layer;
})();
