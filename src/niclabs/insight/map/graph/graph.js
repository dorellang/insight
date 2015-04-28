niclabs.insight.map.graph.Graph = (function($) {
    /**
     * TODO: Missing documentatino
     */
    var Graph = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The graph must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Graphs are only supported for Google Maps at the moment");

        var self = {
            /**
             * TODO: Missing documentation
             */
            get map () {
                return map;
            },

            /**
             * TODO: Missing documentation
             */
            get layer () {
                return layer;
            },

            /**
             * TODO: Missing documentation
             */
            clear: function() {
            },
        };

        return self;
    };

    return Graph;
})(jQuery);
