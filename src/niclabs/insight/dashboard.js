niclabs.insight.Dashboard = (function($) {
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
     * @param {Object} options - configuration options for the dashboard
     * @param {string} [options.layout='none'] - Dashboard layout, one of ['left', 'right', 'none'], puts the info window to the left, to the right or it removes it
     * @param {string} options.anchor - Required id for anchoring the dashboard
     */
    return function(options) {
        var layoutOptions = ['left', 'right', 'none'];
        var dashboardId = "#insight-dashboard";

        if (!('anchor' in options)) throw new Error('Anchor id is required for creating a dashboard');
        var anchor = options.anchor;

        options.layout = options.layout || 'none';
        if (layoutOptions.indexOf(options.layout) < 0) throw new Error('Layout must be one of \'' + layoutOptions.join('\',\'') + '\'');

        // Create the main container
        var container = $('<div>')
            .setID(dashboardId).addClass('mainDashboard')
            .addClass('layout-' + options.layout );

        // Append the dashboard to the container
        $(anchor).append(container);

        // // Create the filter bar
        // var filterBar = new CityDashboard.FilterBar();
        //
        // // Create an event to be notified of a filter change
        // container.on('filterChanged', function(e, fun) {
        //     var f = fun();
        //     for (var i = layers.length - 1; i >= 0; i--) {
        //         layers[i].filter(f);
        //     }
        // });

        var layers = {};
        var numberedLayers = 0;
        var activeLayer;

        /**
         * Get a new layer id for a layer without id
         */
        function layerId(index) {
            index = typeof index === 'undefined' ? numberedLayers++ : index;
            return 'layer' + index;
        }

        var infoView = {};
        var mapView = {};


        // Listen for changes in the layer data
        niclabs.insight.event.on('layer_data', function(obj) {
            if (activeLayer && obj.id === activeLayer.id) {
                /**
                 * Event triggered when an update to the active layer data (filtering/update) has ocurred
                 *
                 * @event niclabs.insight.Dashboard#active_layer_data
                 * @type {object}
                 * @property {string} id - id for the layer to which the data belongs to
                 * @property {Object[]} data - new data array
                 */
                 niclabs.insight.event.trigger('active_layer_data', obj);
            }
        });


        var self = {
            /**
             * HTML DOM element for the dashboard container
             *
             * @memberof niclabs.insight.Dashboard
             * @member {Element}
             */
            get element () {
                return $(dashboardId)[0];
            },

            /**
             * jQuery object for the dashboard DOM container
             *
             * @memberof niclabs.insight.Dashboard
             * @member {jQuery}
             */
            get $ () {
                return $(dashboardId);
            },

            /**
             * Return the value for the dashboard configuration option with the provided name
             *
             * @memberof niclabs.insight.Dashboard
             * @param {String} name - name of the configuration option
             * @returns {*} configuration option value or undefined if it does not exist
             */
            config: function(name) {
                return options[name];
            },

            /**
             * Assign/get the information view for the dashboard
             *
             * @memberof niclabs.insight.Dashboard
             * @param {Object|niclabs.insight.InfoView} [obj] - configuration for the information view or information view object
             * @param {String} obj.handler - name of the handler to construct the info view
             * @returns {niclabs.insight.InfoView} the dashboard information view
             */
            infoview: function(obj) {
                if (typeof obj !== 'undefined') {
                    if ('handler' in obj) {
                        infoView = niclabs.insight.handler(obj.handler)(self, obj);
                    }
                    else {
                        infoView = obj;
                    }
                    $(dashboardId).append(infoView.element);
                }
                return infoView;
            },

            /**
             * Assign/get the map view for the dashboard
             *
             * @memberof niclabs.insight.Dashboard
             * @param {Object|niclabs.insight.MapView} [obj] - configuration for the map view or map view object
             * @param {String} obj.handler - name of the handler to construct the map view
             * @returns {niclabs.insight.MapView} the dashboard information view
             */
            mapview: function(obj) {
                if (typeof obj !== 'undefined') {
                    if ('handler' in obj) {
                        mapView = niclabs.insight.handler(obj.handler)(self, obj);
                    }
                    else {
                        mapView = obj;
                    }
                    $(dashboardId).append(mapView.element);
                }
                return mapView;
            },

            /**
             * Add/get a {@link niclabs.insight.layer.Layer} for the dashboard
             *
             * A layer acts as a link between a source of data and a visualization on the map
             *
             * - If a number or string is provided as value for obj, the layer with that id is returned
             * - If a generic object is provided with the handler defined in the 'handler' property, a new layer
             * is created using the handler and the layer is added to the list of
             * layers of the dashboard
             * - If an object is provided without handler, it is assumed to be a Layer object and added to the
             * layer list as is.
             *
             * @memberof niclabs.insight.Dashboard
             * @param {string|number|Object| niclabs.insight.layer.Layer} obj - layer id to get or configuration options for the new layer
             * @param {boolean} [activate=false] - if true, set the layer as the active layer of the dashboard
             * @returns {niclabs.insight.info.Layer} - layer for the provided id
             */
            layer: function(obj, activate) {
                if (typeof obj == 'string') return layers[obj];
                if (typeof obj == 'number') return layers[layerId(obj)];

                var lyr, id;
                if ('handler' in obj) {
                    id = obj.id = obj.id || layerId();
                    lyr = niclabs.insight.handler(obj.handler)(self, obj);
                }
                else {
                    lyr = obj;
                    id = lyr.id;
                }

                layers[id] = lyr;

                // Switch to the new layer if activate is true
                if (activate || Object.size(layers) === 1) self.active(id);

                return lyr;
            },

            /**
             * Set/get the data for the active layer
             *
             * If a new source for the data is provided, this method updates the internal
             * data for the layer and reloads the layer by calling {@link niclabs.insight.layer.Layer.load}
             *
             * @memberof niclabs.insight.Dashboard
             * @param {string|Object[]} [obj] - optional new data source or data array for the layer
             * @returns {string|Object[]} data source for the layer if the data has not been loaded yet or object array if the
             *  data has been loaded
             */
            data: function(obj) {
                if (activeLayer) return activeLayer.data(obj);
                return [];
            },

            /**
             * Set/get the active layer
             *
             * @memberof niclabs.insight.Dashboard
             * @param {string|number} [id] - id for the layer to set as the active layer
             * @returns {string} id for the active layer
             */
            active: function(id) {
                if (typeof id === 'undefined') return typeof activeLayer !== 'undefined' ? activeLayer.id: undefined;

                if (typeof activeLayer !== 'undefined') {
                    activeLayer.clear();
                }

                if (typeof id == 'number') id = layerId(id);

                if (!(id in layers)) {
                    throw new Error("Layer with id "+id+" does not exist");
                }

                // Update the active layer
                activeLayer = layers[id];

                // Load the new active layer
                activeLayer.load();

                return activeLayer;
            },

            /**
             * TODO: Documentation missing
             */
            addFilter: function(filter) {
                filterBar.addFilter(filter);
                return self;
            },

            /**
             * Clear the map by calling the {@link niclabs.insight.layer.Layer.clear} method
             * on the active layer
             *
             * @memberof niclabs.insight.Dashboard
             */
            clear: function() {
                if (activeLayer) activeLayer.clear();
            }
        };

        return self;
    };
})(jQuery);
