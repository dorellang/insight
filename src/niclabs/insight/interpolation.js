/**
 * Defines interpolation utils
 *
 * @mixin
 */
niclabs.insight.Interpolation = (function() {
    /**
     * Return the position for value in the interval [start_point, end_point]
     * where value can go from 0 to maximum.
     *
     * Source: http://stackoverflow.com/questions/168838/color-scaling-function
     *
     * @memberof niclabs.insight.Interpolation
     * @param {float} value - value to interpolate
     * @param {flaot} maximum - maximum value that value can take
     * @param {float} start_point - beginning of the interval
     * @param {float} end_point - end of the interval
     * @return {float} - interpolation value
     */
    function interpolate(value, maximum, start_point, end_point) {
        return start_point + (end_point - start_point)*value/maximum;
    }

    /**
     * Return the position for value in the 3-dimensional line between
     * the vectors [s, e], where value can go from 0 to maximum.
     *
     * Source: http://stackoverflow.com/questions/168838/color-scaling-function
     *
     * @memberof niclabs.insight.Interpolation
     * @param {float} value - value to interpolate
     * @param {flaot} maximum - maximum value that value can take
     * @param {float[]} s - 3d vector to use as start of the interval
     * @param {float[]} e - 3d vector to use as end of the interval
     * @return {float[]} - interpolation vector
     */
    function interpolate3d(value, maximum, s, e) {
        var r1= interpolate(value, maximum, s[0], e[0]);
        var r2= interpolate(value, maximum, s[1], e[1]);
        var r3= interpolate(value, maximum, s[2], e[2]);
        return [r1, r2, r3];
    }

    /**
     * Calculate interpolated rgb color between the rgb start and end colors
     * for the value value with the specified maximum
     *
     * @memberof niclabs.insight.Interpolation
     * @param {float} value - value to interpolate
     * @param {flaot} maximum - maximum value that value can take
     * @param {integer[]} start_rgb - rgb color to use as start of the range
     * @param {integer[]} e - rgb color to use as end of the range
     * @return {integer[]} - interpolated color
     */
    function interpolateRgb(value, maximum, start_rgb, end_rgb) {
        var start_hsv = niclabs.insight.Color.rgbToHsv(start_rgb[0], start_rgb[1], start_rgb[2]);
        var end_hsv = niclabs.insight.Color.rgbToHsv(end_rgb[0], end_rgb[1], end_rgb[2]);

        var hsv_result = interpolate3d(value, maximum, start_hsv, end_hsv);
        return niclabs.insight.Color.hsvToRgb(hsv_result[0],hsv_result[1],hsv_result[2]);
    }

    return {
        'interpolate': interpolate,
        'interpolate3d': interpolate3d,
        'interpolateRgb': interpolateRgb
    };
})();
