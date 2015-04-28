# D3Visualization
Inherits from [Visualization](Visualization.md).

Requires D3.js to be previously imported.

## Constructor

#### Visualization ( props : `Object` )
 Creates a Visualization.

 > golden-ratio - boolean, sets the resizing options.
 >
 > viz - A function receiving the container svg, the data, and the containers width, and height. This function creates the visualization.

## Properties

#### `._create`
  This function is called to create and resize the visualization.

---
#### `.svg`
  The svg d3 element where the chart is drawn.

---

## Methods

#### `refresh` ()
  Clears the visualization. If the data properties contain lat lng values, updates latlngView.

  The svg is cleared and redrawn using `._create`.

---
#### `remove` ()
  Signals the infoWindow to remove this visualization.
  Triggers event `'remove-viz'`.
  Removes the svg.

---