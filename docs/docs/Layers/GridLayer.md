# GridLayer
A grid based layer. Extends [Layer](Layer.md).

## Constructor

#### GridLayer ( parameters : `Object`, map: `Object` )
 Configures a new layer.

 parameters is an object with the properties that define the grid layer.

 > id - The id of the layer.
 >
 > dataSource - The source where CityDashboard will find the data.
 >
 > data - If dataSource matches this layer's id, this values are used.
 >
 > layer_attr - The layer attributes for the grid appearence.
 
 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

## Parameters

#### `.id`
  The id of this layer.

---
#### `.dataSource`
  The source of data for the layer.

---
#### `.elements`
  The list of grid data.

---
#### `.elementsAtrr`
  Atrributes of grid data. Defaults to `{'type': 'simple', 'action': 'update' }`.

## Methods

#### `.filter` ( filterFun : `function` )
  Filters data based on `filterFun`
