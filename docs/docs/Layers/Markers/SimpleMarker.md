# SimpleMarker
A Simple marker. Extends [Marker](Marker.md).

## Constructor

#### SimpleMarker ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new simple marker.

 layer_params is an object with properties that define the simple marker. Normally contains these properties:

 > lat - Marker latitude (Number).
 >
 > lng - Marker longitude (Number).
 >
 > landmark - Marker landmark text (String).

 attr is an object with properties that defines any attribute of the simple marker. Should contain the marker type as `simple`.

 > type - Marker type (String).

 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

 assoc_layer is a [Layer](../Layer.md) Object.

## Parameters

#### `.layer_params`
  Properties that define the marker.

---
#### `.attr`
  Attributes that define the marker, such as type.

---
#### `.map`
  Map where the marker is shown.

---
#### `.layer`
  Associated layer where this marker belongs.

## Methods

#### `.addEvents` ( )
  Adds specific simple marker event listeners.

---

#### `.triggerInitialEvent` ( )
  Trigger startup event.
