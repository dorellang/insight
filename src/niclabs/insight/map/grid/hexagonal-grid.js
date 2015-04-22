niclabs.insight.map.grid.HexagonalGrid = (function() {




	/**
     * Construct an hexagonal grid from the data provided.
	 *
	 * The grid divides the visible map into hexagonal tiles of the same size and draws only those
	 * tiles that have elements below them. If a weight is provided for the the data points
	 * each hexagon is painted with a function of the point weights inside the hexagon
     *
     * @class niclabs.insight.map.grid.HexagonalGrid
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this grid belongs to
     * @param {Object} options - configuration options for the grid
     * @param {string} options.layer - identifier for the layer that this grid belongs to
     * @param {integer} options.size - size for the side of each hexagon (in pixels)
	 * @param {string} [options.strokeColor='#000000'] - color for the stroke of each hexagon
	 * @param {float} [options.strokeOpacity=0.6] - opacity for the stroke (between 0-1)
	 * @param {integer} [options.strokeWeight=2] - border weight for the hexagon
	 * @param {string|niclabs.insight.map.grid.HexagonalGrid~fill} [options.fill='#ffffff'] - color for the fill of the hexagon,
	 * 	it can have one of the following values:
	 *  	- 'average' calculates the average of the weights in the hexagon and interpolates that value between the values for options.fill_start and options.fill_end
	 *  	- 'median' calculates the median of the weights in the hexagon and interpolates as average
	 *  	- rgb color (starting with '#') is used as a fixed color for all hexagons
	 *  	- a callback receiving the points in the hexagon and returning the value for the color
	 * @param {string} [options.fillStart='#ff0000'] - if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function
	 * @param {string} [options.fillEnd='#00ff00'] - if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function
	 * @param {float} [options.fillOpacity=0.6] - opacity for the fill of the hexagon
     * @param {niclabs.insight.map.grid.HexagonalGrid.Data[]} options.data - data for the layer
     */
	var HexagonalGrid = function(dashboard, options) {
		var grid = niclabs.insight.map.grid.Grid(dashboard, options);

		grid.tile = function() {
			return niclabs.insight.map.grid.HexagonTile(niclabs.insight.map.GoogleMercator.distance(options.size, grid.map.zoom()));
		};

        return grid;
	};

    // Register the handler
    niclabs.insight.handler('hexagon', 'grid', HexagonalGrid);

	return HexagonalGrid;
})();
