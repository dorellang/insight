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
         infoView: function(obj) {
            if (typeof dashboard === 'undefined') throw new Error("Dashboard has not been initialized");
            return dashboard.infoView(obj);
         },
     };
})(jQuery);
