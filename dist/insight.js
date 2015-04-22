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

/**
 * Color manipulation utils
 *
 * @mixin
 */
niclabs.insight.Color = (function() {
    /**
     * Converts an RGB color value to HSV. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and v in the set [0, 1].
     *
     * Source: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
     *
     * @memberof niclabs.insight.Color
     * @param   {Number}  r       The red color value
     * @param   {Number}  g       The green color value
     * @param   {Number}  b       The blue color value
     * @return  {Number[]}        The HSV representation
     */
    function rgbToHsv(r, g, b){
        r = r/255;
        g = g/255;
        b = b/255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;

        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if(max == min){
            h = 0; // achromatic
        }else{
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, v];
    }

    /**
     * Converts an HSV color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     * Assumes h, s, and v are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * Source: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
     *
     * @memberof niclabs.insight.Color
     * @param   {Number}  h       The hue
     * @param   {Number}  s       The saturation
     * @param   {Number}  v       The value
     * @return  {Number[]}        The RGB representation
     */
    function hsvToRgb(h, s, v){
        var r, g, b;

        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);

        switch(i % 6){
            case 0: r = v; g = t; b = p; break;
            case 1: r = q; g = v; b = p; break;
            case 2: r = p; g = v; b = t; break;
            case 3: r = p; g = q; b = v; break;
            case 4: r = t; g = p; b = v; break;
            case 5: r = v; g = p; b = q; break;
        }

        return [r * 255, g * 255, b * 255];
    }

	function componentToHex(c) {
		c = Math.floor(c);
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	}

    /**
     * Converts a rgb triple into an hexadecimal string
     *
     * @memberof niclabs.insight.Color
     * @param {Number[]} rgb - rgb representation
     * @return {string} hexadecimal representation
     */
	function rgbToHex(rgb) {
	    return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
	}

    /**
     * Converts a hexadecimal color intro a rgb array
     *
     * @memberof niclabs.insight.Color
     * @param {string} hex - hexadecimal representation of the color
     * @return {integer[]} - triplet representation of the color
     */
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;
    }

    return {
        'rgbToHsv': rgbToHsv,
        'hsvToRgb': hsvToRgb,
        'rgbToHex': rgbToHex,
        'hexToRgb': hexToRgb
    };
})();

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


        // Create the filter bar
        var filterBar = niclabs.insight.FilterBar(self);

        // Append the filter bar
        container.append(filterBar.element);

        // Create an event to be notified of a filter change
        niclabs.insight.event.on('filter_changed', function(f) {
            $.each(layers, function(name, layer) {
                layer.filter(f);
            });
        });

        return self;
    };
})(jQuery);

niclabs.insight.ElementList = (function() {
    /**
     * Construct a list of dashboard elements.
     *
     * In a list, children can be added either by passing the object directly
     * to the {@link niclabs.insight.ElementList.element()} method or by passing the options
     * for constructing the {@link niclabs.insight.Element}, including the name of the handler.
     *
     * The list will lookup the handler in the list of registered handlers and
     * use it to construct the element
     *
     * @class niclabs.insight.ElementList
     * @extends niclabs.insight.Element
     * @param {niclabs.insight.Dashboard} dashboard - dashboard where the list belongs to
     */
    var ElementList = function(dashboard) {
        var self = {};

        var elements = {};
        var numberedElements = 0;

        /**
         * Get a new block id for an block without id
         */
        function elementId(index) {
            index = typeof index === 'undefined' ? numberedElements++ : index;
            return '__' + index;
        }

        /**
         * Add/get an element from the list
         *
         * - If a number or string is provided as value for obj, the element with that id is returned
         * - If a generic object is provided with the handler defined in the 'handler' property, a new element
         * is created using the handler and the element is added to the list
         * - If an object is provided without handler, it is assumed to be a valid insight Element and added to the
         * list as is.
         *
         * @memberof niclabs.insight.ElementList
         * @param {string|number|Object|niclabs.insight.Element} obj - element id to get or configuration options for the new element
         * @returns {niclabs.insight.ElementList} - newly created element
         */
        self.element = function(obj) {
            if (typeof obj == 'string') return elements[obj];
            if (typeof obj == 'number') return elements[elementId(obj)];

            var elem, id;
            if ('handler' in obj) {
                id = obj.id = obj.id || elementId();
                elem = niclabs.insight.handler(obj.handler)(dashboard, obj);
            }
            else {
                elem = obj;
                id = elem.id;
            }

            elements[id] = elem;

            return elem;
        };


        /**
         * Process a list element
         *
         * @callback niclabs.insight.ElementList~iterator
         * @param {string} key - key for the element
         * @param {niclabs.insight.Element} element - object associated to the provided key
         */


        /**
         * Iterate over the elements of the list
         *
         * @memberof niclabs.insight.ElementList
         * @param {niclabs.insight.ElementList~iterator} iterator
         */
        self.each = function(iterator) {
            for (var key in elements) {
                iterator(key, elements[key]);
            }
        };

        /**
         * Delete the element with specified id from the list
         *
         * @memberof niclabs.insight.ElementList
         * @param {string|integer} id - identifier for the element
         * @returns {niclabs.insight.Element} removed element
         */
        self.remove = function(id) {
            if (typeof obj == 'number') id = elementId(id);
            if (id in elements) {
                var elem = elements[id];
                delete elements[id];
                return elem;
            }
        };

        return self;
    };

    return ElementList;
})();

