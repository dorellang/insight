niclabs.insight.FilterBar = (function($) {
    "use strict";

    /**
     * Constructs a filter bar for the dashboard
     *
     * @class niclabs.insight.FilterBar
     */
    return function(dashboard, options) {
        var barId = '#insight-filters';

        // Bar container
        var container = $('<div>').setID(barId).addClass('filters');

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

        /* Google maps geocoder and search bar*/
        var geocoder = new google.maps.Geocoder();

        // Create the search box
        var search = $('<input>')
            .addClass('search')
            .attr('type', 'search')
            .attr('placeholder', 'Enter location');

        // Append search box to bar
        container.append($('<div>').addClass('filter').append(search));

        var geocode = function() {
            var map = dashboard.map().googlemap();
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


        /**
         * Function to act as a filter for the data
         *
         * The function returns false if the data must be removed from the visualization
         * or true if the data must be kept
         *
         * @callback niclabs.insight.FilterBar~filter
         * @param {Object} data - data element to evaluate
         * @returns {boolean} true if the data passes the filter
         */

        return {
            /**
             * HTML DOM element for the filter bar container
             *
             * @memberof niclabs.insight.FilterBar
             * @member {Element}
             */
            get element () {
                var c = $(barId);
                container = c.length === 0 ? container : c;
                return container[0];
            },

            /**
             * jQuery object for the filter bar container
             *
             * @memberof niclabs.insight.FilterBar
             * @member {jQuery}
             */
            $: function() {
                var c = $(barId);
                container = c.length === 0 ? container : c;
                return container;
            },

            /**
             * Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
             * of the filter for further customizations
             *
             * @memberof niclabs.insight.FilterBar
             * @param {Object|number} filter configuration for the filter or filter index
             * @return {jQuery} reference to the added element for further customization
             */
            filter: function(filter) {
                if (typeof filter === 'number') return filters[filter];

                var select = $('<select>');

                var description = filter.description || '';
                var option = $('<option>').text(description);
                select.append(option);

                var i;
                for (i = 0; i < filter.options.length; i++) {
                    option = $('<option>').text(filter.options[i].name);
                    select.append(option);
                }

                select.on('change', function() {
                    /**
                     * Event triggered when a filter has changed
                     *
                     * It will pass as parameter the filtering function to apply to
                     * the layers
                     *
                     * @event niclabs.insight.FilterBar#filter_changed
                     * @type {niclabs.insight.FilterBar~filter}
                     */
                    niclabs.insight.event.trigger('filter_changed', composeFilters());
                });

                // Add the selector to the filter bar
                container.append($('<div>').addClass('filter').append(select));

                filter.element = select;

                // Add the filter to the filter list
                filters.push(filter);

                return select;
            },
        };
    };
})(jQuery);
