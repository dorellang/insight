# Visualization
The base class for all visualizations.

* [SummaryVisualization](SummaryVisualization.md)
* [GeneralVisualization](GeneralVisualization.md)
* [D3Visualization](D3Visualization.md)
* [ChartistVisualization](ChartistVisualization.md)

Look at [InfoWindow](../InfoWindow.md) for more information.

All visualizations are [closable and movable](../lib/utils.md) by default.

If you are interested on creating a brand new visualization, please look the manual: [Extending Visualizations](../Manual/Extending_Visualizations.md)

## Constructor

#### Visualization ( props : `Object` )
 Creates a Visualization.

 > id - The id of the visualization.
 >
 > data-source - The source where CityDashboard will find the data.
 >
 > title - The title of the visualization.
 >
 > properties - The CSS properties of the visualization. Attribute `closable` will add a close button. Attribute `movable` will add arrow buttons and let the visualization be moved between it's siblings. Both Attributes are setted by default.
 >
 > preprocess - A function. It modifies the data before being used by the visualization.
 >
 > data - If data-source matches this visualization's id, this values are used.
 >
 > checkbox - A hash of pairs: ___label___, ___boolean___.
 >
 > checkbox-handler - A function. It takes an array of booleans and the data. Its output must be the data processed according to the selected checkboxes.
 >

## Properties

#### `.id`
  The id of this visualization.

---
#### `.data_source`
  The source of data for this visualization.

---
#### `.properties`
  The CSS properties of the visualization DOM element.

---
#### `.title`
  The visualization title.

---
#### `.dataPreprocess`
  A function, receives the data and must return the processed data.

---
#### `.data`
  The raw data. If data-source and id are the same this values are used.

---
#### `.viz`
  The visualization's jQuery element.

---
#### `.checkbox_handler`
  A function. Receives an array of booleans and the preprocessed data. Must return the data processed according to the selected checkboxes.

---

## Methods

#### `setData` ( data )
  Sets the data parameter with the data argument, preprocessing it.
  If no data is given the previous data value is maintained.

---

#### `getData` () : data
  Returns the current value of data.

---
#### `refresh` ()
  Clears the visualization. If the data properties contain lat lng values, updates latlngView.

---
#### `remove` ()
  Signals the infoWindow to remove this visualization.
  Triggers event `'remove-viz'`.

---
#### `createDefList` ( value : `Object` )
  Creates a definition list. This list contains all keys that are not named `lat` `lng` or `value`.

---
#### `addCheckbox` ( keys : `Object` )
  Creates a checkbox panel.

---

## Events
#### `remove-viz`
  This event is triggered upon InfoWindow when the user clicks the close button.
  See utils.

---
#### `change`
  Checkboxes listen to `change` event.
  The visualization processes the data according to the selected checkboxes, and refreshes.

---
