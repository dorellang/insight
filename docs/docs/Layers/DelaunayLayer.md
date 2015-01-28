# DelaunayLayer
A Delaunay/Voronoi based layer. Extends [Layer](Layer.md).

## Constructor

#### DelaunayLayer ( parameters : `Object`, map: `Object` )
 Configures a new layer.

 parameters is an object with the properties that define the Delaunay/Voronoi layer.

 > id - The id of the layer.
 >
 > dataSource - The source where CityDashboard will find the data.
 >
 > data - If dataSource matches this layer's id, this values are used.
 >
 > layer_attr - The layer attributes for the Delaunay/Voronoi appearence.
 
 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

## Parameters

#### `.id`
  The id of this layer.

---
#### `.dataSource`
  The source of data for the layer.

---
#### `.elements`
  The list of Delaunay/Voronoi data.

---
#### `.elementsAtrr`
  Atrributes of Delaunay/Voronoi data. Defaults to `{'type': 'simple', 'action': 'update' }`.

## Methods

#### `.filter` ( filterFun : `function` )
  Filters data based on `filterFun`
