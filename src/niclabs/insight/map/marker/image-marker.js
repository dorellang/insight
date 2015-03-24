CityDashboard.ImageMarker = function(layer_params, attr, map, assoc_layer) {

    CityDashboard.Marker.call(this, layer_params, attr, map, assoc_layer);

    var myLatlng = new google.maps.LatLng(parseFloat(layer_params.lat), parseFloat(layer_params.lng));

    var image = {
        // TODO: this relative reference breaks on minify
        url: attr.src || '../src/Layers/Markers/not_found.svg',
        scaledSize: new google.maps.Size(30, 50)
    };

    var imageMarker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
        title: layer_params.landmark || ''
    });

    this.marker = imageMarker;

};

CityDashboard.ImageMarker.prototype = Object.create(CityDashboard.Marker.prototype);

CityDashboard.ImageMarker.prototype = {

    constructor: CityDashboard.ImageMarker,

    addEvents: function() {

        google.maps.event.addListener(this.marker, 'click', triggerEvent);

        var myself = this;

        function triggerEvent() {

            $('#infoWindow').trigger('marker-pressed', {
                'id': myself.layer.id,
                'value': myself.layer_params,
                'attr': myself.attr
            });

            for (var i = 0; i < myself.layer.markers.length; i++) {
                var myMarker = myself.layer.markers[i].marker;
                if (myMarker == this) {
                    myMarker.setAnimation(google.maps.Animation.BOUNCE);
                } else {
                    myMarker.setAnimation(null);
                }
            }

        }

    },

    triggerInitialEvent: function() {
        $('#infoWindow').trigger('marker-pressed', {
            'id': this.layer.id,
            'value': this.layer_params,
            'attr': this.attr
        });
        for (i = 0; i < this.layer.markers.length; i++) {
            this.layer.markers[i].marker.setAnimation(null);
        }
        this.marker.setAnimation(google.maps.Animation.BOUNCE);
    }

};
