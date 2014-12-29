# GoogleMap

A map using GoogleMaps.

## Example

```
var map = new CityDashboard.GoogleMap({
  'lat': 48.8583,
  'lng': 2.2944,
  'zoom': 15
});
```

## Constructor

#### GoogleMap ( parameters : `Object` )
parameters is an object with one or more properties definig the map's initial configuration.

> lat - Map center's initial latitude. Default is 0.
>
> lng - Map center's initial longitude. Default is 0.
>
> zoom - Map's initial zoom. Deafult is 3.

## Properties

#### `.center`
  An object containing the coordinates of the current map's center, has two fields:

  * lat
  * lng

---
#### `.zoom`
  The current value of the map's zoom.

---
#### `.map`
  The GoogleMaps map instance.

  **Note**: undefined until method `.place` is called.
  
---

## Methods

#### `.place` ( containerID : `String` )
  Places the map inside the container with the given id.

  Adds Listeners to the GoogleMap's `idle`, `zoom_changed` and `center_changed` events.

  See `Map`'s `.notify` method.

---