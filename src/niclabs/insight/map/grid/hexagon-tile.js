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

		/**
		* Returns coordinates for the vertices of the hexagon at the given location
		*
		* @returns {float[]}  coordinates of the vertices
		*/
		function vertices(coord) {
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
		}

		var self = {
			/**
			 * Side of the hexagon
			 */
			get s () {
				return side;
			},

			/**
			 * Distance of the hexagon
			 */
			get r () {
				return R;
			},

			/**
			 * Height of the hexagon
			 */
			get h () {
				return H;
			},

            /**
             * Return the origin coordinates of the tile (i,j) in cartesian
             * coordinate system. This can be passed as a parameter to
             * {@link niclabs.insight.grid.Tile.draw()}
             *
             * @memberof niclabs.insight.map.grid.HexagonTile
             * @abstract
             * @param {integer} i - horizontal coordinate of the tile
             * @param {integer} j - vertical coordinate of the tile
             * @return {niclabs.insight.map.Point} cartesian origin of the tile
             */
			origin: function() {
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
			},

            /**
             * Get the coordinates of the tile [i,j] in the grid that contains the point with
             * the given coordinates
             *
             * See: http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
             *
             * @memberof niclabs.insight.map.grid.HexagonTile
             * @abstract
             * @param {niclabs.insight.map.Point|niclabs.insight.map.LatLng} coord - coordinates of the point in the map
             * @return {integer[]} coordinates of the tile that contains the given point
             */
			tile: function(coord) {
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
			},

            /**
             * Draw a tile in the given coordinates on the specified map view
             *
             * @memberof niclabs.insight.map.grid.Tile
             * @abstract
             * @param {niclabs.insight.map.Point|niclabs.insight.map.LatLng} coord - coordinates of the tile in the map
             * @param {niclabs.insight.MapView} map - map view to draw the tile on
             * @param {Object} options - configuration options for drawing the tile
             * @param {string} [options.strokeColor='#000000'] - color for the stroke of each tile
             * @param {float} [options.strokeOpacity=0.6] - opacity for the stroke (between 0-1)
             * @param {integer} [options.strokeWeight=2] - border weight for the tile
             * @param {string} [options.fillColor='#ffffff'] - color for the fill of the tile
             * @param {float} [options.fillOpacity=0.6] - opacity for the fill of the tile
             * @return {object} object drawn on the map (e.g.) google maps polygon
             */
			draw: function(coord, map, config) {
				if (!('googlemap' in map))
		            throw new Error("Sorry, I only know how to draw on Google Maps at the moment");

				var hexagon;
				var points = vertices(coord);
				var coordinates = [];
				for (var i = 0; i < points.length; i++) {
					coordinates.push(niclabs.insight.map.GoogleMercator.geographic(points[i]));
				}

				// Set default configuration
				config = config || {
					strokeColor: '#000000',
					strokeOpacity: 0.6,
					strokeWeight: 2,
					fillColor: '#ffffff',
					fillOpacity: 0.6,
				};

				config.paths = coordinates;
				config.geodesic = true;

				// Create the hexagon with the configuration
				hexagon = new google.maps.Polygon(config);

				hexagon.setMap(map.googlemap());

				return hexagon;
			}
		};

		return self;
	};

    return HexagonTile;
})();
