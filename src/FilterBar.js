var CityDashboard = CityDashboard || {};

/**
 * Defines the behavior of the filter bar of the dashboard
 */
CityDashboard.FilterBar = (function(CityDashboard, google, $) {
    "use strict";

    var FilterBar = function(filterNumber) {
        this.filters = {
            none: function(data) {
                return true;
            }
        };
        this.filterNumber = filterNumber;

        this.bar = $('<div>').setID(CityDashboard.id('filters')).addClass('filterBar');

        /* Google maps geocoder and search bar*/
        var geocoder = new google.maps.Geocoder();

        var geocode = function() {
            var map = CityDashboard.container('main')[0].data;
            console.log(CityDashboard.container('main'));
            var address = $(CityDashboard.id('filters') + ' > .search').val();
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    // map.setZoom(12);
                    map.fitBounds(results[0].geometry.bounds);
                } else {
                    $(CityDashboard.id('filters') + ' > .search').val('not found: ' + address);
                }
            });
        };

        CityDashboard.container('main').append(this.bar);

        this.bar.append($('<input>')
            .addClass('search')
            .attr('type', 'search')
            .attr('placeholder', 'Enter location')
            .on('change', geocode));

        var self = this;
        this.select = [];

        var onChange = function() {
            CityDashboard.container('main').trigger('filterChanged', function() {
                return self.composeFilters();
            });

        };

        for (var i = 0; i < this.filterNumber; i++) {
            this.select[i] = $('<select>').on('change', onChange);
            this.bar.append(this.select[i]);
        }
        this.placeFilters();

    };

    FilterBar.prototype = {
        constructor: CityDashboard.FilterBar,

        /**
         * TODO: missing documentation
         */
        addFilter: function(filters) {
            for (var key in filters) {
                this.filters[key] = filters[key];
            }
            for (var i = this.select.length - 1; i >= 0; i--) {
                this.select[i].empty();
            }
            this.placeFilters();
        },

        /**
         * TODO: missing documentation
         */
        placeFilters: function() {
            var self = this;

            var getFilter = function(key) {
                return function() {
                    return self.filters[key];
                };
            };

            for (var j = 0; j < this.filterNumber; j++) {
                for (var key in this.filters) {
                    var option = $('<option>');

                    option.val(getFilter(key));
                    option.text(key);
                    this.select[j].append(option);
                }
            }
        },

        /**
         * TODO: missing documentation
         */
        composeFilters: function() {
            var l = [];
            for (var i = this.select.length - 1; i >= 0; i--) {
                // TODO: why this definition? Using eval is bad practice
                l[l.length] = Function('return ' + this.select[i].val())();
            }
            return function(data) {
                for (var i = l.length - 1; i >= 0; i--) {
                    if (!l[i](data))
                        return false;
                }
                return true;
            };
        }
    };

    return FilterBar;
})(CityDashboard, google, jQuery);
