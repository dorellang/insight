# ElementFactory
Creates Markers.

## Constructor

#### ElementFactory ( parameters : `Object` )
 Configures the markers produced by the ElementFactory.

 parameters is an object with the properties that define the markers.

 > type - The type of marker. Supported types are `circle`, `rect` and `image`

 The other given parameters depend on the type of marker created.

## Parameters

#### `.type`
  The type of the marker product.

---
#### `.params`
  The parameters for the created product.

---
#### `.width`
  The width of the marker in pixels.

---
#### `.height`
  The height of the marker in pixels.

---

## Methods

#### `.create` ( svg : `SVG` ) : `SVGElement`
  Creates a marker of the configured type.

---

#### `.moveElement` ( element : `SVGElement`, coordenates : `Object` )
  Moves the element to the new position.

---
#### `.createRect` ( svg : `SVG` )
  Creates a `rect` element.

---
#### `.createCircle` ( svg : `SVG` )
  Creates a `circle` element.

---
#### `.createImage` ( svg : `SVG` )
  Creates a `image` element.

---