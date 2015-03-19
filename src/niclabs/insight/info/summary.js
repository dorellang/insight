niclabs.insight.info.Summary = (function($) {
    var constructor = function(dashboard, options) {
        var self = niclabs.insight.info.Block(dashboard, options);

        self.$.addClass('summary-viz');

        // Store the refresh method of the parent
        var refresh = self.refresh;

        self.refresh = function() {
            // Call the parent refresh
            refresh();

            self.$.append($('<dl>').addClass('deflist'));
            self.createDeflist(self.data());
        };

        return self;
    };

    // Register the handler
    niclabs.insight.handler('summary-block', 'info-block', constructor);
})(jQuery);
