# ImageMarker
An Image based marker. Support svg shapes.

## Constructor

#### ImageMarker ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new image marker. Extends [Marker](/docs/docs/Layers/Markers/Marker.md)

 layer_params is an object with properties that define the image marker. Normally contains these attributes:

 > lat - Marker latitude (Number).
 >
 > lng - Marker longitude (Number).
 >
 > landmark - Marker landmark text (String).

 attr is an object with properties that defines any attribute of the image marker. Should contain the marker type as `image`.

 > type - Marker type (String).
 >
 > src - svg url (String).

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
  Adds specific image marker event listeners.

---

#### `.triggerInitialEvent` ( )
  Trigger startup event.