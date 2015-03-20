/**
 * [NIC Chile Research Labs](http://niclabs.cl/) is the Internet Laboratory of the
 * [Faculty of Physical and Mathematical Sciences of the University of Chile (FCFM)](http://www.fcfm.uchile.cl/),
 * founded by [NIC Chile](http://www.nic.cl) and host of [INRIA Chile Internet Project](http://www.inria.cl/?page_id=23&lang=en).
 *
 * Our main research areas are: Internet protocols (layer 3-4), DNS, Internet QoS, Internet QoE, and computer networks.
 *
 * We are based in Santiago, Chile, in front of the FCFM, Universidad de Chile.
 *
 * @namespace
 */
var niclabs = {};

/**
 * Insight is a generic web dashboard for smart city projects.
 *
 * It allows to combine different chart and visualization tools to better
 * understand what is going on in the city
 *
 * @namespace
 * @requires jQuery 1.11.1+
 */
niclabs.insight = (function($) {
    "use strict";

    /**
     * Initial required configurations
     */

    /**
     * JQuery plugin to make an element resizable
     * TODO: missing documentation/source
     */
    $.fn.resizable = function(orientation) {
        var resizer = $('<div>').addClass('resizer').addClass(orientation + '-resize');
        this.append(resizer).addClass('resizable');

        resizer.on('mousedown', initDrag);

        var startX, startY, startWidth, startHeight;

        var resizable = this;

        function initDrag(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = resizable.outerWidth();
            startHeight = resizable.outerHeight();

            $(document).on('mousemove', doDrag);
            $(document).on('mouseup', stopDrag);
        }

        var east, south, north, west;
        south = orientation.search("s") >= 0;
        east = orientation.search("e") >= 0;
        north = orientation.search("n") >= 0;
        west = orientation.search("w") >= 0;

        function doDrag(e) {
            if (south)
                resizable.css('height', (startHeight + e.clientY - startY) + 'px');
            if (east)
                resizable.css('width', (startWidth + e.clientX - startX) + 'px');
            if (north)
                resizable.css('top', (e.clientY) + 'px')
                .css('height', (startHeight + startY - e.clientY) + 'px');
            if (west)
                resizable.css('left', (e.clientX) + 'px')
                .css('width', (startWidth - e.clientX) + 'px');
        }

        function stopDrag(e) {
            $(document).off('mousemove', doDrag);
            $(document).off('mouseup', stopDrag);
            resizable.trigger('resize');
        }

        this.scroll(function(e) {
            resizer.css('top', resizable.scrollTop());
        });

        return this;
    };

    /**
     * Set the id for the jQuery selector
     */
    $.fn.setID = function(selector) {
        if (selector.charAt(0) === '#')
            selector = selector.slice(1);
        this.attr('id', selector);
        return this;
    };

    /**
     * JQuery plugin to make an element movable
     * TODO: missing documentation/source
     */
    $.fn.movable = function() {

        var panel = this.children('.options-panel');
        if (!panel.length) {
            panel = $('<span>').addClass('options-panel');
            this.prepend(panel);
        }

        var up = $('<span>').addClass('up-button').append('&#x25B2;');
        var down = $('<span>').addClass('down-button').append('&#x25BC;');
        panel.prepend(down);
        panel.prepend(up);

        var _this = this;

        up.on('click', function() {

            _this.insertBefore(_this.prev());

        });

        down.on('click', function() {

            _this.insertAfter(_this.next());

        });

        return this;
    };

    /**
     * JQuery plugin to make an element closeable
     * TODO: Missing documentation
     */
    $.fn.closable = function(handler) {
        if (!handler) {
            handler = function() {
                return;
            };
        }

        var panel = this.children('.options-panel');
        if (!panel.length) {
            panel = $('<span>').addClass('options-panel');
            this.prepend(panel);
        }

        var close = $('<span>').addClass('close-button').text('X');

        panel.append(close);

        var _this = this;

        close.on('click', function() {
            _this.remove();
            handler();
        });

        return this;
    };

    /**
     * Check if indexOf exists in Array.prototype or use jQuery.inArray();
     */
     Array.prototype.indexOf = 'indexOf' in Array.prototype ? Array.prototype.indexOf : function(item, start) {
         return $.inArray(item, this, start);
     };

     var dashboard;

     // Store dashboard handlers by name
     var handlers = {};

     /**
      * Constructs an insight element (visualization, layer, etc.)
      *
      * @callback niclabs.insight~handler
      * @param {niclabs.insight.Dashboard} dashboard to assign to the handler
      * @param {Object} options - configuration options for the handler, depending on the kind
      */

     return {
         /**
          * Register a handler of a specific insight element ('layer', 'visualization', etc.)
          * to manage the creation, rendering of a specific part of the UI.
          *
          * Third-party extensions to the insight need only to register their visualization
          * elements with this function for the dashboard UI to correctly recognize them
          * TODO: improve this
          *
          * @memberof niclabs.insight
          * @param {string} name - name for the handler to return, register
          * @param {string=} kind - kind for the handler
          * @param {niclabs.insight~handler=} handler - callback to create the element
          * @returns {niclabs.insight~handler} handler for the registered name
          */
         handler: function(name, kind, handler) {
             if (name in handlers) {
                 kind = typeof kind === 'undefined' ? handlers[name].kind : kind;
                 handler = typeof handler === 'undefined' ? handlers[name].handler : handler;

                 if (kind !== handlers[name].kind) {
                     throw new Error('There already exists a handler with name '+name+' for kind '+handlers[name].kind);
                 }
             }
             else if (typeof kind === 'undefined' && typeof handler === 'undefined') {
                 throw new Error('Handler ' + name + ' does not exist');
             }

             handlers[name] = {'kind': kind, 'handler': handler};
             return handler;
         },

         /**
          * Construct and configure a {@link niclabs.insight.Dashboard}
          *
          * @memberof niclabs.insight
          * @param {Object} options - list of configuration options for the dashboard see {@link niclabs.insight.Dashboard}
          * @returns {niclabs.insight.Dashboard} dashboard object
          */
         init: function(options) {
             dashboard = niclabs.insight.Dashboard(options);
             return dashboard;
         },

         /**
          * Helper method to assign/get the information view to/from the dashboard
          *
          * @memberof niclabs.insight
          * @param {Object|niclabs.insight.InfoView} [obj] - configuration for the information view or information view object
          * @param {String} obj.handler - name of the handler to construct the info view
          * @returns {niclabs.insight.InfoView} the dashboard information view
          */
         infoview: function(obj) {
            if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");
            return dashboard.infoview(obj);
         },

         /**
          * Helper method to assign/get the map view to/from the dashboard
          *
          * @memberof niclabs.insight
          * @param {Object|niclabs.insight.MapView} [obj] - configuration for the map view or map view object
          * @param {String} obj.handler - name of the handler to construct the map view
          * @returns {niclabs.insight.MapView} the dashboard map view
          */
         mapview: function(obj) {
            if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");
            return dashboard.mapview(obj);
         },
     };
})(jQuery);

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
        var layers = [];
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

        var infoView = {};
        var mapView = {};

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
             * TODO: Documentation missing
             */
            addLayer: function(options) {
                var callback = function(pr) {
                    layers[layers.length] = new LayerSelector(pr, CityDashboard.container('main')[0].data);
                }; // gmap: $(CityDashboard['mainContainerID'])[0].data

                CityDashboard.getData(options['data-source'], callback, options);

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
})(jQuery);

