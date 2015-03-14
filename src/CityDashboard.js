var CityDashboard = (function($) {
    "use strict";

    var identifiers = {
        'main' : '#city-dashboard',
        'map' : '#mapWindow',
        'info': '#infoWindow',
        'filters': '#filterBar'
    };

    var properties = {
        'main' : 'mainContainerID',
        'map' : 'mapWindowID',
        'info': 'infoWindowID',
        'filters': 'filterBarID'
    };

    var that = {
        // TODO: This properties must eventually disappear
        mainContainerID: identifiers.main,
        mapWindowID: identifiers.map,
        infoWindowID: identifiers.info,
        filterBarID: identifiers.filters,

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
        },

        /**
         * Get/set the id of the dashboard container. The container options are
         * - 'main': main container of the dashboard
         * - 'map': container for the map element
         * - 'info': container information window
         * - 'filters': container for the 'filters bar'
         *
         * @param (String) container for which to get/set the id
         * @param (String) id optional identifier to set for the container
         * @return (String) identifier for the container
         */
        id: function(container, id) {
            if (!(container in identifiers)) throw new Error('The container '+container+' does not exist');
            id = (typeof id === 'undefined') ? identifiers[container] : id;
            that[properties[container]] = identifiers[container] = id;
            return id;
        },

        /**
         * Get a jQuery selector for the dashboard container element.
         *
         * @param (String) container identifier of the container to get
         * @return (jQuery) selector for the container;
         */
        select: function(container) {
            return $(that.id(container));
        }
    };

    return that;
})(jQuery);