niclabs.insight.Element = (function($) {
    /**
     * Construct a generic insight element
     *
     * @class niclabs.insight.Element
     * @param {Object} options - configuration options for the element
     * @param {String} options.id - identifier for the element
     */
    var Element = function(options) {
        if (!('id' in options)) {
            throw Error("All UI elements must define an identifier");
        }

        var id = options.id;
        if (!/^[^#. '"]+$/.test(id)) {
            throw Error("The UI element id must be at least 1 character long and cannot contain the following characters ['#','.',' ', '\'', '\"'])");
        }

        return {
            /**
             * Identifier for the insight element
             *
             * @memberof niclabs.insight.Element
             * @member {string}
             */
            get id () {
                return id;
            },
        };
    };

    return Element;
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
     * @extends {niclabs.insight.UiElement}
     * @param {niclabs.insight.Dashboard} dashboard - dashboard to assign this info view to
     * @param {Object} options - list of configuration options for the information view
     */
    var InFoView = function(dashboard, options) {
        // Default visualization property list
        options = options || {};

        var infoViewId = options.id || "insight-info-view";


        var element = niclabs.insight.UiElement({id: infoViewId});

        // Create the info view
        element.$.addClass('info');

        if (dashboard.config('layout') !== 'none') {
            var resizeOrientation;
            if (dashboard.config('layout') === 'left') {
                // TODO: move filter bar
                resizeOrientation = 'e';
            }
            else if (dashboard.config('layout') === 'right') {
                resizeOrientation = 'w';
            }
            element.$.resizable(resizeOrientation);
        }

        var blocks = niclabs.insight.ElementList(dashboard);

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
        element.block = function(obj) {
            var blk = blocks.element(obj);

            // Append block to container
            element.$.append(blk.element);

            return blk;
        };

        // For index
        var i;

        // Create the blocks in the options list
        if (options.blocks) {
            for (i = 0; i < options.blocks.length; i++) {
                element.block(options.blocks[i]);
            }
        }

        // Add a resize handler
        element.$.on('resize', function(e) {
            blocks.each(function(key, block) {
                block.refresh();
            });
        });

        // Perform cleanup on block removal
        niclabs.insight.event.on('remove-block', function(obj) {
            blocks.remove(obj.id);
        });
        return element;
    };

    // Register the info view constructor
    niclabs.insight.handler('basic-info-view', 'info-view', InFoView);

    return InFoView;
})(jQuery);

/**
 * Defines interpolation utils
 *
 * @mixin
 */
niclabs.insight.Interpolation = (function() {
    /**
     * Return the position for value in the interval [start_point, end_point]
     * where value can go from 0 to maximum.
     *
     * Source: http://stackoverflow.com/questions/168838/color-scaling-function
     *
     * @memberof niclabs.insight.Interpolation
     * @param {float} value - value to interpolate
     * @param {flaot} maximum - maximum value that value can take
     * @param {float} start_point - beginning of the interval
     * @param {float} end_point - end of the interval
     * @return {float} - interpolation value
     */
    function interpolate(value, maximum, start_point, end_point) {
        return start_point + (end_point - start_point)*value/maximum;
    }

    /**
     * Return the position for value in the 3-dimensional line between
     * the vectors [s, e], where value can go from 0 to maximum.
     *
     * Source: http://stackoverflow.com/questions/168838/color-scaling-function
     *
     * @memberof niclabs.insight.Interpolation
     * @param {float} value - value to interpolate
     * @param {flaot} maximum - maximum value that value can take
     * @param {float[]} s - 3d vector to use as start of the interval
     * @param {float[]} e - 3d vector to use as end of the interval
     * @return {float[]} - interpolation vector
     */
    function interpolate3d(value, maximum, s, e) {
        var r1= interpolate(value, maximum, s[0], e[0]);
        var r2= interpolate(value, maximum, s[1], e[1]);
        var r3= interpolate(value, maximum, s[2], e[2]);
        return [r1, r2, r3];
    }

    /**
     * Calculate interpolated rgb color between the rgb start and end colors
     * for the value value with the specified maximum
     *
     * @memberof niclabs.insight.Interpolation
     * @param {float} value - value to interpolate
     * @param {flaot} maximum - maximum value that value can take
     * @param {integer[]} start_rgb - rgb color to use as start of the range
     * @param {integer[]} e - rgb color to use as end of the range
     * @return {integer[]} - interpolated color
     */
    function interpolateRgb(value, maximum, start_rgb, end_rgb) {
        var start_hsv = niclabs.insight.Color.rgbToHsv(start_rgb[0], start_rgb[1], start_rgb[2]);
        var end_hsv = niclabs.insight.Color.rgbToHsv(end_rgb[0], end_rgb[1], end_rgb[2]);

        var hsv_result = interpolate3d(value, maximum, start_hsv, end_hsv);
        return niclabs.insight.Color.hsvToRgb(hsv_result[0],hsv_result[1],hsv_result[2]);
    }

    return {
        'interpolate': interpolate,
        'interpolate3d': interpolate3d,
        'interpolateRgb': interpolateRgb
    };
})();

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

		var self = {
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
            get $ () {
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
			 * @return {niclabs.insight.map.LatLng} coordinates for the map center
			 */
			center: function(lat, lng) {
				center.lat = lat = typeof lat === 'undefined' ? center.lat : lat;
				center.lng = lng = typeof lng === 'undefined' ? center.lng : lng;

				return center;
			},

			/**
			 * Latitude for the map center
			 *
			 * @memberof niclabs.insight.MapView
			 * @member {float}
			 */
			get lat () {
				return center.lat;
			},

			/**
			 * Longitude for the map center
			 *
			 * @memberof niclabs.insight.MapView
			 * @member {float}
			 */
			get lng () {
				return center.lng;
			},

			/**
			 * Width for the map container
			 *
			 * @memberof niclabs.insight.MapView
			 * @member {float}
			 */
			get width () {
				return self.$.width();
			},

			/**
			 * Height for the map container
			 *
			 * @memberof niclabs.insight.MapView
			 * @member {float}
			 */
			get height () {
				return self.$.height();
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

		return self;
	};
})(jQuery);

niclabs.insight.UiElement = (function($) {
    /**
     * Construct a UI element
     *
     * UI elements have an internal DOM representation to
     * display on the browser
     *
     * @class niclabs.insight.UiElement
     * @extends niclabs.insight.Element
     * @param {Object} options - configuration options for the element
     * @param {String} options.id - identifier for the element
     */
    var UiElement = function(options) {
        var self = niclabs.insight.Element(options);

        var node = $('<div>').attr('id', self.id);

        /**
         * DOM Element specified by this UiElement
         *
         * @memberof niclabs.insight.UiElement
         * @name $
         * @member {jQuery}
         */
        Object.defineProperty(self, "$", {
            get: function () {
                // Try to get the id from the document if it has been attached
                var n = $('#' + self.id);

                // Otherwise return the unattached node
                node = n.length === 0 ? node : n;

                return node;
            }
        });

        /**
         * DOM Element specified by this UiElement
         *
         * @memberof niclabs.insight.UiElement
         * @name element
         * @member {jQuery}
         */
        Object.defineProperty(self, "element", {
            get: function () {
                return self.$[0];
            }
        });


        /**
         * Append an element to the DOM tree of this Ui elemtn
         *
         * @memberof niclabs.insight.UiElement
         * @param {niclabs.insight.UiElement} element - element to append
         * @return {niclabs.insight.UiElement} reference to this element
         */
        self.append = function(element) {
            self.$.append(element.$);

            return self;
        };

        return self;
    };

    return UiElement;
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
     * @param {Object|Object[]|Function|String} [options.data] - data for the block,
     *  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
     *  or a url where to get the data. If a layer is provided, events from the layer ({@link niclabs.insight.MapView#map_element_selected},
     *  {@link niclabs.insight.layer.Layer#layer_sumary}) will update the data in the block. If no data is provided, it is assumed
     *  that all layers affect the block and events from all layers will update the block data. If data depends on a layer
     *  options.defaults can be used to set the default data
     * @param {Function} options.preprocess - function to apply on the data (either from an url or a layer) before refreshing the block
     * @param {Object|Object[]} [options.defaults] - when the data depends on a layer, defaults sets the initial data to show
     *  in the block
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

        var mapListener;
        var layerListener;

        // Listen to events
        function listen(self, layer) {
            // Listen for map events
            mapListener = niclabs.insight.event.on('map_element_selected', function(data) {
                if (layer && data.layer !== layer) return;
                self.refresh(self.__data__(data));
            });

            // Listen for summary events
            layerListener = niclabs.insight.event.on('layer_summary', function(summary) {
                if (layer && summary.id !== layer) return;
                self.refresh(self.__data__(summary.data));
            });
        }

        // Stop listening
        function unlisten(self) {
            niclabs.insight.event.off('map_element_selected', mapListener);
            niclabs.insight.event.off('layer_summary', layerListener);
        }

        // checkbox handling
        // TODO: this is not a generic functionality?
        // var checkbox_handler = options['checkbox-handler'] || function (a, d) { return d; };
        //
        // if (options.checkbox)
        //     this.addCheckbox(options.checkbox);

        var data = {};
        var layer;
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
             * Layer id
             *
             * @memberof niclabs.insight.info.Block
             * @member {jQuery}
             */
            get layer () {
                return layer;
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
             * Set/get the internal data value.
             *
             * @access protected
             * @memberof niclabs.insight.info.Block
             * @param {Object|Object[]} [data] - data for the block
             * @param {Object} value for the internal data
             */
            __data__: function(obj) {
                if (typeof obj === 'undefined') return data;

                // If the object is empty we cleanup the internal data
                if (Object.keys(obj).length === 0)
                    data = {};
                else
                    data = preprocess(obj);

                return data;
            },

            /**
             * Trigger the removal of the block
             */
            remove: remove,

            /**
             * Set/get the data for the block
             *
             * @memberof niclabs.insight.info.Block
             * @name data
             * @param {Object|Object[]|Function|String} [options.data] - data for the block,
             *  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
             *  or a url where to get the data. If a layer is provided, events from the layer ({@link niclabs.insight.MapView#map_element_selected},
             *  {@link niclabs.insight.layer.Layer#layer_sumary}) will update the data in the block. If no data is provided, it is assumed
             *  that all layers affect the block and events from all layers will update the block data. If data depends on a layer
             *  options.defaults can be used to set the default data.
             * @returns {Object} the current data in the block or the url for the data if the data has not been loaded yet
             */
            data: function(obj) {
                if (typeof obj === 'undefined') return data;

                // Unset the layer
                layer = undefined;

                // Stop listening for events
                unlisten(self);

                if (typeof obj === 'string') {
                    if (obj.charAt(0) === '#') {
                        layer = obj.substring(1);
                        data = options.defaults || {};

                        // Listen for map events
                        listen(self, layer);

                        return data;
                    }

                    // Assume the string is a URL
                    $.getJSON(obj, self.__data__);
                    return obj; // TODO: what should we return?
                }

                if (typeof obj === 'function')
                    return self.__data__(obj.call(self));

                return self.__data__(obj);
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

        if ('data' in options) {
            self.data(options.data);
        }
        else  {
            // Listen for all events
            listen(self);

            // Set default value
            data = options.defaults || {};
        }

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
     * @param {Object} class - chartist css class
     * @param {Object} labels - chart labels
     * @param {Object=} options - chartist options
     * @param {Object=} responsiveOptions - chartist responsive options
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
     * @param {Object|Object[]|Function|String} [options.data] - data for the block,
     *  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
     *  or a url where to get the data. If a layer is provided, events from the layer ({@link niclabs.insight.MapView#map_element_selected},
     *  {@link niclabs.insight.layer.Layer#layer_sumary}) will update the data in the block. If no data is provided, it is assumed
     *  that all layers affect the block and events from all layers will update the block data. If data depends on a layer
     *  options.defaults can be used to set the default data
     * @param {Function} options.preprocess - function to apply on the data (either from an url or a layer) before refreshing the block
     * @param {Object|Object[]} [options.defaults] - when the data depends on a layer, defaults sets the initial data to show
     *  in the block
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

         var remove = self.remove;

         // Override remove method
         self.remove = function() {
             // Call the parent
             remove();

             chart.detach();
         };

         // Refresh the block
         // TODO: what if the data comes from a url that has not finished loading yet?
         self.refresh();

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
     * @param {Object|Object[]|Function|String} [options.data] - data for the block,
     *  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
     *  or a url where to get the data. If a layer is provided, events from the layer ({@link niclabs.insight.MapView#map_element_selected},
     *  {@link niclabs.insight.layer.Layer#layer_sumary}) will update the data in the block. If no data is provided, it is assumed
     *  that all layers affect the block and events from all layers will update the block data. If data depends on a layer
     *  options.defaults can be used to set the default data
     * @param {Function} options.preprocess - function to apply on the data (either from an url or a layer) before refreshing the block
     * @param {Object|Object[]} [options.defaults] - when the data depends on a layer, defaults sets the initial data to show
     *  in the block
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
        self.refresh();

        return self;
    };

    // Register the handler
    niclabs.insight.handler('summary-block', 'info-block', SummaryBlock);

    return SummaryBlock;
})(jQuery);

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

niclabs.insight.layer.GridLayer = (function() {
    /**
     * Construct a new grid Layer
     *
     * @class niclabs.insight.layer.GridLayer
     * @extends niclabs.insight.layer.Layer
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.id - identifier for the layer
     * @param {string|Object[]} options.data - uri or data array for the layer
     * @param {Object=} options.grid - options for the heatmap
     */
    var GridLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var gridOptions = options.grid || {
            'type': 'hexagon'
        };

        function createGrid(data, obj) {
            var grid;
            if ('type' in obj) {
                var attr = {'layer': layer.id, 'data': data};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj);

                grid = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
                grid = obj;

                // Should we add a way to pass data to the grid?
            }

            return grid;
        }

        var grid;

        /**
         * Draw the grid according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.GridLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the marker
         * @param {float} data[].lng - longitude for the marker
         * @param {string=} data[].description - description for the marker
         */
        layer.draw = function(data) {
            grid = createGrid(data, gridOptions);
        };

        /**
         * Clear the grid from the map
         *
         * @memberof niclabs.insight.layer.GridLayer
         * @override
         */
        layer.clear = function() {
            if (grid) grid.clear();
        };

        /**
         * Filter the layer according to the provided function.
         *
         * @memberof niclabs.insight.layer.GridLayer
         * @override
         * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
         */
        layer.filter = function(fn) {
            // TODO. not sure if possible
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('grid-layer', 'layer', GridLayer);

    return GridLayer;
})();

niclabs.insight.layer.HeatmapLayer = (function($) {
    /**
     * Construct a new heatmap layer
     *
     * @class niclabs.insight.layer.HeatmapLayer
     * @extends niclabs.insight.layer.Layer
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
     * @param {string} options.id - identifier for the layer
     * @param {string|Object[]} options.data - uri or data array for the layer
     * @param {Object=} options.heatmap - options for the heatmap
     */
    var HeatmapLayer = function(dashboard, options) {
        var layer = niclabs.insight.layer.Layer(dashboard, options);

        var heatmapOptions = options.heatmap || {
            'type': 'point-heatmap'
        };

        function createHeatmap(data, obj) {
            var heatmap;
            if ('type' in obj) {
                var attr = {'layer': layer.id, 'data': data};

                // Extend the attributes with the data and the options for the marker
                $.extend(attr, obj);

                heatmap = niclabs.insight.handler(obj.type)(dashboard, attr);
            }
            else {
                heatmap = obj;

                // Should we add a way to pass data to the heatmap?
            }

            return heatmap;
        }

        var heatmap;

        /**
         * Draw the heatmap according to the internal data on the map
         *
         * @memberof niclabs.insight.layer.HeatmapLayer
         * @override
         * @param {Object[]} data - data to draw
         * @param {float} data[].lat - latitude for the marker
         * @param {float} data[].lng - longitude for the marker
         * @param {string=} data[].description - description for the marker
         */
        layer.draw = function(data) {
            heatmap = createHeatmap(data, heatmapOptions);
        };

        /**
         * Clear the heatmap from the map
         *
         * @memberof niclabs.insight.layer.HeatmapLayer
         * @override
         */
        layer.clear = function() {
            if (heatmap) heatmap.clear();
        };

        /**
         * Filter the layer according to the provided function.
         *
         * @memberof niclabs.insight.layer.HeatmapLayer
         * @override
         * @param {niclabs.insight.layer.Layer~Filter} fn - filtering function
         */
        layer.filter = function(fn) {
            // TODO. not sure if possible
        };

        return layer;
    };

    // Register the handler
    niclabs.insight.handler('heatmap-layer', 'layer', HeatmapLayer);

    return HeatmapLayer;
})(jQuery);

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
                         * @property {Object} data - summarized data
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
    /** Converts numeric degrees to radians */
    if (typeof Number.prototype.toRad === "undefined") {
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
        };
    }

    /** Converts numeric radians to degrees */
    if (typeof Number.prototype.toDeg === "undefined") {
        Number.prototype.toDeg = function() {
            return this * 180 / Math.PI;
        };
    }

    /**
     * Object to represent geographic coordinates
     *
     * @typedef {Object} niclabs.insight.map.LatLng
     * @property {float} lat - latitude
     * @property {float} lng - longitude
     */

     /**
      * Cartesian coordinates
      *
      * @typedef {Object} niclabs.insight.map.Point
      * @property {float} x - horizontal coordinate
      * @property {float} y - vertical coordinate
      */


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

/**
 * Defines a mercator projection on the map
 *
 * Source: {@link https://developers.google.com/maps/documentation/javascript/examples/map-coordinates}
 *
 * @mixin
 */
niclabs.insight.map.GoogleMercator = (function() {
    // Source
    var TILE_SIZE = 256;

    var origin = {x: TILE_SIZE / 2, y: TILE_SIZE / 2};
    var pixelsPerLonDegree = TILE_SIZE / 360;
    var pixelsPerLonRadian = TILE_SIZE / (2 * Math.PI);

    function bound(value, opt_min, opt_max) {
        if (opt_min !== null) value = Math.max(value, opt_min);
        if (opt_max !== null) value = Math.min(value, opt_max);
        return value;
    }

    return {
        /**
         * Convert cartesian coordinates to geographic coordinates using a
         * spherical mercator projection
         *
         * @memberof niclabs.insight.map.Mercator
         * @param {niclabs.insight.map.Point} - cartesian coordinates of the point
         * @returns {niclabs.insight.map.LatLng} - geographic coordinates of the point
         */
        geographic: function(point) {
            var lng = (point.x - origin.x) / pixelsPerLonDegree;
            var latRadians = (point.y - origin.y) / -pixelsPerLonRadian;
            var lat = (2 * Math.atan(Math.exp(latRadians)) - Math.PI / 2).toDeg();

            return {'lat': lat, 'lng': lng};
        },

        /**
         * Convert geographic coordinates to cartesian coordinates using a
         * spherical mercator projection (Google Maps style)
         *
         * For more information see {@link https://alastaira.wordpress.com/2011/01/23/the-google-maps-bing-maps-spherical-mercator-projection/}
         *
         * @memberof niclabs.insight.map.Mercator
         * @param {niclabs.insight.map.latLng} coord - geographic coordinates of the point
         * @returns {niclabs.insight.map.Point} - cartesian coordinates of the point
         */
        cartesian: function(coord) {
            // If it is a Google Maps LatLng
            if (typeof coord.lat === 'function' && typeof coord.lng === 'function')
                coord = {'lat': coord.lat(), 'lng': coord.lng()};

            var x = origin.x + coord.lng * pixelsPerLonDegree;

            // Truncating to 0.9999 effectively limits latitude to 89.189. This is
            // about a third of a tile past the edge of the world tile.
            var siny = bound(Math.sin(coord.lat.toRad()), -0.9999, 0.9999);
            var y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) * -pixelsPerLonRadian;

            return {'x': x, 'y': y};
        },

        /**
         * Return equivalent distance in the coordinate space
         * given the pixel distance and the zoom level of the map
         *
         * @memberof niclabs.insight.map.Mercator
         * @param {float} pixels - distance in pixels
         * @param {int} zoom - zoom level of the map
         * @returns {float} distance in world coordinate space
         */
        distance: function(pixels, zoom) {
            zoom = typeof zoom !== 'undefined' ? zoom : 12;
            return pixels / (1 << zoom);
        }
    };
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
            center: new google.maps.LatLng(map.lat, map.lng),
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
         * @return {niclabs.insight.map.LatLng} coordinates for the map center
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
 * Quadtree implementation
 *
 * @namespace
 */
niclabs.insight.quadtree = {};

/**
 * A cartesian point
 *
 * @typedef niclabs.insight.quadtree.Point
 * @type {Object}
 * @param {float} x - horizontal coordinates
 * @param {float} y - vertical coordinates
 */

niclabs.insight.quadtree.Bounds = (function() {
    /**
     * Construct an axis aligned bounding box with the corners
     * at the provided coordinates
     *
     * @class niclabs.insight.quadtree.Bounds
     * @param {niclabs.insight.quadtree.Point} min - minimal coordinates of the bounding box (e.g. lower left corner if zero is at the lower left corner of the canvas)
     * @param {niclabs.insight.quadtree.Point} max - maximal coordinates of the bounding box (e.g. upper right corner if zero is at the lower left corner of the canvas)
     */
    var Bounds = function(min, max) {
        var center = {x: (min.x + max.x) / 2.0,
            y: (min.y + max.y) / 2.0};


        return {
            /**
             * Center of the bounding box
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @member {niclabs.insight.quadtree.Point}
             */
            get center () {
                return center;
            },

            /**
             * Minimal coordinates of the bounding box
             * (e.g. lower left corner if zero is at the lowest leftmost corner of the canvas)
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @member {niclabs.insight.quadtree.Point}
             */
            get min () {
                return min;
            },

            /**
             * Maximal coordinates of the bounding box
             * (e.g. upper right corner if zero is at the lowest leftmost corner of the canvas)
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @member {niclabs.insight.quadtree.Point}
             */
            get max () {
                return max;
            },

            /**
             * Check if this bounding box contains the given point.
             *
             * As a convention, a bounding box contains all points inside its borders
             * as well as all the points in the east and south borders.
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @param {niclabs.insight.quadtree.Point} point - point to lookup
             * @returns {boolean} true if the box contains the point
             */
            contains: function(point) {
                return min.x <= point.x && point.x < max.x && min.y <= point.y && point.y < max.y;
            },

            /**
             * Check if this bounding box intersects the given bounding box
             *
             * @memberof niclabs.insight.quadtree.Bounds
             * @param {niclabs.insight.quadtree.Bounds} box - bounding box to check intersection with
             * @returns {boolean} true if the boxes intersect in at least one point
             */
            intersects: function(box) {
                // The explanation: http://gamemath.com/2011/09/detecting-whether-two-boxes-overlap/
                if (max.x < box.min.x) return false; // self is left of box
                if (min.x > box.max.x) return false; // self is right of box
                if (max.y < box.min.y) return false; // self is above of box
                if (min.y > box.max.y) return false; // self is below of box
                return true; // boxes overlap
            }
        };
    };

    return Bounds;
})();

niclabs.insight.quadtree.PointQuadTree = (function () {
    /**
     * Construct a Point Quadtree
     *
     * See {@link http://en.wikipedia.org/wiki/Quadtree}
     *
     * @class niclabs.insight.quadtree.PointQuadTree
     * @param {niclabs.insight.quadtree.Bounds} bounds - bounding box for the quadtree
     * @param {integer} [capacity=50] - number of points that each node in the quadtree accepts before dividing
     * @param {integer} [depth=40] - max depth of the quadtree
     */
    var PointQuadTree = function (bounds, capacity, depth) {
        capacity = capacity || 50;
        depth = depth || 40;

        var points = [];

        // Children (also quadtrees)
        var northWest, northEast, southWest, southEast;

        /**
         * Subdivide the tree
         *
         * @memberof niclabs.insight.quadtree.PointQuadTree
         * @access private
         */
        function subdivide() {
            northWest = PointQuadTree(niclabs.insight.quadtree.Bounds(bounds.min, bounds.center), capacity, depth - 1);
            northEast = PointQuadTree(niclabs.insight.quadtree.Bounds(
                {x: bounds.center.x, y: bounds.min.y},
                {x: bounds.max.x, y: bounds.center.y}),
                capacity, depth - 1);
            southWest = PointQuadTree(niclabs.insight.quadtree.Bounds(
                {x: bounds.min.x, y: bounds.center.y},
                {x: bounds.center.x, y: bounds.max.y}),
                capacity, depth - 1);
            southEast = PointQuadTree(niclabs.insight.quadtree.Bounds(bounds.center, bounds.max, capacity, depth - 1));
        }

        var self = {
            /**
             * Capacity for the quadtree
             *
             * @memberof niclabs.insight.quadtree.PointQuadTree
             * @member {integer}
             */
            get capacity() {
                return capacity;
            },

            /**
             * Boundary of the quadtree
             * @memberof niclabs.insight.quadtree.PointQuadTree
             * @member {niclabs.insight.quadtree.Bounds}
             */
            get bounds() {
                return bounds;
            },

            /**
             * Insert a new point in the quadtree
             *
             * @memberof niclabs.insight.quadtree.PointQuadTree
             * @param {niclabs.insight.quadtree.Point} point - new point to insert
             * @returns {boolean} true if the point could be inserted (point belongs in the bounds of the quadtree)
             */
            insert: function (point) {
                // Ignore objects that do not belong in this quad tree
                if (!bounds.contains(point)) {
                    return false; // object cannot be added
                }

                // If there is space in this quad tree, add the object here
                if (points.length < capacity || depth <= 0) {
                    points.push(point);
                    return true;
                }

                // Otherwise, subdivide and then add the point to whichever node will accept it
                if (northWest === undefined)
                    subdivide();

                if (northWest.insert(point)) return true;
                if (northEast.insert(point)) return true;
                if (southWest.insert(point)) return true;
                if (southEast.insert(point)) return true;

                // Otherwise, the point cannot be inserted for some unknown reason (this should never happen)
                return false;
            },

            /**
             * Return all the points in the specified bounding box
             *
             * @memberof niclabs.insight.quadtree.PointQuadTree
             * @param {niclabs.insight.quadtree.Bounds} range - spatial range to search
             * @returns {niclabs.insight.quadtree.Point[]} list of points in the given range
             */
            query: function(range, pointsInRange) {
                pointsInRange = typeof pointsInRange === 'undefined' ? [] : pointsInRange;

                if (!bounds.intersects(range)) {
                    return pointsInRange; // Empty list
                }

                // Check points at this level
                for (var i = 0; i < points.length; i++) {
                    if (range.contains(points[i])) {
                        pointsInRange.push(points[i]);
                    }
                }

                // Terminate here if there are no children
                if (northWest === undefined)
                    return pointsInRange;

                // Otherwise add the points from the children
                northWest.query(range, pointsInRange);
                northEast.query(range, pointsInRange);
                southWest.query(range, pointsInRange);
                southEast.query(range, pointsInRange);

                // Otherwise add the points from the children
                return pointsInRange;
            }
        };

        return self;
    };

    return PointQuadTree;
})();

/**
 * Contains all grids definitions for the dashboard
 *
 * @namespace
 */
niclabs.insight.map.grid = {};

niclabs.insight.map.grid.Grid = (function() {
	/**
	 * Construct a grid over the map
	 *
	 * @class niclabs.insight.map.grid.Grid
	 * @param {niclabs.insight.Dashboard} dashboard - dashboard that this layer belongs to
     * @param {Object} options - configuration options for the layer
	 */
	var Grid = function(dashboard, options) {
		if (!('layer' in options))
            throw new Error('The grid must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Grids are only supported for Google Maps at the moment");

        var self = {
            /**
             * Map view where the grid belongs to
             * @memberof niclabs.insight.map.grid.Grid
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the grid belongs to
             *
             * @memberof niclabs.insight.map.grid.Grid
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Clear the grid from the map
             *
             * @memberof niclabs.insight.map.grid.Grid
             */
            clear: function() {
            },
        };

        return self;
	};

	return Grid;
})();

niclabs.insight.map.grid.HexagonalGrid = (function() {
	var HEXAGON_ORIENTATION_FLAT = 'flat';
    var HEXAGON_ORIENTATION_POINTY = 'pointy';

	/**
     * Define a hexagon tile to be drawn on the map
     *
	 * @param {float} side - side (or radius) of the hexagon
     */
	var HexagonTile = function(side) {
		// See http://www.codeproject.com/Articles/14948/Hexagonal-grid-for-games-and-other-projects-Part
        // for the description of R and H
        var R = Math.cos(Math.PI / 6) * side;
        var H = Math.sin(Math.PI / 6) * side;

		/**
		* Returns coordinates for the vertices of the hexagon at the given location
		*
		* @returns {float[]}  coordinates of the vertices
		*/
		function vertices(coord) {
			// Convert coordinates to cartesian
			if (coord.lat) {
				coord = niclabs.insight.map.GoogleMercator.cartesian(coord);
			}

			//x,y coordinates are top center point
			var points = [];
			points[0] = {'x': coord.x,     'y': coord.y};
			points[1] = {'x': coord.x + R, 'y': coord.y + H};
			points[2] = {'x': coord.x + R, 'y': coord.y + side + H};
			points[3] = {'x': coord.x,     'y': coord.y + side + H + H};
			points[4] = {'x': coord.x - R, 'y': coord.y + side + H};
			points[5] = {'x': coord.x - R, 'y': coord.y + H};

			return points;
		}

		var self = {
			/**
			 * Side of the hexagon
			 */
			get s () {
				return side;
			},

			/**
			 * Distance of the hexagon
			 */
			get r () {
				return R;
			},

			/**
			 * Height of the hexagon
			 */
			get h () {
				return H;
			},

			/**
			* Return the coordinates for the hexagon in tile (i,j)
			*/
			coordinates: function() {
				var i, j;
				if (arguments.length == 1) {
					i = arguments[0][0];
					j = arguments[0][1];
				}
				else {
					i = arguments[0];
					j = arguments[1];
				}

				// From http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
				var x = i * 2 * R + (j & 1) * R + R;
				var y = j * (H + side);

				return {'x': x, 'y': y};
			},

			/**
			 * Get the tile (i,j) for the given coordinates
			 *
			 * See: http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
			 */
			tile: function(coord) {
				// Convert coordinates to cartesian
				if (coord.lat) {
					coord = niclabs.insight.map.GoogleMercator.cartesian(coord);
				}

				// Coordinates for the square
				var square_i = Math.floor(coord.x / (2 * R));
				var square_j = Math.floor(coord.y / (H + side));

				// Coordinates of the pixel with respect to the edge of the square
				var square_pixel_x = coord.x - square_i * 2 * R;
				var square_pixel_y = coord.y - square_j * (H + side);

				// Is type A if the row is even
				var rowIsTypeA = ((square_j & 1) === 0);

				var hex_i = square_i;
				var hex_j = square_j;

				if (rowIsTypeA) {
					if (square_pixel_x <= R && square_pixel_y < (- H / R) * square_pixel_x + H) {
						hex_i = square_i - 1;
						hex_j = square_j - 1;
					}
					else if (square_pixel_x > R && square_pixel_y < (H / R) * square_pixel_x - H) {
						hex_i = square_i;
						hex_j = square_j - 1;
					}
				}
				else {
					if (square_pixel_x <= R) {
						if (square_pixel_y < (H / R) * square_pixel_x) {
							hex_i = square_i;
							hex_j = square_j - 1;
						}
						else {
							hex_i = square_i - 1;
							hex_j = square_j;
						}
					}
					else if (square_pixel_x > R){
						if (square_pixel_y < (- H / R) * square_pixel_x + 2 * H) {
							hex_i = square_i;
							hex_j = square_j - 1;
						}
					}
				}
				return [hex_i, hex_j];
			},

			/**
			 * Draw and return a hexagon tile for the specified coordinates
			 */
			draw: function(coord, map, config) {
				if (!('googlemap' in map))
		            throw new Error("Sorry, I only know how to draw on Google Maps at the moment");

				var hexagon;
				var points = vertices(coord);
				var coordinates = [];
				for (var i = 0; i < points.length; i++) {
					coordinates.push(niclabs.insight.map.GoogleMercator.geographic(points[i]));
				}

				// Set default configuration
				config = config || {
					strokeColor: '#000000',
					strokeOpacity: 0.6,
					strokeWeight: 2,
					fillColor: '#ffffff',
					fillOpacity: 0.6,
				};

				config.paths = coordinates;
				config.geodesic = true;

				// Create the hexagon with the configuration
				hexagon = new google.maps.Polygon(config);

				hexagon.setMap(map.googlemap());

				return hexagon;
			}
		};

		return self;
	};

	/**
	 * Returns a function to calculate the fill as the interpolation on the average between the point weights
	 *
	 * @param {string} start_rgb - starting color for the interpolation
	 * @param {string} end_rgb - ending color for the interpolation
	 * @return {niclabs.insight.map.grid.HexagonalGrid~fill} average function
	 */
	function averageFill(start_rgb, end_rgb) {
		start_rgb = niclabs.insight.Color.hexToRgb(start_rgb);
		end_rgb = niclabs.insight.Color.hexToRgb(end_rgb);

		return function(points) {
			var avg = 0;
			var size = 0;

			for (i = 0; i < points.length; i++) {
				if ('weight' in points[i]) {
					avg += points[i].weight;
					size++;
				}
			}

			// Calculate average
			if (size > 0) {
				avg = avg / size;
				return niclabs.insight.Color.rgbToHex(niclabs.insight.Interpolation.interpolateRgb(avg, 1, start_rgb, end_rgb));
			}

			return '#ffffff';
		};
	}

	/**
	 * Returns a function to calculate the fill as the interpolation on the median between the point weights
	 *
	 * @param {string} start_rgb - starting color for the interpolation
	 * @param {string} end_rgb - ending color for the interpolation
	 * @return {niclabs.insight.map.grid.HexagonalGrid~fill} median function
	 */
	function medianFill(start_rgb, end_rgb) {
		function partition(data, i, j) {
	        var pivot = Math.floor((i+j)/2);
	        var temp;
	        while(i <= j){
	            while(data[i].weight < data[pivot].weight)
	                i++;
	            while(data[j].weight > data[pivot].weight)
	                j--;
	            if(i <= j){
	                temp = data[i];
	                data[i]=data[j];
	                data[j] = temp;
	                i++;
					j--;
	            }
	        }
	        return pivot;
	    }

		start_rgb = niclabs.insight.Color.hexToRgb(start_rgb);
		end_rgb = niclabs.insight.Color.hexToRgb(end_rgb);

		return function(points) {
			var median = 0;
			var left = 0, right = points.length > 0 ? points.length - 1: 0;
	        var mid = Math.floor((left + right) / 2);
	        median = partition(points, left, right);
	        while (median !== mid) {
	            if(median < mid)
	                median = partition(points, mid, right);
	            else median = partition(points, left, mid);
	        }

			return niclabs.insight.Color.rgbToHex(niclabs.insight.Interpolation.interpolateRgb(points[median].weight, 1, start_rgb, end_rgb));
		};
	}

    /**
     * Data point for an hexagonal grid
     *
     * @typedef niclabs.insight.map.grid.HexagonalGrid.Data
     * @type {Object}
     * @param {float} lat - latitude for the heatmap point
     * @param {float} lng - longitude for the heatmap point
     * @param {float=} weight - weight for the heatmap point (between 0 and 1)
     */

	/**
	 * Fill calculation function. Receives the list of points of a hexagon and
	 * returns a color for that hexagon
	 * @callback niclabs.insight.map.grid.HexagonalGrid~fill
	 * @param {niclabs.insight.map.grid.HexagonalGrid.Data[]} points
	 * @param {string} fill color for the hexagon
	 */

	/**
     * Construct an hexagonal grid from the data provided.
	 *
	 * The grid divides the visible map into hexagonal tiles of the same size and draws only those
	 * tiles that have elements below them. If a weight is provided for the the data points
	 * each hexagon is painted with a function of the point weights inside the hexagon
     *
     * @class niclabs.insight.map.grid.HexagonalGrid
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this grid belongs to
     * @param {Object} options - configuration options for the grid
     * @param {string} options.layer - identifier for the layer that this grid belongs to
     * @param {integer} options.size - size for the side of each hexagon (in pixels)
	 * @param {string} [options.strokeColor='#000000'] - color for the stroke of each hexagon
	 * @param {float} [options.strokeOpacity=0.6] - opacity for the stroke (between 0-1)
	 * @param {integer} [options.strokeWeight=2] - border weight for the hexagon
	 * @param {string|niclabs.insight.map.grid.HexagonalGrid~fill} [options.fill='#ffffff'] - color for the fill of the hexagon,
	 * 	it can have one of the following values:
	 *  	- 'average' calculates the average of the weights in the hexagon and interpolates that value between the values for options.fill_start and options.fill_end
	 *  	- 'median' calculates the median of the weights in the hexagon and interpolates as average
	 *  	- rgb color (starting with '#') is used as a fixed color for all hexagons
	 *  	- a callback receiving the points in the hexagon and returning the value for the color
	 * @param {string} [options.fillStart='#ff0000'] - if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function
	 * @param {string} [options.fillEnd='#00ff00'] - if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function
	 * @param {float} [options.fillOpacity=0.6] - opacity for the fill of the hexagon
     * @param {niclabs.insight.map.grid.HexagonalGrid.Data[]} options.data - data for the layer
     */
	var HexagonalGrid = function(dashboard, options) {
		var grid = niclabs.insight.map.grid.Grid(dashboard, options);

		var tiles = [];

		var hexagonConfig = {
			strokeColor: 'strokeColor' in options ? options.strokeColor : '#000000',
			strokeOpacity: 'strokeOpacity' in options ? options.strokeOpacity : 0.6,
			strokeWeight: 'strokeWeight' in options ? options.strokeWeight : 2,
			fillOpacity: 'fillOpacity' in options ? options.fillOpacity : 0.6,
		};

		// Default fill function
		function fillColor() {
			return '#ffffff';
		}

		var fill = options.fill || fillColor;
		if (typeof fill === 'string') {
			if (options.fill.charAt(0) === '#') {
				fill = function() {return options.fill;};
			}
			else if (options.fill === 'average') {
				fill = averageFill(options.fillStart || '#ff0000', options.fillEnd || '#00ff00');
			}
			else if (options.fill === 'median') {
				fill = medianFill(options.fillStart || '#ff0000', options.fillEnd || '#00ff00');
			}
			else {
				fill = fillColor;
			}
		}

		var worldBounds = niclabs.insight.quadtree.Bounds(
			niclabs.insight.map.GoogleMercator.cartesian({lat: 90, lng: -180}),
			niclabs.insight.map.GoogleMercator.cartesian({lat: -90, lng: 180})
		);

		var quadtree = niclabs.insight.quadtree.PointQuadTree(worldBounds);

		// TODO: put all data points in a world wide quad tree
		for (var i = 0; i < options.data.length; i++) {
			var coord = niclabs.insight.map.GoogleMercator.cartesian(options.data[i]);

			options.data[i].x = coord.x;
			options.data[i].y = coord.y;

			quadtree.insert(options.data[i]);
		}

		function notifyHexClick(points) {
			return function() {
				niclabs.insight.event.trigger('map_element_selected', points);
			};
		}

		// TODO: create a function to calculate the color

        // Build the grid
        function build(mapBounds) {
			if (!mapBounds) return;

			var hexagon = HexagonTile(niclabs.insight.map.GoogleMercator.distance(options.size, grid.map.zoom()));

			// find all points in the map bounds using the quadtree
			var points = quadtree.query(niclabs.insight.quadtree.Bounds(
				niclabs.insight.map.GoogleMercator.cartesian({lat: mapBounds.getNorthEast().lat(), lng: mapBounds.getSouthWest().lng()}),
				niclabs.insight.map.GoogleMercator.cartesian({lat: mapBounds.getSouthWest().lat(), lng: mapBounds.getNorthEast().lng()})
			));

			var pointSets = [];
			var hex_i, hex_j;

			for (var i = 0; i < points.length; i++) {
				var coord = hexagon.tile(points[i]);
				hex_i = coord[0];
				hex_j = coord[1];

				if (!pointSets[hex_i]) pointSets[hex_i] = [];
				if (!pointSets[hex_i][hex_j]) pointSets[hex_i][hex_j] = [];

				// if pointSets[hex_i][hex_j] add the point to the list
				pointSets[hex_i][hex_j].push(points[i]);
			}

			tiles = [];

			// for each tile, average (or median) the weights and draw the map
			for (hex_i in pointSets) {
				for (hex_j in pointSets[hex_i]) {
					hexagonConfig.fillColor = fill(pointSets[hex_i][hex_j]);

					// Draw the hexagon
					// TODO: set the options
					var tile = hexagon.draw(hexagon.coordinates(hex_i, hex_j), grid.map, hexagonConfig);

					// Add an event to the click
					google.maps.event.addListener(tile, 'click', notifyHexClick(pointSets[hex_i][hex_j]));

					tiles.push(tile);
				}
			}
        }

		grid.clear = function() {
			for (var i = 0; i < tiles.length; i++) {
				tiles[i].setMap(null);
			}
		};

        // Listen to boundary changes
        google.maps.event.addListener(grid.map.googlemap(), 'bounds_changed', function() {
            var bounds = this.getBounds();
            window.setTimeout(function() {
				grid.clear();
                build(bounds);
            }, 50);
        });

		// Build the initial grid
		build(grid.map.googlemap().getBounds());

        return grid;
	};

    // Register the handler
    niclabs.insight.handler('hexagon', 'grid', HexagonalGrid);

	return HexagonalGrid;
})();

/**
 * Tools for drawing heatmaps on the map
 *
 * @namespace
 */
niclabs.insight.map.heatmap = {};

niclabs.insight.map.heatmap.Heatmap = (function($) {
    /**
     * Construct a heatmap over the map
     *
     * @class niclabs.insight.map.heatmap.Heatmap
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the heatmap
     */
    var Heatmap = function(dashboard, options) {
        if (!('layer' in options))
            throw new Error('The heatmap must be associated to a layer');

        var layer;
        if (!(layer = dashboard.layer(options.layer)))
            throw new Error('The layer '+layer+' does not exist in the dashboard');

        var map;
        if (!(map = dashboard.map()))
            throw new Error('No map has been initialized for the dashboard yet');

        if (!('googlemap' in map))
            throw new Error("Heatmaps are only supported for Google Maps at the moment");

        var self = {
            /**
             * Map view where the heatmap belongs to
             * @memberof niclabs.insight.map.heatmap.Heatmap
             * @member {niclabs.insight.MapView}
             */
            get map () {
                return map;
            },

            /**
             * Layer to which the heatmap belongs to
             *
             * @memberof niclabs.insight.map.heatmap.Heatmap
             * @member {niclabs.insight.layer.Layer}
             */
            get layer () {
                return layer;
            },

            /**
             * Clear the heatmap from the map
             *
             * @memberof niclabs.insight.map.heatmap.Heatmap
             */
            clear: function() {
            },
        };

        return self;
    };

    return Heatmap;
})(jQuery);

niclabs.insight.map.heatmap.PointHeatmap = (function($) {
    /**
     * Data point for PointHeatmap
     *
     * @typedef niclabs.insight.map.heatmap.PointHeatmap.Data
     * @type {Object}
     * @param {float} lat - latitude for the heatmap point
     * @param {float} lng - longitude for the heatmap point
     * @param {float=} weight - weight for the heatmap point
     */

    /**
     * Draw a point base heatmap over the map
     *
     * In a point based heatmap, each data point is a location with an optional
     * weight. A heatmap point is drawn for each location with the provided configuration
     *
     * @class niclabs.insight.map.heatmap.PointHeatmap
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the heatmap
     * @param {niclabs.insight.map.heatmap.PointHeatmap.Data[]} options.data - array of points to draw the heatmap
     * @param {boolean} options.dissipating - Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.
     * @param {string[]} options.gradient - The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.
     * @param {integer} options.radius - The radius of influence for each data point, in pixels.
     * @param {float} options.opacity: The opacity of the heatmap, expressed as a number between 0 and 1.
     */
    var PointHeatmap = function(dashboard, options) {
        if (!('data' in options)) {
            throw Error('No data provided for the heatmap');
        }

        var self = niclabs.insight.map.heatmap.Heatmap(dashboard, options);

        /**
         * Create a google map heatmap
         */
        function googleMapsHeatmap(data) {
            var heatmapData = new google.maps.MVCArray();
            for (var i = 0; i < data.length; i++) {
                if ('weight' in data[i]) {
                    heatmapData.push({
                        location: new google.maps.LatLng(data[i].lat, data[i].lng),
                        weight: data[i].weight
                    });
                }
                else {
                    heatmapData.push(new google.maps.LatLng(data[i].lat, data[i].lng));
                }
            }

            return new google.maps.visualization.HeatmapLayer({
                data: heatmapData,
                radius: options.radius || 10
            });
        }

        // Create the heatmap
        var heatmap = googleMapsHeatmap(options.data);

        // Set the options
        if (typeof options.dissipating !== 'undefined') heatmap.set('dissipating', options.dissipating);
        if (typeof options.gradient !== 'undefined') heatmap.set('gradient', options.gradient);
        if (typeof options.opacity !== 'undefined') heatmap.set('opacity', options.opacity);

        // Set the heatmap
        heatmap.setMap(self.map.googlemap());

        // Store the parent
        var clear = self.clear;

        /**
         * Clear the map
         *
         * @memberof niclabs.insight.map.heatmap.PointHeatmap
         * @overrides
         */
        self.clear = function() {
            // Call the parent
            clear();

            // Remove the map
            heatmap.setMap(null);
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('point-heatmap', 'heatmap', PointHeatmap);

    return PointHeatmap;
})(jQuery);

niclabs.insight.map.heatmap.SegmentHeatmap = (function($) {
    /**
     * Data segment for SegmentHeatmap
     *
     * @typedef niclabs.insight.map.heatmap.SegmentHeatmap.Data
     * @type {Object}
     * @param {Object[]} coordinates - array of [lat,lng] coordinates
     * @param {float=} weight - weight for the heatmap segment. Defaults to 1.
     */

    /**
     * Draw a segment based heatmap over the map
     *
     * In a segment based heatmap, each data segment is a set of points with an optional
     * weight. A heatmap segment is drawn for each location array with
     * the provided configuration.
     *
     * @class niclabs.insight.map.heatmap.SegmentHeatmap
     * @param {niclabs.insight.Dashboard} dashboard - dashboard that this marker belongs to
     * @param {Object} options - configuration options for the heatmap
     * @param {niclabs.insight.map.heatmap.SegmentHeatmap.Data[]} options.data - array of segments to draw the heatmap
     * @param {boolean} options.dissipating - Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.
     * @param {string[]} options.gradient - The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.
     * @param {integer} options.radius - The radius of influence for each data point, in pixels.
     * @param {float} options.opacity: The opacity of the heatmap, expressed as a number between 0 and 1.
     */
    var SegmentHeatmap = function(dashboard, options) {
        if (!('data' in options)) {
            throw Error('No data provided for the heatmap');
        }

        var self = niclabs.insight.map.heatmap.Heatmap(dashboard, options);

        /**
         * Create a google map heatmap
         */
        function googleMapsHeatmap(data) {

            var heatmapData = new google.maps.MVCArray();

            for (i = 0; i < data.length; i++) {

                segment_size = data[i].coordinates.length;

                for (var j = 0; j < segment_size - 1; j++) {

                    //Distance of point a to b
                    var d = Math.sqrt(Math.pow((data[i].coordinates[j + 1][0] - data[i].coordinates[j][0]), 2) + Math.pow((data[i].coordinates[j + 1][1] - data[i].coordinates[j][1]), 2));

                    //Number of points with distance 0.00001 in between, colinear with a to b line
                    var l = Math.floor(d / 0.00001);

                    //Distance to jump
                    var delta = {
                        lat: (data[i].coordinates[j + 1][0] - data[i].coordinates[j][0]) / l,
                        lng: (data[i].coordinates[j + 1][1] - data[i].coordinates[j][1]) / l
                    };

                    //Storing the line
                    for (var k = 0; k < l; k++) {
                        if ('weight' in data[i]) {
                            heatmapData.push({
                                location: new google.maps.LatLng(data[i].coordinates[j][0] + delta.lat * k,
                                                                 data[i].coordinates[j][1] + delta.lng * k),
                                weight: data[i].weight
                            });
                        }
                        else {
                            heatmapData.push(new google.maps.LatLng(data[i].coordinates[j][0] + delta.lat * k,
                                                                    data[i].coordinates[j][1] + delta.lng * k));
                        }
                    }
                }

            }

            return new google.maps.visualization.HeatmapLayer({
                data: heatmapData,
                radius: options.radius || 10
            });
        }

        // Create the heatmap
        var heatmap = googleMapsHeatmap(options.data);

        // Set the options
        if (typeof options.dissipating !== 'undefined') heatmap.set('dissipating', options.dissipating);
        if (typeof options.gradient !== 'undefined') heatmap.set('gradient', options.gradient);
        if (typeof options.opacity !== 'undefined') heatmap.set('opacity', options.opacity);

        // Set the heatmap
        heatmap.setMap(self.map.googlemap());

        // Store the parent
        var clear = self.clear;

        /**
         * Clear the map
         *
         * @memberof niclabs.insight.map.heatmap.SegmentHeatmap
         * @overrides
         */
        self.clear = function() {
            // Call the parent
            clear();

            // Remove the map
            heatmap.setMap(null);
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('segment-heatmap', 'heatmap', SegmentHeatmap);

    return SegmentHeatmap;
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
     * @class niclabs.insight.map.marker.CircleMarker
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
             * When clicked the marker will trigger a {@link niclabs.insight.MapView#map_element_selected} event
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
