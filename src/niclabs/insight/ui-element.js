niclabs.insight.UiElement = (function($) {
    /**
     * Construct a UI element
     *
     * UI elements have an internal DOM representation to
     * display on the browser
     *
     * @class niclabs.insight.UiElement
     * @extends niclabs.insight.Element
     * @param {Object} options - configuration options for the element
     * @param {String} options.id - identifier for the element
     */
    var UiElement = function(options) {
        var self = niclabs.insight.Element(options);

        var node = $('<div>').attr('id', self.id);

        /**
         * DOM Element specified by this UiElement
         *
         * @memberof niclabs.insight.UiElement
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
         * DOM Element specified by this UiElement
         *
         * @memberof niclabs.insight.UiElement
         * @name element
         * @member {jQuery}
         */
        Object.defineProperty(self, "element", {
            get: function () {
                return self.$[0];
            }
        });


        /**
         * Append an element to the DOM tree of this Ui elemtn
         *
         * @memberof niclabs.insight.UiElement
         * @param {niclabs.insight.UiElement} element - element to append
         * @return {niclabs.insight.UiElement} reference to this element
         */
        self.append = function(element) {
            self.$.append(element.$);

            return self;
        };

        return self;
    };

    return UiElement;
})(jQuery);