niclabs.insight.InfoView = (function($) {
    "use strict";

    /**
     * Construct the dashboard information view
     *
     * The information view is composed of information blocks to show
     * different aspects of the data shown in the map or
     * about the visualization in general
     *
     * @class niclabs.insight.InfoView
     * @param {niclabs.insight.Dashboard} dashboard - dashboard to assign this info view to
     * @param {Object} options - list of configuration options for the information view
     */
    var constructor = function(dashboard, options) {
        // Default visualization property list
        options = options || {};

        var infoViewId = "#insight-info-view";

        // Create the info view
        var container = $('<div>')
            .setID(infoViewId)
            .addClass('infoWindow');

        if (dashboard.config('layout') !== 'none') {
            var resizeOrientation;
            if (dashboard.config('layout') === 'left') {
                // TODO: move filter bar
                resizeOrientation = 'e';
            }
            else if (dashboard.config('layout') === 'right') {
                resizeOrientation = 'w';
            }
            container.resizable(resizeOrientation);
        }

        var numberedBlocks = 0;
        var blocks = {};

        /**
         * Get a new block id for an block without id
         */
        function blockId(index) {
            index = typeof index === 'undefined' ? numberedBlocks++ : index;
            return 'block' + index;
        }

        /**
         * Add/get a block from the info view
         *
         * - If a number or string is provided as value for obj, the block with that id is returned
         * - If a generic object is provided with the handler defined in the 'handler' property, a new block
         * is created using the handler and the block is added to the list of
         * blocks of the info view
         * - If an object is provided without handler, it is assumed to be a Block object and added to the
         * block list as is.
         *
         * @memberof niclabs.insight.InfoView
         * @param {string|number|Object | niclabs.insight.info.Block} obj - block id to get or configuration options for the new block
         * @returns {niclabs.insight.info.Block} - newly created block
         */
        function block(obj) {
            if (typeof obj == 'string') return blocks[obj];
            if (typeof obj == 'number') return blocks[blockId(obj)];

            var blk, id;
            if ('handler' in obj) {
                id = obj.id = obj.id || blockId();
                blk = niclabs.insight.handler(obj.handler)(self, obj);
            }
            else {
                blk = obj;
                id = blk.id;
            }

            blocks[id] = blk;

            // Append block to container
            container.append(blk.element);

            return blk;
        }

        // For index
        var i;

        // Create the blocks in the options list
        if (options.blocks) {
            for (i = 0; i < options.blocks.length; i++) {
                block(options.blocks[i]);
            }
        }

        // Add a resize handler
        container.on('resize', function(e) {
            for (var key in blocks) {
                blocks[key].refresh();
            }
        });

        // Perform cleanup on block removal
        niclabs.insight.event.on('remove-block', function(obj) {
            delete blocks[obj.id];
            //var index = $.inArray(dataSourceTable[obj['data-source']], obj.id);
            //dataSourceTable[obj['data-source']].splice(index, 1);
        });

        // var visualizations = {};
        // var dataSourceTable = {};

        // /**
        //  * Create a visualization according to the type provided in
        //  * props.visualization
        //  *
        //  * TODO: there must be a better way to do this
        //  *
        //  * @param (Object) props properties for the visualization
        //  * @return (Object) visualization after data is loaded
        //  */
        // function createVisualization(props) {
        //     var type = props.visualization;
        //
        //     var callback = function(pr) {
        //         var viz;
        //
        //         if (!type)
        //             return;
        //
        //         else if (type === 'summary-viz')
        //             viz = new CityDashboard.SummaryVisualization(pr);
        //         else if (type === 'linechart-viz')
        //             // TODO: check that the library is loaded first
        //             viz = new CityDashboard.ChartistVisualization(pr, Chartist.Line);
        //         else if (type === 'barchart-viz')
        //             viz = new CityDashboard.ChartistVisualization(pr, Chartist.Bar);
        //         else if (type === 'piechart-viz')
        //             viz = new CityDashboard.ChartistVisualization(pr, Chartist.Pie);
        //         else if (type === 'd3-viz')
        //             viz = new CityDashboard.D3Visualization(pr);
        //         else if (type === 'general-viz')
        //             viz = new CityDashboard.GeneralVisualization(pr);
        //
        //         visualizations[viz.id] = viz;
        //         dataSourceTable[viz.data_source] = dataSourceTable[viz.data_source] || [];
        //         dataSourceTable[viz.data_source].push(viz);
        //
        //         return viz;
        //     };
        //
        //     return CityDashboard.getData(props['data-source'], callback, props);
        // }

        // // Get the window element
        // var infoWindow = CityDashboard.container('info');

        // var handler = function(event, arg) {
        //     infoWindow.off('marker-pressed');
        //
        //     if (arg.attr.id && !(arg.attr.id in visualizations)) {
        //         var config = $.extend({}, arg.attr);
        //         config.data = arg.value;
        //         config['data-source'] = arg.id;
        //         // {
        //         //   'visualization': arg['attr']['visualization'],
        //         //   'id': arg['attr']['id'],
        //         //   'data-source': arg['id'],
        //         //   'data': arg.value,
        //         //   'preprocess': arg['attr']['preprocess'],
        //         //   'title': arg['attr']['title'],
        //         //   'properties': arg['attr']['properties'],
        //         //   'labels': arg['attr']['labels'],
        //         //   'checkbox': arg['attr']['checkbox'],
        //         //   'checkbox-handler': arg['attr']['checkbox-handler'],
        //         //   'viz': arg['attr']['viz']
        //         // };
        //
        //         createVisualization(config);
        //     }
        //
        //     var vizs = dataSourceTable[arg.id] || [];
        //     for (var i = vizs.length - 1; i >= 0; i--) {
        //         vizs[i].setData(arg.value);
        //         vizs[i].refresh();
        //     }
        //
        //     infoWindow.on('marker-pressed', handler);
        // };

        // // Add the handler
        // infoWindow.on('marker-pressed', handler);
        //

        var self = {
            /**
             * HTML DOM element for the information view container
             *
             * @memberof niclabs.insight.InfoView
             * @member {Element}
             */
            get element () {
                var c = $(infoViewId);
                container = c.length === 0 ? container : c;
                return container[0];
            },

            /**
             * jQuery object for info view container
             *
             * @memberof niclabs.insight.InfoView
             * @member {jQuery}
             */
            $: function() {
                var c = $(infoViewId);
                container = c.length === 0 ? container : c;
                return container;
            },

            /**
             * Add/get a block from the info view
             */
            block: block,

        };

        return self;
    };

    // Register the info view constructor
    niclabs.insight.handler('basic-info-view', 'info-view', constructor);

    return constructor;
})(jQuery);

