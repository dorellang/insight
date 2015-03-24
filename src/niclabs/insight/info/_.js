/**
 * Contains the definitions for the information blocks supported by insight
 *
 * @namespace
 */
niclabs.insight.info = (function () {
    /**
     * Helper method to assign/get the information view to/from the dashboard
     *
     * @example
     * ```javascript
     * // Create the info view
     * niclabs.insight.info({
     *      handler: 'basic-info-view', // The view constructor
     *      blocks: [{
     *          'handler': 'summary-block', // The block constructor
     *          'id': '#summary',
     *          'title': 'My Marker Summary',
     *          'data': { // Default data
     *              'description': 'This block will show the details of the selected markers'
     *        },
     *        ignore: ['layer', 'type', 'src'] // Data elements we don't want on the block
     *    }]
     * });
     * ```
     *
     * @memberof niclabs.insight
     * @variation 2
     * @param {Object|niclabs.insight.InfoView} [obj] - configuration for the information view or information view object
     * @param {String} obj.handler - name of the handler to construct the info view
     * @returns {niclabs.insight.InfoView} the dashboard information view
     */
    var info = function(obj) {
        var dashboard = niclabs.insight.dashboard();
        if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");
        return dashboard.info(obj);
    };

    return info;
})();
