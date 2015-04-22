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
					j = arguments[1];
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
			 * Draw and return a hexagon tile for the specified coordinates
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

	/**
	 * Returns a function to calculate the fill as the interpolation on the average between the point weights
	 *
	 * @param {string} start_rgb - starting color for the interpolation
	 * @param {string} end_rgb - ending color for the interpolation
	 * @return {niclabs.insight.map.grid.HexagonalGrid~fill} average function
	 */
	function averageFill(start_rgb, end_rgb) {
		start_rgb = niclabs.insight.Color.hexToRgb(start_rgb);
		end_rgb = niclabs.insight.Color.hexToRgb(end_rgb);

		return function(points) {
			var avg = 0;
			var size = 0;

			for (i = 0; i < points.length; i++) {
				if ('weight' in points[i]) {
					avg += points[i].weight;
					size++;
				}
			}

			// Calculate average
			if (size > 0) {
				avg = avg / size;
				return niclabs.insight.Color.rgbToHex(niclabs.insight.Interpolation.interpolateRgb(avg, 1, start_rgb, end_rgb));
			}

			return '#ffffff';
		};
	}

	/**
	 * Returns a function to calculate the fill as the interpolation on the median between the point weights
	 *
	 * @param {string} start_rgb - starting color for the interpolation
	 * @param {string} end_rgb - ending color for the interpolation
	 * @return {niclabs.insight.map.grid.HexagonalGrid~fill} median function
	 */
	function medianFill(start_rgb, end_rgb) {
		function partition(data, i, j) {
	        var pivot = Math.floor((i+j)/2);
	        var temp;
	        while(i <= j){
	            while(data[i].weight < data[pivot].weight)
	                i++;
	            while(data[j].weight > data[pivot].weight)
	                j--;
	            if(i <= j){
	                temp = data[i];
	                data[i]=data[j];
	                data[j] = temp;
	                i++;
					j--;
	            }
	        }
	        return pivot;
	    }

		start_rgb = niclabs.insight.Color.hexToRgb(start_rgb);
		end_rgb = niclabs.insight.Color.hexToRgb(end_rgb);

		return function(points) {
			var median = 0;
			var left = 0, right = points.length > 0 ? points.length - 1: 0;
	        var mid = Math.floor((left + right) / 2);
	        median = partition(points, left, right);
	        while (median !== mid) {
	            if(median < mid)
	                median = partition(points, mid, right);
	            else median = partition(points, left, mid);
	        }

			return niclabs.insight.Color.rgbToHex(niclabs.insight.Interpolation.interpolateRgb(points[median].weight, 1, start_rgb, end_rgb));
		};
	}

    /**
     * Data point for an hexagonal grid
     *
     * @typedef niclabs.insight.map.grid.HexagonalGrid.Data
     * @type {Object}
     * @param {float} lat - latitude for the heatmap point
     * @param {float} lng - longitude for the heatmap point
     * @param {float=} weight - weight for the heatmap point (between 0 and 1)
     */

	/**
	 * Fill calculation function. Receives the list of points of a hexagon and
	 * returns a color for that hexagon
	 * @callback niclabs.insight.map.grid.HexagonalGrid~fill
	 * @param {niclabs.insight.map.grid.HexagonalGrid.Data[]} points
	 * @param {string} fill color for the hexagon
	 */

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

		var tiles = [];

		var hexagonConfig = {
			strokeColor: 'strokeColor' in options ? options.strokeColor : '#000000',
			strokeOpacity: 'strokeOpacity' in options ? options.strokeOpacity : 0.6,
			strokeWeight: 'strokeWeight' in options ? options.strokeWeight : 2,
			fillOpacity: 'fillOpacity' in options ? options.fillOpacity : 0.6,
		};

		// Default fill function
		function fillColor() {
			return '#ffffff';
		}

		var fill = options.fill || fillColor;
		if (typeof fill === 'string') {
			if (options.fill.charAt(0) === '#') {
				fill = function() {return options.fill;};
			}
			else if (options.fill === 'average') {
				fill = averageFill(options.fillStart || '#ff0000', options.fillEnd || '#00ff00');
			}
			else if (options.fill === 'median') {
				fill = medianFill(options.fillStart || '#ff0000', options.fillEnd || '#00ff00');
			}
			else {
				fill = fillColor;
			}
		}

		var worldBounds = niclabs.insight.quadtree.Bounds(
			niclabs.insight.map.GoogleMercator.cartesian({lat: 90, lng: -180}),
			niclabs.insight.map.GoogleMercator.cartesian({lat: -90, lng: 180})
		);

		var quadtree = niclabs.insight.quadtree.PointQuadTree(worldBounds);

		// TODO: put all data points in a world wide quad tree
		for (var i = 0; i < options.data.length; i++) {
			var coord = niclabs.insight.map.GoogleMercator.cartesian(options.data[i]);

			options.data[i].x = coord.x;
			options.data[i].y = coord.y;

			quadtree.insert(options.data[i]);
		}

		function notifyHexClick(points) {
			return function() {
				niclabs.insight.event.trigger('map_element_selected', points);
			};
		}

		// TODO: create a function to calculate the color

        // Build the grid
        function build(mapBounds) {
			if (!mapBounds) return;

			var hexagon = HexagonTile(niclabs.insight.map.GoogleMercator.distance(options.size, grid.map.zoom()));

			// find all points in the map bounds using the quadtree
			var points = quadtree.query(niclabs.insight.quadtree.Bounds(
				niclabs.insight.map.GoogleMercator.cartesian({lat: mapBounds.getNorthEast().lat(), lng: mapBounds.getSouthWest().lng()}),
				niclabs.insight.map.GoogleMercator.cartesian({lat: mapBounds.getSouthWest().lat(), lng: mapBounds.getNorthEast().lng()})
			));

			var pointSets = [];
			var hex_i, hex_j;

			for (var i = 0; i < points.length; i++) {
				var coord = hexagon.tile(points[i]);
				hex_i = coord[0];
				hex_j = coord[1];

				if (!pointSets[hex_i]) pointSets[hex_i] = [];
				if (!pointSets[hex_i][hex_j]) pointSets[hex_i][hex_j] = [];

				// if pointSets[hex_i][hex_j] add the point to the list
				pointSets[hex_i][hex_j].push(points[i]);
			}

			tiles = [];

			// for each tile, average (or median) the weights and draw the map
			for (hex_i in pointSets) {
				for (hex_j in pointSets[hex_i]) {
					hexagonConfig.fillColor = fill(pointSets[hex_i][hex_j]);

					// Draw the hexagon
					// TODO: set the options
					var tile = hexagon.draw(hexagon.coordinates(hex_i, hex_j), grid.map, hexagonConfig);

					// Add an event to the click
					google.maps.event.addListener(tile, 'click', notifyHexClick(pointSets[hex_i][hex_j]));

					tiles.push(tile);
				}
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
