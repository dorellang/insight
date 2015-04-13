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
    * [insight.dashboard([options])](#niclabs.insight.dashboard)
    * [insight.info([obj])](#niclabs.insight.info(2))
    * [insight.layer(obj, [activate])](#niclabs.insight.layer(2))
    * [insight.map([obj])](#niclabs.insight.map(2))
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
        * [Block.layer](#niclabs.insight.info.Block.layer)
        * [Block.content](#niclabs.insight.info.Block.content)
        * [Block.data](#niclabs.insight.info.Block.data)
        * [Block.remove()](#niclabs.insight.info.Block.remove)
        * [Block.__data__([data], value)](#niclabs.insight.info.Block.__data__)
        * [Block.refresh([data])](#niclabs.insight.info.Block.refresh)
      * [class: info.ChartistBlock](#niclabs.insight.info.ChartistBlock)
        * [new info.ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock)
        * [type: ChartistBlock.Chartist](#niclabs.insight.info.ChartistBlock.Chartist)
      * [class: info.SummaryBlock](#niclabs.insight.info.SummaryBlock)
        * [new info.SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock)
    * [insight.layer](#niclabs.insight.layer)
      * [class: layer.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)
        * [new layer.HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer)
        * [HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
        * [HeatmapLayer.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
        * [HeatmapLayer.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
        * [event: "layer_data"](#niclabs.insight.layer.HeatmapLayer#event_layer_data)
        * [event: "layer_sumary"](#niclabs.insight.layer.HeatmapLayer#event_layer_sumary)
      * [class: layer.Layer](#niclabs.insight.layer.Layer)
        * [new layer.Layer(dashboard, options)](#new_niclabs.insight.layer.Layer)
        * [Layer.id](#niclabs.insight.layer.Layer.id)
        * [Layer.data([obj])](#niclabs.insight.layer.Layer.data)
        * [Layer.load()](#niclabs.insight.layer.Layer.load)
        * [Layer.draw(data)](#niclabs.insight.layer.Layer.draw)
        * [Layer.filter(fn)](#niclabs.insight.layer.Layer.filter)
        * [Layer.clear()](#niclabs.insight.layer.Layer.clear)
        * [event: "layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
        * [event: "layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
      * [class: layer.MarkerLayer](#niclabs.insight.layer.MarkerLayer)
        * [new layer.MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer)
        * [MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
        * [MarkerLayer.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
        * [MarkerLayer.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
        * [event: "layer_data"](#niclabs.insight.layer.MarkerLayer#event_layer_data)
        * [event: "layer_sumary"](#niclabs.insight.layer.MarkerLayer#event_layer_sumary)
    * [insight.map](#niclabs.insight.map)
      * [map.heatmap](#niclabs.insight.map.heatmap)
        * [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
          * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
          * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
          * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
        * [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
          * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
          * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
          * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)
        * [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
          * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
          * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
          * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)
      * [map.marker](#niclabs.insight.map.marker)
        * [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
          * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)
        * [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
          * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)
        * [class: marker.Marker](#niclabs.insight.map.marker.Marker)
          * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
          * [Marker.map](#niclabs.insight.map.marker.Marker.map)
          * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
          * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
          * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
          * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
          * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
          * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)
        * [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
          * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)
      * [class: map.GoogleMap](#niclabs.insight.map.GoogleMap)
        * [new map.GoogleMap(options)](#new_niclabs.insight.map.GoogleMap)
        * [GoogleMap.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom)
        * [GoogleMap.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center)
        * [event: "map_element_selected"](#niclabs.insight.map.GoogleMap#event_map_element_selected)
    * [callback: insight~handler](#niclabs.insight..handler)
    * [class: insight.Dashboard](#niclabs.insight.Dashboard)
      * [new insight.Dashboard(options)](#new_niclabs.insight.Dashboard)
      * [Dashboard.element](#niclabs.insight.Dashboard.element)
      * [Dashboard.$](#niclabs.insight.Dashboard.$)
      * [Dashboard.config(name)](#niclabs.insight.Dashboard.config)
      * [Dashboard.info([obj])](#niclabs.insight.Dashboard.info)
      * [Dashboard.map([obj])](#niclabs.insight.Dashboard.map)
      * [Dashboard.layer(obj, [activate])](#niclabs.insight.Dashboard.layer)
      * [Dashboard.data([obj])](#niclabs.insight.Dashboard.data)
      * [Dashboard.active([id])](#niclabs.insight.Dashboard.active)
      * [Dashboard.filter(filter)](#niclabs.insight.Dashboard.filter)
      * [Dashboard.clear()](#niclabs.insight.Dashboard.clear)
      * [event: "active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)
    * [class: insight.FilterBar](#niclabs.insight.FilterBar)
      * [new insight.FilterBar()](#new_niclabs.insight.FilterBar)
      * [FilterBar.element](#niclabs.insight.FilterBar.element)
      * [FilterBar.$](#niclabs.insight.FilterBar.$)
      * [FilterBar.filter(filter)](#niclabs.insight.FilterBar.filter)
      * [callback: FilterBar~filter](#niclabs.insight.FilterBar..filter)
      * [event: "filter_changed"](#niclabs.insight.FilterBar#event_filter_changed)
    * [class: insight.MapView](#niclabs.insight.MapView)
      * [new insight.MapView(options)](#new_niclabs.insight.MapView)
      * [MapView.element](#niclabs.insight.MapView.element)
      * [MapView.$](#niclabs.insight.MapView.$)
      * [MapView.center([lat], [lng])](#niclabs.insight.MapView.center)
      * [MapView.lat()](#niclabs.insight.MapView.lat)
      * [MapView.lng()](#niclabs.insight.MapView.lng)
      * [MapView.zoom([zoom])](#niclabs.insight.MapView.zoom)
      * [type: MapView.Coordinates](#niclabs.insight.MapView.Coordinates)
      * [event: "map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
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
  * [insight.dashboard([options])](#niclabs.insight.dashboard)
  * [insight.info([obj])](#niclabs.insight.info(2))
  * [insight.layer(obj, [activate])](#niclabs.insight.layer(2))
  * [insight.map([obj])](#niclabs.insight.map(2))
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
      * [Block.layer](#niclabs.insight.info.Block.layer)
      * [Block.content](#niclabs.insight.info.Block.content)
      * [Block.data](#niclabs.insight.info.Block.data)
      * [Block.remove()](#niclabs.insight.info.Block.remove)
      * [Block.__data__([data], value)](#niclabs.insight.info.Block.__data__)
      * [Block.refresh([data])](#niclabs.insight.info.Block.refresh)
    * [class: info.ChartistBlock](#niclabs.insight.info.ChartistBlock)
      * [new info.ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock)
      * [type: ChartistBlock.Chartist](#niclabs.insight.info.ChartistBlock.Chartist)
    * [class: info.SummaryBlock](#niclabs.insight.info.SummaryBlock)
      * [new info.SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock)
  * [insight.layer](#niclabs.insight.layer)
    * [class: layer.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)
      * [new layer.HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer)
      * [HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
      * [HeatmapLayer.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
      * [HeatmapLayer.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
      * [event: "layer_data"](#niclabs.insight.layer.HeatmapLayer#event_layer_data)
      * [event: "layer_sumary"](#niclabs.insight.layer.HeatmapLayer#event_layer_sumary)
    * [class: layer.Layer](#niclabs.insight.layer.Layer)
      * [new layer.Layer(dashboard, options)](#new_niclabs.insight.layer.Layer)
      * [Layer.id](#niclabs.insight.layer.Layer.id)
      * [Layer.data([obj])](#niclabs.insight.layer.Layer.data)
      * [Layer.load()](#niclabs.insight.layer.Layer.load)
      * [Layer.draw(data)](#niclabs.insight.layer.Layer.draw)
      * [Layer.filter(fn)](#niclabs.insight.layer.Layer.filter)
      * [Layer.clear()](#niclabs.insight.layer.Layer.clear)
      * [event: "layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
      * [event: "layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
    * [class: layer.MarkerLayer](#niclabs.insight.layer.MarkerLayer)
      * [new layer.MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer)
      * [MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
      * [MarkerLayer.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
      * [MarkerLayer.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
      * [event: "layer_data"](#niclabs.insight.layer.MarkerLayer#event_layer_data)
      * [event: "layer_sumary"](#niclabs.insight.layer.MarkerLayer#event_layer_sumary)
  * [insight.map](#niclabs.insight.map)
    * [map.heatmap](#niclabs.insight.map.heatmap)
      * [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
        * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
        * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
        * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
      * [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
        * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
        * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
        * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)
      * [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
        * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
        * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
        * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)
    * [map.marker](#niclabs.insight.map.marker)
      * [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
        * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)
      * [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
        * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)
      * [class: marker.Marker](#niclabs.insight.map.marker.Marker)
        * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
        * [Marker.map](#niclabs.insight.map.marker.Marker.map)
        * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
        * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
        * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
        * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
        * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
        * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)
      * [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
        * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)
    * [class: map.GoogleMap](#niclabs.insight.map.GoogleMap)
      * [new map.GoogleMap(options)](#new_niclabs.insight.map.GoogleMap)
      * [GoogleMap.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom)
      * [GoogleMap.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center)
      * [event: "map_element_selected"](#niclabs.insight.map.GoogleMap#event_map_element_selected)
  * [callback: insight~handler](#niclabs.insight..handler)
  * [class: insight.Dashboard](#niclabs.insight.Dashboard)
    * [new insight.Dashboard(options)](#new_niclabs.insight.Dashboard)
    * [Dashboard.element](#niclabs.insight.Dashboard.element)
    * [Dashboard.$](#niclabs.insight.Dashboard.$)
    * [Dashboard.config(name)](#niclabs.insight.Dashboard.config)
    * [Dashboard.info([obj])](#niclabs.insight.Dashboard.info)
    * [Dashboard.map([obj])](#niclabs.insight.Dashboard.map)
    * [Dashboard.layer(obj, [activate])](#niclabs.insight.Dashboard.layer)
    * [Dashboard.data([obj])](#niclabs.insight.Dashboard.data)
    * [Dashboard.active([id])](#niclabs.insight.Dashboard.active)
    * [Dashboard.filter(filter)](#niclabs.insight.Dashboard.filter)
    * [Dashboard.clear()](#niclabs.insight.Dashboard.clear)
    * [event: "active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)
  * [class: insight.FilterBar](#niclabs.insight.FilterBar)
    * [new insight.FilterBar()](#new_niclabs.insight.FilterBar)
    * [FilterBar.element](#niclabs.insight.FilterBar.element)
    * [FilterBar.$](#niclabs.insight.FilterBar.$)
    * [FilterBar.filter(filter)](#niclabs.insight.FilterBar.filter)
    * [callback: FilterBar~filter](#niclabs.insight.FilterBar..filter)
    * [event: "filter_changed"](#niclabs.insight.FilterBar#event_filter_changed)
  * [class: insight.MapView](#niclabs.insight.MapView)
    * [new insight.MapView(options)](#new_niclabs.insight.MapView)
    * [MapView.element](#niclabs.insight.MapView.element)
    * [MapView.$](#niclabs.insight.MapView.$)
    * [MapView.center([lat], [lng])](#niclabs.insight.MapView.center)
    * [MapView.lat()](#niclabs.insight.MapView.lat)
    * [MapView.lng()](#niclabs.insight.MapView.lng)
    * [MapView.zoom([zoom])](#niclabs.insight.MapView.zoom)
    * [type: MapView.Coordinates](#niclabs.insight.MapView.Coordinates)
    * [event: "map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
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
<a name="niclabs.insight.dashboard"></a>
###insight.dashboard([options])
Get/construct a [Dashboard](#niclabs.insight.Dashboard)

Returns the dashboard for the namespace if options are not provided

**Params**

- \[options\] `Object` - list of configuration options for the dashboard see [Dashboard](#niclabs.insight.Dashboard)  

**Returns**: [Dashboard](#niclabs.insight.Dashboard) - dashboard object  
**Example**  
```javascript
// Create a map with the info view to the left
var dashboard = niclabs.insight.dashboard({
    'anchor': '#dashboard',
    'layout': 'left'
});
```

<a name="niclabs.insight.info(2)"></a>
###insight.info([obj])
Helper method to assign/get the information view to/from the dashboard

**Params**

- \[obj\] `Object` | <code>[InfoView](#niclabs.insight.InfoView)</code> - configuration for the information view or information view object  
  - handler `String` - name of the handler to construct the info view  

**Returns**: [InfoView](#niclabs.insight.InfoView) - the dashboard information view  
**Example**  
```javascript
// Create the info view
niclabs.insight.info({
     handler: 'basic-info-view', // The view constructor
     blocks: [{
         'handler': 'summary-block', // The block constructor
         'id': '#summary',
         'title': 'My Marker Summary',
         'data': { // Default data
             'description': 'This block will show the details of the selected markers'
       },
       ignore: ['layer', 'type', 'src'] // Data elements we don't want on the block
   }]
});
```

<a name="niclabs.insight.layer(2)"></a>
###insight.layer(obj, [activate])
Helper method to add/get a [Layer](#niclabs.insight.layer.Layer) for the dashboard

A layer acts as a link between a source of data and a visualization on the map

- If a number or string is provided as value for obj, the layer with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new layer
is created using the handler and the layer is added to the list of
layers of the dashboard
- If an object is provided without handler, it is assumed to be a Layer object and added to the
layer list as is.

**Params**

- obj `string` | `number` | `Object` | <code>[Layer](#niclabs.insight.layer.Layer)</code> - layer id to get or configuration options for the new layer  
- \[activate=false\] `boolean` - if true, set the layer as the active layer of the dashboard  

**Returns**: `niclabs.insight.info.Layer` - - layer for the provided id  
**Example**  
```javascript
niclabs.insight.layer({
     handler: 'marker-layer',
     data: [{
         'lat': 48.8556,
         'lng': 2.2986,
         'landmark': 'Champ de Mars'
     }, {
         'lat': 48.8583,
         'lng': 2.2944,
         'landmark': 'Eiffel Tower',
         'fun-fact': 'Was built in 1889.'
     }],
     marker: {
         'type': 'image-marker',
         'src': 'antenna.svg'
     }
});
```

<a name="niclabs.insight.map(2)"></a>
###insight.map([obj])
Helper method to assign/get the map view to/from the dashboard

**Params**

- \[obj\] `Object` | <code>[MapView](#niclabs.insight.MapView)</code> - configuration for the map view or map view object  
  - handler `String` - name of the handler to construct the map view  

**Returns**: [MapView](#niclabs.insight.MapView) - the dashboard map view  
**Example**  
```javascript
// Create the map
var map = niclabs.insight.map({
     'handler': 'google-map', // Map constructor
     'lat': 48.8583,
     'lng': 2.2944,
     'zoom': 15
});
```

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
    * [Block.layer](#niclabs.insight.info.Block.layer)
    * [Block.content](#niclabs.insight.info.Block.content)
    * [Block.data](#niclabs.insight.info.Block.data)
    * [Block.remove()](#niclabs.insight.info.Block.remove)
    * [Block.__data__([data], value)](#niclabs.insight.info.Block.__data__)
    * [Block.refresh([data])](#niclabs.insight.info.Block.refresh)
  * [class: info.ChartistBlock](#niclabs.insight.info.ChartistBlock)
    * [new info.ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock)
    * [type: ChartistBlock.Chartist](#niclabs.insight.info.ChartistBlock.Chartist)
  * [class: info.SummaryBlock](#niclabs.insight.info.SummaryBlock)
    * [new info.SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock)

<a name="niclabs.insight.info.Block"></a>
####class: info.Block
**Members**

* [class: info.Block](#niclabs.insight.info.Block)
  * [new info.Block(dashboard, options)](#new_niclabs.insight.info.Block)
  * [Block.id](#niclabs.insight.info.Block.id)
  * [Block.element](#niclabs.insight.info.Block.element)
  * [Block.$](#niclabs.insight.info.Block.$)
  * [Block.layer](#niclabs.insight.info.Block.layer)
  * [Block.content](#niclabs.insight.info.Block.content)
  * [Block.data](#niclabs.insight.info.Block.data)
  * [Block.remove()](#niclabs.insight.info.Block.remove)
  * [Block.__data__([data], value)](#niclabs.insight.info.Block.__data__)
  * [Block.refresh([data])](#niclabs.insight.info.Block.refresh)

<a name="new_niclabs.insight.info.Block"></a>
#####new info.Block(dashboard, options)
Construct a information block

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard to which the block belongs to  
- options `Object` - configuration options for the block  
  - id `string` - html identifier for the block  
  - \[title\] `string` - title for the block  
  - \[closable=true\] `boolean` - make the block closable  
  - \[movable=true\] `boolean` - make the block movable  
  - \[data\] `Object` | `Array.<Object>` | `function` | `String` - data for the block,
 it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
 or a url where to get the data. If a layer is provided, events from the layer (`niclabs.insight.MapView#map_element_selected`,
 `niclabs.insight.layer.Layer#layer_sumary`) will update the data in the block. If no data is provided, it is assumed
 that all layers affect the block and events from all layers will update the block data. If data depends on a layer
 options.defaults can be used to set the default data  
  - preprocess `function` - function to apply on the data (either from an url or a layer) before refreshing the block  
  - \[defaults\] `Object` | `Array.<Object>` - when the data depends on a layer, defaults sets the initial data to show
 in the block  

<a name="niclabs.insight.info.Block.id"></a>
#####Block.id
id of the block

**Type**: `string`  
<a name="niclabs.insight.info.Block.element"></a>
#####Block.element
HTML DOM element for the block container

**Type**: `Element`  
<a name="niclabs.insight.info.Block.$"></a>
#####Block.$
jQuery object for info block container

**Type**: `jQuery`  
<a name="niclabs.insight.info.Block.layer"></a>
#####Block.layer
Layer id

**Type**: `jQuery`  
<a name="niclabs.insight.info.Block.content"></a>
#####Block.content
jQuery element for the content container

The content of the block is the HTML container that
comes after the block title

**Type**: `jQuery`  
<a name="niclabs.insight.info.Block.data"></a>
#####Block.data
Set/get the data for the block

**Params**

  - \[data\] `Object` | `Array.<Object>` | `function` | `String` - data for the block,
 it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
 or a url where to get the data. If a layer is provided, events from the layer (`niclabs.insight.MapView#map_element_selected`,
 `niclabs.insight.layer.Layer#layer_sumary`) will update the data in the block. If no data is provided, it is assumed
 that all layers affect the block and events from all layers will update the block data. If data depends on a layer
 options.defaults can be used to set the default data.  

**Returns**: `Object` - the current data in the block or the url for the data if the data has not been loaded yet  
<a name="niclabs.insight.info.Block.remove"></a>
#####Block.remove()
Remove the block from the dashboard.
This method triggers an event to alert all elements of the
dashboard of the block removal

<a name="niclabs.insight.info.Block.__data__"></a>
#####Block.__data__([data], value)
Set/get the internal data value.

**Params**

- \[data\] `Object` | `Array.<Object>` - data for the block  
- value `Object` - for the internal data  

**Access**: protected  
<a name="niclabs.insight.info.Block.refresh"></a>
#####Block.refresh([data])
Refresh the block using the provided data

**Params**

- \[data\] `Object` - data to refresh  

<a name="niclabs.insight.info.ChartistBlock"></a>
####class: info.ChartistBlock
**Extends**: `niclabs.insight.info.Block`  
**Members**

* [class: info.ChartistBlock](#niclabs.insight.info.ChartistBlock)
  * [new info.ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock)
  * [type: ChartistBlock.Chartist](#niclabs.insight.info.ChartistBlock.Chartist)

<a name="new_niclabs.insight.info.ChartistBlock"></a>
#####new info.ChartistBlock(dashboard, constructor, options)
Construct a new chartist information block

For the configuration options see [http://gionkunz.github.io/chartist-js/](http://gionkunz.github.io/chartist-js/)

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - parent dashboard for the block  
- constructor `Object` - chartist object to use as constructor  
- options `Object` - configuration options for the block  
  - id `string` - html identifier for the block  
  - \[title\] `string` - title for the block  
  - chartist <code>[Chartist](#niclabs.insight.info.ChartistBlock.Chartist)</code> - chartist configuration  
  - \[closable=true\] `boolean` - make the block closable  
  - \[movable=true\] `boolean` - make the block movable  
  - \[data\] `Object` | `Array.<Object>` | `function` | `String` - data for the block,
 it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
 or a url where to get the data. If a layer is provided, events from the layer (`niclabs.insight.MapView#map_element_selected`,
 `niclabs.insight.layer.Layer#layer_sumary`) will update the data in the block. If no data is provided, it is assumed
 that all layers affect the block and events from all layers will update the block data. If data depends on a layer
 options.defaults can be used to set the default data  
  - preprocess `function` - function to apply on the data (either from an url or a layer) before refreshing the block  
  - \[defaults\] `Object` | `Array.<Object>` - when the data depends on a layer, defaults sets the initial data to show
 in the block  

**Extends**: `niclabs.insight.info.Block`  
<a name="niclabs.insight.info.ChartistBlock.Chartist"></a>
#####type: ChartistBlock.Chartist
Configuration options for chartist charts

**Params**

- class `Object` - chartist css class  
- labels `Object` - chart labels  
- \[options\] `Object` - chartist options  
- \[responsiveOptions\] `Object` - chartist responsive options  

**Type**: `Object`  
<a name="niclabs.insight.info.SummaryBlock"></a>
####class: info.SummaryBlock
**Extends**: `niclabs.insight.info.Block`  
**Members**

* [class: info.SummaryBlock](#niclabs.insight.info.SummaryBlock)
  * [new info.SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock)

<a name="new_niclabs.insight.info.SummaryBlock"></a>
#####new info.SummaryBlock(dashboard, options)
Construct a new summary information block
TODO: describe what is a summary information block

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - parent dashboard for the block  
- options `Object` - configuration options for the block  
  - id `string` - html identifier for the block  
  - \[title\] `string` - title for the block  
  - \[closable=true\] `boolean` - make the block closable  
  - \[movable=true\] `boolean` - make the block movable  
  - \[data\] `Object` | `Array.<Object>` | `function` | `String` - data for the block,
 it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')
 or a url where to get the data. If a layer is provided, events from the layer (`niclabs.insight.MapView#map_element_selected`,
 `niclabs.insight.layer.Layer#layer_sumary`) will update the data in the block. If no data is provided, it is assumed
 that all layers affect the block and events from all layers will update the block data. If data depends on a layer
 options.defaults can be used to set the default data  
  - preprocess `function` - function to apply on the data (either from an url or a layer) before refreshing the block  
  - \[defaults\] `Object` | `Array.<Object>` - when the data depends on a layer, defaults sets the initial data to show
 in the block  

**Extends**: `niclabs.insight.info.Block`  
<a name="niclabs.insight.layer"></a>
###insight.layer
Visualization layers for the dashboard

**Members**

* [insight.layer](#niclabs.insight.layer)
  * [class: layer.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)
    * [new layer.HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer)
    * [HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
    * [HeatmapLayer.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
    * [HeatmapLayer.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
    * [event: "layer_data"](#niclabs.insight.layer.HeatmapLayer#event_layer_data)
    * [event: "layer_sumary"](#niclabs.insight.layer.HeatmapLayer#event_layer_sumary)
  * [class: layer.Layer](#niclabs.insight.layer.Layer)
    * [new layer.Layer(dashboard, options)](#new_niclabs.insight.layer.Layer)
    * [Layer.id](#niclabs.insight.layer.Layer.id)
    * [Layer.data([obj])](#niclabs.insight.layer.Layer.data)
    * [Layer.load()](#niclabs.insight.layer.Layer.load)
    * [Layer.draw(data)](#niclabs.insight.layer.Layer.draw)
    * [Layer.filter(fn)](#niclabs.insight.layer.Layer.filter)
    * [Layer.clear()](#niclabs.insight.layer.Layer.clear)
    * [event: "layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
    * [event: "layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
  * [class: layer.MarkerLayer](#niclabs.insight.layer.MarkerLayer)
    * [new layer.MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer)
    * [MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
    * [MarkerLayer.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
    * [MarkerLayer.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
    * [event: "layer_data"](#niclabs.insight.layer.MarkerLayer#event_layer_data)
    * [event: "layer_sumary"](#niclabs.insight.layer.MarkerLayer#event_layer_sumary)

<a name="niclabs.insight.layer.HeatmapLayer"></a>
####class: layer.HeatmapLayer
**Extends**: `niclabs.insight.layer.Layer`  
**Members**

* [class: layer.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)
  * [new layer.HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer)
  * [HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
  * [HeatmapLayer.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
  * [HeatmapLayer.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
  * [event: "layer_data"](#niclabs.insight.layer.HeatmapLayer#event_layer_data)
  * [event: "layer_sumary"](#niclabs.insight.layer.HeatmapLayer#event_layer_sumary)

<a name="new_niclabs.insight.layer.HeatmapLayer"></a>
#####new layer.HeatmapLayer(dashboard, options)
Construct a new heatmap layer

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this layer belongs to  
- options `Object` - configuration options for the layer  
  - id `string` - identifier for the layer  
  - data `string` | `Array.<Object>` - uri or data array for the layer  
  - \[heatmap\] `Object` - options for the heatmap  

**Extends**: `niclabs.insight.layer.Layer`  
<a name="niclabs.insight.layer.HeatmapLayer.layer.draw"></a>
#####HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the heatmap according to the internal data on the map

**Params**

- data `Array.<Object>` - data to draw  
- data[].lat `float` - latitude for the marker  
- data[].lng `float` - longitude for the marker  
- \[data[].description\] `string` - description for the marker  

<a name="niclabs.insight.layer.HeatmapLayer.layer.clear"></a>
#####HeatmapLayer.layer.clear()
Clear the heatmap from the map

<a name="niclabs.insight.layer.HeatmapLayer.layer.filter"></a>
#####HeatmapLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Params**

- fn `niclabs.insight.layer.Layer~Filter` - filtering function  

<a name="niclabs.insight.layer.HeatmapLayer#event_layer_data"></a>
#####event: "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.layer.HeatmapLayer#event_layer_sumary"></a>
#####event: "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Object` - summarized data  

**Type**: `object`  
<a name="niclabs.insight.layer.Layer"></a>
####class: layer.Layer
**Members**

* [class: layer.Layer](#niclabs.insight.layer.Layer)
  * [new layer.Layer(dashboard, options)](#new_niclabs.insight.layer.Layer)
  * [Layer.id](#niclabs.insight.layer.Layer.id)
  * [Layer.data([obj])](#niclabs.insight.layer.Layer.data)
  * [Layer.load()](#niclabs.insight.layer.Layer.load)
  * [Layer.draw(data)](#niclabs.insight.layer.Layer.draw)
  * [Layer.filter(fn)](#niclabs.insight.layer.Layer.filter)
  * [Layer.clear()](#niclabs.insight.layer.Layer.clear)
  * [event: "layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
  * [event: "layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)

<a name="new_niclabs.insight.layer.Layer"></a>
#####new layer.Layer(dashboard, options)
Construct a layer

A layer provides a link between a data source and a visualization on the map.

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this layer belongs to  
- options `Object` - configuration options for the layer  
  - id `string` - identifier for the layer  
  - data `string` | `Array.<Object>` - uri or data array for the layer  
  - \[summary\] `Object` | `function` - summary data  

<a name="niclabs.insight.layer.Layer.id"></a>
#####Layer.id
id of the layer

**Type**: `string`  
<a name="niclabs.insight.layer.Layer.data"></a>
#####Layer.data([obj])
Set/get the data for the layer

If a new source for the data is provided, this method updates the internal
data and reloads the layer by calling [load](#niclabs.insight.layer.Layer.load)

**Params**

- \[obj\] `string` | `Array.<Object>` - optional new data source or data array for the layer  

**Returns**: `string` | `Array.<Object>` - data source for the layer if the data has not been loaded yet or object array if the
 data has been loaded  
<a name="niclabs.insight.layer.Layer.load"></a>
#####Layer.load()
Load the data from the layer and redraw

If data provided as configuration to the layer is a URL, this methods loads the data from the URL and
redraws the layer (invoking [clear](#niclabs.insight.layer.Layer.clear) and [draw](#niclabs.insight.layer.Layer.draw))
when the content is available

<a name="niclabs.insight.layer.Layer.draw"></a>
#####Layer.draw(data)
Draw the layer on the map.

This method must be overriden by the implementing layers

**Params**

- data `Array.<Object>` - data to use for drawing the layer  

<a name="niclabs.insight.layer.Layer.filter"></a>
#####Layer.filter(fn)
Filter the layer according to the provided function.

This method must be overriden by the implementing layers

**Params**

- fn `niclabs.insight.layer.Layer~Filter` - filtering function  

<a name="niclabs.insight.layer.Layer.clear"></a>
#####Layer.clear()
Clear the layer changes on the map. This method must be
overriden by implementing layers

<a name="niclabs.insight.layer.Layer#event_layer_data"></a>
#####event: "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.layer.Layer#event_layer_sumary"></a>
#####event: "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Object` - summarized data  

**Type**: `object`  
<a name="niclabs.insight.layer.MarkerLayer"></a>
####class: layer.MarkerLayer
**Extends**: `niclabs.insight.layer.Layer`  
**Members**

* [class: layer.MarkerLayer](#niclabs.insight.layer.MarkerLayer)
  * [new layer.MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer)
  * [MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
  * [MarkerLayer.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
  * [MarkerLayer.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
  * [event: "layer_data"](#niclabs.insight.layer.MarkerLayer#event_layer_data)
  * [event: "layer_sumary"](#niclabs.insight.layer.MarkerLayer#event_layer_sumary)

<a name="new_niclabs.insight.layer.MarkerLayer"></a>
#####new layer.MarkerLayer(dashboard, options)
Construct a new marker layer

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this layer belongs to  
- options `Object` - configuration options for the layer  
  - id `string` - identifier for the layer  
  - data `string` | `Array.<Object>` - uri or data array for the layer  

**Extends**: `niclabs.insight.layer.Layer`  
<a name="niclabs.insight.layer.MarkerLayer.layer.draw"></a>
#####MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the markers according to the internal data on the map

**Params**

- data `Array.<Object>` - data to draw  
- data[].lat `float` - latitude for the marker  
- data[].lng `float` - longitude for the marker  
- \[data[].description\] `string` - description for the marker  

<a name="niclabs.insight.layer.MarkerLayer.layer.clear"></a>
#####MarkerLayer.layer.clear()
Clear the markers from the map

<a name="niclabs.insight.layer.MarkerLayer.layer.filter"></a>
#####MarkerLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Params**

- fn `niclabs.insight.layer.Layer~Filter` - filtering function  

<a name="niclabs.insight.layer.MarkerLayer#event_layer_data"></a>
#####event: "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.layer.MarkerLayer#event_layer_sumary"></a>
#####event: "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Object` - summarized data  

**Type**: `object`  
<a name="niclabs.insight.map"></a>
###insight.map
Map compatibility for the insight dashboard

**Members**

* [insight.map](#niclabs.insight.map)
  * [map.heatmap](#niclabs.insight.map.heatmap)
    * [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
      * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
      * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
      * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
    * [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
      * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
      * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
      * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)
    * [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
      * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
      * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
      * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)
  * [map.marker](#niclabs.insight.map.marker)
    * [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
      * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)
    * [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
      * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)
    * [class: marker.Marker](#niclabs.insight.map.marker.Marker)
      * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
      * [Marker.map](#niclabs.insight.map.marker.Marker.map)
      * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
      * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
      * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
      * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
      * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
      * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)
    * [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
      * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)
  * [class: map.GoogleMap](#niclabs.insight.map.GoogleMap)
    * [new map.GoogleMap(options)](#new_niclabs.insight.map.GoogleMap)
    * [GoogleMap.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom)
    * [GoogleMap.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center)
    * [event: "map_element_selected"](#niclabs.insight.map.GoogleMap#event_map_element_selected)

<a name="niclabs.insight.map.heatmap"></a>
####map.heatmap
Tools for drawing heatmaps on the map

**Members**

* [map.heatmap](#niclabs.insight.map.heatmap)
  * [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
    * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
    * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
    * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)
  * [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
    * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
    * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
    * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)
  * [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
    * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
    * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
    * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)

<a name="niclabs.insight.map.heatmap.Heatmap"></a>
#####class: heatmap.Heatmap
**Members**

* [class: heatmap.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
  * [new heatmap.Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap)
  * [Heatmap.map](#niclabs.insight.map.heatmap.Heatmap.map)
  * [Heatmap.layer](#niclabs.insight.map.heatmap.Heatmap.layer)

<a name="new_niclabs.insight.map.heatmap.Heatmap"></a>
######new heatmap.Heatmap(dashboard, options)
Construct a heatmap over the map

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the heatmap  

<a name="niclabs.insight.map.heatmap.Heatmap.map"></a>
######Heatmap.map
Map view where the heatmap belongs to

**Type**: [MapView](#niclabs.insight.MapView)  
<a name="niclabs.insight.map.heatmap.Heatmap.layer"></a>
######Heatmap.layer
Layer to which the heatmap belongs to

**Type**: [Layer](#niclabs.insight.layer.Layer)  
<a name="niclabs.insight.map.heatmap.PointHeatmap"></a>
#####class: heatmap.PointHeatmap
**Members**

* [class: heatmap.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
  * [new heatmap.PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap)
  * [PointHeatmap.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
  * [type: PointHeatmap.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data)

<a name="new_niclabs.insight.map.heatmap.PointHeatmap"></a>
######new heatmap.PointHeatmap(dashboard, options)
Draw a point base heatmap over the map

In a point based heatmap, each data point is a location with an optional
weight. A heatmap point is drawn for each location with the provided configuration

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the heatmap  
  - data <code>[Array.&lt;Data&gt;](#niclabs.insight.map.heatmap.PointHeatmap.Data)</code> - array of points to draw the heatmap  
  - dissipating `boolean` - Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.  
  - gradient `Array.<string>` - The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.  
  - radius `integer` - The radius of influence for each data point, in pixels.  
  - opacity: `float` - The opacity of the heatmap, expressed as a number between 0 and 1.  

<a name="niclabs.insight.map.heatmap.PointHeatmap.self.clear"></a>
######PointHeatmap.self.clear()
Clear the map

<a name="niclabs.insight.map.heatmap.PointHeatmap.Data"></a>
######type: PointHeatmap.Data
Data point for PointHeatmap

**Params**

- lat `float` - latitude for the heatmap point  
- lng `float` - longitude for the heatmap point  
- \[weight\] `float` - weight for the heatmap point  

**Type**: `Object`  
<a name="niclabs.insight.map.heatmap.SegmentHeatmap"></a>
#####class: heatmap.SegmentHeatmap
**Members**

* [class: heatmap.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
  * [new heatmap.SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap)
  * [SegmentHeatmap.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
  * [type: SegmentHeatmap.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)

<a name="new_niclabs.insight.map.heatmap.SegmentHeatmap"></a>
######new heatmap.SegmentHeatmap(dashboard, options)
Draw a segment based heatmap over the map

In a segment based heatmap, each data segment is a set of points with an optional
weight. A heatmap segment is drawn for each location array with
the provided configuration.

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the heatmap  
  - data <code>[Array.&lt;Data&gt;](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)</code> - array of segments to draw the heatmap  
  - dissipating `boolean` - Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false.  
  - gradient `Array.<string>` - The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values.  
  - radius `integer` - The radius of influence for each data point, in pixels.  
  - opacity: `float` - The opacity of the heatmap, expressed as a number between 0 and 1.  

<a name="niclabs.insight.map.heatmap.SegmentHeatmap.self.clear"></a>
######SegmentHeatmap.self.clear()
Clear the map

<a name="niclabs.insight.map.heatmap.SegmentHeatmap.Data"></a>
######type: SegmentHeatmap.Data
Data segment for SegmentHeatmap

**Params**

- lat `Array.<float>` - latitude array for the heatmap segment  
- lng `Array.<float>` - longitude array for the heatmap segment  
- \[weight\] `float` - weight for the heatmap segment. Defaults to 1.  

**Type**: `Object`  
<a name="niclabs.insight.map.marker"></a>
####map.marker
Collection of markers available for drawing on the map

**Members**

* [map.marker](#niclabs.insight.map.marker)
  * [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
    * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)
  * [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
    * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)
  * [class: marker.Marker](#niclabs.insight.map.marker.Marker)
    * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
    * [Marker.map](#niclabs.insight.map.marker.Marker.map)
    * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
    * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
    * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
    * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
    * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
    * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)
  * [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
    * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)

<a name="niclabs.insight.map.marker.CircleMarker"></a>
#####class: marker.CircleMarker
**Extends**: `niclabs.insight.map.marker.Marker`  
**Members**

* [class: marker.CircleMarker](#niclabs.insight.map.marker.CircleMarker)
  * [new marker.CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker)

<a name="new_niclabs.insight.map.marker.CircleMarker"></a>
######new marker.CircleMarker(dashboard, options)
Constructor for circle markers

Circle markers are drawn in the map as circular waypoints

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the layer  
  - layer `string` - identifier for the layer that this marker belongs to  

**Extends**: `niclabs.insight.map.marker.Marker`  
<a name="niclabs.insight.map.marker.ImageMarker"></a>
#####class: marker.ImageMarker
**Extends**: `niclabs.insight.map.marker.Marker`  
**Members**

* [class: marker.ImageMarker](#niclabs.insight.map.marker.ImageMarker)
  * [new marker.ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker)

<a name="new_niclabs.insight.map.marker.ImageMarker"></a>
######new marker.ImageMarker(dashboard, options)
Constructor for an image marker

An image marker includes an image for each waypoint

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the layer  
  - layer `string` - identifier for the layer that this marker belongs to  

**Extends**: `niclabs.insight.map.marker.Marker`  
<a name="niclabs.insight.map.marker.Marker"></a>
#####class: marker.Marker
**Members**

* [class: marker.Marker](#niclabs.insight.map.marker.Marker)
  * [new marker.Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker)
  * [Marker.map](#niclabs.insight.map.marker.Marker.map)
  * [Marker.layer](#niclabs.insight.map.marker.Marker.layer)
  * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
  * [Marker.marker()](#niclabs.insight.map.marker.Marker.marker)
  * [Marker.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
  * [Marker.clear()](#niclabs.insight.map.marker.Marker.clear)
  * [Marker.visible([visible])](#niclabs.insight.map.marker.Marker.visible)

<a name="new_niclabs.insight.map.marker.Marker"></a>
######new marker.Marker(dashboard, options)
Construct a new marker

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the layer  
  - layer `string` - identifier for the layer that this marker belongs to  

<a name="niclabs.insight.map.marker.Marker.map"></a>
######Marker.map
Map view where the map belongs to

**Type**: [MapView](#niclabs.insight.MapView)  
<a name="niclabs.insight.map.marker.Marker.layer"></a>
######Marker.layer
Layer to which the marker belongs to

**Type**: [Layer](#niclabs.insight.layer.Layer)  
<a name="niclabs.insight.map.marker.Marker.clear"></a>
######Marker.clear()
Clear the heatmap from the map

<a name="niclabs.insight.map.marker.Marker.marker"></a>
######Marker.marker()
Return the internal marker object associated with this Marker

**Returns**: `google.maps.Marker` - internal marker  
<a name="niclabs.insight.map.marker.Marker.clickable"></a>
######Marker.clickable([activate])
Get/activate clickable status for the marker

When clicked the marker will trigger a `niclabs.insight.MapView#map_element_selected` event
with the particular data for the marker

**Params**

- \[activate=true\] `boolean` - true to make clickable  

<a name="niclabs.insight.map.marker.Marker.clear"></a>
######Marker.clear()
Clear the marker from the map

<a name="niclabs.insight.map.marker.Marker.visible"></a>
######Marker.visible([visible])
Set/get the visibility for the marker

**Params**

- \[visible\] `boolean` - new value for the visibility of the marker  

**Returns**: `boolean` - true if the marker is visible  
<a name="niclabs.insight.map.marker.SimpleMarker"></a>
#####class: marker.SimpleMarker
**Extends**: `niclabs.insight.map.marker.Marker`  
**Members**

* [class: marker.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker)
  * [new marker.SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker)

<a name="new_niclabs.insight.map.marker.SimpleMarker"></a>
######new marker.SimpleMarker(dashboard, options)
Constructor for simple markers

Simple markers are shown in the map as basic waypoints, with no style options

**Params**

- dashboard <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard that this marker belongs to  
- options `Object` - configuration options for the layer  
  - layer `string` - identifier for the layer that this marker belongs to  

**Extends**: `niclabs.insight.map.marker.Marker`  
<a name="niclabs.insight.map.GoogleMap"></a>
####class: map.GoogleMap
**Extends**: `niclabs.insight.MapView`  
**Members**

* [class: map.GoogleMap](#niclabs.insight.map.GoogleMap)
  * [new map.GoogleMap(options)](#new_niclabs.insight.map.GoogleMap)
  * [GoogleMap.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom)
  * [GoogleMap.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center)
  * [event: "map_element_selected"](#niclabs.insight.map.GoogleMap#event_map_element_selected)

<a name="new_niclabs.insight.map.GoogleMap"></a>
#####new map.GoogleMap(options)
Constructor of GoogleMap

**Params**

- options `Object` - configuration options for the map  
  - \[zoom=12\] `integer` - starting zoom level of the map  
  - \[lat=0\] `float` - latitude for the map center  
  - \[lng=0\] `float` - lng for the map center  

**Extends**: `niclabs.insight.MapView`  
<a name="niclabs.insight.map.GoogleMap.map.zoom"></a>
#####GoogleMap.map.zoom([zoom])
Set/get the zoom level for the map

Overrides the functionality of niclabs.insight.MapView.zoom() by modifying
the underlying google map zoom level as well

**Params**

- \[zoom\] `int` - zoom  

**Returns**: `int` - zoom level of the map  
<a name="niclabs.insight.map.GoogleMap.map.center"></a>
#####GoogleMap.map.center([lat], [lng])
Set/get the map center.

Overrides the functionality of [center](#niclabs.insight.MapView.center) by modifying
the underlying google map center as well

**Params**

- \[lat\] `float` - latitude for the map center  
- \[lng\] `float` - longitude for the map center  

**Returns**: [Coordinates](#niclabs.insight.MapView.Coordinates) - coordinates for the map center  
<a name="niclabs.insight.map.GoogleMap#event_map_element_selected"></a>
#####event: "map_element_selected"
Event triggered to notify the dashboard that an element of the map has been pressed

**Properties**

- layer `string` - id for the layer to which the data belongs to  
- lat `float` - latitude for the marker  
- lng `float` - latitude for the marker  

**Type**: `object`  
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
  * [Dashboard.info([obj])](#niclabs.insight.Dashboard.info)
  * [Dashboard.map([obj])](#niclabs.insight.Dashboard.map)
  * [Dashboard.layer(obj, [activate])](#niclabs.insight.Dashboard.layer)
  * [Dashboard.data([obj])](#niclabs.insight.Dashboard.data)
  * [Dashboard.active([id])](#niclabs.insight.Dashboard.active)
  * [Dashboard.filter(filter)](#niclabs.insight.Dashboard.filter)
  * [Dashboard.clear()](#niclabs.insight.Dashboard.clear)
  * [event: "active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)

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
<a name="niclabs.insight.Dashboard.info"></a>
####Dashboard.info([obj])
Assign/get the information view for the dashboard

**Params**

- \[obj\] `Object` | <code>[InfoView](#niclabs.insight.InfoView)</code> - configuration for the information view or information view object  
  - handler `String` - name of the handler to construct the info view  

**Returns**: [InfoView](#niclabs.insight.InfoView) - the dashboard information view  
<a name="niclabs.insight.Dashboard.map"></a>
####Dashboard.map([obj])
Assign/get the map view for the dashboard

**Params**

- \[obj\] `Object` | <code>[MapView](#niclabs.insight.MapView)</code> - configuration for the map view or map view object  
  - handler `String` - name of the handler to construct the map view  

**Returns**: [MapView](#niclabs.insight.MapView) - the dashboard information view  
<a name="niclabs.insight.Dashboard.layer"></a>
####Dashboard.layer(obj, [activate])
Add/get a [Layer](#niclabs.insight.layer.Layer) for the dashboard

A layer acts as a link between a source of data and a visualization on the map

- If a number or string is provided as value for obj, the layer with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new layer
is created using the handler and the layer is added to the list of
layers of the dashboard
- If an object is provided without handler, it is assumed to be a Layer object and added to the
layer list as is.

**Params**

- obj `string` | `number` | `Object` | <code>[Layer](#niclabs.insight.layer.Layer)</code> - layer id to get or configuration options for the new layer  
- \[activate=false\] `boolean` - if true, set the layer as the active layer of the dashboard  

**Returns**: `niclabs.insight.info.Layer` - - layer for the provided id  
<a name="niclabs.insight.Dashboard.data"></a>
####Dashboard.data([obj])
Set/get the data for the active layer

If a new source for the data is provided, this method updates the internal
data for the layer and reloads the layer by calling [load](#niclabs.insight.layer.Layer.load)

**Params**

- \[obj\] `string` | `Array.<Object>` - optional new data source or data array for the layer  

**Returns**: `string` | `Array.<Object>` - data source for the layer if the data has not been loaded yet or object array if the
 data has been loaded  
<a name="niclabs.insight.Dashboard.active"></a>
####Dashboard.active([id])
Set/get the active layer

**Params**

- \[id\] `string` | `number` - id for the layer to set as the active layer  

**Returns**: `string` - id for the active layer  
<a name="niclabs.insight.Dashboard.filter"></a>
####Dashboard.filter(filter)
Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
of the filter for further customizations

**Params**

- filter `Object` | `number` - configuration for the filter or filter index  

**Returns**: `jQuery` - reference to the added element for further customization  
**Example**  
```javascript
dashboard.filter({
 description: 'Landmark', // the empty string is used if not provided
 options: [
     {name: 'Not Eiffel Tower', filter: function(data) { return data.landmark.indexOf("Eiffel") < 0; }},
     {name: 'Not Champ de Mars', filter: function(data) { return data.landmark.indexOf("Mars") < 0; }},
 ]
});
```

<a name="niclabs.insight.Dashboard.clear"></a>
####Dashboard.clear()
Clear the map by calling the [clear](#niclabs.insight.layer.Layer.clear) method
on the active layer

<a name="niclabs.insight.Dashboard#event_active_layer_data"></a>
####event: "active_layer_data"
Event triggered when an update to the active layer data (filtering/update) has ocurred

**Properties**

- id `string` - id for the layer to which the data belongs to  
- data `Array.<Object>` - new data array  

**Type**: `object`  
<a name="niclabs.insight.FilterBar"></a>
###class: insight.FilterBar
**Members**

* [class: insight.FilterBar](#niclabs.insight.FilterBar)
  * [new insight.FilterBar()](#new_niclabs.insight.FilterBar)
  * [FilterBar.element](#niclabs.insight.FilterBar.element)
  * [FilterBar.$](#niclabs.insight.FilterBar.$)
  * [FilterBar.filter(filter)](#niclabs.insight.FilterBar.filter)
  * [callback: FilterBar~filter](#niclabs.insight.FilterBar..filter)
  * [event: "filter_changed"](#niclabs.insight.FilterBar#event_filter_changed)

<a name="new_niclabs.insight.FilterBar"></a>
####new insight.FilterBar()
Constructs a filter bar for the dashboard

<a name="niclabs.insight.FilterBar.element"></a>
####FilterBar.element
HTML DOM element for the filter bar container

**Type**: `Element`  
<a name="niclabs.insight.FilterBar.$"></a>
####FilterBar.$
jQuery object for the filter bar container

**Type**: `jQuery`  
<a name="niclabs.insight.FilterBar.filter"></a>
####FilterBar.filter(filter)
Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
of the filter for further customizations

**Params**

- filter `Object` | `number` - configuration for the filter or filter index  

**Returns**: `jQuery` - reference to the added element for further customization  
<a name="niclabs.insight.FilterBar..filter"></a>
####callback: FilterBar~filter
Function to act as a filter for the data

The function returns false if the data must be removed from the visualization
or true if the data must be kept

**Params**

- data `Object` - data element to evaluate  

**Scope**: inner typedef of [FilterBar](#niclabs.insight.FilterBar)  
**Type**: `function`  
**Returns**: `boolean` - true if the data passes the filter  
<a name="niclabs.insight.FilterBar#event_filter_changed"></a>
####event: "filter_changed"
Event triggered when a filter has changed

It will pass as parameter the filtering function to apply to
the layers

**Type**: [filter](#niclabs.insight.FilterBar..filter)  
<a name="niclabs.insight.MapView"></a>
###class: insight.MapView
**Members**

* [class: insight.MapView](#niclabs.insight.MapView)
  * [new insight.MapView(options)](#new_niclabs.insight.MapView)
  * [MapView.element](#niclabs.insight.MapView.element)
  * [MapView.$](#niclabs.insight.MapView.$)
  * [MapView.center([lat], [lng])](#niclabs.insight.MapView.center)
  * [MapView.lat()](#niclabs.insight.MapView.lat)
  * [MapView.lng()](#niclabs.insight.MapView.lng)
  * [MapView.zoom([zoom])](#niclabs.insight.MapView.zoom)
  * [type: MapView.Coordinates](#niclabs.insight.MapView.Coordinates)
  * [event: "map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)

<a name="new_niclabs.insight.MapView"></a>
####new insight.MapView(options)
Constructs a new map

**Params**

- options `Object` - configuration options for the map  
  - \[zoom=12\] `integer` - starting zoom level of the map  
  - \[lat=0\] `float` - latitude for the map center  
  - \[lng=0\] `float` - lng for the map center  

<a name="niclabs.insight.MapView.element"></a>
####MapView.element
HTML DOM element for the map view

**Type**: `Element`  
<a name="niclabs.insight.MapView.$"></a>
####MapView.$
jQuery object for map view

**Type**: `jQuery`  
<a name="niclabs.insight.MapView.center"></a>
####MapView.center([lat], [lng])
Set/get the map center.
Overriding implementations should modify this method so the
map reflects the new center.

**Params**

- \[lat\] `float` - latitude for the map center  
- \[lng\] `float` - longitude for the map center  

**Returns**: [Coordinates](#niclabs.insight.MapView.Coordinates) - coordinates for the map center  
<a name="niclabs.insight.MapView.lat"></a>
####MapView.lat()
Get the latitude for the map center

**Returns**: `float` - latitude for the map center  
<a name="niclabs.insight.MapView.lng"></a>
####MapView.lng()
Get the longitude for the map center

**Returns**: `float` - longitude for the map center  
<a name="niclabs.insight.MapView.zoom"></a>
####MapView.zoom([zoom])
Set/get the map zoom level.
Overriding implementations should modify this method so the
map reflects the new zoom.

**Params**

- \[zoom\] `int` - zoom  

**Returns**: `int` - zoom level of the map  
<a name="niclabs.insight.MapView.Coordinates"></a>
####type: MapView.Coordinates
Object to represent geographic coordinates

**Properties**

- lat `float` - latitude for the map center  
- lng `float` - longitude for the map center  

**Type**: `Object`  
<a name="niclabs.insight.MapView#event_map_element_selected"></a>
####event: "map_element_selected"
Event triggered to notify the dashboard that an element of the map has been pressed

**Properties**

- layer `string` - id for the layer to which the data belongs to  
- lat `float` - latitude for the marker  
- lng `float` - latitude for the marker  

**Type**: `object`  
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
