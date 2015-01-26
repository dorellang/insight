# Heatmap
A generic abstract heatmap.

## Constructor

#### Heatmap ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new heatmap.

 layer_params is an object with properties that define the heatmap. Normally contains these properties:

 > points - Array of objects `{lat,lng}`.
 >
 > weights - Array of numbers with the corresponding point weight.

 attr is an object with properties that defines any attribute of the heatmap. Normally contains the heatmap type, color and any param needed for the specific non-abstract heatmap.

 > type - Heatmap type (String).

 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

 assoc_layer is a [Layer](/docs/docs/Layers/Layer.md) Object.

## Important Note

 Heatmap requires the [visualization library](https://developers.google.com/maps/documentation/javascript/visualization) of google maps. 

 To do so add: `<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=visualization"></script>`