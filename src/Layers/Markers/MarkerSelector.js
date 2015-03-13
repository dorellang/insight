function MarkerSelector(layer_params, attr, map, assoc_layer) {

    if (attr.type === 'circle')
        return new CityDashboard.CircleMarker(layer_params, attr, map, assoc_layer);

    else if (attr.type === 'image')
        return new CityDashboard.ImageMarker(layer_params, attr, map, assoc_layer);

    else if (attr.type === 'polyline')
        return new CityDashboard.PolylineMarker(layer_params, attr, map, assoc_layer);

    else if (attr.type === 'simple')
        return new CityDashboard.SimpleMarker(layer_params, attr, map, assoc_layer);

}
