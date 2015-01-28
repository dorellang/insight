# Layer
An abstract layer.

## Constructor

#### Layer ( parameters : `Object`, map: `Object` )
 Configures a new layer.

 parameters is an object with the properties that define the layer.

 > id - The id of the layer.
 >
 > dataSource - The source where CityDashboard will find the data.
 >
 > data - If dataSource matches this layer's id, this values are used.
 >
 > layer_attr - The layer attributes.
 
 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

## Parameters

#### `.id`
  The id of this layer.

---
#### `.dataSource`
  The source of data for the layer.

---
#### `.elements`
  The list of data.

---
#### `.elementsAtrr`
  Atrributes of the data. Defaults to `{'type': 'simple', 'action': 'update' }`.

## Methods

#### `.filter` ( filterFun : `function` )
  Abstract filtering function called by [Dashboard](../Dashboard.md).
