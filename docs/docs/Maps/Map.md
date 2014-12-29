# Map
Abstract base class for maps. This class should always be inherited when you build a new map.

## Constructor

### Map ()

## Properties

#### `.observers`
  A list of objects that observe the map's behaviour.
  See method `.notify` for more information.

---

## Methods

#### `.addObserver` ( message : `Object` )
  Adds an observer to the map.

---
#### `.notify` ( message : `Object` )
  Alerts the observers that the map changed. Gives each observer the message as a parameter.

  Observer objects must implement method `.notify` ( `Object` ).

---