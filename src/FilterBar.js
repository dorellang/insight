var CityDashboard = CityDashboard || {};

/**
 * Defines the behavior of the filter bar of the dashboard
 */
CityDashboard.FilterBar = (function(CityDashboard, google, $) {
    "use strict";

    return function() {
        // Bar element
        var bar = $('<div>').setID(CityDashboard.id('filters')).addClass('filterBar');

        // List of filters
        var filters = [];

        /**
         * Compose the filters selected by the user
         */
        function composeFilters() {
            var callbacks = [];
            for (var i = 0; i < filters.length; i++) {
                if (filters[i].element.prop('selectedIndex') > 0) {
                    callbacks.push(filters[i].options[filters[i].element.prop('selectedIndex') - 1].filter);
                }
            }

            return function(data) {
                for (var i = 0; i < callbacks.length; i++) {
                    if (!callbacks[i](data)) return false;
                }
                return true;
            };
        }

        /**
         * Callback to use on filter change
         */
        function onFilterChange() {
            CityDashboard.container('main').trigger('filterChanged', function() {
                return composeFilters();
            });
        }

        /* Google maps geocoder and search bar*/
        var geocoder = new google.maps.Geocoder();

        // Create the search box
        var search = $('<input>')
            .addClass('search')
            .attr('type', 'search')
            .attr('placeholder', 'Enter location');

        // Append search box to bar
        bar.append(search);

        var geocode = function() {
            var map = CityDashboard.container('main')[0].data;
            var address = search.val();
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    // map.setZoom(12);
                    map.fitBounds(results[0].geometry.bounds);
                } else {
                    // TODO: this message should go in a status bar
                    search.val('not found: ' + address);
                }
            });
        };

        search.on('change', geocode);

        // Append the filter bar to the dashboard
        CityDashboard.container('main').append(bar);

        return {
            /**
             * Add a new filter to the filter bar, displayed as a <select> object in the UI, it returns the jquery element
             * of the filter for further customizations
             *
             * Example:
             * ```
             * myDashboard.addFilter({
             *  description: 'Geographic Location', // the empty string is used if not provided
             *  options: [
             *      {name: 'More than 20s', filter: function (data) {return data.seconds > 20;}},
             *      {name: 'Over Equator', filter: function (data) {return data.lat > 0;}},
             *      {name: 'By Type: a,f,g,e,t,h', filter: function (data) {return "afgeth".indexOf(data['event type'])> 0;}}
             *  ]
             * });
             * ```
             *
             * @param (Object) filter configuration for the filter
             * @return (jQuery) reference to the added element for further customization
             */
            addFilter: function(filter) {
                var select = $('<select>');

                var description = filter.description || '';
                var option = $('<option>').text(description);
                select.append(option);

                var i;
                for (i = 0; i < filter.options.length; i++) {
                    option = $('<option>').text(filter.options[i].name);
                    select.append(option);
                }

                select.on('change', onFilterChange);

                // Add the selector to the filter bar
                bar.append(select);

                filter.element = select;

                // Add the filter to the filter list
                filters.push(filter);

                return select;
            },
        };
    };
})(CityDashboard, google, jQuery);
