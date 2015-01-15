# MarkerLayer
A marker based layer.
Supports basic svg shapes as circles and rectangles.
It also supports external svg images.

## Constructor

#### MarkerLayer ( parameters : `Object` )
 Configures a new layer.

 parameters is an object with the properties that define the marker layer.

 > id - The id of the layer.
 >
 > dataSource - The source where CityDashboard will find the data.
 >
 > data - If dataSource matches this layer's id, this values are used.
 >
 > marker_attr - The attributes for the markers appearence.

## Parameters

#### `.id`
  The id of this layer.

---
#### `.dataSource`
  The source of data for the markers.

---
#### `.elements`
  The list of markers data.

---
#### `.elementFact`
  The marker factory.

---
#### `.wrappedLayer`
  A Layer.

---

## Methods

#### `.wrap` ( wrappedLayer : `Layer` ) : `Layer`
  Wraps the given layer

---

#### `.refreshZIndex` ( zIndex : `number` )
  Refreshes the zIndex of the elements.

  The last inserted layer is always over the older ones.

---
#### `.place` ( container : `String` )
  Places the markers in the map.

---
#### `.refreshElements` ( pixelChangeMethod : `function` )
  Updates the position of the markers.

  The `pixelChangeMethod` is a function that transforms the given `{ lat : number, lng : number }` object, using the GoogleMaps coordinate system. In the layer's div pixel coordinates.

---
#### `.update` ( message : `Object` )
  MarkerLayer observes Map objects.

---