# Delaunay
A Delaunay tesselation. Extends [DTesselation](DTesselation.md).

## Constructor

#### Delaunay ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new Delaunay.

 layer_params is an object with properties that define the Delaunay. Normally contains these properties:

 > points - Array of objects `{lat,lng}`.
 >
 > weights - Array of numbers with the corresponding point weight.

 attr is an object with properties that defines any attribute of the Delaunay. Normally contains the Delaunay type, color and any param needed for the specific non-abstract DTesselation.

 > type - DTesselation type (String). Should be `delaunay`.

 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

 assoc_layer is a [Layer](../Layer.md) Object.

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