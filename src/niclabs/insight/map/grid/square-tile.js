niclabs.insight.map.grid.SquareTile = (function() {
    /**
     * Define a square tile to be drawn on the map
     *
     * @class niclabs.insight.map.grid.SquareTile
     * @implements niclabs.insight.map.grid.Tile
	 * @param {float} side - side (or radius) of the square
     */
	var SquareTile = function(side) {
		var self = niclabs.insight.map.grid.Tile();

		/**
		* Side of the square
		*
		* @memberof niclabs.insight.map.grid.SquareTile
		* @member {float}
		*/
		Object.defineProperty(self, "s", { get: function () { return side; } });


		/**
		* Return the origin coordinates of the tile (i,j) in cartesian
		* coordinate system. This can be passed as a parameter to
		* {@link niclabs.insight.grid.Tile.draw()}
		*
		* @memberof niclabs.insight.map.grid.SquareTile
		* @param {integer} i - horizontal coordinate of the tile
		* @param {integer} j - vertical coordinate of the tile
		* @return {niclabs.insight.map.Point} cartesian origin of the tile
		*/
		self.origin = function() {
			var i, j;
			if (arguments.length == 1) {
				i = arguments[0][0];
				j = arguments[0][1];
			}
			else {
				i = arguments[0];
				j = arguments[1];
			}
			var x = i * side;
			var y = j * side;

			return {'x': x, 'y': y};
		};

		/**
		* Get the coordinates of the tile [i,j] in the grid that contains the point with
		* the given coordinates
		*             *
		* @memberof niclabs.insight.map.grid.SquareTile
		* @param {niclabs.insight.map.Point|niclabs.insight.map.LatLng} coord - coordinates of the point in the map
		* @return {integer[]} coordinates of the tile that contains the given point
		*/
		self.query = function(coord) {
			// Convert coordinates to cartesian
			if (coord.lat) {
				coord = niclabs.insight.map.GoogleMercator.cartesian(coord);
			}

			// Coordinates for the square
			var square_i = Math.floor(coord.x / side);
			var square_j = Math.floor(coord.y / side);


			return [square_i, square_j];
		};

		/**
		* Get the vertices for the tile with origin in coordinates coord
		*
		* @memberof niclabs.insight.map.grid.SquareTile
		* @param {niclabs.insight.map.Point|niclabs.insight.map.LatLng} coord - coordinates of the tile in the map
		* @return {niclabs.insight.map.Point[]} coordinates of the vertices of the tile
		*/
		self.vertices = function(coord) {
			// Convert coordinates to cartesian
			if (coord.lat) {
				coord = niclabs.insight.map.GoogleMercator.cartesian(coord);
			}

			//x,y coordinates are top center point
			var points = [];
			points[0] = {'x': coord.x, 'y': coord.y};
			points[1] = {'x': coord.x, 'y': coord.y + side};
			points[2] = {'x': coord.x + side, 'y': coord.y + side};
			points[3] = {'x': coord.x + side, 'y': coord.y};

			return points;
		};

		return self;
	};

    return SquareTile;
})();
