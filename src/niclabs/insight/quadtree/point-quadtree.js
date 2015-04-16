niclabs.insight.quadtree.PointQuadTree = (function () {
    /**
     * Construct a Point Quadtree
     *
     * See {@link http://en.wikipedia.org/wiki/Quadtree}
     *
     * @class niclabs.insight.quadtree.PointQuadTree
     * @param {niclabs.insight.quadtree.Bounds} bounds - bounding box for the quadtree
     * @param {integer} [capacity=10] - number of points that each node in the quadtree accepts before dividing
     */
    var PointQuadTree = function (bounds, capacity) {
        capacity = capacity || 10;

        var points = [];

        // Children (also quadtrees)
        var northWest, northEast, southWest, southEast;

        /**
         * Subdivide the tree
         *
         * @memberof niclabs.insight.quadtree.PointQuadTree
         * @access private
         */
        function subdivide() {
            northWest = PointQuadTree(niclabs.insight.quadtree.Bounds(bounds.min, bounds.center), capacity);
            northEast = PointQuadTree(niclabs.insight.quadtree.Bounds(
                {x: bounds.center.x, y: bounds.min.y},
                {x: bounds.max.x, y: bounds.center.y}),
                capacity);
            southWest = PointQuadTree(niclabs.insight.quadtree.Bounds(
                {x: bounds.min.x, y: bounds.center.y},
                {x: bounds.center.x, y: bounds.max.y}),
                capacity);
            southEast = PointQuadTree(niclabs.insight.quadtree.Bounds(bounds.center, bounds.max, capacity));
        }

        var self = {
            /**
             * Capacity for the quadtree
             *
             * @memberof niclabs.insight.quadtree.PointQuadTree
             * @member {integer}
             */
            get capacity() {
                return capacity;
            },

            /**
             * Boundary of the quadtree
             * @memberof niclabs.insight.quadtree.PointQuadTree
             * @member {niclabs.insight.quadtree.Bounds}
             */
            get bounds() {
                return bounds;
            },

            /**
             * Insert a new point in the quadtree
             *
             * @memberof niclabs.insight.quadtree.PointQuadTree
             * @param {niclabs.insight.quadtree.Point} point - new point to insert
             * @returns {boolean} true if the point could be inserted (point belongs in the bounds of the quadtree)
             */
            insert: function (point) {
                // Ignore objects that do not belong in this quad tree
                if (!bounds.contains(p)) {
                    return false; // object cannot be added
                }

                // If there is space in this quad tree, add the object here
                if (points.length < capacity) {
                    points.push(point);
                    return true;
                }

                // Otherwise, subdivide and then add the point to whichever node will accept it
                if (northWest === undefined)
                    subdivide();

                if (northWest.insert(point)) return true;
                if (northEast.insert(point)) return true;
                if (southWest.insert(point)) return true;
                if (southEast.insert(point)) return true;

                // Otherwise, the point cannot be inserted for some unknown reason (this should never happen)
                return false;
            },

            /**
             * Return all the points in the specified bounding box
             *
             * @memberof niclabs.insight.quadtree.PointQuadTree
             * @param {niclabs.insight.quadtree.Bounds} range - spatial range to search
             * @returns {niclabs.insight.quadtree.Point[]} list of points in the given range
             */
            query: function(range, pointsInRange) {
                pointsInRange = typeof pointsInRange === 'undefined' ? [] : pointsInRange;

                if (!bounds.intersects(range)) {
                    return pointsInRange; // Empty list
                }

                // Check points at this level
                for (var i = 0; i < points.length; i++) {
                    if (range.contains(points[i])) {
                        pointsInRange.push(points[i]);
                    }
                }

                // Terminate here if there are no children
                if (northWest === undefined)
                    return pointsInRange;

                // Otherwise add the points from the children
                northWest.query(range, pointsInRange);
                northEast.query(range, pointsInRange);
                southWest.query(range, pointsInRange);
                southEast.query(range, pointsInRange);

                // Otherwise add the points from the children
                return pointsInRange;
            }
        };

        return self;
    };

    return PointQuadTree;
})();
