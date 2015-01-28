# PolylineMarker
An polyline based marker. Extends [Marker](Marker.md).

## Constructor

#### PolylineMarker ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new polyline marker.

 layer_params is an object with properties that define the polyline marker. Normally contains these properties:

 > points - Marker latitude and longitude (Object Array).
 >
 > landmark - Marker landmark text (String Array).

 attr is an object with properties that defines any attribute of the polyline marker. Should contain the marker type as `polyline`.

 > type - Marker type (String).
 >
 > strokeColor - Stroke Color. All CSS3 colors are supported except for extended named colors. (String).
 >
 > strokeOpacity - The stroke opacity between 0.0 and 1.0 (Number).
 >
 > strokeWeight - The stroke width in pixels.

 For more info about these properties [GoogleMap API StyleOptions](https://developers.google.com/maps/documentation/javascript/reference#Data.StyleOptions)

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
  Adds specific polyline marker event listeners.

---

#### `.triggerInitialEvent` ( )
  Trigger startup event.
