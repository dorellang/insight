# FilterBar
The FilterBar contains the map search bar and a variable number of filter selections.

This Bar is used by [Dashboard](Dashboard.md).

## Example

The number of filters is configured with the Dashboard.

``` javascript
var myDashboard = new CityDashboard.Dashboard({
  'anchor': '#dashboard',
  'layout': 'left',
  'filter-number': 3
});
```

## Constructor

#### FilterBar( `filterNumber` )
Creates the filter bar with a map search bar and several (or zero) filter selections.

> filterNumber - The number of filter selections in the bar. Default is 0.

## Properties

#### `.filters`
  A hash containing the pair filtername, filter function.
  The filter function receives a map node. An object with properties: lat,lng,value, and others. It must return a boolean.

---
#### `.filterNumber`
  The number of filter selections.

---

## Methods

#### `addFilter` ( filters : `Object` )
  Adds new filters to every filter selection.

---
#### `placeFilters` ()
  Places all the filters in every filter selection.

---
#### `composeFilters` () : `function`
  Composes the current selected filter functions. Returns the composed function.

---

## Events
This object listens to the following events.

#### `change`
  The search bar searches for the given location using the google maps geocode, upon receiving this event.

  When the user selects a filter, the composed function is calculated, and the `filteChanged` event is triggered upon the main container (see Dashboard).

---