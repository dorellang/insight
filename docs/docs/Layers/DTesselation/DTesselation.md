# DTesselation
A generic abstract Voronoi/Delaunay tesselation.

## Constructor

#### DTesselation ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new heatmap.

 layer_params is an object with properties that define the heatmap. Normally contains these properties:

 > points - Array of objects `{lat,lng}`.
 >
 > weights - Array of numbers with the corresponding point weight.

 attr is an object with properties that defines any attribute of the heatmap. Normally contains the heatmap type, color and any param needed for the specific non-abstract heatmap.

 > type - DTesselation type (String).

 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

 assoc_layer is a [Layer](/docs/docs/Layers/Layer.md) Object.

## Methods

#### `Add_GMapLine` ( StoreArr : `Object`, Positions : `Object`, Verts : `Object`, Color : `String`, Thickness : `Number`, Opacity : `Number`, map : `Object` )
  Adds a googlemap polyline to StoreArr.

  StoreArr is an array of googlemap polyline. Positions is an array with the point position. Verts is an array with the polyline vertex.

---

#### `ClearOvlyArray` ( OvlyArray : `Object` )
  Clears all lines of OvlyArray.

---

#### `SplitSegment` ( po : `Object`, p1 : `Object` )
  Split a segment.

## Important Note

 Voronoi/Delaunay requires an extra library. 

 To do so add: `<script src="js/delaunayTraingles.js"></script>`