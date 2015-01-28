# InfoWindow
The information window is a bar adjacent to the map containing the [visualizations](Visualizations/Visualization.md).

This bar is [resizable](lib/utils.md).

Look at [Dashboard](Dashboard.md) for more information.

## Example

``` javascript
var infoWindow = new CityDashboard.InfoWindow([{
  'visualization': 'summary-viz',
  'data-source': '#myMarker',
  'id': '#summary',
  'title': 'My Marker Summary'
}]);
```

## Constructor

#### InfoWindow( vizPropList: `Array[Object]` )
Creates an information window with all the visualizations.

> visualizations - An array of visualization properties.

## Properties

#### `.visualizations`
  A hash containing all of the Visualization objects.
  The key of each visualization is its ID.

---
#### `.dataSourceTable`
  This hash asociates the data-source string with their corresponding visualization id.
  For example, if visualizations `'#MySummary'` and `'#MyChart'` have their data-source as `'#MyLayer'`, the hash is as follows:
  ```javascript
{
  '#MyLayer': ['#MySummary','#MyChart']
}
  ```

---

## Methods

#### `createVisualization` ( props : `Object` )
  This methods creates, and returns a new visualization.
  The props object has the following configuration properties:

  > visualization - The type of the visualization.  'summary-viz' | 'linechart-viz' | 'barchart-viz' | 'piechart-viz' | 'd3-viz'
  >
  > id - The id of the visualization.
  >
  > data-source - The data source of the visualization. It should start with '#' if its source is a layer or itself, in other case it will consider it to be a valid url, and will try to do fetch.
  >
  > data - If the data-source and id are the same, the visualization will try to render this data.
  >
  > preprocess - Optional, this function expects the raw data, and must return the process data, used before rendering the charts.
  >
  > title - The title of the visualization.
  >
  > properties - CSS styling properties for the visualization DOM element.
  >
  > labels - An array of strings containing the labels. It can also be a function which receives the data, and returns an array of strings.
  >
  > checkbox - A hash. The keys are the labels of the checkboxes, and the values are booleans indicating if they must start checked.
  >
  > checkbox-handler - A function, receives an array of booleans (indicating the checked checkboxes) and the preprocessed data array. Must return a filtered array.
  >
  > viz - A function receiving the container svg, the data, and the containers width, and height. Only for D3 visualizations.

---

## Events
This object listens to the following events.

#### `marker-pressed`
  InfoWindow listens to marker-pressed events. This event is triggered when the user clicks MapWindow's layer elements, such as markers.

---
#### `resize`
  The resize event is triggered when the browser changes size. The InfoWindow is a resizable element (see Utils), This event is also triggered when the user moves the resize bar.

---
#### `remove-viz`
  This event is triggered when the user clicks the close button of visualizations.

---
