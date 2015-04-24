niclabs.insight.filter.Filter = (function() {
    /**
     * Defines a filter for the dashboard
     *
     * A filter provides both a visual filtering representation
     * and an apply() function to be used on a data element for
     * filtering
     *
     * For instance, a select filter will be visualized as a `<select>`
     * HTML element, and calls to apply will pass the call to the appropriate
     * filtering function according to the selected element
     *
     * @class niclabs.insight.filter.Filter
     * @augments niclabs.insight.View
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this filter belongs to
     * @param {Object} options - configuration options for the filter
     */
    var Filter = function(dashboard, options) {
        var view = niclabs.insight.View(options);

        // Configure the view
        view.$.addClass('filter');

        /**
         * Apply the filter to a data element
         *
         * @memberof niclabs.insight.filter.Filter
         * @abstract
         * @param {Object} element - data element to evaluate
         * @return {boolean} - true if the data element passes the filter
         */
        view.apply = function(element) {
            return true;
        };

        return view;
    };

    return Filter;
})();
