# Layout
A layout, places the map and information window on the HTML document.

## Constructor

#### Layout ( `anchorID`, `orientation` )
Creates a layout anchored at the container with `anchorID` as its id. The layout is oriented by the given `orientation`.

Supported orientations are:

* `left` - Displays the information window to the left of the map.
* `right` - Displays the information window to the right of the map.
* `none` - Does not display the information window.

## Properties

#### `.anchor`
  A String. The ID of the containing element.

---
#### `.orientation`
  A String. The type of orientation of the layout.
  This can be:

  * `layout-left` - The information window to the left of the map.
  * `layout-right` - The information window to the right of the map.
  * `layout-none` - No information window.

---

## Methods

#### `.place` ( `map`, `info` )
  Places the map and information window in this layout's container element. The distribution of the elements is acording to its orientation.

---