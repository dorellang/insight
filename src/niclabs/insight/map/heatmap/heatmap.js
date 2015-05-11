niclabs.insight.map.heatmap.Heatmap = (function($) {
    /**
     * Construct a heatmap over the map
     *
     * @class niclabs.insight.map.heatmap.Heatmap
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the heatmap
     */
    var Heatmap = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The heatmap must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Heatmaps are only supported for Google Maps at the moment");

        var self = {
            /**
             * Map view where the heatmap belongs to
             * @memberof niclabs.insight.map.heatmap.Heatmap
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the heatmap belongs to
             *
             * @memberof niclabs.insight.map.heatmap.Heatmap
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Clear the heatmap from the map
             *
             * @memberof niclabs.insight.map.heatmap.Heatmap
             */
            clear: function() {
            },
        };

        return self;
    };

    return Heatmap;
})(jQuery);
