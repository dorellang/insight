niclabs.insight.map.grid.HexagonalGrid = (function() {
	var HEXAGON_ORIENTATION_FLAT = 'flat';
    var HEXAGON_ORIENTATION_POINTY = 'pointy';

	/**
     * Define a hexagon tile to be drawn on the map
     *
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
			* Return the coordinates for the hexagon in tile (i,j)
			*/
			coordinates: function() {
				var i, j;
				if (arguments.length == 1) {
					i = arguments[0][0];
					j = arguments[0][1];
				}
				else {
					i = arguments[0];
					i = arguments[1];
				}

				// From http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
				var x = i * 2 * R + (j & 1) * R + R;
				var y = j * (H + side);

				return {'x': x, 'y': y};
			},

			/**
			 * Get the tile (i,j) for the given coordinates
			 *
			 * See: http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
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


				var marker = new google.maps.Marker({
		            position: niclabs.insight.map.GoogleMercator.geographic(
						{x:  square_i * 2*R + square_pixel_x,
						y: square_j * (H + side) + square_pixel_y}
					),
		            map: niclabs.insight.map().googlemap()
		        });

				// Is type A if the row is odd
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
			 * Draw and return a hexagon tile for the specified coordinates
			 */
			draw: function(coord, map) {
				if (!('googlemap' in map))
		            throw new Error("Sorry, I only know how to draw on Google Maps at the moment");

				var hexagon;
				var points = vertices(coord);
				var coordinates = [];
				for (var i = 0; i < points.length; i++) {
					coordinates.push(niclabs.insight.map.GoogleMercator.geographic(points[i]));
				}

				hexagon = new google.maps.Polygon({
					paths: coordinates,
					strokeColor: '#000000',
					strokeOpacity: 0.5,
					strokeWeight: 2,
					fillColor: '#ffffff',
					fillOpacity: 0.2,
					geodesic: true
				});

				hexagon.setMap(map.googlemap());

				return hexagon;
			}
		};

		return self;
	};


    /**
     * Data point for an hexagonal grid
     *
     * @typedef niclabs.insight.map.grid.HexagonalGrid.Data
     * @type {Object}
     * @param {float} lat - latitude for the heatmap point
     * @param {float} lng - longitude for the heatmap point
     * @param {float=} weight - weight for the heatmap point
     */

	/**
     * Construct a new grid
     *
     * @class niclabs.insight.map.grid.HexagonalGrid
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this grid belongs to
     * @param {Object} options - configuration options for the grid
     * @param {string} options.layer - identifier for the layer that this grid belongs to
     * @param {integer} options.size - size for the side of each hexagon (in pixels)
     * @param {niclabs.insight.map.grid.HexagonalGrid.Data[]} options.data - data for the layer
     */
	var HexagonalGrid = function(dashboard, options) {
		var grid = niclabs.insight.map.grid.Grid(dashboard, options);

        // function isPointInPoly(poly, pt) {
        //     for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        //         ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y)) &&
        //             (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x) &&
        //             (c = !c);
        //     return c;
        // }

		var tiles = [];
        // Build the grid
        function build(mapBounds) {
			if (!mapBounds) return;

			var hexagon = HexagonTile(niclabs.insight.map.GoogleMercator.distance(options.size, grid.map.zoom()));

			var ne = niclabs.insight.map.GoogleMercator.cartesian(mapBounds.getNorthEast());
			var sw = niclabs.insight.map.GoogleMercator.cartesian(mapBounds.getSouthWest());

			var width = Math.abs(sw.x - ne.x);
			var height = Math.abs(sw.y - ne.y);

			//var hexagon = HexagonTile(width/32);

			var cols = width / (2 * hexagon.r);
			var rows = height / (hexagon.h + hexagon.s);

			for (var i = 0; i < options.data.length; i++) {
				tiles.push(hexagon.draw(hexagon.coordinates(hexagon.tile(options.data[i])), grid.map));
			}

        }

		grid.clear = function() {
			for (var i = 0; i < tiles.length; i++) {
				tiles[i].setMap(null);
			}
		};

        // Listen to boundary changes
        google.maps.event.addListener(grid.map.googlemap(), 'bounds_changed', function() {
            var bounds = this.getBounds();
            window.setTimeout(function() {
				grid.clear();
                build(bounds);
            }, 50);
        });

		// Build the initial grid
		build(grid.map.googlemap().getBounds());

        return grid;
	};

    // Register the handler
    niclabs.insight.handler('hexagon', 'grid', HexagonalGrid);

	return HexagonalGrid;
})();
