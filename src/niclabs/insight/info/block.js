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
