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

#### GoogleMap( parameters )
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

## Methods

#### `.place` (String)
  Places the map inside the container with the given id.

---

#### `.latLngToPix` ( coordinates ) : coordinates
  Transforms GoogleMaps longitude and latitude in pixels of the container div.

  coordinates is an object with two parameters: `lat` and `lng`.

---