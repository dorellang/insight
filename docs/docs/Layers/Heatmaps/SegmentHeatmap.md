# SegmentHeatmap
A segment heatmap. Extends [Heatmap](/docs/docs/Layers/Heatmaps/Heatmap.md).

## Constructor

#### SegmentHeatmap ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new heatmap.

 layer_params is an object with properties that define the heatmap. Normally contains these properties:

 > points - Array of array of objects `{lat,lng}`.
 >
 > weights - corresponding weights.

 attr is an object with properties that defines any attribute of the heatmap. Normally contains the heatmap type, color and any param needed for the specific non-abstract heatmap.

 > type - Heatmap type (String).

 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

 assoc_layer is a [Layer](/docs/docs/Layers/Layer.md) Object.