# Utils

Useful jQuery plugins.

## Example

``` javascript
$('#MyDiv').resizable('w');

$('#MyDiv').movable();

$('#MyDiv').closable();
```

#### resizable ( orientation : `String` )
Transforms the DOM element so its resizable.
Adds a resizing bar.

The orientation is a string containing 'n','s','e' or 'w'.

---
#### setID ( selector : `String` )
Sets the ID of the DOM element. If the given ID start with '#', it is ignored.

---
#### movable ()
Adds arrows so this element can be moved between its siblings.

---
#### closable ( handler : `function` )
Adds a close button.
Handler function its executed before the element is removed.

---