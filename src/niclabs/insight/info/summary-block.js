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
     * @param {Object=} options.data - default data for the summary
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
        //if (options.data) self.summary(options.data);
        if (options.data) self.refresh(options.data);

        return self;
    };

    // Register the handler
    niclabs.insight.handler('summary-block', 'info-block', SummaryBlock);

    return SummaryBlock;
})(jQuery);
