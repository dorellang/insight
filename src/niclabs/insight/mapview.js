niclabs.insight.MapView = (function($) {
	"use strict";

	/**
	 * Constructs a new map
	 *
	 * @class niclabs.insight.MapView
	 * @param {Object} options - configuration options for the map
	 * @param {integer} [options.zoom=12] - starting zoom level of the map
	 * @param {float} [options.lat=0] - latitude for the map center
	 * @param {float} [options.lng=0] - lng for the map center
	 */
	return function(options) {
		var mapId = '#insight-map-view';

		var center = {
			lat: options.lat || 0,
			lng: options.lng || 0
		};

		var zoom = options.zoom || 12;

		// jQuery container for the map
        var container = $('<div>')
			.setID(mapId)
			.addClass('map');


		/**
		* Event triggered to notify the dashboard that an element of the map has been pressed
		*
		* @event niclabs.insight.MapView#map_element_selected
		* @type {object}
		* @property {string} layer - id for the layer to which the data belongs to
		* @property {float} lat - latitude for the marker
		* @property {float} lng - latitude for the marker
		*/

		return {
			/**
             * HTML DOM element for the map view
             *
             * @memberof niclabs.insight.MapView
             * @member {Element}
             */
            get element () {
                var c = $(mapId);
                container = c.length === 0 ? container : c;
                return container[0];
            },

            /**
             * jQuery object for map view
             *
             * @memberof niclabs.insight.MapView
             * @member {jQuery}
             */
            $: function() {
                var c = $(mapId);
                container = c.length === 0 ? container : c;
                return container;
            },

			/**
			 * Set/get the map center.
			 * Overriding implementations should modify this method so the
			 * map reflects the new center.
			 *
			 * @memberof niclabs.insight.MapView
			 * @param {float=} lat - latitude for the map center
			 * @param {float=} lng - longitude for the map center
			 * @return {niclabs.insight.map.LatLng} coordinates for the map center
			 */
			center: function(lat, lng) {
				center.lat = lat = typeof lat === 'undefined' ? center.lat : lat;
				center.lng = lng = typeof lng === 'undefined' ? center.lng : lng;

				return center;
			},

			/**
			 * Get the latitude for the map center
			 *
			 * @memberof niclabs.insight.MapView
			 * @return {float} latitude for the map center
			 */
			lat: function() {
				return center.lat;
			},

			/**
			 * Get the longitude for the map center
			 *
			 * @memberof niclabs.insight.MapView
			 * @return {float} longitude for the map center
			 */
			lng: function() {
				return center.lng;
			},

			/**
			 * Set/get the map zoom level.
			 * Overriding implementations should modify this method so the
			 * map reflects the new zoom.
			 *
			 * @memberof niclabs.insight.MapView
			 * @param {int=} zoom - zoom
			 * @returns {int} zoom level of the map
			 */
			zoom: function(level) {
				zoom = level = typeof level === 'undefined' ? zoom : level;

				return zoom;
			},
		};
	};
})(jQuery);
