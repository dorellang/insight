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
