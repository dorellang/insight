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
niclabs.insight = (function ($) {
    "use strict";

     /**
      * Bind a jquery element to a template
      *
      * It binds the callback 'render' to a function that will render
      * an associative array into the element by using the data-bind
      * attributes
      *
      * You can use the attributes `data-bind` and `data-if`
      * indicate binding or dependency from a data element
      *
      * @example
      * ```html
      * <script id='template' type='text/html'>
      * Hello <span data-bind="name">friend</span><span data-if="name">!!!</span>,
      * this is a template <span data-if="app">for </span><i data-bind="app">your app</i>
      * </script>
      * <script type='text/html'>
      * $('#element').template('#template'); // Will show "Hello, this is a template"
      * $('#content').trigger('render', {name: 'John', app: 'John\'s App'}); // Updates content to "Hello John!!!, this is a template for John's app"
      * </script>
      * ```
      *
      * @param {string|jQuery} template - id for the template element, string with the template or jQuery selector to use as template
      * @returns {jQuery} this element
      */
    $.fn.template = function(template) {
        if (typeof template === 'undefined') template = this.html();
        else if (typeof template === 'string' && template.charAt(0) === '#') {
            template = $(template).html();
        }

        var $element = this;

        // Define the render() function
        this.bind('render', function(event, data) {
            $element.empty().append(template);

            // Get elements with data bindings
            $element.find('[data-bind],[data-if]').each(function() {
                var key = $(this).attr('data-bind') || $(this).attr('data-if');

                var tag = $(this).prop('tagName');
                if (key in data) {
                    if ($(this).attr('data-bind')) {
                        if (tag === 'img') $(this).attr('src', data[key]);
                        else if (tag === 'input') $(this).val(data[key]);
                        else $(this).text(data[key]);
                    }
                }
                else {
                    $(this).detach();
                }
            });
        });

        return this;
    };

    /**
     * Initial required configurations
     */

    /**
     * JQuery plugin to make an element resizable
     * TODO: missing documentation/source
     */
    $.fn.resizable = function (orientation) {
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

        this.scroll(function (e) {
            resizer.css('top', resizable.scrollTop());
        });

        return this;
    };

    /**
     * Set the id for the jQuery selector
     */
    $.fn.setID = function (selector) {
        if (selector.charAt(0) === '#')
            selector = selector.slice(1);
        this.attr('id', selector);
        return this;
    };

    /**
     * JQuery plugin to make an element movable
     * TODO: missing documentation/source
     */
    $.fn.movable = function () {

        var panel = this.children('.header');
        if (panel.length === 0) {
            panel = $('<div>').addClass('header');
            this.prepend(panel);
        }

        var up = $('<span>').addClass('button').attr('data-icon', 'up-arrow');
        var down = $('<span>').addClass('button').attr('data-icon', 'down-arrow');
        panel.append(up);
        panel.append(down);

        var _this = this;

        up.on('click', function () {
            _this.insertBefore(_this.prev());
        });

        down.on('click', function () {
            _this.insertAfter(_this.next());
        });

        return this;
    };

    /**
     * JQuery plugin to make an element closeable
     * TODO: Missing documentation
     */
    $.fn.closable = function (handler) {
        if (!handler) {
            handler = function () {
                return;
            };
        }

        var panel = this.children('.header');
        if (!panel.length) {
            panel = $('<span>').addClass('header');
            this.prepend(panel);
        }

        var close = $('<span>').addClass('button').attr('data-icon', 'close');

        panel.prepend(close);

        var _this = this;

        close.on('click', function () {
            _this.remove();
            handler();
        });

        return this;
    };

    /**
     * Check if indexOf exists in Array.prototype or use jQuery.inArray();
     */
    Array.prototype.indexOf = 'indexOf' in Array.prototype ? Array.prototype.indexOf : function (item, start) {
        return $.inArray(item, this, start);
    };

    /**
     * Calculate the size of the associative array
     */
    Object.size = function (obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    /*
     * object.watch polyfill
     *
     * 2012-04-03
     *
     * By Eli Grey, http://eligrey.com
     * Public Domain.
     *
     * Modified by Nenad Damnjanović
     * Nov 9, 2014
     *
     * Source: https://gist.github.com/flackjap/f318e6a2b316e4d9fa44
     *
     * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
     */

    // object.watch
    if (!Object.prototype.watch) {
        Object.defineProperty(Object.prototype, "watch", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function (prop, handler) {
                var
                    oldval = this[prop],
                    getter = function () {
                        return oldval;
                    },
                    setter = function (newval) {
                        if (oldval !== newval) {
                            handler.call(this, prop, oldval, newval);
                            oldval = newval;
                        } else {
                            return false;
                        }
                    };

                if (delete this[prop]) { // can't watch constants
                    Object.defineProperty(this, prop, {
                        get: getter,
                        set: setter,
                        enumerable: true,
                        configurable: true
                    });
                }
            }
        });
    }

    if (!Object.prototype.unwatch) {
        Object.defineProperty(Object.prototype, "unwatch", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function (prop) {
                var val = this[prop];
                delete this[prop]; // remove accessors
                this[prop] = val;
            }
        });
    }


    /**
     * Spy an object using Object.watch
     */
    if (!Object.prototype.spy) {
        Object.defineProperty(Object.prototype, "spy", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function (handler) {
                for (var prop in this) {
                    // Watch all the object properties
                    if (this.hasOwnProperty(prop)) {
                        this.watch(prop, handler);
                    }
                }
            }
        });
    }

    if (!Object.prototype.unspy) {
        Object.defineProperty(Object.prototype, "unspy", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: function () {
                for (var prop in this) {
                    // Watch all the object properties
                    if (this.hasOwnProperty(prop)) {
                        this.unwatch(prop);
                    }
                }
            }
        });
    }

    /**
     *
     * Example usage:
     *
     *
    	var o = {p: 1};

    	o.spy(function (id, oldval, newval) {
    	    console.log( "o." + id + " changed from " + oldval + " to " + newval );
    	    return newval;
    	});

    	o.p = 2; // should log the change
    	o.p = 2; // should do nothing
     */

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
        handler: function (name, kind, handler) {
            if (name in handlers) {
                kind = typeof kind === 'undefined' ? handlers[name].kind : kind;
                handler = typeof handler === 'undefined' ? handlers[name].handler : handler;

                if (kind !== handlers[name].kind) {
                    throw new Error('There already exists a handler with name ' + name + ' for kind ' + handlers[name].kind);
                }
            } else if (typeof kind === 'undefined' && typeof handler === 'undefined') {
                throw new Error('Handler ' + name + ' does not exist');
            }

            handlers[name] = {
                'kind': kind,
                'handler': handler
            };
            return handler;
        },

        /**
         * Get/construct a {@link niclabs.insight.Dashboard}
         *
         * Returns the dashboard for the namespace if options are not provided
         *
         * @example
         * ```javascript
         * // Create a map with the info view to the left
         * var dashboard = niclabs.insight.dashboard({
         *     'anchor': '#dashboard',
         *     'layout': 'left'
         * });
         * ```
         *
         * @memberof niclabs.insight
         * @param {Object=} options - list of configuration options for the dashboard see {@link niclabs.insight.Dashboard}
         * @returns {niclabs.insight.Dashboard} dashboard object
         */
        dashboard: function (options) {
            if (typeof options === 'undefined') return dashboard;

            dashboard = niclabs.insight.Dashboard(options);
            return dashboard;
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
        var layoutOptions = ['left', 'right', 'none'];
        var dashboardId = "#insight-dashboard";

        if (!('anchor' in options)) throw new Error('Anchor id is required for creating a dashboard');
        var anchor = options.anchor;

        options.layout = options.layout || 'none';
        if (layoutOptions.indexOf(options.layout) < 0) throw new Error('Layout must be one of \'' + layoutOptions.join('\',\'') + '\'');

        // Create the main container
        var container = $('<div>')
            .setID(dashboardId).addClass('insight')
            .addClass(options.layout );

        // Append the dashboard to the container
        $(anchor).append(container);

        // Create the filter bar
        var filterBar = niclabs.insight.FilterBar();

        // Append the filter bar
        container.append(filterBar.element);

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

        // Create an event to be notified of a filter change
        niclabs.insight.event.on('filter_changed', function(f) {
            $.each(layers, function(name, layer) {
                layer.filter(f);
            });
        });

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
            info: function(obj) {
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
            map: function(obj) {
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
             * Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
             * of the filter for further customizations
             *
             * @example
             * ```javascript
             * dashboard.filter({
             *  description: 'Landmark', // the empty string is used if not provided
             *  options: [
             *      {name: 'Not Eiffel Tower', filter: function(data) { return data.landmark.indexOf("Eiffel") < 0; }},
             *      {name: 'Not Champ de Mars', filter: function(data) { return data.landmark.indexOf("Mars") < 0; }},
             *  ]
             * });
             * ```
             *
             * @memberof niclabs.insight.Dashboard
             * @param {Object|number} filter configuration for the filter or filter index
             * @return {jQuery} reference to the added element for further customization
             */
            filter: function(filter) {
                return filterBar.filter(filter);
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
    var InFoView = function(dashboard, options) {
        // Default visualization property list
        options = options || {};

        var infoViewId = "#insight-info-view";

        // Create the info view
        var container = $('<div>')
            .setID(infoViewId)
            .addClass('info');

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
         * @param {string|number|Object| niclabs.insight.info.Block} obj - block id to get or configuration options for the new block
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
    niclabs.insight.handler('basic-info-view', 'info-view', InFoView);

    return InFoView;
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
			.addClass('map');


		/**
		* Event triggered to notify the dashboard that an element of the map has been pressed
		*
		* @event niclabs.insight.MapView#map_element_selected
		* @type {object}
		* @property {string} layer - id for the layer to which the data belongs to
		* @property {float} lat - latitude for the marker
		* @property {float} lng - latitude for the marker
		*/

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
                if (!(event in events)) {
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
 * Visualization layers for the dashboard
 *
 * @namespace
 */
niclabs.insight.layer = (function () {
    /**
     * Helper method to add/get a {@link niclabs.insight.layer.Layer} for the dashboard
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
     * @example
     * ```javascript
     * niclabs.insight.layer({
     *      handler: 'marker-layer',
     *      data: [{
     *          'lat': 48.8556,
     *          'lng': 2.2986,
     *          'landmark': 'Champ de Mars'
     *      }, {
     *          'lat': 48.8583,
     *          'lng': 2.2944,
     *          'landmark': 'Eiffel Tower',
     *          'fun-fact': 'Was built in 1889.'
     *      }],
     *      marker: {
     *          'type': 'image-marker',
     *          'src': 'antenna.svg'
     *      }
     * });
     * ```
     *
     * @memberof niclabs.insight
     * @variation 2
     * @param {string|number|Object| niclabs.insight.layer.Layer} obj - layer id to get or configuration options for the new layer
     * @param {boolean} [activate=false] - if true, set the layer as the active layer of the dashboard
     * @returns {niclabs.insight.info.Layer} - layer for the provided id
     */
    var layer = function (obj, activate) {
        var dashboard = niclabs.insight.dashboard();
        if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");

        return dashboard.layer(obj, activate);
    };

    return layer;
})();

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
     * @param {Object|Function} [options.summary] - summary data
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
            data = options.data && Array.isArray(options.data) ? options.data: [options.data];
        }

        var summary = options.summary || false;

        // Will be set to true once the layer is loaded
        var loaded = false;

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
                    return loaded || !dataSource? data : dataSource;
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

                    if (summary) {
                        var summaryData = summary;
                        if (typeof summary === 'function') summaryData = summary(data);

                        /**
                         * Event triggered when an update to the (filtering/update) has ocurred
                         *
                         * The event provides summary data for blocks to show
                         *
                         * @event niclabs.insight.layer.Layer#layer_sumary
                         * @type {object}
                         * @property {string} id - id for the layer to which the data belongs to
                         * @property {Object[]} data - new data array
                         */
                        niclabs.insight.event.trigger('layer_summary', {
                            'id': id,
                            'data': summaryData
                        });
                    }

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

niclabs.insight.layer.MarkerLayer = (function($) {
    /**
     * Construct a new marker layer
     *
     * @class niclabs.insight.layer.MarkerLayer
     * @extends niclabs.insight.layer.Layer
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.id - identifier for the layer
     * @param {string|Object[]} options.data - uri or data array for the layer
     */
    var MarkerLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var attr = options.marker || {
            'type': 'simple-marker'
        };

        var markers = [];

        /**
         * Create marker from the type attribute
         *
         * @param {Object[]} data - layer data
         * @param {number} index - index of the marker in the data array
         * @param {Object} obj - configuration for the new marker
          */
        function newMarker(data, index, obj) {
            var marker;
            if ('type' in obj) {
                var attr = {'layer': layer.id};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj, data[index]);

                marker = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
                marker = obj;
            }

            // Make the marker clickable
            marker.clickable(true);

            return marker;
        }

        /**
         * Draw the markers according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.MarkerLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the marker
         * @param {float} data[].lng - longitude for the marker
         * @param {string=} data[].description - description for the marker
         */
        layer.draw = function(data) {
            for (var i = 0; i < data.length; i++) {
                markers.push(newMarker(data, i, attr));
            }
        };

        /**
         * Clear the markers from the map
         *
         * @memberof niclabs.insight.layer.MarkerLayer
         * @override
         */
        layer.clear = function() {
            for (var i = 0; i < markers.length; i++) {
                markers[i].clear();
            }
        };

        /**
         * Filter the layer according to the provided function.
         *
         * @memberof niclabs.insight.layer.MarkerLayer
         * @override
         * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
         */
        layer.filter = function(fn) {
            var data = layer.data();
            for (var i = 0; i < markers.length; i++) {
                markers[i].visible(fn(data[i]));
            }
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('marker-layer', 'layer', MarkerLayer);

    return MarkerLayer;
})(jQuery);

/**
 * Map compatibility for the insight dashboard
 *
 * @namespace
 */
niclabs.insight.map = (function () {
    /**
     * Helper method to assign/get the map view to/from the dashboard
     *
     * @example
     * ```javascript
     * // Create the map
     * var map = niclabs.insight.map({
     *      'handler': 'google-map', // Map constructor
     *      'lat': 48.8583,
     *      'lng': 2.2944,
     *      'zoom': 15
     * });
     * ```
     *
     * @memberof niclabs.insight
     * @variation 2
     * @param {Object|niclabs.insight.MapView} [obj] - configuration for the map view or map view object
     * @param {String} obj.handler - name of the handler to construct the map view
     * @returns {niclabs.insight.MapView} the dashboard map view
     */
    var map = function (obj) {
        var dashboard = niclabs.insight.dashboard();
        if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");
        return dashboard.map(obj);
    };

    return map;
})();

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
    var GoogleMap = function(dashboard, options) {

        // Initialize parent
        var map = niclabs.insight.MapView(options);

        var googlemap = new google.maps.Map(map.element, {
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
    niclabs.insight.handler('google-map', 'map-view', GoogleMap);

    return GoogleMap;
})(jQuery);

/**
 * Contains the definitions for the information blocks supported by insight
 *
 * @namespace
 */
niclabs.insight.info = (function () {
    /**
     * Helper method to assign/get the information view to/from the dashboard
     *
     * @example
     * ```javascript
     * // Create the info view
     * niclabs.insight.info({
     *      handler: 'basic-info-view', // The view constructor
     *      blocks: [{
     *          'handler': 'summary-block', // The block constructor
     *          'id': '#summary',
     *          'title': 'My Marker Summary',
     *          'data': { // Default data
     *              'description': 'This block will show the details of the selected markers'
     *        },
     *        ignore: ['layer', 'type', 'src'] // Data elements we don't want on the block
     *    }]
     * });
     * ```
     *
     * @memberof niclabs.insight
     * @variation 2
     * @param {Object|niclabs.insight.InfoView} [obj] - configuration for the information view or information view object
     * @param {String} obj.handler - name of the handler to construct the info view
     * @returns {niclabs.insight.InfoView} the dashboard information view
     */
    var info = function(obj) {
        var dashboard = niclabs.insight.dashboard();
        if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");
        return dashboard.info(obj);
    };

    return info;
})();

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
     * @param {boolean} [options.closable=true] - make the block closable
     * @param {boolean} [options.movable=true] - make the block movable
     * @param {Object=} options.data - default data for the block
     */
    var constructor = function(dashboard, options) {
        if (!('id' in options)) {
            throw new Error("All information blocks must have an id");
        }

        var id = options.id;
        var htmlId = id.charAt(0) === '#' ? id : '#' + id;
        var title = options.title || '';

        var properties = {
            closable: typeof options.closable === 'undefined'? true : options.closable,
            movable: typeof options.movable === 'undefined'? true : options.movable,
        };
        var preprocess = options.preprocess || function(x) {return x;};

        // placing
        var header = $('<div>').addClass('header').append($('<span>').attr('data-bind', 'title').addClass('title').append(title));

        var container = $('<div>').setID(htmlId).addClass('block')
            .append(header);

        // Save the content element
        var content = $('<div>').addClass('content');

        // Append the content
        container.append(content);

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
                'id': id
            });
        }

        // Make the block closable
        if (properties.closable) {
            container.closable(function() {
                // Remove the block
                remove();
            });
        }

        // Make the block movable
        if (properties.movable) {
            container.movable();
        }

        // Add the properties to the block style
        container.css(properties);

        // checkbox handling
        // TODO: this is not a generic functionality?
        // var checkbox_handler = options['checkbox-handler'] || function (a, d) { return d; };
        //
        // if (options.checkbox)
        //     this.addCheckbox(options.checkbox);

        // Listen for map events
        niclabs.insight.event.on('map_element_selected', function(data) {
            self.data(data);
            self.refresh(data);
        });

        // Listen for summary events
        niclabs.insight.event.on('layer_summary', function(summary) {
            self.data(summary.data);
            self.refresh(summary.data);
        });

        // Block data
        var data = options.data || {};

        var self = {
            /**
             * id of the block
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
                var c = $(htmlId);
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
                var c = $(htmlId);
                container = c.length === 0 ? container : c;
                return container;
            },

            /**
             * jQuery element for the content container
             *
             * The content of the block is the HTML container that
             * comes after the block title
             *
             * @memberof niclabs.insight.info.Block
             * @member {jQuery}
             */
            get content() {
                var c = $(htmlId).find('.content');
                content = c.length === 0 ? content: c;
                return content;
            },

            /**
             * Get set the title for the block
             *
             * @param {string=} newtitle - new title for the block
             * @returns {string} the updated value for the block title
             */
            title: function(newtitle) {
                if (typeof newtitle !== 'undefined') {
                    title = newtitle;
                    self.$.find('.title').text(newtitle);
                }
                return title;
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

            /**
             * Refresh the block using the provided data
             *
             * @memberof niclabs.insight.info.Block
             * @abstract
             * @param {Object=} data - data to refresh
             */
            refresh: function (data) {
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

niclabs.insight.info.ChartistBlock = (function($) {
    /**
     * Configuration options for chartist charts
     *
     * @typedef niclabs.insight.info.ChartistBlock.Chartist
     * @type {Object}
     * @param {Object} chartist.class - chartist css class
     * @param {Object} chartist.labels - chart labels
     * @param {Object=} chartist.options - chartist options
     * @param {Object=} chartist.responsiveOptions - chartist responsive options
     */


    /**
     * Construct a new chartist information block
     *
     * For the configuration options see {@link http://gionkunz.github.io/chartist-js/}
     *
     * @class niclabs.insight.info.ChartistBlock
     * @augments niclabs.insight.info.Block
     * @inheritdoc
     * @param {niclabs.insight.Dashboard} dashboard - parent dashboard for the block
     * @param {Object} constructor - chartist object to use as constructor
     * @param {Object} options - configuration options for the block
     * @param {string} options.id - html identifier for the block
     * @param {string=} options.title - title for the block
     * @param {niclabs.insight.info.ChartistBlock.Chartist} options.chartist - chartist configuration
     * @param {boolean} [options.closable=true] - make the block closable
     * @param {boolean} [options.movable=true] - make the block movable
     * @param {Object=} options.data - default data for the summary
     */
     var ChartistBlock = function (dashboard, constructor, options) {
         var self = niclabs.insight.info.Block(dashboard, options);

         var chartist = options.chartist;

         self.content.addClass('chartist-viz').append( $('<div>').addClass(chartist.class));

         var chartistOptions = chartist.options || {};
         var responsiveOptions = chartist.responsiveOptions || {};
         var labels = chartist.labels;

         // Store the chart object
         var chart;

         var refresh = self.refresh;

         self.refresh = function(data) {
             data = typeof data === 'undefined' ? self.data() : data;

             // Call the parent
             refresh(data);

             // Look for 'value' key in data
             data = data.value || data;

             var chartData  = {
               'series': data,
               'labels': typeof labels === 'function' ? labels(data) : labels
             };

             if (chart && chart.optionsProvider) {
                 chart.update(chartData);
             }
             else {
                 chart = new constructor((self.content.find('div'))[0], chartData , chartistOptions, responsiveOptions);
             }
         };

         if (options.data) self.refresh(options.data);


         var remove = self.remove;

         // Override remove method
         self.remove = function() {
             // Call the parent
             remove();

             chart.detach();
         };

         return self;
     };

     var ChartistLineChartBlock = function(dashboard, options) {
        var self = ChartistBlock(dashboard, Chartist.Line, options);
        return self;
     };

     var ChartistBarChartBlock = function(dashboard, options) {
        var self = ChartistBlock(dashboard, Chartist.Bar, options);
        return self;
    };

    var ChartistPieChartBlock = function(dashboard, options) {
       var self = ChartistBlock(dashboard, Chartist.Pie, options);
       return self;
    };

     // Register the handler
     niclabs.insight.handler('chartist-linechart', 'info-block', ChartistLineChartBlock);
     niclabs.insight.handler('chartist-barchart', 'info-block', ChartistBarChartBlock);
     niclabs.insight.handler('chartist-piechart', 'info-block', ChartistPieChartBlock);

     return ChartistBlock;
 })(jQuery);

niclabs.insight.info.SummaryBlock = (function($) {
    /**
     * Construct a new summary information block
     * TODO: describe what is a summary information block
     *
     * @class niclabs.insight.info.SummaryBlock
     * @augments niclabs.insight.info.Block
     * @inheritdoc
     * @param {niclabs.insight.Dashboard} dashboard - parent dashboard for the block
     * @param {Object} options - configuration options for the block
     * @param {string} options.id - html identifier for the block
     * @param {string=} options.title - title for the block
     * @param {boolean} [options.closable=true] - make the block closable
     * @param {boolean} [options.movable=true] - make the block movable
     * @param {Object=} options.data - default data for the summary
     */
    var SummaryBlock = function(dashboard, options) {
        var self = niclabs.insight.info.Block(dashboard, options);

        // Create the default template
        /*jshint multistr: true */
        var template = options.template || '\
        <h6 class="latLngView" data-if="lat"> \
            lat: <span data-bind="lat"> -- </span> \
            lng: <span data-bind="lng"> -- </span> \
        </h6>\
        <dl class="deflist">\
            <dt class="deflist-key" data-if="description">description</dt> \
            <dd class="deflist-value" data-bind="description">none</dd> \
            <dt class="deflist-key" data-if="landmark">landmark</dt> \
            <dd class="deflist-value" data-bind="landmark">none</dd> \
            <dt class="deflist-key" data-if="fun-fact">fun-fact</dt> \
            <dd class="deflist-value" data-bind="fun-fact">none</dd> \
        </dl>\
        ';

        // Append the template to the content
        self.content.template(template);

        // Store the refresh method of the parent
        var refresh = self.refresh;

        /**
         * Override the parent refresh
         */
        self.refresh = function(data) {
            data = typeof data !== 'undefined' ? data : self.data();

            // Call the parent refresh
            refresh(data);

            // Render the data
            self.content.trigger('render', data);
        };

        // Create the default summary if provided
        //if (options.data) self.summary(options.data);
        if (options.data) self.refresh(options.data);

        return self;
    };

    // Register the handler
    niclabs.insight.handler('summary-block', 'info-block', SummaryBlock);

    return SummaryBlock;
})(jQuery);

/**
 * Collection of markers available for drawing on the map
 *
 * @namespace
 */
niclabs.insight.map.marker = {};

niclabs.insight.map.marker.CircleMarker = (function($) {
    /**
     * Constructor for circle markers
     *
     * Circle markers are drawn in the map as circular waypoints
     *
     * @class niclabs.insight.map.marker.SimpleMarker
     * @extends niclabs.insight.map.marker.Marker
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.layer - identifier for the layer that this marker belongs to
     * @params {float} options.lat - latitude for the marker
     * @params {float} options.lng - longitude for the marker
     * @params {string} options.landmark - landmark that the marker indicates
     * @params {number} [options.radius=400] - radius for the circle
     * @params {string} [options.strokeColor='#ff0000'] - color for the circle perimenter line
     * @params {float} [options.strokeOpacity=0.8] - opacity for the circle perimeter line
     * @params {string} [options.fillColor='#ff0000'] - color for the circle filling
     * @params {float} [options.fillOpacity=0.35] - opacity for the circle filling
     */
    var CircleMarker = function(dashboard, options) {
        var self = niclabs.insight.map.marker.Marker(dashboard, options);

        var latLng = new google.maps.LatLng(parseFloat(options.lat), parseFloat(options.lng));

        var marker = new google.maps.Circle({
            center: latLng,
            map: self.map.googlemap(),
            radius: options.radius || 400,
            strokeColor: options.strokeColor || '#FF0000',
            strokeOpacity: options.strokeOpacity || 0.8,
            strokeWeight: options.strokeWeight || 2,
            fillColor: options.fillColor || '#FF0000',
            fillOpacity: options.fillOpacity || 0.35,
            title: options.landmark || ''
        });

        // Re-write the marker function
        self.marker = function() {
            return marker;
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('circle-marker', 'marker', CircleMarker);

    return CircleMarker;
})(jQuery);

niclabs.insight.map.marker.ImageMarker = (function($) {
    /**
     * Constructor for an image marker
     *
     * An image marker includes an image for each waypoint
     *
     * @class niclabs.insight.map.marker.ImageMarker
     * @extends niclabs.insight.map.marker.Marker
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.layer - identifier for the layer that this marker belongs to
     * @params {float} options.lat - latitude for the marker
     * @params {float} options.lng - longitude for the marker
     * @params {string} options.landmark - landmark that the marker indicates
     * @params {string} options.src - image source
     */
    var ImageMarker = function(dashboard, options) {
        var self = niclabs.insight.map.marker.Marker(dashboard, options);

        var latLng = new google.maps.LatLng(parseFloat(options.lat), parseFloat(options.lng));

        if (!('src' in options))
            throw new Error('An image source must be provided for using image markers');

        var image = {
            url: options.src,
            scaledSize: new google.maps.Size(30, 50)
        };

        var marker = new google.maps.Marker({
            position: latLng,
            map: self.map.googlemap(),
            icon: image,
            title: options.landmark || ''
        });

        // Re-write the marker function
        self.marker = function() {
            return marker;
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('image-marker', 'marker', ImageMarker);

    return ImageMarker;
})(jQuery);

niclabs.insight.map.marker.Marker = (function($) {
    /**
     * Construct a new marker
     *
     * @class niclabs.insight.map.marker.Marker
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.layer - identifier for the layer that this marker belongs to
     * @params {float} options.lat - latitude for the marker
     * @params {float} options.lng - longitude for the marker
     * @params {string} options.landmark - landmark that the marker indicates
     */
    var Marker = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The marker must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Markers are only supported for Google Maps at the moment");

        var listener;

        var self = {
            /**
             * Map view where the map belongs to
             * @memberof niclabs.insight.map.marker.Marker
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the marker belongs to
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Return the internal marker object associated with this Marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @abstract
             * @returns {google.maps.Marker} internal marker
             */
            marker: function() {
                return undefined;
            },

            /**
             * Get/activate clickable status for the marker
             *
             * When clicked the marker will trigger a {@link niclabs.insight.map.marker.Marker#marker_pressed} event
             * with the particular data for the marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @param {boolean} [activate=true] - true to make clickable
             */
            clickable : function(activate) {
                if (activate) {
                    var marker = self.marker();

                    listener = google.maps.event.addListener(marker, 'click', function() {
                        niclabs.insight.event.trigger('map_element_selected', options);

                        // TODO: make configurable?
                        if ('setAnimation' in marker) {
                            marker.setAnimation(google.maps.Animation.BOUNCE);
                        }

                        // Set timeout to stop the animation
                        setTimeout(function() {
                            marker.setAnimation(null);
                        }, 3000);
                    });
                }
                else if (typeof listener !== 'undefined') {
                    google.maps.event.removeListener(listener);
                    listener = undefined;
                }
                return (listener !== undefined);
            },

            /**
             * Clear the marker from the map
             *
             * @memberof niclabs.insight.map.marker.Marker
             */
            clear: function() {
                var marker = self.marker();
                marker.setMap(null);
            },

            /**
             * Set/get the visibility for the marker
             *
             * @memberof niclabs.insight.map.marker.Marker
             * @param {boolean=} visible - new value for the visibility of the marker
             * @returns {boolean} true if the marker is visible
             */
            visible: function(visible) {
                if (typeof visible === 'undefined') return self.marker().getVisible();
                else self.marker().setVisible(visible);

                return visible;
            }
        };

        return self;
    };

    return Marker;
})(jQuery);

niclabs.insight.map.marker.SimpleMarker = (function($) {
    /**
     * Constructor for simple markers
     *
     * Simple markers are shown in the map as basic waypoints, with no style options
     *
     * @class niclabs.insight.map.marker.SimpleMarker
     * @extends niclabs.insight.map.marker.Marker
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.layer - identifier for the layer that this marker belongs to
     * @params {float} options.lat - latitude for the marker
     * @params {float} options.lng - longitude for the marker
     * @params {string} options.landmark - landmark that the marker indicates
     */
    var SimpleMarker = function(dashboard, options) {
        var self = niclabs.insight.map.marker.Marker(dashboard, options);

        var latLng = new google.maps.LatLng(parseFloat(options.lat), parseFloat(options.lng));

        var marker = new google.maps.Marker({
            position: latLng,
            map: self.map.googlemap(),
            title: options.landmark || ''
        });

        // Re-write the marker function
        self.marker = function() {
            return marker;
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('simple-marker', 'marker', SimpleMarker);

    return SimpleMarker;
})(jQuery);