niclabs.insight.MapView = (function($) {
	"use strict";

	/**
	 * Constructs a new map
	 *
	 * @class niclabs.insight.MapView
	 * @param {Object} options - configuration options for the map
	 * @param {integer} [options.zoom=12] - starting zoom level of the map
	 * @param {float} [options.lat=0] - latitude for the map center
	 * @param {float} [options.lng=0] - lng for the map center
	 */
	return function(options) {
		var mapId = '#insight-map-view';

		/**
		 * Object to represent geographic coordinates
		 *
		 * @typedef {Object} niclabs.insight.MapView.Coordinates
		 * @property {float} lat - latitude for the map center
		 * @property {float} lng - longitude for the map center
		 */
		var center = {
			lat: options.lat || 0,
			lng: options.lng || 0
		};

		var zoom = options.zoom || 12;

		// jQuery container for the map
        var container = $('<div>')
			.setID(mapId)
			.addClass('mapWindow');

		return {
			/**
             * HTML DOM element for the map view
             *
             * @memberof niclabs.insight.MapView
             * @member {Element}
             */
            get element () {
                var c = $(mapId);
                container = c.length === 0 ? container : c;
                return container[0];
            },

            /**
             * jQuery object for map view
             *
             * @memberof niclabs.insight.MapView
             * @member {jQuery}
             */
            $: function() {
                var c = $(mapId);
                container = c.length === 0 ? container : c;
                return container;
            },

			/**
			 * Set/get the map center.
			 * Overriding implementations should modify this method so the
			 * map reflects the new center.
			 *
			 * @memberof niclabs.insight.MapView
			 * @param {float=} lat - latitude for the map center
			 * @param {float=} lng - longitude for the map center
			 * @return {niclabs.insight.MapView.Coordinates} coordinates for the map center
			 */
			center: function(lat, lng) {
				center.lat = lat = typeof lat === 'undefined' ? center.lat : lat;
				center.lng = lng = typeof lng === 'undefined' ? center.lng : lng;

				return center;
			},

			/**
			 * Get the latitude for the map center
			 *
			 * @memberof niclabs.insight.MapView
			 * @return {float} latitude for the map center
			 */
			lat: function() {
				return center.lat;
			},

			/**
			 * Get the longitude for the map center
			 *
			 * @memberof niclabs.insight.MapView
			 * @return {float} longitude for the map center
			 */
			lng: function() {
				return center.lng;
			},

			/**
			 * Set/get the map zoom level.
			 * Overriding implementations should modify this method so the
			 * map reflects the new zoom.
			 *
			 * @memberof niclabs.insight.MapView
			 * @param {int=} zoom - zoom
			 * @returns {int} zoom level of the map
			 */
			zoom: function(level) {
				zoom = level = typeof level === 'undefined' ? zoom : level;

				return zoom;
			},

			/**
			 * Get the jquery object for the html element of the map
			 *
			 * @memberof niclabs.insight.MapView
			 * @return {jQuery} container for the map
			 */
			container: function() {
				return container;
			}
		};
	};
})(jQuery);

