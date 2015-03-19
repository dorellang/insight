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
                id = blk.id();
            }

            blocks[id] = blk;

            // TODO: append block element to visualization

            return blk;
        }

        // For index
        var i;

        // Create the blocks in the options list
        if (options.blocks) {
            for (i = 0; i < options.blocks.length; i++) {
                block(options.block[i]);
            }
        }

        // Add a resize handler
        infoWindow.on('resize', function(e) {
            for (var key in blocks) {
                blocks[key].refresh();
            }
        });

        // Perform cleanup on block removal
        niclabs.insight.event.on('remove-block', function(obj) {
            delete visualizations[obj.id];
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
