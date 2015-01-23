# Marker
A generic abstract marker.

## Constructor

#### Marker ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new marker.

 layer_params is an object with properties that define the marker. Normally (with the exception of [PolylineMarker](/docs/docs/Layers/Markers/PolylineMarker.md)) contains these properties:

 > lat - Marker latitude (Number).
 >
 > lng - Marker longitude (Number).
 >
 > landmark - Marker landmark text (String).

 attr is an object with properties that defines any attribute of the marker. Normally contains the marker type, color and any param needed for the specific non-abstract marker.

 > type - Marker type (String).

 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

 assoc_layer is a [Layer](/docs/docs/Layers/Layer.md) Object.

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
  Adds any event listeners. Like clicking or dragging. Abstract.

---

#### `.triggerInitialEvent` ( )
  Trigger startup event. Abstract.