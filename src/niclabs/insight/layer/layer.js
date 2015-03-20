var CityDashboard = CityDashboard || {};

CityDashboard.Layer = (function(CityDashboard) {
    "use strict";

    var Layer = function(parameters, map) {

        this.wrappedLayer = undefined;

        if (parameters.id === undefined) {
            throw Error("All layers must have an ID.")
        }

        this.id = parameters.id;
        this.dataSource = parameters.dataSource;

        this.elements = parameters.data.length ? parameters.data : [parameters.data];
        this.elementsAttr = parameters.layer_attr || {
            'type': 'simple',
            'action': 'update'
        };
        this.map = map;

    };

    Layer.prototype = {

        constructor: CityDashboard.Layer,

        filter: function(filterFun) {},

        clear: function() {},

    };

    return Layer;
})(CityDashboard);