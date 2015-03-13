CityDashboard.SquareGrid = function(layer_params, attr, map, assoc_layer) {

    CityDashboard.Grid.call(this, layer_params, attr, map, assoc_layer);

};

CityDashboard.SquareGrid.prototype = Object.create(CityDashboard.Grid.prototype);

CityDashboard.SquareGrid.prototype = {

    constructor: CityDashboard.SquareGrid,

    build: function(mapBounds) {
        var i, j;
        var l = this.attr.size || 0.03;

        var n = this.tiles.length;

        for (i = 0; i < n; i++) {
            this.tiles[i].setMap(null);
        }
        this.tiles = [];

        var zoom = this.map.getZoom();

        var init = l * (Math.pow(2, 12));
        var array = [];
        for (i = 0; i < 22; i++) {
            array.push(init);
            init = init / 2;
        }

        var size = array[zoom];

        var NE = mapBounds.getNorthEast() || 0;
        var SW = mapBounds.getSouthWest() || 0;

        var h = Math.ceil(Math.abs(SW.lat() - NE.lat()) / size);
        var w = Math.ceil(Math.abs(SW.lng() - NE.lng()) / size);

        for (i = 0; i < h; i++) {
            for (j = 0; j < w; j++) {

                var x = NE.lat() - size * i;
                var y = NE.lng() - size * j;

                var myLatlng = [
                    new google.maps.LatLng(x, y),
                    new google.maps.LatLng(x - size, y),
                    new google.maps.LatLng(x - size, y - size),
                    new google.maps.LatLng(x, y - size),
                    new google.maps.LatLng(x, y)
                ];

                var square = new google.maps.Polygon({
                    paths: myLatlng,
                    strokeColor: this.attr.color || '#578b8b',
                    strokeOpacity: 0.5,
                    strokeWeight: 2,
                    fillColor: this.attr.color || '#578b8b',
                    fillOpacity: 0.0,
                    geodesic: true
                });

                square.setMap(this.map);

                this.tiles.push(square);

            }
        }

    },

    addEvents: function() {

        var myself = this;

        google.maps.event.addListener(this.map, 'bounds_changed', function() {
            window.setTimeout(myself.build(this.getBounds()), 50);
        });

    }

};
