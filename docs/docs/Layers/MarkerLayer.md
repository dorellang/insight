# MarkerLayer
A marker based layer. Extends [Layer](Layer.md).

## Constructor

#### MarkerLayer ( parameters : `Object`, map: `Object` )
 Configures a new layer.

 parameters is an object with the properties that define the marker layer.

 > id - The id of the layer.
 >
 > dataSource - The source where CityDashboard will find the data.
 >
 > data - If dataSource matches this layer's id, this values are used.
 >
 > layer_attr - The layer attributes for the markers appearence.
 
 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

## Parameters

#### `.id`
  The id of this layer.

---
#### `.dataSource`
  The source of data for the layer.

---
#### `.elements`
  The list of markers data.

---
#### `.elementsAtrr`
  Atrributes of markers data. Defaults to `{'type': 'simple', 'action': 'update' }`.

---
#### `.markers`
  Array of [Marker](Markers/Marker.md) objects drawn on the map.

## Methods

#### `.filter` ( filterFun : `function` )
  Filters data based on `filterFun`
 
---
#### `updateLayer` ( selected : `String` )
  Updates the layer.
 
---
#### `clear` ()
  Clears the layer. 
