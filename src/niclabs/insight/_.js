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
     * Render simple templates using the provided data
     *
     * You can use the attributes `data-bind` or `id` to
     * indicate the binding to the data element
     *
     * @example
     * ```html
     * <script id='template' type='text/html'>
     * <div class="content">
     * Hello <span id="name">friend</span>,
     * this is a template for <i data-bind="app">your app</i>
     * </div>
     * </script>
     * <script type='text/html'>
     * niclabs.insight.render('#template', {name: 'John', app: 'JohnsApp'})
     * </script>
     * ```
     *
     * @memberof niclabs.insight
     * @param {string|jQuery} template - id for the template element, string with the template or jQuery selector to use as template
     * @param {Object} data - associative array with the keys, values to change
     * @returns updated dom element with the values replaced
     */
    function render(template, data) {
        var selector = template;
        if (typeof template === 'string') {
            if (template.charAt(0) === '#') selector = $(template).first();
            else {
                try {selector = $(template);}
                catch (e) {throw Error("The provided template is not a valid html node");}
            }
        }

        $.each(data, function(key, value) {
            if (selector.attr('id') === key || selector.attr('data-bind') === key) {
                selector.text(value);
            }

            selector.find('#' + key).text(value);
            selector.find('[data-bind='+key+']').text(value);
        });

        return selector[0];
    }

    /**
     * JQuery render data into element
     *
     */
    $.fn.render = function (data) {
        render(this, data);

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
         * Render a template
         */
        render: render,

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
