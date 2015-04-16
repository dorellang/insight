niclabs.insight.map.grid.Grid = (function() {
	/**
	 * Construct a grid over the map
	 *
	 * @class niclabs.insight.map.grid.Grid
	 * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
	 */
	var Grid = function(dashboard, options) {
		if (!('layer' in options))
            throw new Error('The grid must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Grids are only supported for Google Maps at the moment");

        var self = {
            /**
             * Map view where the grid belongs to
             * @memberof niclabs.insight.map.grid.Grid
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the grid belongs to
             *
             * @memberof niclabs.insight.map.grid.Grid
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Clear the grid from the map
             *
             * @memberof niclabs.insight.map.grid.Grid
             */
            clear: function() {
            },
        };

        return self;
	};

	return Grid;
})();
