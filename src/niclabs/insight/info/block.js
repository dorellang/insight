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
     * @param {Object=} options.data - default data for the block
     */
    var constructor = function(dashboard, options) {
        if (!('id' in options)) {
            throw new Error("All information blocks must have an id");
        }

        var id = options.id;
        var htmlId = id.charAt(0) === '#' ? id : '#' + id;
        var title = options.title || '';
        var properties = options.properties || {};
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

        // Add the properties to the block style
        container.css(properties);

        // checkbox handling
        // TODO: this is not a generic functionality?
        // var checkbox_handler = options['checkbox-handler'] || function (a, d) { return d; };
        //
        // if (options.checkbox)
        //     this.addCheckbox(options.checkbox);

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
