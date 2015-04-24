niclabs.insight.View = (function($) {
    /**
     * Construct a View
     *
     * A view has an internal DOM representation to
     * display on the browser
     *
     * @class niclabs.insight.View
     * @extends niclabs.insight.Element
     * @param {Object} options - configuration options for the element
     * @param {String} options.id - identifier for the element
     */
    var View = function(options) {
        var self = niclabs.insight.Element(options);

        var node = $('<div>').attr('id', self.id);

        /**
         * DOM Element specified by this View
         *
         * @memberof niclabs.insight.View
         * @name $
         * @member {jQuery}
         */
        Object.defineProperty(self, "$", {
            get: function () {
                // Try to get the id from the document if it has been attached
                var n = $('#' + self.id);

                // Otherwise return the unattached node
                node = n.length === 0 ? node : n;

                return node;
            }
        });

        /**
         * DOM Element specified by this View
         *
         * @memberof niclabs.insight.View
         * @name element
         * @member {jQuery}
         */
        Object.defineProperty(self, "element", {
            get: function () {
                return self.$[0];
            }
        });


        /**
         * Append an element to the DOM tree of this view
         *
         * @memberof niclabs.insight.View
         * @param {niclabs.insight.View} element - element to append
         * @return {niclabs.insight.View} reference to this element
         */
        self.append = function(element) {
            self.$.append(element.$);

            return self;
        };

        return self;
    };

    return View;
})(jQuery);
