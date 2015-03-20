niclabs.insight.info.SummaryBlock = (function($) {
    /**
     * Construct a new summary information block
     * TODO: describe what is a summary information block
     *
     * @class niclabs.insight.info.SummaryBlock
     * @augments niclabs.insight.info.Block
     * @inheritdoc
     * @param {niclabs.insight.Dashboard} dashboard - parent dashboard for the block
     * @param {Object} options - see {@link niclabs.insight.info.Block} constructor
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
            self.createDeflist(self.data());
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('summary-block', 'info-block', SummaryBlock);

    return SummaryBlock;
})(jQuery);
