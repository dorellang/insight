niclabs.insight.map.grid.Tile = (function() {
    /**
     * Construct an abstract tile for the map
     *
     * Tiles are used to construct grids in the map. A grid divides the world into equally sized tiles
     * and then draws over the map the tiles that have data inside them. If the boundaries of the map
     * change, the tile configuration changes.
     *
     * Since a tile is part of a grid, a tile can have a horizontal and vertical cooordinate indicating their
     * position in the grid.
     * @interface niclabs.insight.map.grid.Tile
     */
    var Tile = function() {
        return {
            /**
             * Return the origin coordinates of the tile (i,j) in cartesian
             * coordinate system. This can be passed as a parameter to
             * {@link niclabs.insight.grid.Tile.draw()}
             *
             * @memberof niclabs.insight.map.grid.Tile
             * @abstract
             * @param {integer} i - horizontal coordinate of the tile
             * @param {integer} j - vertical coordinate of the tile
             * @return {niclabs.insight.map.Point} cartesian origin of the tile
             */
            origin: function(i, j) {
                throw new Error("Not implemented");
            },

            /**
             * Get the coordinates of the tile [i,j] in the grid that contains the point with
             * the given coordinates
             *
             * @memberof niclabs.insight.map.grid.Tile
             * @abstract
             * @param {niclabs.insight.map.Point|niclabs.insight.map.LatLng} coord - coordinates of the point in the map
             * @return {integer[]} coordinates of the tile that contains the given point
             */
            query: function(coord) {
                throw new Error("Not implemented");
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
            draw: function(coord, map, options) {
                throw new Error("Not implemented");
            }
        };
    };

    return Tile;
})();