/**
 * Very basic event manager for the dashboard
 *
 * @example
 * ```javascript
 * // Subscribe to the event
 * var eventId = niclabs.insight.event.on('hello', function(who) {
 *      alert("HELLO "+who+"!!!");
 * });
 *
 * // Trigger the event
 * niclabs.insight.event.trigger('hello', "John"); // Shows alert 'HELLO John!!!'
 *
 * // Unsubscribe
 * niclabs.insight.event.off('hello', eventId);
 * ```
 *
 * @namespace
 */
niclabs.insight.event = (function() {
    "use strict";

    var events = {};

    /**
     * Find the event in the event list, return -1 if not found
     */
    function indexOf(event, listener) {
        if (event in events) {
            for (var i = 0; i < events[event].length; i++) {
                if (events[event][i] === listener) {
                    return i;
                }
            }
        }
        return -1;
    }

    /**
     * Insight event listener
     *
     * @callback niclabs.insight.event~listener
     * @param {Object} data - data for the callback function, dependant on the event
     */

    return {
        /**
         * Listen for an event. A listener callback can only be assigned once for an event
         *
         * @memberof niclabs.insight.event
         * @param {string} event - event type
         * @param {niclabs.insight.event~listener} listener - callback to process the event
         * @returns {number} id of the listener
         */
        on: function(event, listener) {
            var index = indexOf(event, listener);

            if (index < 0) {
                if (!('event' in events)) {
                    events[event] = [];
                }

                // Add the new listener
                return events[event].push(listener) - 1;
            }
            return index;
        },

        /**
         * Stop listening for an event.
         *
         * @memberof niclabs.insight.event
         * @param {string} event - event type
         * @param {niclabs.insight.event~listener|number} listener - callback to remove or id of the listener provided by {@link niclabs.insight.event.on()}
         * @returns {boolean} true if the listener was found and was succesfully removed
         */
        off: function(event, listener) {
            var index = typeof listener === 'number' ? listener : indexOf(event, listener);

            if (index >= 0) {
                // Remove the event
                events[event].splice(index, 1);

                return true;
            }
            return false;
        },

        /**
         * Trigger an event
         *
         * @memberof niclabs.insight.event
         * @param {string} event - event type
         * @param {Object=} data - data to pass to the callback
         */
        trigger: function(event, data) {
            if (event in events) {
                for (var i = 0; i < events[event].length; i++) {
                    // Notify the listeners
                    events[event][i](data);
                }
            }
        }
    };
})();

