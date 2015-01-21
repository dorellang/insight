# CityDashboard
The namespace for the entire module.

## Properties

#### `.mainContainerID`
  The ID of the main container. This element is the only child of the given anchor.

---
#### `.mapWindowID`
  The id of the DOM element that contains the map..

---
#### `.infoWindowID`
  The id of the infoWindow element.

---
#### `.filterBarID`
  The id of the filter bar element.

---
## Methods

#### `getData` ( url : `String`, callback : `function`, props : `Object` )
  If the url string does not start with '#', asynchronously gets the data from the url.

  If url does start with '#', executes callback synchronously without fetching data.

---