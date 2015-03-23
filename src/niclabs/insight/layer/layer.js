niclabs.insight.layer.Layer = (function($) {
    "use strict";

    /**
     * Construct a layer
     *
     * A layer provides a link between a data source and a visualization on the map.
     *
     * @class niclabs.insight.layer.Layer
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.id - identifier for the layer
     * @param {string|Object[]} options.data - uri or data array for the layer
     */
    var Layer = function(dashboard, options) {
        var wrappedLayer;

        if (!('id' in options)) {
            throw Error("All layers must have an id.");
        }
        var id = options.id;

        if (!('data' in options)) {
            throw Error("All layers must provide a data source.");
        }

        var dataSource = false;
        var data = [];
        if (typeof options.data === 'string') {
            dataSource = options.data;
        }
        else {
            data = options.data && options.data.length ? options.data: [options.data];
        }

        // Will be set to true once the layer is loaded
        var loaded = false;

        /**
         * Function to act as a filter for the data
         *
         * The function returns false if the data must be removed from the visualization
         * or true if the data must be kept
         *
         * TODO: I think this is better defined in FilterBar
         *
         * @callback niclabs.insight.layer.Layer~filter
         * @param {Object} data - data element to evaluate
         * @returns {boolean} true if the data passes the filter
         */

        var self = {
            /**
             * id of the layer
             * @memberof niclabs.insight.layer.Layer
             * @member {string}
             */
            get id () {
                return id;
            },

            /**
             * Set/get the data for the layer
             *
             * If a new source for the data is provided, this method updates the internal
             * data and reloads the layer by calling {@link niclabs.insight.layer.Layer.load}
             *
             * @memberof niclabs.insight.layer.Layer
             * @param {string|Object[]} [obj] - optional new data source or data array for the layer
             * @returns {string|Object[]} data source for the layer if the data has not been loaded yet or object array if the
             *  data has been loaded
             */
            data: function(obj) {
                if (typeof obj === 'undefined') {
                    return loaded ? data : dataSource;
                }

                if (typeof obj === 'string') {
                    dataSource = obj;

                    // If the layer has already been loaded, reload the data
                    if (loaded) self.load();

                    return dataSource;
                }
                else {
                    data = obj.length ? obj: [obj];
                }

                return data;
            },

            /**
             * Load the data from the layer and redraw
             *
             * If data provided as configuration to the layer is a URL, this methods loads the data from the URL and
             * redraws the layer (invoking {@link niclabs.insight.layer.Layer.clear} and {@link niclabs.insight.layer.Layer.draw})
             * when the content is available
             *
             * @memberof niclabs.insight.layer.Layer
             */
            load: function() {
                function redraw(d) {
                    data = d;

                    /**
                     * Event triggered when an update to the layer data (filtering/update) has ocurred
                     *
                     * @event niclabs.insight.layer.Layer#layer_data
                     * @type {object}
                     * @property {string} id - id for the layer to which the data belongs to
                     * @property {Object[]} data - new data array
                     */
                    niclabs.insight.event.trigger('layer_data', {
                        'id': id,
                        'data': data
                    });

                    // Clear the map
                    self.clear();

                    // Re-draw with new data loaded
                    self.draw(data);
                }

                if (dataSource) {
                    $.getJSON(dataSource, redraw);
                    // TODO: on error?
                }
                else {
                    redraw(data);
                }
            },

            /**
             * Draw the layer on the map.
             *
             * This method must be overriden by the implementing layers
             *
             * @memberof niclabs.insight.layer.Layer
             * @param {Object[]} data - data to use for drawing the layer
             * @abstract
             */
            draw: function(data) {},

            /**
             * Filter the layer according to the provided function.
             *
             * This method must be overriden by the implementing layers
             *
             * @memberof niclabs.insight.layer.Layer
             * @abstract
             * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
             */
            filter: function(fn) {},

            /**
             * Clear the layer changes on the map. This method must be
             * overriden by implementing layers
             *
             * @memberof niclabs.insight.layer.Layer
             * @abstract
             */
            clear: function() {}
        };

        return self;
    };

    return Layer;
})(jQuery);
