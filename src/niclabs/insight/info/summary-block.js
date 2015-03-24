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
     * @param {Object=} options.properties - block properties (closable, movable)
     * @param {Object=} data - default data for the summary
     */
    var SummaryBlock = function(dashboard, options) {
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
            self.summary(self.data());
        };


        /**
         * Create a definition list from the provided data
         *
         * @memberof niclabs.insight.info.SummaryBlock
         * @param {Object=} data - the updated data for the block
         */
        self.summary = function(data) {
            $.each(data, function (key, value) {
                console.log(key);
                if (key !== 'lat' && key !== 'lng' && key !== 'value') {
                    self.$.find('.deflist')
                        .append($('<dt>').text(key).addClass('deflist-key'))
                        .append($('<dd>').text(value).addClass('deflist-value'));
                }
            });
        };

        // Create the default summary if provided
        if (options.data) self.summary(options.data);

        niclabs.insight.event.on('map_element_selected', function(data) {
            self.data(data);
            self.refresh();
        });

        return self;
    };

    // Register the handler
    niclabs.insight.handler('summary-block', 'info-block', SummaryBlock);

    return SummaryBlock;
})(jQuery);
