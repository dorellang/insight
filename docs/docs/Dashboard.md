# Dashboard
A dashboard.

## Example
``` javascript
var myDashboard = new CityDashboard.Dashboard({
        'anchor': '#dashboard',
        'map': map,
        'info': infoWindow,
        'layout': 'left'
      });
```

## Constructor

#### Dashboard( `parameters` )
parameters is an object with the properties that define the dashboard.

> anchor - The id of the DOM element that will contain the map.
> 
> map - A Map object.
> 
> info - An InfoWindow object.
>
> layout - The position of the window relative to the map. Default is a `none` Layout.

## Parameters

#### `.layer`
  A Layer object. These layers are superposed over each other using the method `addLayer`.

---
#### `.layout`
  A Layout object. `left`, `right` or `none`.

---
#### `.map`
  A Map object.

---
#### `.info`
  An InfoWindow object.

---
## Methods

#### `.addLayer` ( `parameters` ) : Dashboard
  Adds a new layer to the map visualization.

  parameters is an object with one or more properties definig the layer's configuration.

---
#### `.show` ()
  Places the dashboard inside the container, and starts the visualization.