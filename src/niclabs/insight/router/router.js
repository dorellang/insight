niclabs.insight.router.Router = (function () {

    var Router = function() {

        // Listen to hash changes
        niclabs.insight.event.on('hash', function() {
            var hashValue = window.location.hash;
            if (hashValue.includes('filter/')) {
                var f = hashValue.slice(hashValue.indexOf('filter/')+7);
                // Eval is evil
                currentFilter = new Function('data','return ' + f);
                activeLayer.filter(currentFilter);
            }
            if (hashValue.includes('layer/')) {
                var layerId = hashValue.slice(hashValue.indexOf('layer/')+6);
                self.active(layerId);
            }
        });

        $(window).on('hashchange', function() {
            niclabs.insight.event.trigger('hash');
        });

        // This should be improved
        $(window).on('load', function() {
            niclabs.insight.event.trigger('hash');
        });

        var self = {};

        return self;

    }

    return Router

})();
