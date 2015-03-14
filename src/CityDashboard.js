var CityDashboard = (function($) {
    "use strict";

    return {
        mainContainerID: '#city-dashboard',
        mapWindowID: '#mapWindow',
        infoWindowID: '#infoWindow',
        filterBarID: '#filterBar',

        /**
         * Get the data for the dashboard
         *
         * @param {String} uri uri or id for the data source
         * @param {Callback} callback function to pass the data to
         * @param {Object} mapping of properties to pass to the callback
         * @return {Object} result for the callback
         */
        getData: function(uri, callback, props) {
            if (uri.charAt(0) !== '#') {
                $.getJSON(uri, function(json) {
                    props.data = json;

                    // TODO: The return value of callback is never used
                    return callback(props);
                });
            } else {
                return callback(props);
            }
        }
    };
})(jQuery);
