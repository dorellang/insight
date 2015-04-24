niclabs.insight.map.grid.SquareGrid = (function() {
	/**
     * Construct a square grid from the data provided.
	 *
	 * The grid divides the visible map into square tiles of the same size and draws only those
	 * tiles that have elements below them. If a weight is provided for the the data points
	 * each square is painted with a function of the point weights inside the square
     *
     * @class niclabs.insight.map.grid.SquareGrid
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this grid belongs to
     * @param {Object} options - configuration options for the grid
     * @param {string} options.layer - identifier for the layer that this grid belongs to
     * @param {integer} options.size - size for the side of each square (in pixels)
	 * @param {string} [options.strokeColor='#000000'] - color for the stroke of each square
	 * @param {float} [options.strokeOpacity=0.6] - opacity for the stroke (between 0-1)
	 * @param {integer} [options.strokeWeight=2] - border weight for the square
	 * @param {string|niclabs.insight.map.grid.SquareGrid~fill} [options.fill='#ffffff'] - color for the fill of the square,
	 * 	it can have one of the following values:
	 *  	- 'average' calculates the average of the weights in the square and interpolates that value between the values for options.fill_start and options.fill_end
	 *  	- 'median' calculates the median of the weights in the square and interpolates as average
	 *  	- rgb color (starting with '#') is used as a fixed color for all hexagons
	 *  	- a callback receiving the points in the square and returning the value for the color
	 * @param {string} [options.fillStart='#ff0000'] - if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function
	 * @param {string} [options.fillEnd='#00ff00'] - if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function
	 * @param {float} [options.fillOpacity=0.6] - opacity for the fill of the square
     * @param {niclabs.insight.map.grid.SquareGrid.Data[]} options.data - data for the layer
     */
	var SquareGrid = function(dashboard, options) {
		var grid = niclabs.insight.map.grid.Grid(dashboard, options);

		// Calculate the square side according to the zoom
		grid.tile = function() {
			return niclabs.insight.map.grid.SquareTile(niclabs.insight.map.GoogleMercator.distance(options.size, grid.map.zoom()));
		};

		// Refresh the grid
		grid.refresh();

        return grid;
	};

    // Register the handler
    niclabs.insight.handler('square', 'grid', SquareGrid);

	return SquareGrid;
})();
