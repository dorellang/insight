# SquareGrid
A square grid. Extends [Grid](/docs/docs/Layers/Grids/Grid.md).

## Constructor

#### SquareGrid ( layer_params: `Object`, attr: `Object`, map: `Object`, assoc_layer: `Object` )
 Configures a new square grid.

 layer_params is an object with properties that define the grid. Normally contains these properties:

 > points - Array of objectes `{lat,lng}`.
 >
 > weights - Array of numbers with the corresponding point weight.

 attr is an object with properties that defines any attribute of the grid. Normally contains the grid type, color and any param needed for the specific non-abstract grid.

 > type - Grid type (String).

 map is an instance of a [GoogleMap](https://developers.google.com/maps/documentation/javascript/reference#Map) object.

 assoc_layer is a [Layer](/docs/docs/Layers/Layer.md) Object.

## Parameters

#### `.layer_params`
  Properties that define the grid.

---
#### `.attr`
  Attributes that define the grid, such as type.

---
#### `.map`
  Map where the grid is shown.

---
#### `.layer`
  Associated layer where this grid belongs.

## Methods

#### `.addEvents` ( )
  Adds any event listeners. Adds events to move the grid according to pan and zoom

#### `.build` ( )
  Builds the grid.