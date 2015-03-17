var CityDashboard = CityDashboard || {};

/**
 * Defines general functionality for dashboard map
 *
 * @class
 */
CityDashboard.Map = (function(CityDashboard, $) {
	"use strict";

	/**
	 * Constructs a new map
	 *
	 * @constructs CityDashboard.Map
	 */
	return function(options) {
		/**
		 * Object to represent geographic coordinates
		 *
		 * @typedef {Object} CityDashboard.Map.Coordinates
		 * @property {float} lat - latitude for the map center
		 * @property {float} lng - longitude for the map center
		 */
		var center = {
			lat: options.lat || 0,
			lng: options.lng || 0
		};

		var zoom = options.zoom || 12;

		// jQuery container for the map
		var container = CityDashboard.container('map');

		return {
			/**
			 * Set/get the map center.
			 * Overriding implementations should modify this method so the
			 * map reflects the new center.
			 *
			 * @memberof CityDashboard.Map
			 * @param {float=} lat - latitude for the map center
			 * @param {float=} lng - longitude for the map center
			 * @return {CityDashboard.Map.Coordinates} coordinates for the map center
			 */
			center: function(lat, lng) {
				center.lat = lat = typeof lat === 'undefined' ? center.lat : lat;
				center.lng = lng = typeof lng === 'undefined' ? center.lng : lng;

				return center;
			},

			/**
			 * Get the latitude for the map center
			 *
			 * @memberof CityDashboard.Map
			 * @return {float} latitude for the map center
			 */
			lat: function() {
				return center.lat;
			},

			/**
			 * Get the longitude for the map center
			 *
			 * @memberof CityDashboard.Map
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
			 * @memberof CityDashboard.Map
			 * @param {int=} zoom - zoom
			 * @returns {int} zoom level of the map
			 */
			zoom: function(level) {
				zoom = level = typeof level === 'undefined' ? zoom : level;

				return zoom;
			},

			/**
			 * Get the jquery object for the html element of the map
			 *
			 * @memberof CityDashboard.Map
			 * @return {jQuery} container for the map
			 */
			container: function() {
				return container;
			}
		};
	};
})(CityDashboard, jQuery);
