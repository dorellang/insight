/**
 * Tools for drawing graphs on the map
 *
 * @namespace
 */
niclabs.insight.map.graph = (function($) {

    return {
        /** This part MUST be improved

        /**
         * TODO: Missing documentation
         */
        createLines: function(Positions, Verts) {

            var rad2deg = 180 / Math.PI;
            if (Verts.length < 2) return;

            var p0 = Positions[Verts[0]];
            var poss = [p0];

            var p = 0;

            for (var i = 1; i < Verts.length; i++) {
                p = Positions[Verts[i]];
                poss = poss.concat(this.SplitSegment(p0, p), [p]);
                p0 = p;
            }

            var lines = [];
            for (var j = 0; j < poss.length; j++) {
                p = poss[j];
                var lat = rad2deg * Math.atan2(p[2], Math.sqrt(p[0] * p[0] + p[1] * p[1]));
                var lng = rad2deg * Math.atan2(p[1], p[0]);
                lines.push([lat, lng]);
            }

            return lines;
        },

        /**
         * TODO: Missing documentation
         */
        SplitSegment: function(p0, p1) {

            var diff = 0.0;
            for (var ic = 0; ic < 3; ic++) {
                var dfc = p1[ic] - p0[ic];
                diff += dfc * dfc;
            }
            var empty = [];
            if (diff < 0.01) return empty;

            var px = new Array(3);
            for (ic = 0; ic < 3; ic++)
                px[ic] = p0[ic] + p1[ic];
            var asqr = 0;
            for (ic = 0; ic < 3; ic++) {
                pc = px[ic];
                asqr += pc * pc;
            }
            var normmult = 1 / Math.sqrt(asqr);
            for (ic = 0; ic < 3; ic++)
                px[ic] *= normmult;

            return empty.concat(this.SplitSegment(p0, px), [px], this.SplitSegment(px, p1));
        },

        /**
         * TODO: Missing documentation
         */
        transformMapPositions: function(data){

            var deg2rad = Math.PI/180;

            var MapPositions = [];

            for (i=0; i<data.length; i++) {
                var LatLng = data[i];
                var lat = deg2rad*LatLng.lat;
                var lng = deg2rad*LatLng.lng;
                var lc = Math.cos(lat);
                var pt = [lc*Math.cos(lng), lc*Math.sin(lng), Math.sin(lat)];
                // Add random offset to avoid collinearity
                for (var ic=0; ic<3; ic++)
                    pt[ic] += 1e-10 * (2*Math.random() - 1);
                var sumsq = 0;
                for (ic=0; ic<3; ic++)
                    sumsq += pt[ic]*pt[ic];
                var norm = 1/Math.sqrt(sumsq);
                for (ic=0; ic<3; ic++)
                    pt[ic] *= norm;
                // Accept it
                MapPositions.push(pt);
            }

            return MapPositions;

        },
      };
})(jQuery);
