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
    return function(parameters) {
        var layers = [];
        var layoutOptions = ['left', 'right', 'none'];

        console.log(parameters);
        if (!('anchor' in parameters)) throw new Error('Anchor id is required for creating a dashboard');
        var anchor = parameters.anchor;

        var layout = parameters.layout || 'none';
        if (layoutOptions.indexOf(layout) < 0) throw new Error('Layout must be one of \'' + layoutOptions.join('\',\'') + '\'');

        // Create the main container
        var container = $('<div>')
            .setID(CityDashboard.id('main')).addClass('mainDashboard')
            .addClass('layout-' + layout);

        // Create the info side bar
        var infoDiv;
        if (layout !== 'none') {
            infoDiv = $('<div>')
                .setID(CityDashboard.id('info'))
                .addClass('infoWindow');

            var resizeOrientation;
            if (layout === 'left') {
                // TODO: move filter bar
                resizeOrientation = 'e';
            }
            else if (layout === 'right') {
                resizeOrientation = 'w';
            }
            infoDiv.resizable(resizeOrientation);

            container.append(infoDiv);
        }

        // Create the map div
        var mapDiv = $('<div>')
            .setID(CityDashboard.id('map'))
            .addClass('mapWindow');
        container.append(mapDiv);

        // Append the container to the given anchor
        $(anchor).append(container);

        // Create the filter bar
        var filterBar = new CityDashboard.FilterBar();

        // Create an event to be notified of a filter change
        container.on('filterChanged', function(e, fun) {
            var f = fun();
            for (var i = layers.length - 1; i >= 0; i--) {
                layers[i].filter(f);
            }
        });


        var that = {
            /**
             * TODO: Documentation missing
             */
            addLayer: function(parameters) {
                var callback = function(pr) {
                    layers[layers.length] = new LayerSelector(pr, CityDashboard.container('main')[0].data);
                }; // gmap: $(CityDashboard['mainContainerID'])[0].data

                CityDashboard.getData(parameters['data-source'], callback, parameters);

                return that;
            },

            /**
             * TODO: Documentation missing
             */
            addFilter: function(filter) {
                filterBar.addFilter(filter);
                return that;
            },

            /**
             * TODO: documentation missing
             */
            clear: function() {
                for (var i = 0; i < layers.length; i++) {
                    layers[i].clear();
                }
                layers = [];
            }
        };

        return that;
    };
})(CityDashboard, jQuery);
