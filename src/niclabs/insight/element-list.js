niclabs.insight.ElementList = (function() {
    /**
     * Construct a list of dashboard elements.
     *
     * In a list, children can be added either by passing the object directly
     * to the {@link niclabs.insight.ElementList.element()} method or by passing the options
     * for constructing the {@link niclabs.insight.Element}, including the name of the handler.
     *
     * The list will lookup the handler in the list of registered handlers and
     * use it to construct the element
     *
     * @class niclabs.insight.ElementList
     * @extends niclabs.insight.Element
     * @param {niclabs.insight.Dashboard} dashboard - dashboard where the list belongs to
     */
    var ElementList = function(dashboard) {
        var self = {};

        var elements = {};
        var numberedElements = 0;

        /**
         * Get a new block id for an block without id
         */
        function elementId(index) {
            index = typeof index === 'undefined' ? numberedElements++ : index;
            return '__' + index;
        }

        /**
         * Add/get an element from the list
         *
         * - If a number or string is provided as value for obj, the element with that id is returned
         * - If a generic object is provided with the handler defined in the 'handler' property, a new element
         * is created using the handler and the element is added to the list
         * - If an object is provided without handler, it is assumed to be a valid insight Element and added to the
         * list as is.
         *
         * @memberof niclabs.insight.ElementList
         * @param {string|number|Object|niclabs.insight.Element} obj - element id to get or configuration options for the new element
         * @returns {niclabs.insight.ElementList} - newly created element
         */
        self.element = function(obj) {
            if (typeof obj === 'string') return elements[obj];
            if (typeof obj === 'number') return elements[elementId(obj)];

            var elem, id;
            if ('handler' in obj) {
                id = obj.id = obj.id || elementId();
                elem = niclabs.insight.handler(obj.handler)(dashboard, obj);
            }
            else {
                elem = obj;
                id = elem.id;
            }

            elements[id] = elem;

            return elem;
        };


        /**
         * Process a list element
         *
         * @callback niclabs.insight.ElementList~iterator
         * @param {string} key - key for the element
         * @param {niclabs.insight.Element} element - object associated to the provided key
         */


        /**
         * Iterate over the elements of the list
         *
         * The iteration is stopped when the iterating function returns false
         *
         * @memberof niclabs.insight.ElementList
         * @param {niclabs.insight.ElementList~iterator} iterator
         */
        self.each = function(iterator) {
            for (var key in elements) {
                if (iterator(key, elements[key]) === false) {
                    return false;
                }
            }
        };

        /**
         * Delete the element with specified id from the list
         *
         * @memberof niclabs.insight.ElementList
         * @param {string|integer} id - identifier for the element
         * @returns {niclabs.insight.Element} removed element
         */
        self.remove = function(id) {
            if (typeof obj == 'number') id = elementId(id);
            if (id in elements) {
                var elem = elements[id];
                delete elements[id];
                return elem;
            }
        };

        return self;
    };

    return ElementList;
})();