/**
 * Contains the definitions for the information blocks supported by insight
 *
 * @namespace
 */
niclabs.insight.info = {};

niclabs.insight.info.Block = (function($) {
    "use strict";

    /**
     * Construct a information block
     *
     * @class niclabs.insight.info.Block
     * @param {niclabs.insight.Dashboard} dashboard - dashboard to which the block belongs to
     * @param {Object} options - configuration options for the block
     * @param {string} options.id - html identifier for the block
     * @param {string=} options.title - title for the block
     * @param {Object=} options.properties - block properties (closable, movable)
     */
    var constructor = function(dashboard, options) {
        if (!('id' in options)) {
            throw new Error("All information blocks must have an id");
        }

        var id = options.id;
        var title = options.title || '';
        var properties = options.properties || {};
        var datasource = options.datasource || id; // TODO: unnecessary?
        var preprocess = options.preprocess || function(x) {return x;};

        // placing
        var titleElement = $('<h4>').append(title).addClass('viz-title');

        var container = $('<div>').setID(id).addClass('visualization')
            .append(titleElement)
            .append($('<hr>').addClass('viz-bar'));

        /**
         * Remove the block from the dashboard.
         * This method triggers an event to alert all elements of the
         * dashboard of the block removal
         *
         * @memberof niclabs.insight.info.Block
         */
        function remove() {
            // Trigger the block removal
            niclabs.insight.event.trigger('remove-block', {
                'id': id,
                'datasource': datasource
            });
        }

        // Make the block closable
        if (properties.closable === undefined || properties.closable) {
            container.closable(function() {
                // Remove the block
                remove();
            });
        }

        // Make the block movable
        if (properties.movable === undefined || properties.movable) {
            container.movable();
        }

        // TODO: not sure what this does
        container.append($('<h6>').addClass('latlngView'));

        // Add the properties to the block style
        container.css(properties);

        // checkbox handling
        // TODO: this is not a generic functionality?
        // var checkbox_handler = options['checkbox-handler'] || function (a, d) { return d; };
        //
        // if (options.checkbox)
        //     this.addCheckbox(options.checkbox);

        // Block data
        var data = {};

        var self = {
            /**
             * DOM id of the block
             * @memberof niclabs.insight.info.Block
             * @member {string}
             */
            get id () {
                return id;
            },

            /**
             * HTML DOM element for the block container
             *
             * @memberof niclabs.insight.info.Block
             * @member {Element}
             */
            get element () {
                var c = $(id);
                container = c.length === 0 ? container : c;
                return container[0];
            },

            /**
             * jQuery object for info block container
             *
             * @memberof niclabs.insight.info.Block
             * @member {jQuery}
             */
            get $ () {
                var c = $(id);
                container = c.length === 0 ? container : c;
                return container;
            },

            /**
             * Trigger the removal of the block
             */
            remove: remove,

            /**
             * Set/get the data for the block
             *
             * @memberof niclabs.insight.info.Block
             * @param {Object=} data - data for the block
             * @returns {Object} the current data in the blokc
             */
            data: function (d) {
                d = typeof d === 'undefined' ? data : d;

                // If the object is empty we cleanup the internal data
                if (Object.keys(d).length === 0)
                    data = {};
                else
                    data = preprocess(d);

                return data;
            },

            refresh: function () {
                var latlngView = self.$.find('.latlngView').empty();

                self.$.find('.deflist').remove();

                var data = self.getData();

                var lat = data.lat,
                    lng = data.lng;

                if (lat && lng)
                    latlngView.text('lat: ' + lat + ', lng: ' + lng).insertAfter(self.$.find('hr'));
            },

            /**
             * Create a definition list from the provided data
             *
             * TODO: should this really go here? Change the name?
             *
             * @memberof niclabs.insight.info.Block
             * @param {Object=} data - the updated data for the block
             */
            createDefList: function (data) {
                $.each(data, function (key, value) {
                    if (key !== 'lat' && key !== 'lng' && key !== 'value') {
                        self.$.find('.deflist')
                            .append($('<dt>').text(key).addClass('deflist-key'))
                            .append($('<dd>').text(value).addClass('deflist-value'));
                    }
                });
            },
        };

        return self;
    };

    return constructor;
})(jQuery);

