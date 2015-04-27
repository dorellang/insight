niclabs.insight.quadtree.Bounds = (function() {
    /**
     * Construct an axis aligned bounding box with the corners
     * at the provided coordinates
     *
     * @class niclabs.insight.quadtree.Bounds
     * @param {niclabs.insight.quadtree.Point} min - minimal coordinates of the bounding box (e.g. lower left corner if zero is at the lower left corner of the canvas)
     * @param {niclabs.insight.quadtree.Point} max - maximal coordinates of the bounding box (e.g. upper right corner if zero is at the lower left corner of the canvas)
     */
    var Bounds = function(min, max) {
        var center = {x: (min.x + max.x) / 2.0,
            y: (min.y + max.y) / 2.0};


        return {
            /**
             * Center of the bounding box
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @member {niclabs.insight.quadtree.Point}
             */
            get center () {
                return center;
            },

            /**
             * Minimal coordinates of the bounding box
             * (e.g. lower left corner if zero is at the lowest leftmost corner of the canvas)
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @member {niclabs.insight.quadtree.Point}
             */
            get min () {
                return min;
            },

            /**
             * Maximal coordinates of the bounding box
             * (e.g. upper right corner if zero is at the lowest leftmost corner of the canvas)
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @member {niclabs.insight.quadtree.Point}
             */
            get max () {
                return max;
            },

            /**
             * Check if this bounding box contains the given point.
             *
             * As a convention, a bounding box contains all points inside its borders
             * as well as all the points in the east and south borders.
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @param {niclabs.insight.quadtree.Point} point - point to lookup
             * @returns {boolean} true if the box contains the point
             */
            contains: function(point) {
                return min.x <= point.x && point.x < max.x && min.y <= point.y && point.y < max.y;
            },

            /**
             * Check if this bounding box intersects the given bounding box
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @param {niclabs.insight.quadtree.Bounds} box - bounding box to check intersection with
             * @returns {boolean} true if the boxes intersect in at least one point
             */
            intersects: function(box) {
                // The explanation: http://gamemath.com/2011/09/detecting-whether-two-boxes-overlap/
                if (max.x < box.min.x) return false; // self is left of box
                if (min.x > box.max.x) return false; // self is right of box
                if (max.y < box.min.y) return false; // self is above of box
                if (min.y > box.max.y) return false; // self is below of box
                return true; // boxes overlap
            }
        };
    };

    return Bounds;
})();
