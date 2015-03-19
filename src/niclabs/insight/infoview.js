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

        // // Create the visualizations in the property list
        // for (var i = 0; i < options.length; i++) {
        //     createVisualization(options[i]);
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
        // // Add a resize handler
        // infoWindow.on('resize', function(e) {
        //     for (var key in visualizations) {
        //         visualizations[key].refresh();
        //     }
        // });
        //
        // // Perform cleanup on visualization removal
        // infoWindow.on('remove-viz', function(e, arg) {
        //     delete visualizations[arg.id];
        //     var index = $.inArray(dataSourceTable[arg['data-source']], arg.id);
        //     dataSourceTable[arg['data-source']].splice(index, 1);
        // });

        var self = {
            /**
             * Return the HTML DOM element for the information view container
             *
             * @memberof niclabs.insight.InfoView
             * @returns {Element} HTML DOM object for the info view
             */
            element: function() {
                var c = $(infoViewId);
                container = c.length === 0 ? container : c;
                return container[0];
            },

            /**
             * Return the jQuery object for info view container
             *
             * @memberof niclabs.insight.InfoView
             * @returns {jQuery} jQuery for the information view container
             */
            jquery: function() {
                var c = $(infoViewId);
                container = c.length === 0 ? container : c;
                return container[0];
            }

        };

        return self;
    };

    // Register the info view constructor
    niclabs.insight.handler('basic-info-view', 'info-view', constructor);

    return constructor;
})(jQuery);
