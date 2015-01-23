# SimpleMarker
A Circle marker.

## Constructor

#### SimpleMarker ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new circle marker. Extends [Marker](/docs/docs/Layers/Markers/Marker.md)

 layer_params is an object with properties that define the circle marker. Normally contains these attributes:

 > lat - Marker latitude (Number).
 >
 > lng - Marker longitude (Number).
 >
 > landmark - Marker landmark text (String).

 attr is an object with properties that defines any attribute of the circle marker. Should contain the marker type as `circle`.

 > type - Marker type (String).
 >
 > radius - Circle radius, in pixels (Number).
 >
 > strokeColor - Stroke Color. All CSS3 colors are supported except for extended named colors. (String).
 >
 > strokeOpacity - The stroke opacity between 0.0 and 1.0 (Number).
 >
 > strokeWeight - The stroke width in pixels.
 >
 > fillColor - Fill Color. All CSS3 colors are supported except for extended named colors (String).
 >
 > fillOpacity - The fill opacity between 0.0 and 1.0 (Number).

 For more info about these properties [GoogleMap API StyleOptions](https://developers.google.com/maps/documentation/javascript/reference#Data.StyleOptions)

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
  Adds specific circle marker event listeners.

---

#### `.triggerInitialEvent` ( )
  Trigger startup event.