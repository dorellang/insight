# ChartistVisualization
Inherits from Visualization.

Requires Chartist.js to be previously imported.

## Constructor

#### Visualization ( props : `Object`, chartConstructor : `function` )
  Creates a Visualization.

  chartConstructor is th Chartist.js chart constructor.

  > properties - The CSS properties of the visualization. `class` property will set the chart container classes.
  >
  > options - Will set Chartist.js options.
  >
  > responsiveOptions - Will set Chartist.js responsive options.
  >
  > labels - The chartist labels. Can be an array of strings, or a function that receives data and returns an array of strings.
  >
  > checkbox-handler - A function. It takes an array of booleans and the data. Its output must be the data processed according to the selected checkboxes.
  >

## Properties

#### `.chartConstructor`
  The corresponding chart constructor.
  `Chatist.Line | Chartist.Bar | Chartist.Pie`

---
#### `.options`
  The chartist options.

---
#### `.responsiveOptions`
  The chartist responsive options.

---
#### `.labels`
  The chartist visualization labels.

---
#### `.checkbox_handler`
  A function. Receives an array of booleans and the preprocessed data. Must return the data processed according to the selected checkboxes.
  
  By default expects data being an array of elements, the same length of the number of checkboxes, filters according the selected checkboxes.

---

## Methods

#### `refresh` ()
  Clears the visualization. If the data properties contain lat lng values, updates latlngView.

  Updates chartist chart with data, resizes and updates the deflist.

---
#### `remove` ()
  Detaches chartist chart and removes this visualization.

---