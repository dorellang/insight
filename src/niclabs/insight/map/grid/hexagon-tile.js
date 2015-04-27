niclabs.insight.map.grid.HexagonTile = (function() {
    /**
     * Define a hexagon tile to be drawn on the map
     *
     * @class niclabs.insight.map.grid.HexagonTile
     * @implements niclabs.insight.map.grid.Tile
	 * @param {float} side - side (or radius) of the hexagon
     */
	var HexagonTile = function(side) {
		// See http://www.codeproject.com/Articles/14948/Hexagonal-grid-for-games-and-other-projects-Part
        // for the description of R and H
        var R = Math.cos(Math.PI / 6) * side;
        var H = Math.sin(Math.PI / 6) * side;

        var self = niclabs.insight.map.grid.Tile();

        /**
		* Side of the hexagon
		*
		* @memberof niclabs.insight.map.grid.HexagonTile
		* @member {float}
		*/
		Object.defineProperty(self, "s", { get: function () { return side; } });


        /**
		* Distance of the hexagon
		*
		* @memberof niclabs.insight.map.grid.HexagonTile
		* @member {float}
		*/
		Object.defineProperty(self, "r", { get: function () { return R; } });


        /**
		* Height of the hexagon
		*
		* @memberof niclabs.insight.map.grid.HexagonTile
		* @member {float}
		*/
		Object.defineProperty(self, "h", { get: function () { return H; } });

        /**
         * Return the origin coordinates of the tile (i,j) in cartesian
         * coordinate system. This can be passed as a parameter to
         * {@link niclabs.insight.grid.Tile.draw()}
         *
         * @memberof niclabs.insight.map.grid.HexagonTile
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

            // From http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
            var x = i * 2 * R + (j & 1) * R + R;
            var y = j * (H + side);

            return {'x': x, 'y': y};
        };

        /**
         * Get the coordinates of the tile [i,j] in the grid that contains the point with
         * the given coordinates
         *
         * See: http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
         *
         * @memberof niclabs.insight.map.grid.HexagonTile
         * @param {niclabs.insight.map.Point|niclabs.insight.map.LatLng} coord - coordinates of the point in the map
         * @return {integer[]} coordinates of the tile that contains the given point
         */
        self.query = function(coord) {
            // Convert coordinates to cartesian
            if (coord.lat) {
                coord = niclabs.insight.map.GoogleMercator.cartesian(coord);
            }

            // Coordinates for the square
            var square_i = Math.floor(coord.x / (2 * R));
            var square_j = Math.floor(coord.y / (H + side));

            // Coordinates of the pixel with respect to the edge of the square
            var square_pixel_x = coord.x - square_i * 2 * R;
            var square_pixel_y = coord.y - square_j * (H + side);

            // Is type A if the row is even
            var rowIsTypeA = ((square_j & 1) === 0);

            var hex_i = square_i;
            var hex_j = square_j;

            if (rowIsTypeA) {
                if (square_pixel_x <= R && square_pixel_y < (- H / R) * square_pixel_x + H) {
                    hex_i = square_i - 1;
                    hex_j = square_j - 1;
                }
                else if (square_pixel_x > R && square_pixel_y < (H / R) * square_pixel_x - H) {
                    hex_i = square_i;
                    hex_j = square_j - 1;
                }
            }
            else {
                if (square_pixel_x <= R) {
                    if (square_pixel_y < (H / R) * square_pixel_x) {
                        hex_i = square_i;
                        hex_j = square_j - 1;
                    }
                    else {
                        hex_i = square_i - 1;
                        hex_j = square_j;
                    }
                }
                else if (square_pixel_x > R){
                    if (square_pixel_y < (- H / R) * square_pixel_x + 2 * H) {
                        hex_i = square_i;
                        hex_j = square_j - 1;
                    }
                }
            }
            return [hex_i, hex_j];
        };

        /**
		* Get the vertices for the tile with origin in coordinates coord
		*
		* @memberof niclabs.insight.map.grid.HexagonTile
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
			points[0] = {'x': coord.x,     'y': coord.y};
			points[1] = {'x': coord.x + R, 'y': coord.y + H};
			points[2] = {'x': coord.x + R, 'y': coord.y + side + H};
			points[3] = {'x': coord.x,     'y': coord.y + side + H + H};
			points[4] = {'x': coord.x - R, 'y': coord.y + side + H};
			points[5] = {'x': coord.x - R, 'y': coord.y + H};

			return points;
        };

        return self;
	};

    return HexagonTile;
})();
