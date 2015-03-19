niclabs.insight.Dashboard = (function(CityDashboard, $) {
    "use strict";

    /**
     * Constructs the dashboard
     *
     * The dashboard is composed of multiple, replaceable parts.
     * - An information view, with conveys information to the user, throught visualizations or text.
     * the information view can be composed contain multiple blocks of information
     * - A map view, which provides the geospatial information to the user. The map and the information view can interact for
     *  clearer information
     * - A filter bar, which allows to interact with the data shown in the map, through filtering or modifying the location
     * - A notification bar, usually invisible, which reports events back to the user
     *
     * @class niclabs.insight.Dashboard
     * @param {Object} parameters - configuration options for the dashboard
     * @param {string} [parameters.layout='none'] - Dashboard layout, one of ['left', 'right', 'none'], puts the info window to the left, to the right or it removes it
     * @param {string} parameters.anchor - Required id for anchoring the dashboard
     */
    return function(parameters) {
        var layers = [];
        var layoutOptions = ['left', 'right', 'none'];

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

        var infoView = {};

        var self = {
            /**
             * Assign/get the information view for the dashboard
             *
             * @memberof niclabs.insight.Dashboard
             * @param {Object|niclabs.insight.InfoView} [obj] - configuration for the information view or information view object
             * @param {String} obj.handler - name of the handler to construct the info view
             * @returns {niclabs.insight.InfoView} the dashboard information view
             */
            infoView: function(obj) {
                if (typeof obj !== 'undefined') {
                    if ('handler' in obj) {
                        infoView = niclabs.insight.handler(obj.handler)(self, obj);
                    }
                    else {
                        infoView = obj;
                    }
                }
                return infoView;
            },

            /**
             * TODO: Documentation missing
             */
            addLayer: function(parameters) {
                var callback = function(pr) {
                    layers[layers.length] = new LayerSelector(pr, CityDashboard.container('main')[0].data);
                }; // gmap: $(CityDashboard['mainContainerID'])[0].data

                CityDashboard.getData(parameters['data-source'], callback, parameters);

                return self;
            },

            /**
             * TODO: Documentation missing
             */
            addFilter: function(filter) {
                filterBar.addFilter(filter);
                return self;
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

        return self;
    };
})(CityDashboard, jQuery);
