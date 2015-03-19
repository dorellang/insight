<a name="niclabs"></a>
#niclabs
[NIC Chile Research Labs](http://niclabs.cl/) is the Internet Laboratory of the
[Faculty of Physical and Mathematical Sciences of the University of Chile (FCFM)](http://www.fcfm.uchile.cl/),
founded by [NIC Chile](http://www.nic.cl) and host of [INRIA Chile Internet Project](http://www.inria.cl/?page_id=23&lang=en).

Our main research areas are: Internet protocols (layer 3-4), DNS, Internet QoS, Internet QoE, and computer networks.

We are based in Santiago, Chile, in front of the FCFM, Universidad de Chile.

**Members**

* [niclabs](#niclabs)
  * [niclabs.insight](#niclabs.insight)
    * [insight.handler(name, [kind], [handler])](#niclabs.insight.handler)
    * [insight.init(options)](#niclabs.insight.init)
    * [insight.infoView([obj])](#niclabs.insight.infoView)
    * [insight.event](#niclabs.insight.event)
      * [event.on(event, listener)](#niclabs.insight.event.on)
      * [event.off(event, listener)](#niclabs.insight.event.off)
      * [event.trigger(event, [data])](#niclabs.insight.event.trigger)
      * [callback: event~listener](#niclabs.insight.event..listener)
    * [insight.info](#niclabs.insight.info)
      * [class: info.Block](#niclabs.insight.info.Block)
        * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
        * [Block.id](#niclabs.insight.info.Block.id)
        * [Block.element](#niclabs.insight.info.Block.element)
        * [Block.$](#niclabs.insight.info.Block.$)
        * [Block.remove()](#niclabs.insight.info.Block.remove)
        * [Block.data([data])](#niclabs.insight.info.Block.data)
        * [Block.createDefList([data])](#niclabs.insight.info.Block.createDefList)
      * [class: info.Summary](#niclabs.insight.info.Summary)
        * [new info.Summary(dashboard, options)](#new_niclabs.insight.info.Summary)
    * [callback: insight~handler](#niclabs.insight..handler)
    * [class: insight.Dashboard](#niclabs.insight.Dashboard)
      * [new insight.Dashboard(options)](#new_niclabs.insight.Dashboard)
      * [Dashboard.element](#niclabs.insight.Dashboard.element)
      * [Dashboard.$](#niclabs.insight.Dashboard.$)
      * [Dashboard.config(name)](#niclabs.insight.Dashboard.config)
      * [Dashboard.infoView([obj])](#niclabs.insight.Dashboard.infoView)
    * [class: insight.InfoView](#niclabs.insight.InfoView)
      * [new insight.InfoView(dashboard, options)](#new_niclabs.insight.InfoView)
      * [InfoView.element](#niclabs.insight.InfoView.element)
      * [InfoView.$](#niclabs.insight.InfoView.$)
      * [InfoView.block(obj)](#niclabs.insight.InfoView.block)

<a name="niclabs.insight"></a>
##niclabs.insight
Insight is a generic web dashboard for smart city projects.

It allows to combine different chart and visualization tools to better
understand what is going on in the city

**Members**

* [niclabs.insight](#niclabs.insight)
  * [insight.handler(name, [kind], [handler])](#niclabs.insight.handler)
  * [insight.init(options)](#niclabs.insight.init)
  * [insight.infoView([obj])](#niclabs.insight.infoView)
  * [insight.event](#niclabs.insight.event)
    * [event.on(event, listener)](#niclabs.insight.event.on)
    * [event.off(event, listener)](#niclabs.insight.event.off)
    * [event.trigger(event, [data])](#niclabs.insight.event.trigger)
    * [callback: event~listener](#niclabs.insight.event..listener)
  * [insight.info](#niclabs.insight.info)
    * [class: info.Block](#niclabs.insight.info.Block)
      * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
      * [Block.id](#niclabs.insight.info.Block.id)
      * [Block.element](#niclabs.insight.info.Block.element)
      * [Block.$](#niclabs.insight.info.Block.$)
      * [Block.remove()](#niclabs.insight.info.Block.remove)
      * [Block.data([data])](#niclabs.insight.info.Block.data)
      * [Block.createDefList([data])](#niclabs.insight.info.Block.createDefList)
    * [class: info.Summary](#niclabs.insight.info.Summary)
      * [new info.Summary(dashboard, options)](#new_niclabs.insight.info.Summary)
  * [callback: insight~handler](#niclabs.insight..handler)
  * [class: insight.Dashboard](#niclabs.insight.Dashboard)
    * [new insight.Dashboard(options)](#new_niclabs.insight.Dashboard)
    * [Dashboard.element](#niclabs.insight.Dashboard.element)
    * [Dashboard.$](#niclabs.insight.Dashboard.$)
    * [Dashboard.config(name)](#niclabs.insight.Dashboard.config)
    * [Dashboard.infoView([obj])](#niclabs.insight.Dashboard.infoView)
  * [class: insight.InfoView](#niclabs.insight.InfoView)
    * [new insight.InfoView(dashboard, options)](#new_niclabs.insight.InfoView)
    * [InfoView.element](#niclabs.insight.InfoView.element)
    * [InfoView.$](#niclabs.insight.InfoView.$)
    * [InfoView.block(obj)](#niclabs.insight.InfoView.block)

<a name="niclabs.insight.handler"></a>
###insight.handler(name, [kind], [handler])
Register a handler of a specific insight element ('layer', 'visualization', etc.)
to manage the creation, rendering of a specific part of the UI.

Third-party extensions to the insight need only to register their visualization
elements with this function for the dashboard UI to correctly recognize them
TODO: improve this

**Params**

- name `string` - name for the handler to return, register  
- \[kind\] `string` - kind for the handler  
- \[handler\] <code>[handler](#niclabs.insight..handler)</code> - callback to create the element  

**Returns**: [handler](#niclabs.insight..handler) - handler for the registered name  
<a name="niclabs.insight.init"></a>
###insight.init(options)
Construct and configure a [Dashboard](#niclabs.insight.Dashboard)

**Params**

- options `Object` - list of configuration options for the dashboard see [Dashboard](#niclabs.insight.Dashboard)  

**Returns**: [Dashboard](#niclabs.insight.Dashboard) - dashboard object  
<a name="niclabs.insight.infoView"></a>
###insight.infoView([obj])
Helper method to assign/get the information view to/from the dashboard

**Params**

- \[obj\] `Object` | <code>[InfoView](#niclabs.insight.InfoView)</code> - configuration for the information view or information view object  
  - handler `String` - name of the handler to construct the info view  

**Returns**: [InfoView](#niclabs.insight.InfoView) - the dashboard information view  
<a name="niclabs.insight.event"></a>
###insight.event
Very basic event manager for the dashboard

**Example**  
```javascript
// Subscribe to the event
var eventId = niclabs.insight.event.on('hello', function(who) {
     alert("HELLO "+who+"!!!");
});

// Trigger the event
niclabs.insight.event.trigger('hello', "John"); // Shows alert 'HELLO John!!!'

// Unsubscribe
niclabs.insight.event.off('hello', eventId);
```

**Members**

* [insight.event](#niclabs.insight.event)
  * [event.on(event, listener)](#niclabs.insight.event.on)
  * [event.off(event, listener)](#niclabs.insight.event.off)
  * [event.trigger(event, [data])](#niclabs.insight.event.trigger)
  * [callback: event~listener](#niclabs.insight.event..listener)

<a name="niclabs.insight.event.on"></a>
####event.on(event, listener)
Listen for an event. A listener callback can only be assigned once for an event

**Params**

- event `string` - event type  
- listener <code>[listener](#niclabs.insight.event..listener)</code> - callback to process the event  

**Returns**: `number` - id of the listener  
<a name="niclabs.insight.event.off"></a>
####event.off(event, listener)
Stop listening for an event.

**Params**

- event `string` - event type  
- listener <code>[listener](#niclabs.insight.event..listener)</code> | `number` - callback to remove or id of the listener provided by `niclabs.insight.event.on()`  

**Returns**: `boolean` - true if the listener was found and was succesfully removed  
<a name="niclabs.insight.event.trigger"></a>
####event.trigger(event, [data])
Trigger an event

**Params**

- event `string` - event type  
- \[data\] `Object` - data to pass to the callback  

<a name="niclabs.insight.event..listener"></a>
####callback: event~listener
Insight event listener

**Params**

- data `Object` - data for the callback function, dependant on the event  

**Scope**: inner typedef of [event](#niclabs.insight.event)  
**Type**: `function`  
<a name="niclabs.insight.info"></a>
###insight.info
Contains the definitions for the information blocks supported by insight

**Members**

* [insight.info](#niclabs.insight.info)
  * [class: info.Block](#niclabs.insight.info.Block)
    * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
    * [Block.id](#niclabs.insight.info.Block.id)
    * [Block.element](#niclabs.insight.info.Block.element)
    * [Block.$](#niclabs.insight.info.Block.$)
    * [Block.remove()](#niclabs.insight.info.Block.remove)
    * [Block.data([data])](#niclabs.insight.info.Block.data)
    * [Block.createDefList([data])](#niclabs.insight.info.Block.createDefList)
  * [class: info.Summary](#niclabs.insight.info.Summary)
    * [new info.Summary(dashboard, options)](#new_niclabs.insight.info.Summary)

<a name="niclabs.insight.info.Block"></a>
####class: info.Block
**Members**

* [class: info.Block](#niclabs.insight.info.Block)
  * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
  * [Block.id](#niclabs.insight.info.Block.id)
  * [Block.element](#niclabs.insight.info.Block.element)
  * [Block.$](#niclabs.insight.info.Block.$)
  * [Block.remove()](#niclabs.insight.info.Block.remove)
  * [Block.data([data])](#niclabs.insight.info.Block.data)
  * [Block.createDefList([data])](#niclabs.insight.info.Block.createDefList)

<a name="new_niclabs.insight.info.Block"></a>
#####new info.Block(dashboard, options)
Construct a information block

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard to which the block belongs to  
- options `Object` - configuration options for the block  
  - id `string` - html identifier for the block  
  - \[title\] `string` - title for the block  
  - \[properties\] `Object` - block properties (closable, movable)  

<a name="niclabs.insight.info.Block.id"></a>
#####Block.id
DOM id of the block

**Type**: `string`  
<a name="niclabs.insight.info.Block.element"></a>
#####Block.element
HTML DOM element for the block container

**Type**: `Element`  
<a name="niclabs.insight.info.Block.$"></a>
#####Block.$
jQuery object for info block container

**Type**: `jQuery`  
<a name="niclabs.insight.info.Block.remove"></a>
#####Block.remove()
Remove the block from the dashboard.
This method triggers an event to alert all elements of the
dashboard of the block removal

<a name="niclabs.insight.info.Block.data"></a>
#####Block.data([data])
Set/get the data for the block

**Params**

- \[data\] `Object` - data for the block  

**Returns**: `Object` - the current data in the blokc  
<a name="niclabs.insight.info.Block.createDefList"></a>
#####Block.createDefList([data])
Create a definition list from the provided data

TODO: should this really go here? Change the name?

**Params**

- \[data\] `Object` - the updated data for the block  

<a name="niclabs.insight.info.Summary"></a>
####class: info.Summary
**Extends**: `niclabs.insight.info.Block`  
**Members**

* [class: info.Summary](#niclabs.insight.info.Summary)
  * [new info.Summary(dashboard, options)](#new_niclabs.insight.info.Summary)

<a name="new_niclabs.insight.info.Summary"></a>
#####new info.Summary(dashboard, options)
Construct a new summary information block
TODO: describe what is a summary information block

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - parent dashboard for the block  
- options `Object` - see [Block](#niclabs.insight.info.Block) constructor  

**Extends**: `niclabs.insight.info.Block`  
<a name="niclabs.insight..handler"></a>
###callback: insight~handler
Constructs an insight element (visualization, layer, etc.)

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - to assign to the handler  
- options `Object` - configuration options for the handler, depending on the kind  

**Scope**: inner typedef of [insight](#niclabs.insight)  
**Type**: `function`  
<a name="niclabs.insight.Dashboard"></a>
###class: insight.Dashboard
**Members**

* [class: insight.Dashboard](#niclabs.insight.Dashboard)
  * [new insight.Dashboard(options)](#new_niclabs.insight.Dashboard)
  * [Dashboard.element](#niclabs.insight.Dashboard.element)
  * [Dashboard.$](#niclabs.insight.Dashboard.$)
  * [Dashboard.config(name)](#niclabs.insight.Dashboard.config)
  * [Dashboard.infoView([obj])](#niclabs.insight.Dashboard.infoView)

<a name="new_niclabs.insight.Dashboard"></a>
####new insight.Dashboard(options)
Constructs the dashboard

The dashboard is composed of multiple, replaceable parts.
- An information view, with conveys information to the user, throught visualizations or text.
the information view can be composed contain multiple blocks of information
- A map view, which provides the geospatial information to the user. The map and the information view can interact for
 clearer information
- A filter bar, which allows to interact with the data shown in the map, through filtering or modifying the location
- A notification bar, usually invisible, which reports events back to the user

**Params**

- options `Object` - configuration options for the dashboard  
  - \[layout='none'\] `string` - Dashboard layout, one of ['left', 'right', 'none'], puts the info window to the left, to the right or it removes it  
  - anchor `string` - Required id for anchoring the dashboard  

<a name="niclabs.insight.Dashboard.element"></a>
####Dashboard.element
HTML DOM element for the dashboard container

**Type**: `Element`  
<a name="niclabs.insight.Dashboard.$"></a>
####Dashboard.$
jQuery object for the dashboard DOM container

**Type**: `jQuery`  
<a name="niclabs.insight.Dashboard.config"></a>
####Dashboard.config(name)
Return the value for the dashboard configuration option with the provided name

**Params**

- name `String` - name of the configuration option  

**Returns**: `*` - configuration option value or undefined if it does not exist  
<a name="niclabs.insight.Dashboard.infoView"></a>
####Dashboard.infoView([obj])
Assign/get the information view for the dashboard

**Params**

- \[obj\] `Object` | <code>[InfoView](#niclabs.insight.InfoView)</code> - configuration for the information view or information view object  
  - handler `String` - name of the handler to construct the info view  

**Returns**: [InfoView](#niclabs.insight.InfoView) - the dashboard information view  
<a name="niclabs.insight.InfoView"></a>
###class: insight.InfoView
**Members**

* [class: insight.InfoView](#niclabs.insight.InfoView)
  * [new insight.InfoView(dashboard, options)](#new_niclabs.insight.InfoView)
  * [InfoView.element](#niclabs.insight.InfoView.element)
  * [InfoView.$](#niclabs.insight.InfoView.$)
  * [InfoView.block(obj)](#niclabs.insight.InfoView.block)

<a name="new_niclabs.insight.InfoView"></a>
####new insight.InfoView(dashboard, options)
Construct the dashboard information view

The information view is composed of information blocks to show
different aspects of the data shown in the map or
about the visualization in general

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard to assign this info view to  
- options `Object` - list of configuration options for the information view  

<a name="niclabs.insight.InfoView.element"></a>
####InfoView.element
HTML DOM element for the information view container

**Type**: `Element`  
<a name="niclabs.insight.InfoView.$"></a>
####InfoView.$
jQuery object for info view container

**Type**: `jQuery`  
<a name="niclabs.insight.InfoView.block"></a>
####InfoView.block(obj)
Add/get a block from the info view

- If a number or string is provided as value for obj, the block with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new block
is created using the handler and the block is added to the list of
blocks of the info view
- If an object is provided without handler, it is assumed to be a Block object and added to the
block list as is.

**Params**

- obj `string` | `number` | `Object` | <code>[Block](#niclabs.insight.info.Block)</code> - block id to get or configuration options for the new block  

**Returns**: [Block](#niclabs.insight.info.Block) - - newly created block  
