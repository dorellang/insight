niclabs.insight.layer.Layer = (function($) {
    "use strict";

    var Layer = function(dashboard, options) {
        var wrappedLayer;

        if (!('id' in options)) {
            throw Error("All layers must have an id.");
        }

        var id = options.id;
        var datasource = options.datasource;
        var data = options.data && options.data.length ? options.data: [options.data];
        var attributes = options.attributes || {
            'type': 'simple',
            'action': 'update',
        };
        var map = dashboard.mapview();

        return {
            filter: function(fn) {},
            clear: function() {}
        };
    };

    return Layer;
})(jQuery);
