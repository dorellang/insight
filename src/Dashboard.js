CityDashboard = CityDashboard || {};

/**
 * Configure the Dashboard of the CityDashboard
 * TODO: explain what is the dashboard as an element
 */
CityDashboard.Dashboard = (function(CityDashboard, $) {
    "use strict";

    /**
     * Constructor for the dashboard
     * TODO: documentation missing
     */
    var Dashboard = function(parameters) {
        this.layers = [];

        if (!parameters.anchor)
            throw new Error('Anchor ID is required.');

        this.anchor = parameters.anchor;

        this.layout = 'layout-' + (parameters.layout || 'none');

        // placing

        var container = $('<div>')
            .setID(CityDashboard.id('main')).addClass('mainDashboard')
            .addClass(this.layout);

        var infoDiv;
        if (this.layout !== 'layout-none') {
            infoDiv = $('<div>')
                .setID(CityDashboard.id('info')).addClass('infoWindow');

            var resizeOrientation;
            if (this.layout === 'layout-left')
                resizeOrientation = 'e';
            else if (this.layout === 'layout-right')
                resizeOrientation = 'w';
            // else if ( this.layout === 'layout-top')
            //   resizeOrientation = 's';
            // else if ( this.layout === 'layout-bottom')
            //   resizeOrientation = 'n';

            infoDiv.resizable(resizeOrientation);

            container.append(infoDiv);
        }

        var mapDiv = $('<div>')
            .setID(CityDashboard.id('map')).addClass('mapWindow');
        container.append(mapDiv);

        $(this.anchor).append(container);

        this.filters = new CityDashboard.FilterBar(parameters['filter-number'] || 0);

        var layers = this.layers;

        container.on('filterChanged', function(e, fun) {
            var f = fun();
            for (var i = layers.length - 1; i >= 0; i--) {
                layers[i].filter(f);
            }
        });

    };

    Dashboard.prototype = {
        constructor: CityDashboard.Dashboard,

        /**
         * TODO: Documentation missing
         */
        addLayer: function(parameters) {

            var layers = this.layers;

            var callback = function(pr) {
                    layers[layers.length] = new LayerSelector(pr, CityDashboard.select('main')[0].data);
                }; // gmap: $(CityDashboard['mainContainerID'])[0].data

            CityDashboard.getData(parameters['data-source'], callback, parameters);

            return this;

        },

        /**
         * TODO: Documentation missing
         */
        addFilter: function(filters) {

            this.filters.addFilter(filters);

            return this;
        },

        /**
         * TODO: documentation missing
         */
        clear: function() {
            for (var i = 0; i < this.layers.length; i++) {
                this.layers[i].clear();
            }
            this.layers = [];
        }
    };

    return Dashboard;
})(CityDashboard, jQuery);