// CityDashboard.Visualization.prototype = {
//     addCheckbox: function (keys) {
//         //keys: {name1:true,name2:false,name3:true,...}
//         //each element of the object indicates the label of each checkbox. The number of keys indicates the number of checboxes.
//         //handler :  function ([true, false, true, ...],data)
//         //each element of the array corresponds to each checkbox state.
//
//         var checkpanel = $("<span>").addClass('checkbox-panel');
//
//         var arr = [];
//
//         for (var key in keys) {
//             var checkbox = $('<input>').attr('type', 'checkbox');
//
//             arr[arr.length] = checkbox[0].checked = keys[key];
//             checkpanel.append(checkbox);
//
//             var _this = this;
//
//             checkbox.on('change', function () {
//
//                 var array = $(this).parent().children('input:checkbox').map(function () {
//                     return $(this).prop('checked');
//                 }).get();
//
//                 _this.getData = function () {
//                     var clone = _this.data;
//                     if (!(_this.data instanceof Array))
//                         clone = jQuery.extend({}, _this.data);
//                     return _this.checkbox_handler(array, clone);
//                 };
//
//                 _this.refresh();
//
//             })
//
//             checkbox.after($('<label>').text(key));
//         }
//
//         this.viz.append(checkpanel);
//
//         _this.getData = function () {
//             var clone = _this.data;
//             if (!(_this.data instanceof Array))
//                 clone = jQuery.extend({}, _this.data);
//             return _this.checkbox_handler(arr, clone);
//         };
//     }
//
// };

