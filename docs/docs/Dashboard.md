# Dashboard
A dashboard.

Requires [InfoWindow](InfoWindow.md) and [GoogleMap](Maps/GoogleMap.md) to be already created.

## Example
``` javascript
var myDashboard = new CityDashboard.Dashboard({
  'anchor': '#dashboard',
  'layout': 'left',
  'filter-number': 3
});
```

## Constructor

#### Dashboard ( parameters :  `Object` )
parameters is an object with the properties that define the dashboard.

> anchor - The id of the DOM element that will contain the map.
>
> layout - The position of the window relative to the map. Default is a `none` Layout.
>
> filter-number - The number of filter selections on the filter bar. Default is 0.

## Properties

#### `.layers`
  An array of layer objects.

---
#### `.layout`
  An string. `layout-left`, `layout-right` or `layout-none`.

---
#### `.anchor`
  The string of the DOM element id where the dashboard is anchored.

---
#### `.filters`
  The FilterBar object.

---
## Methods

#### `.addLayer` ( parameters : `Object` ) : `Dashboard`
  Adds a new layer to the map visualization.

  parameters is an object with one or more properties defining the layer's configuration.

  > id - The id of the layer.
  >
  > layer - Type of the layer.
  >
  > data-source - The source of data for the layer, can be an url or its own id.
  >
  > data - if the sata-source and id are the same, this data is used.
  >
  > layer_attr - The layer configuration attributes.
  >

---
#### `.addFilter` ( filters : `Object` ) : `Dashboard`
  Adds new filter options to the filterbar.

---