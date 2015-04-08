niclabs.insight.Element = (function($) {
    /**
     * Construct a UI element
     *
     * @class niclabs.insight.Element
     * @param {Object} options - configuration options for the element
     * @param {String} options.id - identifier for the element
     */
    var Element = function(options) {
        if (!('id' in options)) {
            throw Error("All UI elements must define an identifier");
        }

        var id = options.id;
        if (!/^[^#. '"]+$/.test(id)) {
            throw Error("The UI element id must be at least 1 character long and cannot contain the following characters ['#','.',' ', '\'', '\"'])");
        }

        var node = $('<div>').attr('id', id);

        var self = {
            get id () {
                return id;
            },

            /**
             * jQuery object for the DOM representation of this Element
             *
             * @memberof niclabs.insight.Element
             * @member {jQuery}
             */
            get $() {
                // Try to get the id from the document if it has been attached
                var n = $('#' + id);

                // Otherwise return the unattached node
                node = n.length === 0 ? node : n;

                return node;
            },

            /**
             * HTML DOM node for this Element
             *
             * @memberof niclabs.insight.Element
             * @member {Element}
             */
            get element () {
                return self.$[0];
            },

            /**
             * Append an element to the end of this element
             *
             * @memberof niclabs.insight.Element
             * @param {niclabs.insight.Element} element - element to append
             * @return {niclabs.insight.Element} reference to this element
             */
            append: function(element) {
                self.$.append(element.$);

                return self;
            }

        };
    };

    return Element;
})(jQuery);