niclabs.insight.info.Summary = (function($) {
    /**
     * Construct a new summary information block
     * TODO: describe what is a summary information block
     *
     * @class niclabs.insight.info.Summary
     * @augments niclabs.insight.info.Block
     * @inheritdoc
     * @param {niclabs.insight.Dashboard} dashboard - parent dashboard for the block
     * @param {Object} options - see {@link niclabs.insight.info.Block} constructor
     */
    var constructor = function(dashboard, options) {
        var self = niclabs.insight.info.Block(dashboard, options);

        self.$.addClass('summary-viz');

        // Store the refresh method of the parent
        var refresh = self.refresh;

        /**
         * Override the parent refresh
         */
        self.refresh = function() {
            // Call the parent refresh
            refresh();

            self.$.append($('<dl>').addClass('deflist'));
            self.createDeflist(self.data());
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('summary-block', 'info-block', constructor);

    return constructor;
})(jQuery);

/**
 * Map compatibility for the insight dashboard
 *
 * @namespace
 */
niclabs.insight.map = {};

niclabs.insight.map.GoogleMap = (function($) {
    "use strict";

    /**
     * Constructor of GoogleMap
     *
     * @class niclabs.insight.map.GoogleMap
     * @extends {niclabs.insight.MapView}
     * @param {Object} options - configuration options for the map
     * @param {integer} [options.zoom=12] - starting zoom level of the map
     * @param {float} [options.lat=0] - latitude for the map center
     * @param {float} [options.lng=0] - lng for the map center
     */
    var constructor = function(dashboard, options) {

        // Initialize parent
        var map = niclabs.insight.MapView(options);

        var googlemap = new google.maps.Map(map.container()[0], {
            zoom: map.zoom(),
            center: new google.maps.LatLng(map.lat(), map.lng()),
            disableDefaultUI: true
        });

        // Store the parent function
        var zoom = map.zoom;

        // Listen for zoom changes
        google.maps.event.addListener(googlemap, 'zoom_changed',
            function() {
                // Update the map zoom
                zoom(googlemap.getZoom());
            });

        /**
         * Set/get the zoom level for the map
         *
         * Overrides the functionality of niclabs.insight.MapView.zoom() by modifying
         * the underlying google map zoom level as well
         *
         * @override
         * @memberof niclabs.insight.map.GoogleMap
         * @param {int=} zoom - zoom
         * @returns {int} zoom level of the map
         */
        map.zoom = function(level) {
            // Call parent zoom
            level = zoom(level);

            // Update the google map
            googlemap.setZoom(level);

            return level;
        };

        // Store the parent function
        var center = map.center;

        // Listen for center changes
        google.maps.event.addListener(googlemap, 'center_changed',
            function() {
                var c = googlemap.getCenter();

                // Update the center for the local object
                center(c.lat(), c.lng());
            });

        /**
         * Set/get the map center.
         *
         * Overrides the functionality of {@link niclabs.insight.MapView.center} by modifying
         * the underlying google map center as well
         *
         * @override
         * @memberof niclabs.insight.map.GoogleMap
         * @param {float=} lat - latitude for the map center
         * @param {float=} lng - longitude for the map center
         * @return {niclabs.insight.MapView.Coordinates} coordinates for the map center
         */
        map.center = function(lat, lng) {
            var c = center(lat, lng);

            // Update the map
            googlemap.setCenter({
                'lat': c.lat,
                'lng': c.lng
            });

            return c;
        };

        /**
         * Get the underlying google map object for further modification
         *
         * @returns (google.maps.Map) underlying map object
         */
        map.googlemap = function() {
            return googlemap;
        };

        return map;
    };

    // Register the handler
    niclabs.insight.handler('google-map', 'map-view', constructor);

    return constructor;
})(jQuery);
