<a name="niclabs"></a>
## niclabs : <code>object</code>
[NIC Chile Research Labs](http://niclabs.cl/) is the Internet Laboratory of the
[Faculty of Physical and Mathematical Sciences of the University of Chile (FCFM)](http://www.fcfm.uchile.cl/),
founded by [NIC Chile](http://www.nic.cl) and host of [INRIA Chile Internet Project](http://www.inria.cl/?page_id=23&lang=en).

Our main research areas are: Internet protocols (layer 3-4), DNS, Internet QoS, Internet QoE, and computer networks.

We are based in Santiago, Chile, in front of the FCFM, Universidad de Chile.

**Kind**: global namespace  

* [niclabs](#niclabs) : <code>object</code>
  * [.insight](#niclabs.insight) : <code>object</code>
    * _static_
      * [.Dashboard](#niclabs.insight.Dashboard)
        * [new Dashboard(options)](#new_niclabs.insight.Dashboard_new)
        * _instance_
          * ["active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)
        * _static_
          * [.element](#niclabs.insight.Dashboard.element) : <code>Element</code>
          * [.$](#niclabs.insight.Dashboard.$) : <code>jQuery</code>
          * [.config(name)](#niclabs.insight.Dashboard.config) ⇒ <code>\*</code>
          * [.info([obj])](#niclabs.insight.Dashboard.info) ⇒ <code>[InfoView](#niclabs.insight.InfoView)</code>
          * [.map([obj])](#niclabs.insight.Dashboard.map) ⇒ <code>[MapView](#niclabs.insight.MapView)</code>
          * [.layer(obj, [activate])](#niclabs.insight.Dashboard.layer) ⇒ <code>niclabs.insight.info.Layer</code>
          * [.data([obj])](#niclabs.insight.Dashboard.data) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
          * [.active([id])](#niclabs.insight.Dashboard.active) ⇒ <code>string</code>
          * [.filter(filter)](#niclabs.insight.Dashboard.filter) ⇒ <code>jQuery</code>
          * [.clear()](#niclabs.insight.Dashboard.clear)
      * [.ElementList](#niclabs.insight.ElementList) ⇐ <code>[Element](#niclabs.insight.Element)</code>
        * [new ElementList(dashboard)](#new_niclabs.insight.ElementList_new)
        * _static_
          * [.self.element(obj)](#niclabs.insight.ElementList.self.element) ⇒ <code>[ElementList](#niclabs.insight.ElementList)</code>
          * [.self.each(iterator)](#niclabs.insight.ElementList.self.each)
          * [.self.remove(id)](#niclabs.insight.ElementList.self.remove) ⇒ <code>[Element](#niclabs.insight.Element)</code>
        * _inner_
          * [~iterator](#niclabs.insight.ElementList..iterator) : <code>function</code>
      * [.Element](#niclabs.insight.Element)
        * [new Element(options)](#new_niclabs.insight.Element_new)
        * [.id](#niclabs.insight.Element.id) : <code>string</code>
      * [.Filters](#niclabs.insight.Filters) ⇐ <code>[View](#niclabs.insight.View)</code>
        * [new Filters(dashboard, options)](#new_niclabs.insight.Filters_new)
        * _instance_
          * ["filter_selected"](#niclabs.insight.Filters#event_filter_selected)
          * ["filter_changed"](#niclabs.insight.Filters#event_filter_changed)
        * _static_
          * [.view.filter(obj)](#niclabs.insight.Filters.view.filter) ⇒ <code>jQuery</code>
        * _inner_
          * [~filter](#niclabs.insight.Filters..filter) ⇒ <code>boolean</code>
      * [.InfoView](#niclabs.insight.InfoView) ⇐ <code>[View](#niclabs.insight.View)</code>
        * [new InfoView(dashboard, options)](#new_niclabs.insight.InfoView_new)
        * [.element.block(obj)](#niclabs.insight.InfoView.element.block) ⇒ <code>[Block](#niclabs.insight.info.Block)</code>
      * [.MapView](#niclabs.insight.MapView)
        * [new MapView(options)](#new_niclabs.insight.MapView_new)
        * _instance_
          * ["map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
        * _static_
          * [.element](#niclabs.insight.MapView.element) : <code>Element</code>
          * [.$](#niclabs.insight.MapView.$) : <code>jQuery</code>
          * [.lat](#niclabs.insight.MapView.lat) : <code>float</code>
          * [.lng](#niclabs.insight.MapView.lng) : <code>float</code>
          * [.width](#niclabs.insight.MapView.width) : <code>float</code>
          * [.height](#niclabs.insight.MapView.height) : <code>float</code>
          * [.center([lat], [lng])](#niclabs.insight.MapView.center) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>
          * [.zoom([zoom])](#niclabs.insight.MapView.zoom) ⇒ <code>int</code>
      * [.View](#niclabs.insight.View) ⇐ <code>[Element](#niclabs.insight.Element)</code>
        * [new View(options)](#new_niclabs.insight.View_new)
        * [.$](#niclabs.insight.View.$) : <code>jQuery</code>
        * [.element](#niclabs.insight.View.element) : <code>jQuery</code>
        * [.self.append(element)](#niclabs.insight.View.self.append) ⇒ <code>[View](#niclabs.insight.View)</code>
      * [.Color](#niclabs.insight.Color)
        * [.rgbToHsv(r, g, b)](#niclabs.insight.Color.rgbToHsv) ⇒ <code>Array.&lt;Number&gt;</code>
        * [.hsvToRgb(h, s, v)](#niclabs.insight.Color.hsvToRgb) ⇒ <code>Array.&lt;Number&gt;</code>
        * [.rgbToHex(rgb)](#niclabs.insight.Color.rgbToHex) ⇒ <code>string</code>
        * [.hexToRgb(hex)](#niclabs.insight.Color.hexToRgb) ⇒ <code>Array.&lt;integer&gt;</code>
      * [.Interpolation](#niclabs.insight.Interpolation)
        * [.interpolate(value, maximum, start_point, end_point)](#niclabs.insight.Interpolation.interpolate) ⇒ <code>float</code>
        * [.interpolate3d(value, maximum, s, e)](#niclabs.insight.Interpolation.interpolate3d) ⇒ <code>Array.&lt;float&gt;</code>
        * [.interpolateRgb(value, maximum, start_rgb, e)](#niclabs.insight.Interpolation.interpolateRgb) ⇒ <code>Array.&lt;integer&gt;</code>
      * [.event](#niclabs.insight.event) : <code>object</code>
        * _static_
          * [.on(event, listener)](#niclabs.insight.event.on) ⇒ <code>number</code>
          * [.off(event, listener)](#niclabs.insight.event.off) ⇒ <code>boolean</code>
          * [.trigger(event, [data])](#niclabs.insight.event.trigger)
        * _inner_
          * [~listener](#niclabs.insight.event..listener) : <code>function</code>
      * [.filter](#niclabs.insight.filter) : <code>object</code>
        * [.Filter](#niclabs.insight.filter.Filter) ⇐ <code>[View](#niclabs.insight.View)</code>
          * [new Filter(dashboard, options)](#new_niclabs.insight.filter.Filter_new)
          * *[.view.apply(element)](#niclabs.insight.filter.Filter.view.apply) ⇒ <code>boolean</code>*
        * [.GoogleGeocodingFilter](#niclabs.insight.filter.GoogleGeocodingFilter) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
          * [new GoogleGeocodingFilter(dashboard, options)](#new_niclabs.insight.filter.GoogleGeocodingFilter_new)
        * [.LayerSelector](#niclabs.insight.filter.LayerSelector) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
          * [new LayerSelector(dashboard, options)](#new_niclabs.insight.filter.LayerSelector_new)
          * [.view.add(id, name)](#niclabs.insight.filter.LayerSelector.view.add)
        * [.SelectionFilter](#niclabs.insight.filter.SelectionFilter) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
          * [new SelectionFilter(dashboard, options)](#new_niclabs.insight.filter.SelectionFilter_new)
          * *[.view.apply(element)](#niclabs.insight.filter.SelectionFilter.view.apply) ⇒ <code>boolean</code>*
          * [.Option](#niclabs.insight.filter.SelectionFilter.Option) : <code>Object</code>
      * [.info](#niclabs.insight.info) : <code>object</code>
        * [.Block](#niclabs.insight.info.Block)
          * [new Block(dashboard, options)](#new_niclabs.insight.info.Block_new)
          * [.id](#niclabs.insight.info.Block.id) : <code>string</code>
          * [.element](#niclabs.insight.info.Block.element) : <code>Element</code>
          * [.$](#niclabs.insight.info.Block.$) : <code>jQuery</code>
          * [.layer](#niclabs.insight.info.Block.layer) : <code>jQuery</code>
          * [.content](#niclabs.insight.info.Block.content) : <code>jQuery</code>
          * [.data](#niclabs.insight.info.Block.data) ⇒ <code>Object</code>
          * [.remove()](#niclabs.insight.info.Block.remove)
          * [.__data__([data], value)](#niclabs.insight.info.Block.__data__)
          * *[.refresh([data])](#niclabs.insight.info.Block.refresh)*
        * [.ChartistBlock](#niclabs.insight.info.ChartistBlock) ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
          * [new ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock_new)
          * [.Chartist](#niclabs.insight.info.ChartistBlock.Chartist) : <code>Object</code>
        * [.SummaryBlock](#niclabs.insight.info.SummaryBlock) ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
          * [new SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock_new)
      * [.layer](#niclabs.insight.layer) : <code>object</code>
        * [.DiagramLayer](#niclabs.insight.layer.DiagramLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * [new DiagramLayer(dashboard, options)](#new_niclabs.insight.layer.DiagramLayer_new)
          * _instance_
            * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
            * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
          * _static_
            * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.DiagramLayer.layer.draw)
            * [.layer.clear()](#niclabs.insight.layer.DiagramLayer.layer.clear)
            * [.layer.filter(fn)](#niclabs.insight.layer.DiagramLayer.layer.filter)
        * [.GridLayer](#niclabs.insight.layer.GridLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * [new GridLayer(dashboard, options)](#new_niclabs.insight.layer.GridLayer_new)
          * _instance_
            * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
            * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
          * _static_
            * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.GridLayer.layer.draw)
            * [.layer.clear()](#niclabs.insight.layer.GridLayer.layer.clear)
            * [.layer.filter(fn)](#niclabs.insight.layer.GridLayer.layer.filter)
        * [.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * [new HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer_new)
          * _instance_
            * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
            * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
          * _static_
            * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
            * [.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
            * [.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
        * [.Layer](#niclabs.insight.layer.Layer)
          * [new Layer(dashboard, options)](#new_niclabs.insight.layer.Layer_new)
          * _instance_
            * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
            * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
          * _static_
            * [.id](#niclabs.insight.layer.Layer.id) : <code>string</code>
            * [.name](#niclabs.insight.layer.Layer.name) : <code>string</code>
            * [.data([obj])](#niclabs.insight.layer.Layer.data) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
            * [.load()](#niclabs.insight.layer.Layer.load)
            * *[.draw(data)](#niclabs.insight.layer.Layer.draw)*
            * *[.filter(fn)](#niclabs.insight.layer.Layer.filter)*
            * *[.clear()](#niclabs.insight.layer.Layer.clear)*
        * [.MarkerLayer](#niclabs.insight.layer.MarkerLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * [new MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer_new)
          * _instance_
            * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
            * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
          * _static_
            * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
            * [.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
            * [.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
      * [.map](#niclabs.insight.map) : <code>object</code>
        * [.GoogleMap](#niclabs.insight.map.GoogleMap) ⇐ <code>[MapView](#niclabs.insight.MapView)</code>
          * [new GoogleMap(options)](#new_niclabs.insight.map.GoogleMap_new)
          * _instance_
            * ["map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
          * _static_
            * [.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom) ⇒ <code>int</code>
            * [.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>
        * [.GoogleMercator](#niclabs.insight.map.GoogleMercator)
        * [.diagram](#niclabs.insight.map.diagram) : <code>object</code>
          * [.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
            * [new DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram_new)
            * [.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
            * [.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data) : <code>Object</code>
          * [.Diagram](#niclabs.insight.map.diagram.Diagram)
            * [new Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram_new)
            * [.map](#niclabs.insight.map.diagram.Diagram.map) : <code>[MapView](#niclabs.insight.MapView)</code>
            * [.layer](#niclabs.insight.map.diagram.Diagram.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
            * [.clear()](#niclabs.insight.map.diagram.Diagram.clear)
            * [.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)
          * [.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
            * [new VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram_new)
            * [.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
            * [.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data) : <code>Object</code>
          * [.createLines(Positions, Verts)](#niclabs.insight.map.diagram.createLines)
          * [.SplitSegment(p0, p1)](#niclabs.insight.map.diagram.SplitSegment)
          * [.transformMapPositions(data)](#niclabs.insight.map.diagram.transformMapPositions)
        * [.graph](#niclabs.insight.map.graph) : <code>object</code>
          * [.Edge](#niclabs.insight.map.graph.Edge) ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
            * [new Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge_new)
          * [.GraphElement](#niclabs.insight.map.graph.GraphElement)
            * [new GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement_new)
            * [.map](#niclabs.insight.map.graph.GraphElement.map) : <code>[MapView](#niclabs.insight.MapView)</code>
            * [.layer](#niclabs.insight.map.graph.GraphElement.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
            * *[.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement) ⇒*
            * [.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
            * [.clear()](#niclabs.insight.map.graph.GraphElement.clear)
            * [.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible) ⇒ <code>boolean</code>
          * [.Node](#niclabs.insight.map.graph.Node) ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
            * [new Node(dashboard, options)](#new_niclabs.insight.map.graph.Node_new)
        * [.grid](#niclabs.insight.map.grid) : <code>object</code>
          * [.Grid](#niclabs.insight.map.grid.Grid)
            * [new Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid_new)
            * _static_
              * [.map](#niclabs.insight.map.grid.Grid.map) : <code>[MapView](#niclabs.insight.MapView)</code>
              * [.layer](#niclabs.insight.map.grid.Grid.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
              * [.refresh](#niclabs.insight.map.grid.Grid.refresh)
              * *[.tile()](#niclabs.insight.map.grid.Grid.tile) ⇒ <code>[Tile](#niclabs.insight.map.grid.Tile)</code>*
              * [.clear()](#niclabs.insight.map.grid.Grid.clear)
              * [.Data](#niclabs.insight.map.grid.Grid.Data) : <code>Object</code>
            * _inner_
              * [~fill](#niclabs.insight.map.grid.Grid..fill) : <code>function</code>
          * [.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
            * [new HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile_new)
            * [.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
            * [.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
            * [.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
          * [.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
            * [new HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid_new)
          * [.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
            * [new SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid_new)
          * [.SquareTile](#niclabs.insight.map.grid.SquareTile)
            * [new SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile_new)
            * [.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
            * [.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
            * [.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
          * [.Tile](#niclabs.insight.map.grid.Tile)
            * [new Tile()](#new_niclabs.insight.map.grid.Tile_new)
            * *[.origin(i, j)](#niclabs.insight.map.grid.Tile.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>*
            * *[.query(coord)](#niclabs.insight.map.grid.Tile.query) ⇒ <code>Array.&lt;integer&gt;</code>*
            * *[.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>*
            * *[.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw) ⇒ <code>object</code>*
        * [.heatmap](#niclabs.insight.map.heatmap) : <code>object</code>
          * [.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
            * [new Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap_new)
            * [.map](#niclabs.insight.map.heatmap.Heatmap.map) : <code>[MapView](#niclabs.insight.MapView)</code>
            * [.layer](#niclabs.insight.map.heatmap.Heatmap.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
            * [.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)
          * [.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
            * [new PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap_new)
            * [.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
            * [.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data) : <code>Object</code>
          * [.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
            * [new SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap_new)
            * [.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
            * [.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data) : <code>Object</code>
        * [.marker](#niclabs.insight.map.marker) : <code>object</code>
          * [.CircleMarker](#niclabs.insight.map.marker.CircleMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
            * [new CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker_new)
          * [.ImageMarker](#niclabs.insight.map.marker.ImageMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
            * [new ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker_new)
          * [.Marker](#niclabs.insight.map.marker.Marker)
            * [new Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker_new)
            * [.map](#niclabs.insight.map.marker.Marker.map) : <code>[MapView](#niclabs.insight.MapView)</code>
            * [.layer](#niclabs.insight.map.marker.Marker.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
            * *[.marker()](#niclabs.insight.map.marker.Marker.marker) ⇒ <code>google.maps.Marker</code>*
            * [.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
            * [.clear()](#niclabs.insight.map.marker.Marker.clear)
            * [.visible([visible])](#niclabs.insight.map.marker.Marker.visible) ⇒ <code>boolean</code>
          * [.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
            * [new SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker_new)
        * [.LatLng](#niclabs.insight.map.LatLng) : <code>Object</code>
        * [.Point](#niclabs.insight.map.Point) : <code>Object</code>
      * [.quadtree](#niclabs.insight.quadtree) : <code>object</code>
        * [.Bounds](#niclabs.insight.quadtree.Bounds)
          * [new Bounds(min, max)](#new_niclabs.insight.quadtree.Bounds_new)
          * [.center](#niclabs.insight.quadtree.Bounds.center) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
          * [.min](#niclabs.insight.quadtree.Bounds.min) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
          * [.max](#niclabs.insight.quadtree.Bounds.max) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
          * [.contains(point)](#niclabs.insight.quadtree.Bounds.contains) ⇒ <code>boolean</code>
          * [.intersects(box)](#niclabs.insight.quadtree.Bounds.intersects) ⇒ <code>boolean</code>
        * [.PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)
          * [new PointQuadTree(bounds, [capacity], [depth])](#new_niclabs.insight.quadtree.PointQuadTree_new)
          * [.capacity](#niclabs.insight.quadtree.PointQuadTree.capacity) : <code>integer</code>
          * [.bounds](#niclabs.insight.quadtree.PointQuadTree.bounds) : <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>
          * [.insert(point)](#niclabs.insight.quadtree.PointQuadTree.insert) ⇒ <code>boolean</code>
          * [.query(range)](#niclabs.insight.quadtree.PointQuadTree.query) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.quadtree.Point)</code>
        * [.Point](#niclabs.insight.quadtree.Point) : <code>Object</code>
      * [.handler(name, [kind], [handler])](#niclabs.insight.handler) ⇒ <code>[handler](#niclabs.insight..handler)</code>
      * [.dashboard([options])](#niclabs.insight.dashboard) ⇒ <code>[Dashboard](#niclabs.insight.Dashboard)</code>
      * [.info([obj])](#niclabs.insight.info(2)) ⇒ <code>[InfoView](#niclabs.insight.InfoView)</code>
      * [.layer(obj, [activate])](#niclabs.insight.layer(2)) ⇒ <code>niclabs.insight.info.Layer</code>
      * [.map([obj])](#niclabs.insight.map(2)) ⇒ <code>[MapView](#niclabs.insight.MapView)</code>
    * _inner_
      * [~handler](#niclabs.insight..handler) : <code>function</code>

<a name="niclabs.insight"></a>
### niclabs.insight : <code>object</code>
Insight is a generic web dashboard for smart city projects.

It allows to combine different chart and visualization tools to better
understand what is going on in the city

**Kind**: static namespace of <code>[niclabs](#niclabs)</code>  

* [.insight](#niclabs.insight) : <code>object</code>
  * _static_
    * [.Dashboard](#niclabs.insight.Dashboard)
      * [new Dashboard(options)](#new_niclabs.insight.Dashboard_new)
      * _instance_
        * ["active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)
      * _static_
        * [.element](#niclabs.insight.Dashboard.element) : <code>Element</code>
        * [.$](#niclabs.insight.Dashboard.$) : <code>jQuery</code>
        * [.config(name)](#niclabs.insight.Dashboard.config) ⇒ <code>\*</code>
        * [.info([obj])](#niclabs.insight.Dashboard.info) ⇒ <code>[InfoView](#niclabs.insight.InfoView)</code>
        * [.map([obj])](#niclabs.insight.Dashboard.map) ⇒ <code>[MapView](#niclabs.insight.MapView)</code>
        * [.layer(obj, [activate])](#niclabs.insight.Dashboard.layer) ⇒ <code>niclabs.insight.info.Layer</code>
        * [.data([obj])](#niclabs.insight.Dashboard.data) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
        * [.active([id])](#niclabs.insight.Dashboard.active) ⇒ <code>string</code>
        * [.filter(filter)](#niclabs.insight.Dashboard.filter) ⇒ <code>jQuery</code>
        * [.clear()](#niclabs.insight.Dashboard.clear)
    * [.ElementList](#niclabs.insight.ElementList) ⇐ <code>[Element](#niclabs.insight.Element)</code>
      * [new ElementList(dashboard)](#new_niclabs.insight.ElementList_new)
      * _static_
        * [.self.element(obj)](#niclabs.insight.ElementList.self.element) ⇒ <code>[ElementList](#niclabs.insight.ElementList)</code>
        * [.self.each(iterator)](#niclabs.insight.ElementList.self.each)
        * [.self.remove(id)](#niclabs.insight.ElementList.self.remove) ⇒ <code>[Element](#niclabs.insight.Element)</code>
      * _inner_
        * [~iterator](#niclabs.insight.ElementList..iterator) : <code>function</code>
    * [.Element](#niclabs.insight.Element)
      * [new Element(options)](#new_niclabs.insight.Element_new)
      * [.id](#niclabs.insight.Element.id) : <code>string</code>
    * [.Filters](#niclabs.insight.Filters) ⇐ <code>[View](#niclabs.insight.View)</code>
      * [new Filters(dashboard, options)](#new_niclabs.insight.Filters_new)
      * _instance_
        * ["filter_selected"](#niclabs.insight.Filters#event_filter_selected)
        * ["filter_changed"](#niclabs.insight.Filters#event_filter_changed)
      * _static_
        * [.view.filter(obj)](#niclabs.insight.Filters.view.filter) ⇒ <code>jQuery</code>
      * _inner_
        * [~filter](#niclabs.insight.Filters..filter) ⇒ <code>boolean</code>
    * [.InfoView](#niclabs.insight.InfoView) ⇐ <code>[View](#niclabs.insight.View)</code>
      * [new InfoView(dashboard, options)](#new_niclabs.insight.InfoView_new)
      * [.element.block(obj)](#niclabs.insight.InfoView.element.block) ⇒ <code>[Block](#niclabs.insight.info.Block)</code>
    * [.MapView](#niclabs.insight.MapView)
      * [new MapView(options)](#new_niclabs.insight.MapView_new)
      * _instance_
        * ["map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
      * _static_
        * [.element](#niclabs.insight.MapView.element) : <code>Element</code>
        * [.$](#niclabs.insight.MapView.$) : <code>jQuery</code>
        * [.lat](#niclabs.insight.MapView.lat) : <code>float</code>
        * [.lng](#niclabs.insight.MapView.lng) : <code>float</code>
        * [.width](#niclabs.insight.MapView.width) : <code>float</code>
        * [.height](#niclabs.insight.MapView.height) : <code>float</code>
        * [.center([lat], [lng])](#niclabs.insight.MapView.center) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>
        * [.zoom([zoom])](#niclabs.insight.MapView.zoom) ⇒ <code>int</code>
    * [.View](#niclabs.insight.View) ⇐ <code>[Element](#niclabs.insight.Element)</code>
      * [new View(options)](#new_niclabs.insight.View_new)
      * [.$](#niclabs.insight.View.$) : <code>jQuery</code>
      * [.element](#niclabs.insight.View.element) : <code>jQuery</code>
      * [.self.append(element)](#niclabs.insight.View.self.append) ⇒ <code>[View](#niclabs.insight.View)</code>
    * [.Color](#niclabs.insight.Color)
      * [.rgbToHsv(r, g, b)](#niclabs.insight.Color.rgbToHsv) ⇒ <code>Array.&lt;Number&gt;</code>
      * [.hsvToRgb(h, s, v)](#niclabs.insight.Color.hsvToRgb) ⇒ <code>Array.&lt;Number&gt;</code>
      * [.rgbToHex(rgb)](#niclabs.insight.Color.rgbToHex) ⇒ <code>string</code>
      * [.hexToRgb(hex)](#niclabs.insight.Color.hexToRgb) ⇒ <code>Array.&lt;integer&gt;</code>
    * [.Interpolation](#niclabs.insight.Interpolation)
      * [.interpolate(value, maximum, start_point, end_point)](#niclabs.insight.Interpolation.interpolate) ⇒ <code>float</code>
      * [.interpolate3d(value, maximum, s, e)](#niclabs.insight.Interpolation.interpolate3d) ⇒ <code>Array.&lt;float&gt;</code>
      * [.interpolateRgb(value, maximum, start_rgb, e)](#niclabs.insight.Interpolation.interpolateRgb) ⇒ <code>Array.&lt;integer&gt;</code>
    * [.event](#niclabs.insight.event) : <code>object</code>
      * _static_
        * [.on(event, listener)](#niclabs.insight.event.on) ⇒ <code>number</code>
        * [.off(event, listener)](#niclabs.insight.event.off) ⇒ <code>boolean</code>
        * [.trigger(event, [data])](#niclabs.insight.event.trigger)
      * _inner_
        * [~listener](#niclabs.insight.event..listener) : <code>function</code>
    * [.filter](#niclabs.insight.filter) : <code>object</code>
      * [.Filter](#niclabs.insight.filter.Filter) ⇐ <code>[View](#niclabs.insight.View)</code>
        * [new Filter(dashboard, options)](#new_niclabs.insight.filter.Filter_new)
        * *[.view.apply(element)](#niclabs.insight.filter.Filter.view.apply) ⇒ <code>boolean</code>*
      * [.GoogleGeocodingFilter](#niclabs.insight.filter.GoogleGeocodingFilter) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
        * [new GoogleGeocodingFilter(dashboard, options)](#new_niclabs.insight.filter.GoogleGeocodingFilter_new)
      * [.LayerSelector](#niclabs.insight.filter.LayerSelector) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
        * [new LayerSelector(dashboard, options)](#new_niclabs.insight.filter.LayerSelector_new)
        * [.view.add(id, name)](#niclabs.insight.filter.LayerSelector.view.add)
      * [.SelectionFilter](#niclabs.insight.filter.SelectionFilter) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
        * [new SelectionFilter(dashboard, options)](#new_niclabs.insight.filter.SelectionFilter_new)
        * *[.view.apply(element)](#niclabs.insight.filter.SelectionFilter.view.apply) ⇒ <code>boolean</code>*
        * [.Option](#niclabs.insight.filter.SelectionFilter.Option) : <code>Object</code>
    * [.info](#niclabs.insight.info) : <code>object</code>
      * [.Block](#niclabs.insight.info.Block)
        * [new Block(dashboard, options)](#new_niclabs.insight.info.Block_new)
        * [.id](#niclabs.insight.info.Block.id) : <code>string</code>
        * [.element](#niclabs.insight.info.Block.element) : <code>Element</code>
        * [.$](#niclabs.insight.info.Block.$) : <code>jQuery</code>
        * [.layer](#niclabs.insight.info.Block.layer) : <code>jQuery</code>
        * [.content](#niclabs.insight.info.Block.content) : <code>jQuery</code>
        * [.data](#niclabs.insight.info.Block.data) ⇒ <code>Object</code>
        * [.remove()](#niclabs.insight.info.Block.remove)
        * [.__data__([data], value)](#niclabs.insight.info.Block.__data__)
        * *[.refresh([data])](#niclabs.insight.info.Block.refresh)*
      * [.ChartistBlock](#niclabs.insight.info.ChartistBlock) ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
        * [new ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock_new)
        * [.Chartist](#niclabs.insight.info.ChartistBlock.Chartist) : <code>Object</code>
      * [.SummaryBlock](#niclabs.insight.info.SummaryBlock) ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
        * [new SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock_new)
    * [.layer](#niclabs.insight.layer) : <code>object</code>
      * [.DiagramLayer](#niclabs.insight.layer.DiagramLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
        * [new DiagramLayer(dashboard, options)](#new_niclabs.insight.layer.DiagramLayer_new)
        * _instance_
          * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
          * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
        * _static_
          * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.DiagramLayer.layer.draw)
          * [.layer.clear()](#niclabs.insight.layer.DiagramLayer.layer.clear)
          * [.layer.filter(fn)](#niclabs.insight.layer.DiagramLayer.layer.filter)
      * [.GridLayer](#niclabs.insight.layer.GridLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
        * [new GridLayer(dashboard, options)](#new_niclabs.insight.layer.GridLayer_new)
        * _instance_
          * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
          * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
        * _static_
          * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.GridLayer.layer.draw)
          * [.layer.clear()](#niclabs.insight.layer.GridLayer.layer.clear)
          * [.layer.filter(fn)](#niclabs.insight.layer.GridLayer.layer.filter)
      * [.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
        * [new HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer_new)
        * _instance_
          * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
          * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
        * _static_
          * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
          * [.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
          * [.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
      * [.Layer](#niclabs.insight.layer.Layer)
        * [new Layer(dashboard, options)](#new_niclabs.insight.layer.Layer_new)
        * _instance_
          * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
          * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
        * _static_
          * [.id](#niclabs.insight.layer.Layer.id) : <code>string</code>
          * [.name](#niclabs.insight.layer.Layer.name) : <code>string</code>
          * [.data([obj])](#niclabs.insight.layer.Layer.data) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
          * [.load()](#niclabs.insight.layer.Layer.load)
          * *[.draw(data)](#niclabs.insight.layer.Layer.draw)*
          * *[.filter(fn)](#niclabs.insight.layer.Layer.filter)*
          * *[.clear()](#niclabs.insight.layer.Layer.clear)*
      * [.MarkerLayer](#niclabs.insight.layer.MarkerLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
        * [new MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer_new)
        * _instance_
          * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
          * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
        * _static_
          * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
          * [.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
          * [.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)
    * [.map](#niclabs.insight.map) : <code>object</code>
      * [.GoogleMap](#niclabs.insight.map.GoogleMap) ⇐ <code>[MapView](#niclabs.insight.MapView)</code>
        * [new GoogleMap(options)](#new_niclabs.insight.map.GoogleMap_new)
        * _instance_
          * ["map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
        * _static_
          * [.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom) ⇒ <code>int</code>
          * [.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>
      * [.GoogleMercator](#niclabs.insight.map.GoogleMercator)
      * [.diagram](#niclabs.insight.map.diagram) : <code>object</code>
        * [.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
          * [new DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram_new)
          * [.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
          * [.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data) : <code>Object</code>
        * [.Diagram](#niclabs.insight.map.diagram.Diagram)
          * [new Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram_new)
          * [.map](#niclabs.insight.map.diagram.Diagram.map) : <code>[MapView](#niclabs.insight.MapView)</code>
          * [.layer](#niclabs.insight.map.diagram.Diagram.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * [.clear()](#niclabs.insight.map.diagram.Diagram.clear)
          * [.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)
        * [.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
          * [new VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram_new)
          * [.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
          * [.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data) : <code>Object</code>
        * [.createLines(Positions, Verts)](#niclabs.insight.map.diagram.createLines)
        * [.SplitSegment(p0, p1)](#niclabs.insight.map.diagram.SplitSegment)
        * [.transformMapPositions(data)](#niclabs.insight.map.diagram.transformMapPositions)
      * [.graph](#niclabs.insight.map.graph) : <code>object</code>
        * [.Edge](#niclabs.insight.map.graph.Edge) ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
          * [new Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge_new)
        * [.GraphElement](#niclabs.insight.map.graph.GraphElement)
          * [new GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement_new)
          * [.map](#niclabs.insight.map.graph.GraphElement.map) : <code>[MapView](#niclabs.insight.MapView)</code>
          * [.layer](#niclabs.insight.map.graph.GraphElement.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * *[.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement) ⇒*
          * [.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
          * [.clear()](#niclabs.insight.map.graph.GraphElement.clear)
          * [.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible) ⇒ <code>boolean</code>
        * [.Node](#niclabs.insight.map.graph.Node) ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
          * [new Node(dashboard, options)](#new_niclabs.insight.map.graph.Node_new)
      * [.grid](#niclabs.insight.map.grid) : <code>object</code>
        * [.Grid](#niclabs.insight.map.grid.Grid)
          * [new Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid_new)
          * _static_
            * [.map](#niclabs.insight.map.grid.Grid.map) : <code>[MapView](#niclabs.insight.MapView)</code>
            * [.layer](#niclabs.insight.map.grid.Grid.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
            * [.refresh](#niclabs.insight.map.grid.Grid.refresh)
            * *[.tile()](#niclabs.insight.map.grid.Grid.tile) ⇒ <code>[Tile](#niclabs.insight.map.grid.Tile)</code>*
            * [.clear()](#niclabs.insight.map.grid.Grid.clear)
            * [.Data](#niclabs.insight.map.grid.Grid.Data) : <code>Object</code>
          * _inner_
            * [~fill](#niclabs.insight.map.grid.Grid..fill) : <code>function</code>
        * [.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
          * [new HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile_new)
          * [.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
          * [.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
          * [.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
        * [.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
          * [new HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid_new)
        * [.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
          * [new SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid_new)
        * [.SquareTile](#niclabs.insight.map.grid.SquareTile)
          * [new SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile_new)
          * [.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
          * [.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
          * [.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
        * [.Tile](#niclabs.insight.map.grid.Tile)
          * [new Tile()](#new_niclabs.insight.map.grid.Tile_new)
          * *[.origin(i, j)](#niclabs.insight.map.grid.Tile.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>*
          * *[.query(coord)](#niclabs.insight.map.grid.Tile.query) ⇒ <code>Array.&lt;integer&gt;</code>*
          * *[.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>*
          * *[.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw) ⇒ <code>object</code>*
      * [.heatmap](#niclabs.insight.map.heatmap) : <code>object</code>
        * [.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
          * [new Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap_new)
          * [.map](#niclabs.insight.map.heatmap.Heatmap.map) : <code>[MapView](#niclabs.insight.MapView)</code>
          * [.layer](#niclabs.insight.map.heatmap.Heatmap.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * [.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)
        * [.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
          * [new PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap_new)
          * [.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
          * [.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data) : <code>Object</code>
        * [.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
          * [new SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap_new)
          * [.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
          * [.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data) : <code>Object</code>
      * [.marker](#niclabs.insight.map.marker) : <code>object</code>
        * [.CircleMarker](#niclabs.insight.map.marker.CircleMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
          * [new CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker_new)
        * [.ImageMarker](#niclabs.insight.map.marker.ImageMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
          * [new ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker_new)
        * [.Marker](#niclabs.insight.map.marker.Marker)
          * [new Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker_new)
          * [.map](#niclabs.insight.map.marker.Marker.map) : <code>[MapView](#niclabs.insight.MapView)</code>
          * [.layer](#niclabs.insight.map.marker.Marker.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * *[.marker()](#niclabs.insight.map.marker.Marker.marker) ⇒ <code>google.maps.Marker</code>*
          * [.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
          * [.clear()](#niclabs.insight.map.marker.Marker.clear)
          * [.visible([visible])](#niclabs.insight.map.marker.Marker.visible) ⇒ <code>boolean</code>
        * [.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
          * [new SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker_new)
      * [.LatLng](#niclabs.insight.map.LatLng) : <code>Object</code>
      * [.Point](#niclabs.insight.map.Point) : <code>Object</code>
    * [.quadtree](#niclabs.insight.quadtree) : <code>object</code>
      * [.Bounds](#niclabs.insight.quadtree.Bounds)
        * [new Bounds(min, max)](#new_niclabs.insight.quadtree.Bounds_new)
        * [.center](#niclabs.insight.quadtree.Bounds.center) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
        * [.min](#niclabs.insight.quadtree.Bounds.min) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
        * [.max](#niclabs.insight.quadtree.Bounds.max) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
        * [.contains(point)](#niclabs.insight.quadtree.Bounds.contains) ⇒ <code>boolean</code>
        * [.intersects(box)](#niclabs.insight.quadtree.Bounds.intersects) ⇒ <code>boolean</code>
      * [.PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)
        * [new PointQuadTree(bounds, [capacity], [depth])](#new_niclabs.insight.quadtree.PointQuadTree_new)
        * [.capacity](#niclabs.insight.quadtree.PointQuadTree.capacity) : <code>integer</code>
        * [.bounds](#niclabs.insight.quadtree.PointQuadTree.bounds) : <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>
        * [.insert(point)](#niclabs.insight.quadtree.PointQuadTree.insert) ⇒ <code>boolean</code>
        * [.query(range)](#niclabs.insight.quadtree.PointQuadTree.query) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.quadtree.Point)</code>
      * [.Point](#niclabs.insight.quadtree.Point) : <code>Object</code>
    * [.handler(name, [kind], [handler])](#niclabs.insight.handler) ⇒ <code>[handler](#niclabs.insight..handler)</code>
    * [.dashboard([options])](#niclabs.insight.dashboard) ⇒ <code>[Dashboard](#niclabs.insight.Dashboard)</code>
    * [.info([obj])](#niclabs.insight.info(2)) ⇒ <code>[InfoView](#niclabs.insight.InfoView)</code>
    * [.layer(obj, [activate])](#niclabs.insight.layer(2)) ⇒ <code>niclabs.insight.info.Layer</code>
    * [.map([obj])](#niclabs.insight.map(2)) ⇒ <code>[MapView](#niclabs.insight.MapView)</code>
  * _inner_
    * [~handler](#niclabs.insight..handler) : <code>function</code>

<a name="niclabs.insight.Dashboard"></a>
#### insight.Dashboard
**Kind**: static class of <code>[insight](#niclabs.insight)</code>  

  * [.Dashboard](#niclabs.insight.Dashboard)
    * [new Dashboard(options)](#new_niclabs.insight.Dashboard_new)
    * _instance_
      * ["active_layer_data"](#niclabs.insight.Dashboard#event_active_layer_data)
    * _static_
      * [.element](#niclabs.insight.Dashboard.element) : <code>Element</code>
      * [.$](#niclabs.insight.Dashboard.$) : <code>jQuery</code>
      * [.config(name)](#niclabs.insight.Dashboard.config) ⇒ <code>\*</code>
      * [.info([obj])](#niclabs.insight.Dashboard.info) ⇒ <code>[InfoView](#niclabs.insight.InfoView)</code>
      * [.map([obj])](#niclabs.insight.Dashboard.map) ⇒ <code>[MapView](#niclabs.insight.MapView)</code>
      * [.layer(obj, [activate])](#niclabs.insight.Dashboard.layer) ⇒ <code>niclabs.insight.info.Layer</code>
      * [.data([obj])](#niclabs.insight.Dashboard.data) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
      * [.active([id])](#niclabs.insight.Dashboard.active) ⇒ <code>string</code>
      * [.filter(filter)](#niclabs.insight.Dashboard.filter) ⇒ <code>jQuery</code>
      * [.clear()](#niclabs.insight.Dashboard.clear)

<a name="new_niclabs.insight.Dashboard_new"></a>
##### new Dashboard(options)
Constructs the dashboard

The dashboard is composed of multiple, replaceable parts.
- An information view, with conveys information to the user, throught visualizations or text.
the information view can be composed contain multiple blocks of information
- A map view, which provides the geospatial information to the user. The map and the information view can interact for
 clearer information
- A filter bar, which allows to interact with the data shown in the map, through filtering or modifying the location
- A notification bar, usually invisible, which reports events back to the user


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | configuration options for the dashboard |
| [options.layout] | <code>string</code> | <code>&quot;&#x27;none&#x27;&quot;</code> | Dashboard layout, one of ['left', 'right', 'none'], puts the info window to the left, to the right or it removes it |
| options.anchor | <code>string</code> |  | Required id for anchoring the dashboard |
| options.geocoding | <code>boolean</code> |  | false to disable geocoding |

<a name="niclabs.insight.Dashboard#event_active_layer_data"></a>
##### "active_layer_data"
Event triggered when an update to the active layer data (filtering/update) has ocurred

**Kind**: event emitted by <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Array.&lt;Object&gt;</code> | new data array |

<a name="niclabs.insight.Dashboard.element"></a>
##### Dashboard.element : <code>Element</code>
HTML DOM element for the dashboard container

**Kind**: static property of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
<a name="niclabs.insight.Dashboard.$"></a>
##### Dashboard.$ : <code>jQuery</code>
jQuery object for the dashboard DOM container

**Kind**: static property of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
<a name="niclabs.insight.Dashboard.config"></a>
##### Dashboard.config(name) ⇒ <code>\*</code>
Return the value for the dashboard configuration option with the provided name

**Kind**: static method of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
**Returns**: <code>\*</code> - configuration option value or undefined if it does not exist  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | name of the configuration option |

<a name="niclabs.insight.Dashboard.info"></a>
##### Dashboard.info([obj]) ⇒ <code>[InfoView](#niclabs.insight.InfoView)</code>
Assign/get the information view for the dashboard

**Kind**: static method of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
**Returns**: <code>[InfoView](#niclabs.insight.InfoView)</code> - the dashboard information view  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | <code>Object</code> &#124; <code>[InfoView](#niclabs.insight.InfoView)</code> | configuration for the information view or information view object |
| obj.handler | <code>String</code> | name of the handler to construct the info view |

<a name="niclabs.insight.Dashboard.map"></a>
##### Dashboard.map([obj]) ⇒ <code>[MapView](#niclabs.insight.MapView)</code>
Assign/get the map view for the dashboard

**Kind**: static method of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
**Returns**: <code>[MapView](#niclabs.insight.MapView)</code> - the dashboard information view  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | <code>Object</code> &#124; <code>[MapView](#niclabs.insight.MapView)</code> | configuration for the map view or map view object |
| obj.handler | <code>String</code> | name of the handler to construct the map view |

<a name="niclabs.insight.Dashboard.layer"></a>
##### Dashboard.layer(obj, [activate]) ⇒ <code>niclabs.insight.info.Layer</code>
Add/get a [Layer](#niclabs.insight.layer.Layer) for the dashboard

A layer acts as a link between a source of data and a visualization on the map

- If a number or string is provided as value for obj, the layer with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new layer
is created using the handler and the layer is added to the list of
layers of the dashboard
- If an object is provided without handler, it is assumed to be a Layer object and added to the
layer list as is.

**Kind**: static method of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
**Returns**: <code>niclabs.insight.info.Layer</code> - - layer for the provided id  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>string</code> &#124; <code>number</code> &#124; <code>Object</code> &#124; <code>[Layer](#niclabs.insight.layer.Layer)</code> |  | layer id to get or configuration options for the new layer |
| [activate] | <code>boolean</code> | <code>false</code> | if true, set the layer as the active layer of the dashboard |

<a name="niclabs.insight.Dashboard.data"></a>
##### Dashboard.data([obj]) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
Set/get the data for the active layer

If a new source for the data is provided, this method updates the internal
data for the layer and reloads the layer by calling [load](#niclabs.insight.layer.Layer.load)

**Kind**: static method of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
**Returns**: <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> - data source for the layer if the data has not been loaded yet or object array if the
 data has been loaded  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> | optional new data source or data array for the layer |

<a name="niclabs.insight.Dashboard.active"></a>
##### Dashboard.active([id]) ⇒ <code>string</code>
Set/get the active layer

**Kind**: static method of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
**Returns**: <code>string</code> - id for the active layer  

| Param | Type | Description |
| --- | --- | --- |
| [id] | <code>string</code> &#124; <code>number</code> | id for the layer to set as the active layer |

<a name="niclabs.insight.Dashboard.filter"></a>
##### Dashboard.filter(filter) ⇒ <code>jQuery</code>
Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
of the filter for further customizations

**Kind**: static method of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
**Returns**: <code>jQuery</code> - reference to the added element for further customization  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>Object</code> &#124; <code>number</code> | configuration for the filter or filter index |

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
##### Dashboard.clear()
Clear the map by calling the [clear](#niclabs.insight.layer.Layer.clear) method
on the active layer

**Kind**: static method of <code>[Dashboard](#niclabs.insight.Dashboard)</code>  
<a name="niclabs.insight.ElementList"></a>
#### insight.ElementList ⇐ <code>[Element](#niclabs.insight.Element)</code>
**Kind**: static class of <code>[insight](#niclabs.insight)</code>  
**Extends:** <code>[Element](#niclabs.insight.Element)</code>  

  * [.ElementList](#niclabs.insight.ElementList) ⇐ <code>[Element](#niclabs.insight.Element)</code>
    * [new ElementList(dashboard)](#new_niclabs.insight.ElementList_new)
    * _static_
      * [.self.element(obj)](#niclabs.insight.ElementList.self.element) ⇒ <code>[ElementList](#niclabs.insight.ElementList)</code>
      * [.self.each(iterator)](#niclabs.insight.ElementList.self.each)
      * [.self.remove(id)](#niclabs.insight.ElementList.self.remove) ⇒ <code>[Element](#niclabs.insight.Element)</code>
    * _inner_
      * [~iterator](#niclabs.insight.ElementList..iterator) : <code>function</code>

<a name="new_niclabs.insight.ElementList_new"></a>
##### new ElementList(dashboard)
Construct a list of dashboard elements.

In a list, children can be added either by passing the object directly
to the [niclabs.insight.ElementList.element()](niclabs.insight.ElementList.element()) method or by passing the options
for constructing the [Element](#niclabs.insight.Element), including the name of the handler.

The list will lookup the handler in the list of registered handlers and
use it to construct the element


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard where the list belongs to |

<a name="niclabs.insight.ElementList.self.element"></a>
##### ElementList.self.element(obj) ⇒ <code>[ElementList](#niclabs.insight.ElementList)</code>
Add/get an element from the list

- If a number or string is provided as value for obj, the element with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new element
is created using the handler and the element is added to the list
- If an object is provided without handler, it is assumed to be a valid insight Element and added to the
list as is.

**Kind**: static method of <code>[ElementList](#niclabs.insight.ElementList)</code>  
**Returns**: <code>[ElementList](#niclabs.insight.ElementList)</code> - - newly created element  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>string</code> &#124; <code>number</code> &#124; <code>Object</code> &#124; <code>[Element](#niclabs.insight.Element)</code> | element id to get or configuration options for the new element |

<a name="niclabs.insight.ElementList.self.each"></a>
##### ElementList.self.each(iterator)
Iterate over the elements of the list

The iteration is stopped when the iterating function returns false

**Kind**: static method of <code>[ElementList](#niclabs.insight.ElementList)</code>  

| Param | Type |
| --- | --- |
| iterator | <code>[iterator](#niclabs.insight.ElementList..iterator)</code> | 

<a name="niclabs.insight.ElementList.self.remove"></a>
##### ElementList.self.remove(id) ⇒ <code>[Element](#niclabs.insight.Element)</code>
Delete the element with specified id from the list

**Kind**: static method of <code>[ElementList](#niclabs.insight.ElementList)</code>  
**Returns**: <code>[Element](#niclabs.insight.Element)</code> - removed element  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> &#124; <code>integer</code> | identifier for the element |

<a name="niclabs.insight.ElementList..iterator"></a>
##### ElementList~iterator : <code>function</code>
Process a list element

**Kind**: inner typedef of <code>[ElementList](#niclabs.insight.ElementList)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | key for the element |
| element | <code>[Element](#niclabs.insight.Element)</code> | object associated to the provided key |

<a name="niclabs.insight.Element"></a>
#### insight.Element
**Kind**: static class of <code>[insight](#niclabs.insight)</code>  

  * [.Element](#niclabs.insight.Element)
    * [new Element(options)](#new_niclabs.insight.Element_new)
    * [.id](#niclabs.insight.Element.id) : <code>string</code>

<a name="new_niclabs.insight.Element_new"></a>
##### new Element(options)
Construct a generic insight element


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | configuration options for the element |
| options.id | <code>String</code> | identifier for the element |

<a name="niclabs.insight.Element.id"></a>
##### Element.id : <code>string</code>
Identifier for the insight element

**Kind**: static property of <code>[Element](#niclabs.insight.Element)</code>  
<a name="niclabs.insight.Filters"></a>
#### insight.Filters ⇐ <code>[View](#niclabs.insight.View)</code>
**Kind**: static class of <code>[insight](#niclabs.insight)</code>  
**Extends:** <code>[View](#niclabs.insight.View)</code>  

  * [.Filters](#niclabs.insight.Filters) ⇐ <code>[View](#niclabs.insight.View)</code>
    * [new Filters(dashboard, options)](#new_niclabs.insight.Filters_new)
    * _instance_
      * ["filter_selected"](#niclabs.insight.Filters#event_filter_selected)
      * ["filter_changed"](#niclabs.insight.Filters#event_filter_changed)
    * _static_
      * [.view.filter(obj)](#niclabs.insight.Filters.view.filter) ⇒ <code>jQuery</code>
    * _inner_
      * [~filter](#niclabs.insight.Filters..filter) ⇒ <code>boolean</code>

<a name="new_niclabs.insight.Filters_new"></a>
##### new Filters(dashboard, options)
Constructs a filter bar for the dashboard


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this view belongs to |
| options | <code>Object</code> | configuration options for the filters |

<a name="niclabs.insight.Filters#event_filter_selected"></a>
##### "filter_selected"
Event triggered when a filter has been selected

It serves to communicate to the filters view that one of its filters has changed

**Kind**: event emitted by <code>[Filters](#niclabs.insight.Filters)</code>  
<a name="niclabs.insight.Filters#event_filter_changed"></a>
##### "filter_changed"
Event triggered when a filter has changed

It will pass as parameter the filtering function to apply to
the layers

**Kind**: event emitted by <code>[Filters](#niclabs.insight.Filters)</code>  
<a name="niclabs.insight.Filters.view.filter"></a>
##### Filters.view.filter(obj) ⇒ <code>jQuery</code>
Add/get a filter from the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
of the filter for further customizations

**Kind**: static method of <code>[Filters](#niclabs.insight.Filters)</code>  
**Returns**: <code>jQuery</code> - reference to the added element for further customization  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> &#124; <code>[Filter](#niclabs.insight.filter.Filter)</code> &#124; <code>number</code> | configuration for the filter or filter identifier |

<a name="niclabs.insight.Filters..filter"></a>
##### Filters~filter ⇒ <code>boolean</code>
Function to act as a filter for the data

The function returns false if the data must be removed from the visualization
or true if the data must be kept

**Kind**: inner typedef of <code>[Filters](#niclabs.insight.Filters)</code>  
**Returns**: <code>boolean</code> - true if the data passes the filter  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | data element to evaluate |

<a name="niclabs.insight.InfoView"></a>
#### insight.InfoView ⇐ <code>[View](#niclabs.insight.View)</code>
**Kind**: static class of <code>[insight](#niclabs.insight)</code>  
**Extends:** <code>[View](#niclabs.insight.View)</code>  

  * [.InfoView](#niclabs.insight.InfoView) ⇐ <code>[View](#niclabs.insight.View)</code>
    * [new InfoView(dashboard, options)](#new_niclabs.insight.InfoView_new)
    * [.element.block(obj)](#niclabs.insight.InfoView.element.block) ⇒ <code>[Block](#niclabs.insight.info.Block)</code>

<a name="new_niclabs.insight.InfoView_new"></a>
##### new InfoView(dashboard, options)
Construct the dashboard information view

The information view is composed of information blocks to show
different aspects of the data shown in the map or
about the visualization in general


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard to assign this info view to |
| options | <code>Object</code> | list of configuration options for the information view |

<a name="niclabs.insight.InfoView.element.block"></a>
##### InfoView.element.block(obj) ⇒ <code>[Block](#niclabs.insight.info.Block)</code>
Add/get a block from the info view

- If a number or string is provided as value for obj, the block with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new block
is created using the handler and the block is added to the list of
blocks of the info view
- If an object is provided without handler, it is assumed to be a Block object and added to the
block list as is.

**Kind**: static method of <code>[InfoView](#niclabs.insight.InfoView)</code>  
**Returns**: <code>[Block](#niclabs.insight.info.Block)</code> - - newly created block  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>string</code> &#124; <code>number</code> &#124; <code>Object</code> &#124; <code>[Block](#niclabs.insight.info.Block)</code> | block id to get or configuration options for the new block |

<a name="niclabs.insight.MapView"></a>
#### insight.MapView
**Kind**: static class of <code>[insight](#niclabs.insight)</code>  

  * [.MapView](#niclabs.insight.MapView)
    * [new MapView(options)](#new_niclabs.insight.MapView_new)
    * _instance_
      * ["map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
    * _static_
      * [.element](#niclabs.insight.MapView.element) : <code>Element</code>
      * [.$](#niclabs.insight.MapView.$) : <code>jQuery</code>
      * [.lat](#niclabs.insight.MapView.lat) : <code>float</code>
      * [.lng](#niclabs.insight.MapView.lng) : <code>float</code>
      * [.width](#niclabs.insight.MapView.width) : <code>float</code>
      * [.height](#niclabs.insight.MapView.height) : <code>float</code>
      * [.center([lat], [lng])](#niclabs.insight.MapView.center) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>
      * [.zoom([zoom])](#niclabs.insight.MapView.zoom) ⇒ <code>int</code>

<a name="new_niclabs.insight.MapView_new"></a>
##### new MapView(options)
Constructs a new map


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | configuration options for the map |
| [options.zoom] | <code>integer</code> | <code>12</code> | starting zoom level of the map |
| [options.lat] | <code>float</code> | <code>0</code> | latitude for the map center |
| [options.lng] | <code>float</code> | <code>0</code> | lng for the map center |

<a name="niclabs.insight.MapView#event_map_element_selected"></a>
##### "map_element_selected"
Event triggered to notify the dashboard that an element of the map has been pressed

**Kind**: event emitted by <code>[MapView](#niclabs.insight.MapView)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| layer | <code>string</code> | id for the layer to which the data belongs to |
| lat | <code>float</code> | latitude for the marker |
| lng | <code>float</code> | latitude for the marker |

<a name="niclabs.insight.MapView.element"></a>
##### MapView.element : <code>Element</code>
HTML DOM element for the map view

**Kind**: static property of <code>[MapView](#niclabs.insight.MapView)</code>  
<a name="niclabs.insight.MapView.$"></a>
##### MapView.$ : <code>jQuery</code>
jQuery object for map view

**Kind**: static property of <code>[MapView](#niclabs.insight.MapView)</code>  
<a name="niclabs.insight.MapView.lat"></a>
##### MapView.lat : <code>float</code>
Latitude for the map center

**Kind**: static property of <code>[MapView](#niclabs.insight.MapView)</code>  
<a name="niclabs.insight.MapView.lng"></a>
##### MapView.lng : <code>float</code>
Longitude for the map center

**Kind**: static property of <code>[MapView](#niclabs.insight.MapView)</code>  
<a name="niclabs.insight.MapView.width"></a>
##### MapView.width : <code>float</code>
Width for the map container

**Kind**: static property of <code>[MapView](#niclabs.insight.MapView)</code>  
<a name="niclabs.insight.MapView.height"></a>
##### MapView.height : <code>float</code>
Height for the map container

**Kind**: static property of <code>[MapView](#niclabs.insight.MapView)</code>  
<a name="niclabs.insight.MapView.center"></a>
##### MapView.center([lat], [lng]) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>
Set/get the map center.
Overriding implementations should modify this method so the
map reflects the new center.

**Kind**: static method of <code>[MapView](#niclabs.insight.MapView)</code>  
**Returns**: <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates for the map center  

| Param | Type | Description |
| --- | --- | --- |
| [lat] | <code>float</code> | latitude for the map center |
| [lng] | <code>float</code> | longitude for the map center |

<a name="niclabs.insight.MapView.zoom"></a>
##### MapView.zoom([zoom]) ⇒ <code>int</code>
Set/get the map zoom level.
Overriding implementations should modify this method so the
map reflects the new zoom.

**Kind**: static method of <code>[MapView](#niclabs.insight.MapView)</code>  
**Returns**: <code>int</code> - zoom level of the map  

| Param | Type | Description |
| --- | --- | --- |
| [zoom] | <code>int</code> | zoom |

<a name="niclabs.insight.View"></a>
#### insight.View ⇐ <code>[Element](#niclabs.insight.Element)</code>
**Kind**: static class of <code>[insight](#niclabs.insight)</code>  
**Extends:** <code>[Element](#niclabs.insight.Element)</code>  

  * [.View](#niclabs.insight.View) ⇐ <code>[Element](#niclabs.insight.Element)</code>
    * [new View(options)](#new_niclabs.insight.View_new)
    * [.$](#niclabs.insight.View.$) : <code>jQuery</code>
    * [.element](#niclabs.insight.View.element) : <code>jQuery</code>
    * [.self.append(element)](#niclabs.insight.View.self.append) ⇒ <code>[View](#niclabs.insight.View)</code>

<a name="new_niclabs.insight.View_new"></a>
##### new View(options)
Construct a View

A view has an internal DOM representation to
display on the browser


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | configuration options for the element |
| options.id | <code>String</code> | identifier for the element |

<a name="niclabs.insight.View.$"></a>
##### View.$ : <code>jQuery</code>
DOM Element specified by this View

**Kind**: static property of <code>[View](#niclabs.insight.View)</code>  
<a name="niclabs.insight.View.element"></a>
##### View.element : <code>jQuery</code>
DOM Element specified by this View

**Kind**: static property of <code>[View](#niclabs.insight.View)</code>  
<a name="niclabs.insight.View.self.append"></a>
##### View.self.append(element) ⇒ <code>[View](#niclabs.insight.View)</code>
Append an element to the DOM tree of this view

**Kind**: static method of <code>[View](#niclabs.insight.View)</code>  
**Returns**: <code>[View](#niclabs.insight.View)</code> - reference to this element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>[View](#niclabs.insight.View)</code> | element to append |

<a name="niclabs.insight.Color"></a>
#### insight.Color
Color manipulation utils

**Kind**: static mixin of <code>[insight](#niclabs.insight)</code>  

  * [.Color](#niclabs.insight.Color)
    * [.rgbToHsv(r, g, b)](#niclabs.insight.Color.rgbToHsv) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.hsvToRgb(h, s, v)](#niclabs.insight.Color.hsvToRgb) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.rgbToHex(rgb)](#niclabs.insight.Color.rgbToHex) ⇒ <code>string</code>
    * [.hexToRgb(hex)](#niclabs.insight.Color.hexToRgb) ⇒ <code>Array.&lt;integer&gt;</code>

<a name="niclabs.insight.Color.rgbToHsv"></a>
##### Color.rgbToHsv(r, g, b) ⇒ <code>Array.&lt;Number&gt;</code>
Converts an RGB color value to HSV. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSV_color_space.
Assumes r, g, and b are contained in the set [0, 255] and
returns h, s, and v in the set [0, 1].

Source: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c

**Kind**: static method of <code>[Color](#niclabs.insight.Color)</code>  
**Returns**: <code>Array.&lt;Number&gt;</code> - The HSV representation  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | The red color value |
| g | <code>Number</code> | The green color value |
| b | <code>Number</code> | The blue color value |

<a name="niclabs.insight.Color.hsvToRgb"></a>
##### Color.hsvToRgb(h, s, v) ⇒ <code>Array.&lt;Number&gt;</code>
Converts an HSV color value to RGB. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSV_color_space.
Assumes h, s, and v are contained in the set [0, 1] and
returns r, g, and b in the set [0, 255].

Source: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c

**Kind**: static method of <code>[Color](#niclabs.insight.Color)</code>  
**Returns**: <code>Array.&lt;Number&gt;</code> - The RGB representation  

| Param | Type | Description |
| --- | --- | --- |
| h | <code>Number</code> | The hue |
| s | <code>Number</code> | The saturation |
| v | <code>Number</code> | The value |

<a name="niclabs.insight.Color.rgbToHex"></a>
##### Color.rgbToHex(rgb) ⇒ <code>string</code>
Converts a rgb triple into an hexadecimal string

**Kind**: static method of <code>[Color](#niclabs.insight.Color)</code>  
**Returns**: <code>string</code> - hexadecimal representation  

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>Array.&lt;Number&gt;</code> | rgb representation |

<a name="niclabs.insight.Color.hexToRgb"></a>
##### Color.hexToRgb(hex) ⇒ <code>Array.&lt;integer&gt;</code>
Converts a hexadecimal color intro a rgb array

**Kind**: static method of <code>[Color](#niclabs.insight.Color)</code>  
**Returns**: <code>Array.&lt;integer&gt;</code> - - triplet representation of the color  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | hexadecimal representation of the color |

<a name="niclabs.insight.Interpolation"></a>
#### insight.Interpolation
Defines interpolation utils

**Kind**: static mixin of <code>[insight](#niclabs.insight)</code>  

  * [.Interpolation](#niclabs.insight.Interpolation)
    * [.interpolate(value, maximum, start_point, end_point)](#niclabs.insight.Interpolation.interpolate) ⇒ <code>float</code>
    * [.interpolate3d(value, maximum, s, e)](#niclabs.insight.Interpolation.interpolate3d) ⇒ <code>Array.&lt;float&gt;</code>
    * [.interpolateRgb(value, maximum, start_rgb, e)](#niclabs.insight.Interpolation.interpolateRgb) ⇒ <code>Array.&lt;integer&gt;</code>

<a name="niclabs.insight.Interpolation.interpolate"></a>
##### Interpolation.interpolate(value, maximum, start_point, end_point) ⇒ <code>float</code>
Return the position for value in the interval [start_point, end_point]
where value can go from 0 to maximum.

Source: http://stackoverflow.com/questions/168838/color-scaling-function

**Kind**: static method of <code>[Interpolation](#niclabs.insight.Interpolation)</code>  
**Returns**: <code>float</code> - - interpolation value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>float</code> | value to interpolate |
| maximum | <code>flaot</code> | maximum value that value can take |
| start_point | <code>float</code> | beginning of the interval |
| end_point | <code>float</code> | end of the interval |

<a name="niclabs.insight.Interpolation.interpolate3d"></a>
##### Interpolation.interpolate3d(value, maximum, s, e) ⇒ <code>Array.&lt;float&gt;</code>
Return the position for value in the 3-dimensional line between
the vectors [s, e], where value can go from 0 to maximum.

Source: http://stackoverflow.com/questions/168838/color-scaling-function

**Kind**: static method of <code>[Interpolation](#niclabs.insight.Interpolation)</code>  
**Returns**: <code>Array.&lt;float&gt;</code> - - interpolation vector  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>float</code> | value to interpolate |
| maximum | <code>flaot</code> | maximum value that value can take |
| s | <code>Array.&lt;float&gt;</code> | 3d vector to use as start of the interval |
| e | <code>Array.&lt;float&gt;</code> | 3d vector to use as end of the interval |

<a name="niclabs.insight.Interpolation.interpolateRgb"></a>
##### Interpolation.interpolateRgb(value, maximum, start_rgb, e) ⇒ <code>Array.&lt;integer&gt;</code>
Calculate interpolated rgb color between the rgb start and end colors
for the value value with the specified maximum

**Kind**: static method of <code>[Interpolation](#niclabs.insight.Interpolation)</code>  
**Returns**: <code>Array.&lt;integer&gt;</code> - - interpolated color  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>float</code> | value to interpolate |
| maximum | <code>flaot</code> | maximum value that value can take |
| start_rgb | <code>Array.&lt;integer&gt;</code> | rgb color to use as start of the range |
| e | <code>Array.&lt;integer&gt;</code> | rgb color to use as end of the range |

<a name="niclabs.insight.event"></a>
#### insight.event : <code>object</code>
Very basic event manager for the dashboard

**Kind**: static namespace of <code>[insight](#niclabs.insight)</code>  
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

  * [.event](#niclabs.insight.event) : <code>object</code>
    * _static_
      * [.on(event, listener)](#niclabs.insight.event.on) ⇒ <code>number</code>
      * [.off(event, listener)](#niclabs.insight.event.off) ⇒ <code>boolean</code>
      * [.trigger(event, [data])](#niclabs.insight.event.trigger)
    * _inner_
      * [~listener](#niclabs.insight.event..listener) : <code>function</code>

<a name="niclabs.insight.event.on"></a>
##### event.on(event, listener) ⇒ <code>number</code>
Listen for an event. A listener callback can only be assigned once for an event

**Kind**: static method of <code>[event](#niclabs.insight.event)</code>  
**Returns**: <code>number</code> - id of the listener  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | event type |
| listener | <code>[listener](#niclabs.insight.event..listener)</code> | callback to process the event |

<a name="niclabs.insight.event.off"></a>
##### event.off(event, listener) ⇒ <code>boolean</code>
Stop listening for an event.

**Kind**: static method of <code>[event](#niclabs.insight.event)</code>  
**Returns**: <code>boolean</code> - true if the listener was found and was succesfully removed  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | event type |
| listener | <code>[listener](#niclabs.insight.event..listener)</code> &#124; <code>number</code> | callback to remove or id of the listener provided by [niclabs.insight.event.on()](niclabs.insight.event.on()) |

<a name="niclabs.insight.event.trigger"></a>
##### event.trigger(event, [data])
Trigger an event

**Kind**: static method of <code>[event](#niclabs.insight.event)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | event type |
| [data] | <code>Object</code> | data to pass to the callback |

<a name="niclabs.insight.event..listener"></a>
##### event~listener : <code>function</code>
Insight event listener

**Kind**: inner typedef of <code>[event](#niclabs.insight.event)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data for the callback function, dependant on the event |

<a name="niclabs.insight.filter"></a>
#### insight.filter : <code>object</code>
Define all possible filters for the dashboard

**Kind**: static namespace of <code>[insight](#niclabs.insight)</code>  

  * [.filter](#niclabs.insight.filter) : <code>object</code>
    * [.Filter](#niclabs.insight.filter.Filter) ⇐ <code>[View](#niclabs.insight.View)</code>
      * [new Filter(dashboard, options)](#new_niclabs.insight.filter.Filter_new)
      * *[.view.apply(element)](#niclabs.insight.filter.Filter.view.apply) ⇒ <code>boolean</code>*
    * [.GoogleGeocodingFilter](#niclabs.insight.filter.GoogleGeocodingFilter) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
      * [new GoogleGeocodingFilter(dashboard, options)](#new_niclabs.insight.filter.GoogleGeocodingFilter_new)
    * [.LayerSelector](#niclabs.insight.filter.LayerSelector) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
      * [new LayerSelector(dashboard, options)](#new_niclabs.insight.filter.LayerSelector_new)
      * [.view.add(id, name)](#niclabs.insight.filter.LayerSelector.view.add)
    * [.SelectionFilter](#niclabs.insight.filter.SelectionFilter) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
      * [new SelectionFilter(dashboard, options)](#new_niclabs.insight.filter.SelectionFilter_new)
      * *[.view.apply(element)](#niclabs.insight.filter.SelectionFilter.view.apply) ⇒ <code>boolean</code>*
      * [.Option](#niclabs.insight.filter.SelectionFilter.Option) : <code>Object</code>

<a name="niclabs.insight.filter.Filter"></a>
##### filter.Filter ⇐ <code>[View](#niclabs.insight.View)</code>
**Kind**: static class of <code>[filter](#niclabs.insight.filter)</code>  
**Extends:** <code>[View](#niclabs.insight.View)</code>  

* [.Filter](#niclabs.insight.filter.Filter) ⇐ <code>[View](#niclabs.insight.View)</code>
  * [new Filter(dashboard, options)](#new_niclabs.insight.filter.Filter_new)
  * *[.view.apply(element)](#niclabs.insight.filter.Filter.view.apply) ⇒ <code>boolean</code>*

<a name="new_niclabs.insight.filter.Filter_new"></a>
###### new Filter(dashboard, options)
Defines a filter for the dashboard

A filter provides both a visual filtering representation
and an apply() function to be used on a data element for
filtering

For instance, a select filter will be visualized as a `<select>`
HTML element, and calls to apply will pass the call to the appropriate
filtering function according to the selected element


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this filter belongs to |
| options | <code>Object</code> | configuration options for the filter |

<a name="niclabs.insight.filter.Filter.view.apply"></a>
###### *Filter.view.apply(element) ⇒ <code>boolean</code>*
Apply the filter to a data element

**Kind**: static abstract method of <code>[Filter](#niclabs.insight.filter.Filter)</code>  
**Returns**: <code>boolean</code> - - true if the data element passes the filter  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | data element to evaluate |

<a name="niclabs.insight.filter.GoogleGeocodingFilter"></a>
##### filter.GoogleGeocodingFilter ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
**Kind**: static class of <code>[filter](#niclabs.insight.filter)</code>  
**Extends:** <code>[Filter](#niclabs.insight.filter.Filter)</code>  
<a name="new_niclabs.insight.filter.GoogleGeocodingFilter_new"></a>
###### new GoogleGeocodingFilter(dashboard, options)
Constructs a Google Geocoding filter for the dashboard

Application of the filter always returns true, but allows to
update the map according to a search location


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this filter belongs to |
| options | <code>Object</code> | configuration options for the filter |

<a name="niclabs.insight.filter.LayerSelector"></a>
##### filter.LayerSelector ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
**Kind**: static class of <code>[filter](#niclabs.insight.filter)</code>  
**Extends:** <code>[Filter](#niclabs.insight.filter.Filter)</code>  

* [.LayerSelector](#niclabs.insight.filter.LayerSelector) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
  * [new LayerSelector(dashboard, options)](#new_niclabs.insight.filter.LayerSelector_new)
  * [.view.add(id, name)](#niclabs.insight.filter.LayerSelector.view.add)

<a name="new_niclabs.insight.filter.LayerSelector_new"></a>
###### new LayerSelector(dashboard, options)
Construct a layer for the dashboard

The layer selector provides an option to switch between layers of the dashboard


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this filter belongs to |
| options | <code>Object</code> | configuration options for the filter |

<a name="niclabs.insight.filter.LayerSelector.view.add"></a>
###### LayerSelector.view.add(id, name)
Add a layer to the selector

**Kind**: static method of <code>[LayerSelector](#niclabs.insight.filter.LayerSelector)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer |
| name | <code>name</code> | name of the layer |

<a name="niclabs.insight.filter.SelectionFilter"></a>
##### filter.SelectionFilter ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
**Kind**: static class of <code>[filter](#niclabs.insight.filter)</code>  
**Extends:** <code>[Filter](#niclabs.insight.filter.Filter)</code>  

* [.SelectionFilter](#niclabs.insight.filter.SelectionFilter) ⇐ <code>[Filter](#niclabs.insight.filter.Filter)</code>
  * [new SelectionFilter(dashboard, options)](#new_niclabs.insight.filter.SelectionFilter_new)
  * *[.view.apply(element)](#niclabs.insight.filter.SelectionFilter.view.apply) ⇒ <code>boolean</code>*
  * [.Option](#niclabs.insight.filter.SelectionFilter.Option) : <code>Object</code>

<a name="new_niclabs.insight.filter.SelectionFilter_new"></a>
###### new SelectionFilter(dashboard, options)
Construct a selection filter for the dashboard

A selection filter will be visualized as a `<select>`
HTML element, and calls to apply will pass the call to the appropriate
filtering function according to the selected option


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this filter belongs to |
| options | <code>Object</code> | configuration options for the filter |
| options.description | <code>string</code> | description for this filter to use as default option of the select |
| options.options | <code>[Array.&lt;Option&gt;](#niclabs.insight.filter.SelectionFilter.Option)</code> | list of options for the filter |

<a name="niclabs.insight.filter.SelectionFilter.view.apply"></a>
###### *SelectionFilter.view.apply(element) ⇒ <code>boolean</code>*
Apply the filter to a data element

**Kind**: static abstract method of <code>[SelectionFilter](#niclabs.insight.filter.SelectionFilter)</code>  
**Returns**: <code>boolean</code> - - true if the data element passes the filter  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | data element to evaluate |

<a name="niclabs.insight.filter.SelectionFilter.Option"></a>
###### SelectionFilter.Option : <code>Object</code>
Selection filter option

**Kind**: static typedef of <code>[SelectionFilter](#niclabs.insight.filter.SelectionFilter)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | name for the option of the filter |
| filter | <code>[filter](#niclabs.insight.Filters..filter)</code> | callback to filter the data |

<a name="niclabs.insight.info"></a>
#### insight.info : <code>object</code>
Contains the definitions for the information blocks supported by insight

**Kind**: static namespace of <code>[insight](#niclabs.insight)</code>  

  * [.info](#niclabs.insight.info) : <code>object</code>
    * [.Block](#niclabs.insight.info.Block)
      * [new Block(dashboard, options)](#new_niclabs.insight.info.Block_new)
      * [.id](#niclabs.insight.info.Block.id) : <code>string</code>
      * [.element](#niclabs.insight.info.Block.element) : <code>Element</code>
      * [.$](#niclabs.insight.info.Block.$) : <code>jQuery</code>
      * [.layer](#niclabs.insight.info.Block.layer) : <code>jQuery</code>
      * [.content](#niclabs.insight.info.Block.content) : <code>jQuery</code>
      * [.data](#niclabs.insight.info.Block.data) ⇒ <code>Object</code>
      * [.remove()](#niclabs.insight.info.Block.remove)
      * [.__data__([data], value)](#niclabs.insight.info.Block.__data__)
      * *[.refresh([data])](#niclabs.insight.info.Block.refresh)*
    * [.ChartistBlock](#niclabs.insight.info.ChartistBlock) ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
      * [new ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock_new)
      * [.Chartist](#niclabs.insight.info.ChartistBlock.Chartist) : <code>Object</code>
    * [.SummaryBlock](#niclabs.insight.info.SummaryBlock) ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
      * [new SummaryBlock(dashboard, options)](#new_niclabs.insight.info.SummaryBlock_new)

<a name="niclabs.insight.info.Block"></a>
##### info.Block
**Kind**: static class of <code>[info](#niclabs.insight.info)</code>  

* [.Block](#niclabs.insight.info.Block)
  * [new Block(dashboard, options)](#new_niclabs.insight.info.Block_new)
  * [.id](#niclabs.insight.info.Block.id) : <code>string</code>
  * [.element](#niclabs.insight.info.Block.element) : <code>Element</code>
  * [.$](#niclabs.insight.info.Block.$) : <code>jQuery</code>
  * [.layer](#niclabs.insight.info.Block.layer) : <code>jQuery</code>
  * [.content](#niclabs.insight.info.Block.content) : <code>jQuery</code>
  * [.data](#niclabs.insight.info.Block.data) ⇒ <code>Object</code>
  * [.remove()](#niclabs.insight.info.Block.remove)
  * [.__data__([data], value)](#niclabs.insight.info.Block.__data__)
  * *[.refresh([data])](#niclabs.insight.info.Block.refresh)*

<a name="new_niclabs.insight.info.Block_new"></a>
###### new Block(dashboard, options)
Construct a information block


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | dashboard to which the block belongs to |
| options | <code>Object</code> |  | configuration options for the block |
| options.id | <code>string</code> |  | html identifier for the block |
| [options.title] | <code>string</code> |  | title for the block |
| [options.closable] | <code>boolean</code> | <code>true</code> | make the block closable |
| [options.movable] | <code>boolean</code> | <code>true</code> | make the block movable |
| [options.data] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> &#124; <code>function</code> &#124; <code>String</code> |  | data for the block,  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')  or a url where to get the data. If a layer is provided, events from the layer ([niclabs.insight.MapView#map_element_selected](niclabs.insight.MapView#map_element_selected),  [niclabs.insight.layer.Layer#layer_sumary](niclabs.insight.layer.Layer#layer_sumary)) will update the data in the block. If no data is provided, it is assumed  that all layers affect the block and events from all layers will update the block data. If data depends on a layer  options.defaults can be used to set the default data |
| options.preprocess | <code>function</code> |  | function to apply on the data (either from an url or a layer) before refreshing the block |
| [options.defaults] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> |  | when the data depends on a layer, defaults sets the initial data to show  in the block |

<a name="niclabs.insight.info.Block.id"></a>
###### Block.id : <code>string</code>
id of the block

**Kind**: static property of <code>[Block](#niclabs.insight.info.Block)</code>  
<a name="niclabs.insight.info.Block.element"></a>
###### Block.element : <code>Element</code>
HTML DOM element for the block container

**Kind**: static property of <code>[Block](#niclabs.insight.info.Block)</code>  
<a name="niclabs.insight.info.Block.$"></a>
###### Block.$ : <code>jQuery</code>
jQuery object for info block container

**Kind**: static property of <code>[Block](#niclabs.insight.info.Block)</code>  
<a name="niclabs.insight.info.Block.layer"></a>
###### Block.layer : <code>jQuery</code>
Layer id

**Kind**: static property of <code>[Block](#niclabs.insight.info.Block)</code>  
<a name="niclabs.insight.info.Block.content"></a>
###### Block.content : <code>jQuery</code>
jQuery element for the content container

The content of the block is the HTML container that
comes after the block title

**Kind**: static property of <code>[Block](#niclabs.insight.info.Block)</code>  
<a name="niclabs.insight.info.Block.data"></a>
###### Block.data ⇒ <code>Object</code>
Set/get the data for the block

**Kind**: static property of <code>[Block](#niclabs.insight.info.Block)</code>  
**Returns**: <code>Object</code> - the current data in the block or the url for the data if the data has not been loaded yet  

| Param | Type | Description |
| --- | --- | --- |
| [options.data] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> &#124; <code>function</code> &#124; <code>String</code> | data for the block,  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')  or a url where to get the data. If a layer is provided, events from the layer ([niclabs.insight.MapView#map_element_selected](niclabs.insight.MapView#map_element_selected),  [niclabs.insight.layer.Layer#layer_sumary](niclabs.insight.layer.Layer#layer_sumary)) will update the data in the block. If no data is provided, it is assumed  that all layers affect the block and events from all layers will update the block data. If data depends on a layer  options.defaults can be used to set the default data. |

<a name="niclabs.insight.info.Block.remove"></a>
###### Block.remove()
Remove the block from the dashboard.
This method triggers an event to alert all elements of the
dashboard of the block removal

**Kind**: static method of <code>[Block](#niclabs.insight.info.Block)</code>  
<a name="niclabs.insight.info.Block.__data__"></a>
###### Block.__data__([data], value)
Set/get the internal data value.

**Kind**: static method of <code>[Block](#niclabs.insight.info.Block)</code>  
**Access:** protected  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> | data for the block |
| value | <code>Object</code> | for the internal data |

<a name="niclabs.insight.info.Block.refresh"></a>
###### *Block.refresh([data])*
Refresh the block using the provided data

**Kind**: static abstract method of <code>[Block](#niclabs.insight.info.Block)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | data to refresh |

<a name="niclabs.insight.info.ChartistBlock"></a>
##### info.ChartistBlock ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
**Kind**: static class of <code>[info](#niclabs.insight.info)</code>  
**Extends:** <code>[Block](#niclabs.insight.info.Block)</code>  

* [.ChartistBlock](#niclabs.insight.info.ChartistBlock) ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
  * [new ChartistBlock(dashboard, constructor, options)](#new_niclabs.insight.info.ChartistBlock_new)
  * [.Chartist](#niclabs.insight.info.ChartistBlock.Chartist) : <code>Object</code>

<a name="new_niclabs.insight.info.ChartistBlock_new"></a>
###### new ChartistBlock(dashboard, constructor, options)
Construct a new chartist information block

For the configuration options see [http://gionkunz.github.io/chartist-js/](http://gionkunz.github.io/chartist-js/)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | parent dashboard for the block |
| constructor | <code>Object</code> |  | chartist object to use as constructor |
| options | <code>Object</code> |  | configuration options for the block |
| options.id | <code>string</code> |  | html identifier for the block |
| [options.title] | <code>string</code> |  | title for the block |
| options.chartist | <code>[Chartist](#niclabs.insight.info.ChartistBlock.Chartist)</code> |  | chartist configuration |
| [options.closable] | <code>boolean</code> | <code>true</code> | make the block closable |
| [options.movable] | <code>boolean</code> | <code>true</code> | make the block movable |
| [options.data] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> &#124; <code>function</code> &#124; <code>String</code> |  | data for the block,  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')  or a url where to get the data. If a layer is provided, events from the layer ([niclabs.insight.MapView#map_element_selected](niclabs.insight.MapView#map_element_selected),  [niclabs.insight.layer.Layer#layer_sumary](niclabs.insight.layer.Layer#layer_sumary)) will update the data in the block. If no data is provided, it is assumed  that all layers affect the block and events from all layers will update the block data. If data depends on a layer  options.defaults can be used to set the default data |
| options.preprocess | <code>function</code> |  | function to apply on the data (either from an url or a layer) before refreshing the block |
| [options.defaults] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> |  | when the data depends on a layer, defaults sets the initial data to show  in the block |

<a name="niclabs.insight.info.ChartistBlock.Chartist"></a>
###### ChartistBlock.Chartist : <code>Object</code>
Configuration options for chartist charts

**Kind**: static typedef of <code>[ChartistBlock](#niclabs.insight.info.ChartistBlock)</code>  

| Param | Type | Description |
| --- | --- | --- |
| class | <code>Object</code> | chartist css class |
| labels | <code>Object</code> | chart labels |
| [options] | <code>Object</code> | chartist options |
| [responsiveOptions] | <code>Object</code> | chartist responsive options |

<a name="niclabs.insight.info.SummaryBlock"></a>
##### info.SummaryBlock ⇐ <code>[Block](#niclabs.insight.info.Block)</code>
**Kind**: static class of <code>[info](#niclabs.insight.info)</code>  
**Extends:** <code>[Block](#niclabs.insight.info.Block)</code>  
<a name="new_niclabs.insight.info.SummaryBlock_new"></a>
###### new SummaryBlock(dashboard, options)
Construct a new summary information block
TODO: describe what is a summary information block


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | parent dashboard for the block |
| options | <code>Object</code> |  | configuration options for the block |
| options.id | <code>string</code> |  | html identifier for the block |
| [options.title] | <code>string</code> |  | title for the block |
| [options.closable] | <code>boolean</code> | <code>true</code> | make the block closable |
| [options.movable] | <code>boolean</code> | <code>true</code> | make the block movable |
| [options.data] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> &#124; <code>function</code> &#124; <code>String</code> |  | data for the block,  it can be an object or a list of objects, a callable that returns the data for the block, a layer id (preceded by '#')  or a url where to get the data. If a layer is provided, events from the layer ([niclabs.insight.MapView#map_element_selected](niclabs.insight.MapView#map_element_selected),  [niclabs.insight.layer.Layer#layer_sumary](niclabs.insight.layer.Layer#layer_sumary)) will update the data in the block. If no data is provided, it is assumed  that all layers affect the block and events from all layers will update the block data. If data depends on a layer  options.defaults can be used to set the default data |
| options.preprocess | <code>function</code> |  | function to apply on the data (either from an url or a layer) before refreshing the block |
| [options.defaults] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> |  | when the data depends on a layer, defaults sets the initial data to show  in the block |

<a name="niclabs.insight.layer"></a>
#### insight.layer : <code>object</code>
Visualization layers for the dashboard

**Kind**: static namespace of <code>[insight](#niclabs.insight)</code>  

  * [.layer](#niclabs.insight.layer) : <code>object</code>
    * [.DiagramLayer](#niclabs.insight.layer.DiagramLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
      * [new DiagramLayer(dashboard, options)](#new_niclabs.insight.layer.DiagramLayer_new)
      * _instance_
        * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
        * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
      * _static_
        * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.DiagramLayer.layer.draw)
        * [.layer.clear()](#niclabs.insight.layer.DiagramLayer.layer.clear)
        * [.layer.filter(fn)](#niclabs.insight.layer.DiagramLayer.layer.filter)
    * [.GridLayer](#niclabs.insight.layer.GridLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
      * [new GridLayer(dashboard, options)](#new_niclabs.insight.layer.GridLayer_new)
      * _instance_
        * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
        * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
      * _static_
        * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.GridLayer.layer.draw)
        * [.layer.clear()](#niclabs.insight.layer.GridLayer.layer.clear)
        * [.layer.filter(fn)](#niclabs.insight.layer.GridLayer.layer.filter)
    * [.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
      * [new HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer_new)
      * _instance_
        * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
        * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
      * _static_
        * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
        * [.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
        * [.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)
    * [.Layer](#niclabs.insight.layer.Layer)
      * [new Layer(dashboard, options)](#new_niclabs.insight.layer.Layer_new)
      * _instance_
        * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
        * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
      * _static_
        * [.id](#niclabs.insight.layer.Layer.id) : <code>string</code>
        * [.name](#niclabs.insight.layer.Layer.name) : <code>string</code>
        * [.data([obj])](#niclabs.insight.layer.Layer.data) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
        * [.load()](#niclabs.insight.layer.Layer.load)
        * *[.draw(data)](#niclabs.insight.layer.Layer.draw)*
        * *[.filter(fn)](#niclabs.insight.layer.Layer.filter)*
        * *[.clear()](#niclabs.insight.layer.Layer.clear)*
    * [.MarkerLayer](#niclabs.insight.layer.MarkerLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
      * [new MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer_new)
      * _instance_
        * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
        * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
      * _static_
        * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
        * [.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
        * [.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)

<a name="niclabs.insight.layer.DiagramLayer"></a>
##### layer.DiagramLayer ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
**Kind**: static class of <code>[layer](#niclabs.insight.layer)</code>  
**Extends:** <code>[Layer](#niclabs.insight.layer.Layer)</code>  

* [.DiagramLayer](#niclabs.insight.layer.DiagramLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
  * [new DiagramLayer(dashboard, options)](#new_niclabs.insight.layer.DiagramLayer_new)
  * _instance_
    * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
    * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
  * _static_
    * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.DiagramLayer.layer.draw)
    * [.layer.clear()](#niclabs.insight.layer.DiagramLayer.layer.clear)
    * [.layer.filter(fn)](#niclabs.insight.layer.DiagramLayer.layer.filter)

<a name="new_niclabs.insight.layer.DiagramLayer_new"></a>
###### new DiagramLayer(dashboard, options)
Construct a new diagram layer


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this layer belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.id | <code>string</code> | identifier for the layer |
| options.data | <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> | uri or data array for the layer |
| [options.diagram] | <code>Object</code> | options for the diagram |

<a name="niclabs.insight.layer.Layer#event_layer_data"></a>
###### "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Kind**: event emitted by <code>[DiagramLayer](#niclabs.insight.layer.DiagramLayer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Array.&lt;Object&gt;</code> | new data array |

<a name="niclabs.insight.layer.Layer#event_layer_sumary"></a>
###### "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Kind**: event emitted by <code>[DiagramLayer](#niclabs.insight.layer.DiagramLayer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Object</code> | summarized data |

<a name="niclabs.insight.layer.DiagramLayer.layer.draw"></a>
###### DiagramLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the diagram according to the internal data on the map

**Kind**: static method of <code>[DiagramLayer](#niclabs.insight.layer.DiagramLayer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | data to draw |
| data[].lat | <code>float</code> | latitude for the marker |
| data[].lng | <code>float</code> | longitude for the marker |
| [data[].description] | <code>string</code> | description for the marker |

<a name="niclabs.insight.layer.DiagramLayer.layer.clear"></a>
###### DiagramLayer.layer.clear()
Clear the diagram from the map

**Kind**: static method of <code>[DiagramLayer](#niclabs.insight.layer.DiagramLayer)</code>  
<a name="niclabs.insight.layer.DiagramLayer.layer.filter"></a>
###### DiagramLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Kind**: static method of <code>[DiagramLayer](#niclabs.insight.layer.DiagramLayer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>niclabs.insight.layer.Layer~Filter</code> | filtering function |

<a name="niclabs.insight.layer.GridLayer"></a>
##### layer.GridLayer ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
**Kind**: static class of <code>[layer](#niclabs.insight.layer)</code>  
**Extends:** <code>[Layer](#niclabs.insight.layer.Layer)</code>  

* [.GridLayer](#niclabs.insight.layer.GridLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
  * [new GridLayer(dashboard, options)](#new_niclabs.insight.layer.GridLayer_new)
  * _instance_
    * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
    * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
  * _static_
    * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.GridLayer.layer.draw)
    * [.layer.clear()](#niclabs.insight.layer.GridLayer.layer.clear)
    * [.layer.filter(fn)](#niclabs.insight.layer.GridLayer.layer.filter)

<a name="new_niclabs.insight.layer.GridLayer_new"></a>
###### new GridLayer(dashboard, options)
Construct a new grid Layer


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this layer belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.id | <code>string</code> | identifier for the layer |
| options.data | <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> | uri or data array for the layer |
| [options.grid] | <code>Object</code> | options for the grid |

<a name="niclabs.insight.layer.Layer#event_layer_data"></a>
###### "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Kind**: event emitted by <code>[GridLayer](#niclabs.insight.layer.GridLayer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Array.&lt;Object&gt;</code> | new data array |

<a name="niclabs.insight.layer.Layer#event_layer_sumary"></a>
###### "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Kind**: event emitted by <code>[GridLayer](#niclabs.insight.layer.GridLayer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Object</code> | summarized data |

<a name="niclabs.insight.layer.GridLayer.layer.draw"></a>
###### GridLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the grid according to the internal data on the map

**Kind**: static method of <code>[GridLayer](#niclabs.insight.layer.GridLayer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | data to draw |
| data[].lat | <code>float</code> | latitude for the marker |
| data[].lng | <code>float</code> | longitude for the marker |
| [data[].description] | <code>string</code> | description for the marker |

<a name="niclabs.insight.layer.GridLayer.layer.clear"></a>
###### GridLayer.layer.clear()
Clear the grid from the map

**Kind**: static method of <code>[GridLayer](#niclabs.insight.layer.GridLayer)</code>  
<a name="niclabs.insight.layer.GridLayer.layer.filter"></a>
###### GridLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Kind**: static method of <code>[GridLayer](#niclabs.insight.layer.GridLayer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>niclabs.insight.layer.Layer~Filter</code> | filtering function |

<a name="niclabs.insight.layer.HeatmapLayer"></a>
##### layer.HeatmapLayer ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
**Kind**: static class of <code>[layer](#niclabs.insight.layer)</code>  
**Extends:** <code>[Layer](#niclabs.insight.layer.Layer)</code>  

* [.HeatmapLayer](#niclabs.insight.layer.HeatmapLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
  * [new HeatmapLayer(dashboard, options)](#new_niclabs.insight.layer.HeatmapLayer_new)
  * _instance_
    * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
    * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
  * _static_
    * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.HeatmapLayer.layer.draw)
    * [.layer.clear()](#niclabs.insight.layer.HeatmapLayer.layer.clear)
    * [.layer.filter(fn)](#niclabs.insight.layer.HeatmapLayer.layer.filter)

<a name="new_niclabs.insight.layer.HeatmapLayer_new"></a>
###### new HeatmapLayer(dashboard, options)
Construct a new heatmap layer


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this layer belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.id | <code>string</code> | identifier for the layer |
| options.data | <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> | uri or data array for the layer |
| [options.heatmap] | <code>Object</code> | options for the heatmap |

<a name="niclabs.insight.layer.Layer#event_layer_data"></a>
###### "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Kind**: event emitted by <code>[HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Array.&lt;Object&gt;</code> | new data array |

<a name="niclabs.insight.layer.Layer#event_layer_sumary"></a>
###### "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Kind**: event emitted by <code>[HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Object</code> | summarized data |

<a name="niclabs.insight.layer.HeatmapLayer.layer.draw"></a>
###### HeatmapLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the heatmap according to the internal data on the map

**Kind**: static method of <code>[HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | data to draw |
| data[].lat | <code>float</code> | latitude for the marker |
| data[].lng | <code>float</code> | longitude for the marker |
| [data[].description] | <code>string</code> | description for the marker |

<a name="niclabs.insight.layer.HeatmapLayer.layer.clear"></a>
###### HeatmapLayer.layer.clear()
Clear the heatmap from the map

**Kind**: static method of <code>[HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)</code>  
<a name="niclabs.insight.layer.HeatmapLayer.layer.filter"></a>
###### HeatmapLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Kind**: static method of <code>[HeatmapLayer](#niclabs.insight.layer.HeatmapLayer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>niclabs.insight.layer.Layer~Filter</code> | filtering function |

<a name="niclabs.insight.layer.Layer"></a>
##### layer.Layer
**Kind**: static class of <code>[layer](#niclabs.insight.layer)</code>  

* [.Layer](#niclabs.insight.layer.Layer)
  * [new Layer(dashboard, options)](#new_niclabs.insight.layer.Layer_new)
  * _instance_
    * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
    * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
  * _static_
    * [.id](#niclabs.insight.layer.Layer.id) : <code>string</code>
    * [.name](#niclabs.insight.layer.Layer.name) : <code>string</code>
    * [.data([obj])](#niclabs.insight.layer.Layer.data) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
    * [.load()](#niclabs.insight.layer.Layer.load)
    * *[.draw(data)](#niclabs.insight.layer.Layer.draw)*
    * *[.filter(fn)](#niclabs.insight.layer.Layer.filter)*
    * *[.clear()](#niclabs.insight.layer.Layer.clear)*

<a name="new_niclabs.insight.layer.Layer_new"></a>
###### new Layer(dashboard, options)
Construct a layer

A layer provides a link between a data source and a visualization on the map.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | dashboard that this layer belongs to |
| options | <code>Object</code> |  | configuration options for the layer |
| options.id | <code>string</code> |  | identifier for the layer |
| [options.name] | <code>string</code> | <code>&quot;options.id&quot;</code> | name for the layer in the filter bar |
| options.data | <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> |  | uri or data array for the layer |
| [options.summary] | <code>Object</code> &#124; <code>function</code> |  | summary data |

<a name="niclabs.insight.layer.Layer#event_layer_data"></a>
###### "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Kind**: event emitted by <code>[Layer](#niclabs.insight.layer.Layer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Array.&lt;Object&gt;</code> | new data array |

<a name="niclabs.insight.layer.Layer#event_layer_sumary"></a>
###### "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Kind**: event emitted by <code>[Layer](#niclabs.insight.layer.Layer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Object</code> | summarized data |

<a name="niclabs.insight.layer.Layer.id"></a>
###### Layer.id : <code>string</code>
id of the layer

**Kind**: static property of <code>[Layer](#niclabs.insight.layer.Layer)</code>  
<a name="niclabs.insight.layer.Layer.name"></a>
###### Layer.name : <code>string</code>
Name for the layer

**Kind**: static property of <code>[Layer](#niclabs.insight.layer.Layer)</code>  
<a name="niclabs.insight.layer.Layer.data"></a>
###### Layer.data([obj]) ⇒ <code>string</code> &#124; <code>Array.&lt;Object&gt;</code>
Set/get the data for the layer

If a new source for the data is provided, this method updates the internal
data and reloads the layer by calling [load](#niclabs.insight.layer.Layer.load)

**Kind**: static method of <code>[Layer](#niclabs.insight.layer.Layer)</code>  
**Returns**: <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> - data source for the layer if the data has not been loaded yet or object array if the
 data has been loaded  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> | optional new data source or data array for the layer |

<a name="niclabs.insight.layer.Layer.load"></a>
###### Layer.load()
Load the data from the layer and redraw

If data provided as configuration to the layer is a URL, this methods loads the data from the URL and
redraws the layer (invoking [clear](#niclabs.insight.layer.Layer.clear) and [draw](#niclabs.insight.layer.Layer.draw))
when the content is available

**Kind**: static method of <code>[Layer](#niclabs.insight.layer.Layer)</code>  
<a name="niclabs.insight.layer.Layer.draw"></a>
###### *Layer.draw(data)*
Draw the layer on the map.

This method must be overriden by the implementing layers

**Kind**: static abstract method of <code>[Layer](#niclabs.insight.layer.Layer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | data to use for drawing the layer |

<a name="niclabs.insight.layer.Layer.filter"></a>
###### *Layer.filter(fn)*
Filter the layer according to the provided function.

This method must be overriden by the implementing layers

**Kind**: static abstract method of <code>[Layer](#niclabs.insight.layer.Layer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>niclabs.insight.layer.Layer~Filter</code> | filtering function |

<a name="niclabs.insight.layer.Layer.clear"></a>
###### *Layer.clear()*
Clear the layer changes on the map. This method must be
overriden by implementing layers

**Kind**: static abstract method of <code>[Layer](#niclabs.insight.layer.Layer)</code>  
<a name="niclabs.insight.layer.MarkerLayer"></a>
##### layer.MarkerLayer ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
**Kind**: static class of <code>[layer](#niclabs.insight.layer)</code>  
**Extends:** <code>[Layer](#niclabs.insight.layer.Layer)</code>  

* [.MarkerLayer](#niclabs.insight.layer.MarkerLayer) ⇐ <code>[Layer](#niclabs.insight.layer.Layer)</code>
  * [new MarkerLayer(dashboard, options)](#new_niclabs.insight.layer.MarkerLayer_new)
  * _instance_
    * ["layer_data"](#niclabs.insight.layer.Layer#event_layer_data)
    * ["layer_sumary"](#niclabs.insight.layer.Layer#event_layer_sumary)
  * _static_
    * [.layer.draw(data, data[].lat, data[].lng, [data[].description])](#niclabs.insight.layer.MarkerLayer.layer.draw)
    * [.layer.clear()](#niclabs.insight.layer.MarkerLayer.layer.clear)
    * [.layer.filter(fn)](#niclabs.insight.layer.MarkerLayer.layer.filter)

<a name="new_niclabs.insight.layer.MarkerLayer_new"></a>
###### new MarkerLayer(dashboard, options)
Construct a new marker layer


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this layer belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.id | <code>string</code> | identifier for the layer |
| options.data | <code>string</code> &#124; <code>Array.&lt;Object&gt;</code> | uri or data array for the layer |

<a name="niclabs.insight.layer.Layer#event_layer_data"></a>
###### "layer_data"
Event triggered when an update to the layer data (filtering/update) has ocurred

**Kind**: event emitted by <code>[MarkerLayer](#niclabs.insight.layer.MarkerLayer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Array.&lt;Object&gt;</code> | new data array |

<a name="niclabs.insight.layer.Layer#event_layer_sumary"></a>
###### "layer_sumary"
Event triggered when an update to the (filtering/update) has ocurred

The event provides summary data for blocks to show

**Kind**: event emitted by <code>[MarkerLayer](#niclabs.insight.layer.MarkerLayer)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id for the layer to which the data belongs to |
| data | <code>Object</code> | summarized data |

<a name="niclabs.insight.layer.MarkerLayer.layer.draw"></a>
###### MarkerLayer.layer.draw(data, data[].lat, data[].lng, [data[].description])
Draw the markers according to the internal data on the map

**Kind**: static method of <code>[MarkerLayer](#niclabs.insight.layer.MarkerLayer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | data to draw |
| data[].lat | <code>float</code> | latitude for the marker |
| data[].lng | <code>float</code> | longitude for the marker |
| [data[].description] | <code>string</code> | description for the marker |

<a name="niclabs.insight.layer.MarkerLayer.layer.clear"></a>
###### MarkerLayer.layer.clear()
Clear the markers from the map

**Kind**: static method of <code>[MarkerLayer](#niclabs.insight.layer.MarkerLayer)</code>  
<a name="niclabs.insight.layer.MarkerLayer.layer.filter"></a>
###### MarkerLayer.layer.filter(fn)
Filter the layer according to the provided function.

**Kind**: static method of <code>[MarkerLayer](#niclabs.insight.layer.MarkerLayer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>niclabs.insight.layer.Layer~Filter</code> | filtering function |

<a name="niclabs.insight.map"></a>
#### insight.map : <code>object</code>
Map compatibility for the insight dashboard

**Kind**: static namespace of <code>[insight](#niclabs.insight)</code>  

  * [.map](#niclabs.insight.map) : <code>object</code>
    * [.GoogleMap](#niclabs.insight.map.GoogleMap) ⇐ <code>[MapView](#niclabs.insight.MapView)</code>
      * [new GoogleMap(options)](#new_niclabs.insight.map.GoogleMap_new)
      * _instance_
        * ["map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
      * _static_
        * [.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom) ⇒ <code>int</code>
        * [.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>
    * [.GoogleMercator](#niclabs.insight.map.GoogleMercator)
    * [.diagram](#niclabs.insight.map.diagram) : <code>object</code>
      * [.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
        * [new DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram_new)
        * [.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
        * [.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data) : <code>Object</code>
      * [.Diagram](#niclabs.insight.map.diagram.Diagram)
        * [new Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram_new)
        * [.map](#niclabs.insight.map.diagram.Diagram.map) : <code>[MapView](#niclabs.insight.MapView)</code>
        * [.layer](#niclabs.insight.map.diagram.Diagram.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
        * [.clear()](#niclabs.insight.map.diagram.Diagram.clear)
        * [.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)
      * [.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
        * [new VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram_new)
        * [.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
        * [.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data) : <code>Object</code>
      * [.createLines(Positions, Verts)](#niclabs.insight.map.diagram.createLines)
      * [.SplitSegment(p0, p1)](#niclabs.insight.map.diagram.SplitSegment)
      * [.transformMapPositions(data)](#niclabs.insight.map.diagram.transformMapPositions)
    * [.graph](#niclabs.insight.map.graph) : <code>object</code>
      * [.Edge](#niclabs.insight.map.graph.Edge) ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
        * [new Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge_new)
      * [.GraphElement](#niclabs.insight.map.graph.GraphElement)
        * [new GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement_new)
        * [.map](#niclabs.insight.map.graph.GraphElement.map) : <code>[MapView](#niclabs.insight.MapView)</code>
        * [.layer](#niclabs.insight.map.graph.GraphElement.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
        * *[.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement) ⇒*
        * [.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
        * [.clear()](#niclabs.insight.map.graph.GraphElement.clear)
        * [.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible) ⇒ <code>boolean</code>
      * [.Node](#niclabs.insight.map.graph.Node) ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
        * [new Node(dashboard, options)](#new_niclabs.insight.map.graph.Node_new)
    * [.grid](#niclabs.insight.map.grid) : <code>object</code>
      * [.Grid](#niclabs.insight.map.grid.Grid)
        * [new Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid_new)
        * _static_
          * [.map](#niclabs.insight.map.grid.Grid.map) : <code>[MapView](#niclabs.insight.MapView)</code>
          * [.layer](#niclabs.insight.map.grid.Grid.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
          * [.refresh](#niclabs.insight.map.grid.Grid.refresh)
          * *[.tile()](#niclabs.insight.map.grid.Grid.tile) ⇒ <code>[Tile](#niclabs.insight.map.grid.Tile)</code>*
          * [.clear()](#niclabs.insight.map.grid.Grid.clear)
          * [.Data](#niclabs.insight.map.grid.Grid.Data) : <code>Object</code>
        * _inner_
          * [~fill](#niclabs.insight.map.grid.Grid..fill) : <code>function</code>
      * [.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
        * [new HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile_new)
        * [.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
        * [.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
        * [.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
      * [.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
        * [new HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid_new)
      * [.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
        * [new SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid_new)
      * [.SquareTile](#niclabs.insight.map.grid.SquareTile)
        * [new SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile_new)
        * [.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
        * [.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
        * [.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
      * [.Tile](#niclabs.insight.map.grid.Tile)
        * [new Tile()](#new_niclabs.insight.map.grid.Tile_new)
        * *[.origin(i, j)](#niclabs.insight.map.grid.Tile.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>*
        * *[.query(coord)](#niclabs.insight.map.grid.Tile.query) ⇒ <code>Array.&lt;integer&gt;</code>*
        * *[.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>*
        * *[.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw) ⇒ <code>object</code>*
    * [.heatmap](#niclabs.insight.map.heatmap) : <code>object</code>
      * [.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
        * [new Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap_new)
        * [.map](#niclabs.insight.map.heatmap.Heatmap.map) : <code>[MapView](#niclabs.insight.MapView)</code>
        * [.layer](#niclabs.insight.map.heatmap.Heatmap.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
        * [.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)
      * [.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
        * [new PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap_new)
        * [.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
        * [.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data) : <code>Object</code>
      * [.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
        * [new SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap_new)
        * [.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
        * [.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data) : <code>Object</code>
    * [.marker](#niclabs.insight.map.marker) : <code>object</code>
      * [.CircleMarker](#niclabs.insight.map.marker.CircleMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
        * [new CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker_new)
      * [.ImageMarker](#niclabs.insight.map.marker.ImageMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
        * [new ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker_new)
      * [.Marker](#niclabs.insight.map.marker.Marker)
        * [new Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker_new)
        * [.map](#niclabs.insight.map.marker.Marker.map) : <code>[MapView](#niclabs.insight.MapView)</code>
        * [.layer](#niclabs.insight.map.marker.Marker.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
        * *[.marker()](#niclabs.insight.map.marker.Marker.marker) ⇒ <code>google.maps.Marker</code>*
        * [.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
        * [.clear()](#niclabs.insight.map.marker.Marker.clear)
        * [.visible([visible])](#niclabs.insight.map.marker.Marker.visible) ⇒ <code>boolean</code>
      * [.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
        * [new SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker_new)
    * [.LatLng](#niclabs.insight.map.LatLng) : <code>Object</code>
    * [.Point](#niclabs.insight.map.Point) : <code>Object</code>

<a name="niclabs.insight.map.GoogleMap"></a>
##### map.GoogleMap ⇐ <code>[MapView](#niclabs.insight.MapView)</code>
**Kind**: static class of <code>[map](#niclabs.insight.map)</code>  
**Extends:** <code>[MapView](#niclabs.insight.MapView)</code>  

* [.GoogleMap](#niclabs.insight.map.GoogleMap) ⇐ <code>[MapView](#niclabs.insight.MapView)</code>
  * [new GoogleMap(options)](#new_niclabs.insight.map.GoogleMap_new)
  * _instance_
    * ["map_element_selected"](#niclabs.insight.MapView#event_map_element_selected)
  * _static_
    * [.map.zoom([zoom])](#niclabs.insight.map.GoogleMap.map.zoom) ⇒ <code>int</code>
    * [.map.center([lat], [lng])](#niclabs.insight.map.GoogleMap.map.center) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>

<a name="new_niclabs.insight.map.GoogleMap_new"></a>
###### new GoogleMap(options)
Constructor of GoogleMap


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | configuration options for the map |
| [options.zoom] | <code>integer</code> | <code>12</code> | starting zoom level of the map |
| [options.lat] | <code>float</code> | <code>0</code> | latitude for the map center |
| [options.lng] | <code>float</code> | <code>0</code> | lng for the map center |

<a name="niclabs.insight.MapView#event_map_element_selected"></a>
###### "map_element_selected"
Event triggered to notify the dashboard that an element of the map has been pressed

**Kind**: event emitted by <code>[GoogleMap](#niclabs.insight.map.GoogleMap)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| layer | <code>string</code> | id for the layer to which the data belongs to |
| lat | <code>float</code> | latitude for the marker |
| lng | <code>float</code> | latitude for the marker |

<a name="niclabs.insight.map.GoogleMap.map.zoom"></a>
###### GoogleMap.map.zoom([zoom]) ⇒ <code>int</code>
Set/get the zoom level for the map

Overrides the functionality of niclabs.insight.MapView.zoom() by modifying
the underlying google map zoom level as well

**Kind**: static method of <code>[GoogleMap](#niclabs.insight.map.GoogleMap)</code>  
**Returns**: <code>int</code> - zoom level of the map  

| Param | Type | Description |
| --- | --- | --- |
| [zoom] | <code>int</code> | zoom |

<a name="niclabs.insight.map.GoogleMap.map.center"></a>
###### GoogleMap.map.center([lat], [lng]) ⇒ <code>[LatLng](#niclabs.insight.map.LatLng)</code>
Set/get the map center.

Overrides the functionality of [center](#niclabs.insight.MapView.center) by modifying
the underlying google map center as well

**Kind**: static method of <code>[GoogleMap](#niclabs.insight.map.GoogleMap)</code>  
**Returns**: <code>[LatLng](#niclabs.insight.map.LatLng)</code> - coordinates for the map center  

| Param | Type | Description |
| --- | --- | --- |
| [lat] | <code>float</code> | latitude for the map center |
| [lng] | <code>float</code> | longitude for the map center |

<a name="niclabs.insight.map.GoogleMercator"></a>
##### map.GoogleMercator
Defines a mercator projection on the map

Source: [https://developers.google.com/maps/documentation/javascript/examples/map-coordinates](https://developers.google.com/maps/documentation/javascript/examples/map-coordinates)

**Kind**: static mixin of <code>[map](#niclabs.insight.map)</code>  
<a name="niclabs.insight.map.diagram"></a>
##### map.diagram : <code>object</code>
Tools for drawing diagrams on the map. To calculate the spherical voronoi/delaunay
uses the ThirdParty libray delaunayTriangles.js

**Kind**: static namespace of <code>[map](#niclabs.insight.map)</code>  

* [.diagram](#niclabs.insight.map.diagram) : <code>object</code>
  * [.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
    * [new DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram_new)
    * [.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
    * [.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data) : <code>Object</code>
  * [.Diagram](#niclabs.insight.map.diagram.Diagram)
    * [new Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram_new)
    * [.map](#niclabs.insight.map.diagram.Diagram.map) : <code>[MapView](#niclabs.insight.MapView)</code>
    * [.layer](#niclabs.insight.map.diagram.Diagram.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
    * [.clear()](#niclabs.insight.map.diagram.Diagram.clear)
    * [.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)
  * [.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
    * [new VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram_new)
    * [.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
    * [.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data) : <code>Object</code>
  * [.createLines(Positions, Verts)](#niclabs.insight.map.diagram.createLines)
  * [.SplitSegment(p0, p1)](#niclabs.insight.map.diagram.SplitSegment)
  * [.transformMapPositions(data)](#niclabs.insight.map.diagram.transformMapPositions)

<a name="niclabs.insight.map.diagram.DelaunayDiagram"></a>
###### diagram.DelaunayDiagram
**Kind**: static class of <code>[diagram](#niclabs.insight.map.diagram)</code>  

* [.DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)
  * [new DelaunayDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.DelaunayDiagram_new)
  * [.self.clear()](#niclabs.insight.map.diagram.DelaunayDiagram.self.clear)
  * [.Data](#niclabs.insight.map.diagram.DelaunayDiagram.Data) : <code>Object</code>

<a name="new_niclabs.insight.map.diagram.DelaunayDiagram_new"></a>
####### new DelaunayDiagram(dashboard, options)
Draw a delaunay triangulation over the map

In a delaunay triangulation, each data point is a location where the delaunay triangulation
is based on. A delaunay diagram is drawn with the provided configuration.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | dashboard that this diagram belongs to |
| options | <code>Object</code> |  | configuration options for the diagram |
| options.data | <code>[Array.&lt;Data&gt;](#niclabs.insight.map.diagram.DelaunayDiagram.Data)</code> |  | array of points to draw the graph |
| [options.strokeColor] | <code>string</code> | <code>&quot;&#x27;#ff0000&#x27;&quot;</code> | Color for the diagram edges |
| [options.strokeWeight] | <code>float</code> | <code>2</code> | Width for the diagram edges |
| [options.strokeOpacity] | <code>float</code> | <code>1</code> | Opacity for the diagram edges. |

<a name="niclabs.insight.map.diagram.DelaunayDiagram.self.clear"></a>
####### DelaunayDiagram.self.clear()
Clear the map

**Kind**: static method of <code>[DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)</code>  
**Overrides**:   
<a name="niclabs.insight.map.diagram.DelaunayDiagram.Data"></a>
####### DelaunayDiagram.Data : <code>Object</code>
Data point for DelaunayDiagram

**Kind**: static typedef of <code>[DelaunayDiagram](#niclabs.insight.map.diagram.DelaunayDiagram)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>float</code> | latitude for the diagram point |
| lng | <code>float</code> | longitude for the diagram point |
| landmark | <code>string</code> | landmark that the point indicates |

<a name="niclabs.insight.map.diagram.Diagram"></a>
###### diagram.Diagram
**Kind**: static class of <code>[diagram](#niclabs.insight.map.diagram)</code>  

* [.Diagram](#niclabs.insight.map.diagram.Diagram)
  * [new Diagram(dashboard, options)](#new_niclabs.insight.map.diagram.Diagram_new)
  * [.map](#niclabs.insight.map.diagram.Diagram.map) : <code>[MapView](#niclabs.insight.MapView)</code>
  * [.layer](#niclabs.insight.map.diagram.Diagram.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
  * [.clear()](#niclabs.insight.map.diagram.Diagram.clear)
  * [.setMap()](#niclabs.insight.map.diagram.Diagram.setMap)

<a name="new_niclabs.insight.map.diagram.Diagram_new"></a>
####### new Diagram(dashboard, options)
Construct a Diagram over the map


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this diagram belongs to |
| options | <code>Object</code> | configuration options for the diagram |

<a name="niclabs.insight.map.diagram.Diagram.map"></a>
####### Diagram.map : <code>[MapView](#niclabs.insight.MapView)</code>
Map view where the diagram belongs to

**Kind**: static property of <code>[Diagram](#niclabs.insight.map.diagram.Diagram)</code>  
<a name="niclabs.insight.map.diagram.Diagram.layer"></a>
####### Diagram.layer : <code>[Layer](#niclabs.insight.layer.Layer)</code>
Layer to which the diagram belongs to

**Kind**: static property of <code>[Diagram](#niclabs.insight.map.diagram.Diagram)</code>  
<a name="niclabs.insight.map.diagram.Diagram.clear"></a>
####### Diagram.clear()
Clear the diagram from the map

**Kind**: static method of <code>[Diagram](#niclabs.insight.map.diagram.Diagram)</code>  
<a name="niclabs.insight.map.diagram.Diagram.setMap"></a>
####### Diagram.setMap()
Set the map of the diagram.
TODO: can be done better?

**Kind**: static method of <code>[Diagram](#niclabs.insight.map.diagram.Diagram)</code>  
<a name="niclabs.insight.map.diagram.VoronoiDiagram"></a>
###### diagram.VoronoiDiagram
**Kind**: static class of <code>[diagram](#niclabs.insight.map.diagram)</code>  

* [.VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)
  * [new VoronoiDiagram(dashboard, options)](#new_niclabs.insight.map.diagram.VoronoiDiagram_new)
  * [.self.clear()](#niclabs.insight.map.diagram.VoronoiDiagram.self.clear)
  * [.Data](#niclabs.insight.map.diagram.VoronoiDiagram.Data) : <code>Object</code>

<a name="new_niclabs.insight.map.diagram.VoronoiDiagram_new"></a>
####### new VoronoiDiagram(dashboard, options)
Draw a voronoi diagram over the map

In a voronoi diagram, each data point is a location where the voronoi diagram
is based on. A voronoi diagram is drawn with the provided configuration.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | dashboard that this diagram belongs to |
| options | <code>Object</code> |  | configuration options for the diagram |
| options.data | <code>[Array.&lt;Data&gt;](#niclabs.insight.map.diagram.VoronoiDiagram.Data)</code> |  | array of points to draw the graph |
| [options.strokeColor] | <code>string</code> | <code>&quot;&#x27;#ff0000&#x27;&quot;</code> | Color for the diagram edges |
| [options.strokeWeight] | <code>float</code> | <code>2</code> | Width for the diagram edges |
| [options.strokeOpacity] | <code>float</code> | <code>1</code> | Opacity for the diagram edges. |

<a name="niclabs.insight.map.diagram.VoronoiDiagram.self.clear"></a>
####### VoronoiDiagram.self.clear()
Clear the map

**Kind**: static method of <code>[VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)</code>  
**Overrides**:   
<a name="niclabs.insight.map.diagram.VoronoiDiagram.Data"></a>
####### VoronoiDiagram.Data : <code>Object</code>
Data point for VoronoiDiagram

**Kind**: static typedef of <code>[VoronoiDiagram](#niclabs.insight.map.diagram.VoronoiDiagram)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>float</code> | latitude for the diagram point |
| lng | <code>float</code> | longitude for the diagram point |
| landmark | <code>string</code> | landmark that the point indicates |

<a name="niclabs.insight.map.diagram.createLines"></a>
###### diagram.createLines(Positions, Verts)
Postprocess the delaunay/voronoi diagram output. Returns an array of
objects {lat:, lng:} defining the polylines to be drawn.

**Kind**: static method of <code>[diagram](#niclabs.insight.map.diagram)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Positions | <code>Array.&lt;Object&gt;</code> | Vectors on an unit sphere. |
| Verts | <code>Array.&lt;number&gt;</code> | Index of vertices. |

<a name="niclabs.insight.map.diagram.SplitSegment"></a>
###### diagram.SplitSegment(p0, p1)
Split two vectors. In this way, a line can be draw as a curve.

**Kind**: static method of <code>[diagram](#niclabs.insight.map.diagram)</code>  

| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>Array.&lt;float&gt;</code> | Vector on an unit sphere. |
| p1 | <code>Array.&lt;float&gt;</code> | Vector on an unit sphere. |

<a name="niclabs.insight.map.diagram.transformMapPositions"></a>
###### diagram.transformMapPositions(data)
Preprocess the data for the delaunay/voronoi diagram input.

**Kind**: static method of <code>[diagram](#niclabs.insight.map.diagram)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | data point object {lat:,lng:}. |

<a name="niclabs.insight.map.graph"></a>
##### map.graph : <code>object</code>
Contains all graph definitions for the dashboard

**Kind**: static namespace of <code>[map](#niclabs.insight.map)</code>  

* [.graph](#niclabs.insight.map.graph) : <code>object</code>
  * [.Edge](#niclabs.insight.map.graph.Edge) ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
    * [new Edge(dashboard, options)](#new_niclabs.insight.map.graph.Edge_new)
  * [.GraphElement](#niclabs.insight.map.graph.GraphElement)
    * [new GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement_new)
    * [.map](#niclabs.insight.map.graph.GraphElement.map) : <code>[MapView](#niclabs.insight.MapView)</code>
    * [.layer](#niclabs.insight.map.graph.GraphElement.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
    * *[.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement) ⇒*
    * [.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
    * [.clear()](#niclabs.insight.map.graph.GraphElement.clear)
    * [.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible) ⇒ <code>boolean</code>
  * [.Node](#niclabs.insight.map.graph.Node) ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
    * [new Node(dashboard, options)](#new_niclabs.insight.map.graph.Node_new)

<a name="niclabs.insight.map.graph.Edge"></a>
###### graph.Edge ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
**Kind**: static class of <code>[graph](#niclabs.insight.map.graph)</code>  
**Extends:** <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>  
<a name="new_niclabs.insight.map.graph.Edge_new"></a>
####### new Edge(dashboard, options)
Constructor for graph edges

Graph edge are shown in the map as basic segments, with no style options
TODO: make segment customizable


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this edge belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.adj | <code>string</code> | adjacency matrix of the graph |
| options.layer | <code>string</code> | identifier for the layer that this edge belongs to |
| options.startNode | <code>Object</code> | data for the first node that this edge connects to |
| options.endNode | <code>Object</code> | data for the second node that this edge connects to |
| options.startNode.lat | <code>float</code> | latitude for the first graph node |
| options.startNode.lng | <code>float</code> | longitude for the first graph node |
| options.startNode.landmark | <code>string</code> | landmark that the first node indicates |
| options.endNode.lat | <code>float</code> | latitude for the second graph node |
| options.endNode.lng | <code>float</code> | longitude for the second graph node |
| options.endNode.landmark | <code>string</code> | landmark that the second node indicates |

<a name="niclabs.insight.map.graph.GraphElement"></a>
###### graph.GraphElement
**Kind**: static class of <code>[graph](#niclabs.insight.map.graph)</code>  

* [.GraphElement](#niclabs.insight.map.graph.GraphElement)
  * [new GraphElement(dashboard, options)](#new_niclabs.insight.map.graph.GraphElement_new)
  * [.map](#niclabs.insight.map.graph.GraphElement.map) : <code>[MapView](#niclabs.insight.MapView)</code>
  * [.layer](#niclabs.insight.map.graph.GraphElement.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
  * *[.graphElement()](#niclabs.insight.map.graph.GraphElement.graphElement) ⇒*
  * [.clickable([activate])](#niclabs.insight.map.graph.GraphElement.clickable)
  * [.clear()](#niclabs.insight.map.graph.GraphElement.clear)
  * [.visible([visible])](#niclabs.insight.map.graph.GraphElement.visible) ⇒ <code>boolean</code>

<a name="new_niclabs.insight.map.graph.GraphElement_new"></a>
####### new GraphElement(dashboard, options)
Construct a new GraphElement


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this graph element belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.adj | <code>string</code> | adjacency matrix of the graph |
| options.layer | <code>string</code> | identifier for the layer that this graph element belongs to |
| options.lat | <code>float</code> | latitude for the graph graph element |
| options.lng | <code>float</code> | longitude for the graph graph element |
| options.landmark | <code>string</code> | landmark that the graph element indicates |

<a name="niclabs.insight.map.graph.GraphElement.map"></a>
####### GraphElement.map : <code>[MapView](#niclabs.insight.MapView)</code>
Map view where the map belongs to

**Kind**: static property of <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>  
<a name="niclabs.insight.map.graph.GraphElement.layer"></a>
####### GraphElement.layer : <code>[Layer](#niclabs.insight.layer.Layer)</code>
Layer to which the graphElement belongs to

**Kind**: static property of <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>  
<a name="niclabs.insight.map.graph.GraphElement.graphElement"></a>
####### *GraphElement.graphElement() ⇒*
Return the internal marker object associated with this graphElement

**Kind**: static abstract method of <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>  
**Returns**: internal graphElement  
<a name="niclabs.insight.map.graph.GraphElement.clickable"></a>
####### GraphElement.clickable([activate])
Get/activate clickable status for the graphElement

When clicked the graphElement will trigger a [niclabs.insight.MapView#map_element_selected](niclabs.insight.MapView#map_element_selected) event
with the particular data for the graphElement

**Kind**: static method of <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [activate] | <code>boolean</code> | <code>true</code> | true to make clickable |

<a name="niclabs.insight.map.graph.GraphElement.clear"></a>
####### GraphElement.clear()
Clear the graphElement from the map

**Kind**: static method of <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>  
<a name="niclabs.insight.map.graph.GraphElement.visible"></a>
####### GraphElement.visible([visible]) ⇒ <code>boolean</code>
Set/get the visibility for the graphElement

**Kind**: static method of <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>  
**Returns**: <code>boolean</code> - true if the graphElement is visible  

| Param | Type | Description |
| --- | --- | --- |
| [visible] | <code>boolean</code> | new value for the visibility of the graphElement |

<a name="niclabs.insight.map.graph.Node"></a>
###### graph.Node ⇐ <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>
**Kind**: static class of <code>[graph](#niclabs.insight.map.graph)</code>  
**Extends:** <code>[GraphElement](#niclabs.insight.map.graph.GraphElement)</code>  
<a name="new_niclabs.insight.map.graph.Node_new"></a>
####### new Node(dashboard, options)
Constructor for graph nodes

Graph nodes are shown in the map as basic waypoints, with no style options


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this node belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.adj | <code>string</code> | adjacency matrix of the graph |
| options.layer | <code>string</code> | identifier for the layer that this node belongs to |
| options.lat | <code>float</code> | latitude for the graph node |
| options.lng | <code>float</code> | longitude for the graph node |
| options.landmark | <code>string</code> | landmark that the node indicates |

<a name="niclabs.insight.map.grid"></a>
##### map.grid : <code>object</code>
Contains all grids definitions for the dashboard

**Kind**: static namespace of <code>[map](#niclabs.insight.map)</code>  

* [.grid](#niclabs.insight.map.grid) : <code>object</code>
  * [.Grid](#niclabs.insight.map.grid.Grid)
    * [new Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid_new)
    * _static_
      * [.map](#niclabs.insight.map.grid.Grid.map) : <code>[MapView](#niclabs.insight.MapView)</code>
      * [.layer](#niclabs.insight.map.grid.Grid.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
      * [.refresh](#niclabs.insight.map.grid.Grid.refresh)
      * *[.tile()](#niclabs.insight.map.grid.Grid.tile) ⇒ <code>[Tile](#niclabs.insight.map.grid.Tile)</code>*
      * [.clear()](#niclabs.insight.map.grid.Grid.clear)
      * [.Data](#niclabs.insight.map.grid.Grid.Data) : <code>Object</code>
    * _inner_
      * [~fill](#niclabs.insight.map.grid.Grid..fill) : <code>function</code>
  * [.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
    * [new HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile_new)
    * [.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
    * [.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
    * [.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
  * [.HexagonalGrid](#niclabs.insight.map.grid.HexagonalGrid)
    * [new HexagonalGrid(dashboard, options)](#new_niclabs.insight.map.grid.HexagonalGrid_new)
  * [.SquareGrid](#niclabs.insight.map.grid.SquareGrid)
    * [new SquareGrid(dashboard, options)](#new_niclabs.insight.map.grid.SquareGrid_new)
  * [.SquareTile](#niclabs.insight.map.grid.SquareTile)
    * [new SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile_new)
    * [.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
    * [.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
    * [.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
  * [.Tile](#niclabs.insight.map.grid.Tile)
    * [new Tile()](#new_niclabs.insight.map.grid.Tile_new)
    * *[.origin(i, j)](#niclabs.insight.map.grid.Tile.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>*
    * *[.query(coord)](#niclabs.insight.map.grid.Tile.query) ⇒ <code>Array.&lt;integer&gt;</code>*
    * *[.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>*
    * *[.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw) ⇒ <code>object</code>*

<a name="niclabs.insight.map.grid.Grid"></a>
###### grid.Grid
**Kind**: static class of <code>[grid](#niclabs.insight.map.grid)</code>  

* [.Grid](#niclabs.insight.map.grid.Grid)
  * [new Grid(dashboard, options)](#new_niclabs.insight.map.grid.Grid_new)
  * _static_
    * [.map](#niclabs.insight.map.grid.Grid.map) : <code>[MapView](#niclabs.insight.MapView)</code>
    * [.layer](#niclabs.insight.map.grid.Grid.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
    * [.refresh](#niclabs.insight.map.grid.Grid.refresh)
    * *[.tile()](#niclabs.insight.map.grid.Grid.tile) ⇒ <code>[Tile](#niclabs.insight.map.grid.Tile)</code>*
    * [.clear()](#niclabs.insight.map.grid.Grid.clear)
    * [.Data](#niclabs.insight.map.grid.Grid.Data) : <code>Object</code>
  * _inner_
    * [~fill](#niclabs.insight.map.grid.Grid..fill) : <code>function</code>

<a name="new_niclabs.insight.map.grid.Grid_new"></a>
####### new Grid(dashboard, options)
Construct an grid from the data provided.

The grid divides the visible map into equally sized tiles and draws only those
tiles that have elements below them. If a weight is provided for the the data points
each tile is painted with a function of the point weights inside the tile


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | dashboard that this grid belongs to |
| options | <code>Object</code> |  | configuration options for the grid |
| options.layer | <code>string</code> |  | identifier for the layer that this grid belongs to |
| [options.strokeColor] | <code>string</code> | <code>&quot;&#x27;#000000&#x27;&quot;</code> | color for the stroke of each tile |
| [options.strokeOpacity] | <code>float</code> | <code>0.6</code> | opacity for the stroke (between 0-1) |
| [options.strokeWeight] | <code>integer</code> | <code>2</code> | border weight for the tile |
| [options.fill] | <code>string</code> &#124; <code>[fill](#niclabs.insight.map.grid.Grid..fill)</code> | <code>&quot;&#x27;#ffffff&#x27;&quot;</code> | color for the fill of the tile, 	it can have one of the following values:  	- 'average' calculates the average of the weights in the tile and interpolates that value between the values for options.fill_start and options.fill_end  	- 'median' calculates the median of the weights in the tile and interpolates as average  	- rgb color (starting with '#') is used as a fixed color for all tiles  	- a callback receiving the points in the tile and returning the value for the color |
| [options.fillStart] | <code>string</code> | <code>&quot;&#x27;#ff0000&#x27;&quot;</code> | if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function |
| [options.fillEnd] | <code>string</code> | <code>&quot;&#x27;#00ff00&#x27;&quot;</code> | if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function |
| [options.fillOpacity] | <code>float</code> | <code>0.6</code> | opacity for the fill of the tile |
| options.data | <code>[Array.&lt;Data&gt;](#niclabs.insight.map.grid.Grid.Data)</code> |  | data for the grid |

<a name="niclabs.insight.map.grid.Grid.map"></a>
####### Grid.map : <code>[MapView](#niclabs.insight.MapView)</code>
Map view where the grid belongs to

**Kind**: static property of <code>[Grid](#niclabs.insight.map.grid.Grid)</code>  
<a name="niclabs.insight.map.grid.Grid.layer"></a>
####### Grid.layer : <code>[Layer](#niclabs.insight.layer.Layer)</code>
Layer to which the grid belongs to

**Kind**: static property of <code>[Grid](#niclabs.insight.map.grid.Grid)</code>  
<a name="niclabs.insight.map.grid.Grid.refresh"></a>
####### Grid.refresh
Refresh the grid with the current map bounds

**Kind**: static property of <code>[Grid](#niclabs.insight.map.grid.Grid)</code>  
<a name="niclabs.insight.map.grid.Grid.tile"></a>
####### *Grid.tile() ⇒ <code>[Tile](#niclabs.insight.map.grid.Tile)</code>*
Construct a tile from the options of the grid

**Kind**: static abstract method of <code>[Grid](#niclabs.insight.map.grid.Grid)</code>  
<a name="niclabs.insight.map.grid.Grid.clear"></a>
####### Grid.clear()
Remove the grid from the map

**Kind**: static method of <code>[Grid](#niclabs.insight.map.grid.Grid)</code>  
<a name="niclabs.insight.map.grid.Grid.Data"></a>
####### Grid.Data : <code>Object</code>
Data point for a grid

**Kind**: static typedef of <code>[Grid](#niclabs.insight.map.grid.Grid)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>float</code> | latitude for the data point |
| lng | <code>float</code> | longitude for the data point |
| [weight] | <code>float</code> | weight for the data point (between 0 and 1) |

<a name="niclabs.insight.map.grid.Grid..fill"></a>
####### Grid~fill : <code>function</code>
Fill calculation function. Receives the list of points of a grid tile and
returns a color for that tile

**Kind**: inner typedef of <code>[Grid](#niclabs.insight.map.grid.Grid)</code>  

| Param | Type | Description |
| --- | --- | --- |
| points | <code>[Array.&lt;Data&gt;](#niclabs.insight.map.grid.Grid.Data)</code> |  |
| fill | <code>string</code> | color for the trile |

<a name="niclabs.insight.map.grid.HexagonTile"></a>
###### grid.HexagonTile
**Kind**: static class of <code>[grid](#niclabs.insight.map.grid)</code>  
**Implements:** <code>[Tile](#niclabs.insight.map.grid.Tile)</code>  

* [.HexagonTile](#niclabs.insight.map.grid.HexagonTile)
  * [new HexagonTile(side)](#new_niclabs.insight.map.grid.HexagonTile_new)
  * [.self.origin(i, j)](#niclabs.insight.map.grid.HexagonTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
  * [.self.query(coord)](#niclabs.insight.map.grid.HexagonTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
  * [.self.vertices(coord)](#niclabs.insight.map.grid.HexagonTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>

<a name="new_niclabs.insight.map.grid.HexagonTile_new"></a>
####### new HexagonTile(side)
Define a hexagon tile to be drawn on the map


| Param | Type | Description |
| --- | --- | --- |
| side | <code>float</code> | side (or radius) of the hexagon |

<a name="niclabs.insight.map.grid.HexagonTile.self.origin"></a>
####### HexagonTile.self.origin(i, j) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
Return the origin coordinates of the tile (i,j) in cartesian
coordinate system. This can be passed as a parameter to
[niclabs.insight.grid.Tile.draw()](niclabs.insight.grid.Tile.draw())

**Kind**: static method of <code>[HexagonTile](#niclabs.insight.map.grid.HexagonTile)</code>  
**Returns**: <code>[Point](#niclabs.insight.map.Point)</code> - cartesian origin of the tile  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>integer</code> | horizontal coordinate of the tile |
| j | <code>integer</code> | vertical coordinate of the tile |

<a name="niclabs.insight.map.grid.HexagonTile.self.query"></a>
####### HexagonTile.self.query(coord) ⇒ <code>Array.&lt;integer&gt;</code>
Get the coordinates of the tile [i,j] in the grid that contains the point with
the given coordinates

See: http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800

**Kind**: static method of <code>[HexagonTile](#niclabs.insight.map.grid.HexagonTile)</code>  
**Returns**: <code>Array.&lt;integer&gt;</code> - coordinates of the tile that contains the given point  

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>[Point](#niclabs.insight.map.Point)</code> &#124; <code>[LatLng](#niclabs.insight.map.LatLng)</code> | coordinates of the point in the map |

<a name="niclabs.insight.map.grid.HexagonTile.self.vertices"></a>
####### HexagonTile.self.vertices(coord) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
Get the vertices for the tile with origin in coordinates coord

**Kind**: static method of <code>[HexagonTile](#niclabs.insight.map.grid.HexagonTile)</code>  
**Returns**: <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code> - coordinates of the vertices of the tile  

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>[Point](#niclabs.insight.map.Point)</code> &#124; <code>[LatLng](#niclabs.insight.map.LatLng)</code> | coordinates of the tile in the map |

<a name="niclabs.insight.map.grid.HexagonalGrid"></a>
###### grid.HexagonalGrid
**Kind**: static class of <code>[grid](#niclabs.insight.map.grid)</code>  
<a name="new_niclabs.insight.map.grid.HexagonalGrid_new"></a>
####### new HexagonalGrid(dashboard, options)
Construct an hexagonal grid from the data provided.

The grid divides the visible map into hexagonal tiles of the same size and draws only those
tiles that have elements below them. If a weight is provided for the the data points
each hexagon is painted with a function of the point weights inside the hexagon


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | dashboard that this grid belongs to |
| options | <code>Object</code> |  | configuration options for the grid |
| options.layer | <code>string</code> |  | identifier for the layer that this grid belongs to |
| options.size | <code>integer</code> |  | size for the side of each hexagon (in pixels) |
| [options.strokeColor] | <code>string</code> | <code>&quot;&#x27;#000000&#x27;&quot;</code> | color for the stroke of each hexagon |
| [options.strokeOpacity] | <code>float</code> | <code>0.6</code> | opacity for the stroke (between 0-1) |
| [options.strokeWeight] | <code>integer</code> | <code>2</code> | border weight for the hexagon |
| [options.fill] | <code>string</code> &#124; <code>niclabs.insight.map.grid.HexagonalGrid~fill</code> | <code>&quot;&#x27;#ffffff&#x27;&quot;</code> | color for the fill of the hexagon, 	it can have one of the following values:  	- 'average' calculates the average of the weights in the hexagon and interpolates that value between the values for options.fill_start and options.fill_end  	- 'median' calculates the median of the weights in the hexagon and interpolates as average  	- rgb color (starting with '#') is used as a fixed color for all hexagons  	- a callback receiving the points in the hexagon and returning the value for the color |
| [options.fillStart] | <code>string</code> | <code>&quot;&#x27;#ff0000&#x27;&quot;</code> | if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function |
| [options.fillEnd] | <code>string</code> | <code>&quot;&#x27;#00ff00&#x27;&quot;</code> | if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function |
| [options.fillOpacity] | <code>float</code> | <code>0.6</code> | opacity for the fill of the hexagon |
| options.data | <code>Array.&lt;niclabs.insight.map.grid.HexagonalGrid.Data&gt;</code> |  | data for the layer |

<a name="niclabs.insight.map.grid.SquareGrid"></a>
###### grid.SquareGrid
**Kind**: static class of <code>[grid](#niclabs.insight.map.grid)</code>  
<a name="new_niclabs.insight.map.grid.SquareGrid_new"></a>
####### new SquareGrid(dashboard, options)
Construct a square grid from the data provided.

The grid divides the visible map into square tiles of the same size and draws only those
tiles that have elements below them. If a weight is provided for the the data points
each square is painted with a function of the point weights inside the square


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | dashboard that this grid belongs to |
| options | <code>Object</code> |  | configuration options for the grid |
| options.layer | <code>string</code> |  | identifier for the layer that this grid belongs to |
| options.size | <code>integer</code> |  | size for the side of each square (in pixels) |
| [options.strokeColor] | <code>string</code> | <code>&quot;&#x27;#000000&#x27;&quot;</code> | color for the stroke of each square |
| [options.strokeOpacity] | <code>float</code> | <code>0.6</code> | opacity for the stroke (between 0-1) |
| [options.strokeWeight] | <code>integer</code> | <code>2</code> | border weight for the square |
| [options.fill] | <code>string</code> &#124; <code>niclabs.insight.map.grid.SquareGrid~fill</code> | <code>&quot;&#x27;#ffffff&#x27;&quot;</code> | color for the fill of the square, 	it can have one of the following values:  	- 'average' calculates the average of the weights in the square and interpolates that value between the values for options.fill_start and options.fill_end  	- 'median' calculates the median of the weights in the square and interpolates as average  	- rgb color (starting with '#') is used as a fixed color for all hexagons  	- a callback receiving the points in the square and returning the value for the color |
| [options.fillStart] | <code>string</code> | <code>&quot;&#x27;#ff0000&#x27;&quot;</code> | if 'average' or 'median' are used as options for options.fill, it sets the begining of the interpolation interval for the fill function |
| [options.fillEnd] | <code>string</code> | <code>&quot;&#x27;#00ff00&#x27;&quot;</code> | if 'average' or 'median' are used as options for options.fill, it sets the end of the interpolation interval for the fill function |
| [options.fillOpacity] | <code>float</code> | <code>0.6</code> | opacity for the fill of the square |
| options.data | <code>Array.&lt;niclabs.insight.map.grid.SquareGrid.Data&gt;</code> |  | data for the layer |

<a name="niclabs.insight.map.grid.SquareTile"></a>
###### grid.SquareTile
**Kind**: static class of <code>[grid](#niclabs.insight.map.grid)</code>  
**Implements:** <code>[Tile](#niclabs.insight.map.grid.Tile)</code>  

* [.SquareTile](#niclabs.insight.map.grid.SquareTile)
  * [new SquareTile(side)](#new_niclabs.insight.map.grid.SquareTile_new)
  * [.self.origin(i, j)](#niclabs.insight.map.grid.SquareTile.self.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
  * [.self.query(coord)](#niclabs.insight.map.grid.SquareTile.self.query) ⇒ <code>Array.&lt;integer&gt;</code>
  * [.self.vertices(coord)](#niclabs.insight.map.grid.SquareTile.self.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>

<a name="new_niclabs.insight.map.grid.SquareTile_new"></a>
####### new SquareTile(side)
Define a square tile to be drawn on the map


| Param | Type | Description |
| --- | --- | --- |
| side | <code>float</code> | side (or radius) of the square |

<a name="niclabs.insight.map.grid.SquareTile.self.origin"></a>
####### SquareTile.self.origin(i, j) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>
Return the origin coordinates of the tile (i,j) in cartesian
coordinate system. This can be passed as a parameter to
[niclabs.insight.grid.Tile.draw()](niclabs.insight.grid.Tile.draw())

**Kind**: static method of <code>[SquareTile](#niclabs.insight.map.grid.SquareTile)</code>  
**Returns**: <code>[Point](#niclabs.insight.map.Point)</code> - cartesian origin of the tile  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>integer</code> | horizontal coordinate of the tile |
| j | <code>integer</code> | vertical coordinate of the tile |

<a name="niclabs.insight.map.grid.SquareTile.self.query"></a>
####### SquareTile.self.query(coord) ⇒ <code>Array.&lt;integer&gt;</code>
Get the coordinates of the tile [i,j] in the grid that contains the point with
the given coordinates
            *

**Kind**: static method of <code>[SquareTile](#niclabs.insight.map.grid.SquareTile)</code>  
**Returns**: <code>Array.&lt;integer&gt;</code> - coordinates of the tile that contains the given point  

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>[Point](#niclabs.insight.map.Point)</code> &#124; <code>[LatLng](#niclabs.insight.map.LatLng)</code> | coordinates of the point in the map |

<a name="niclabs.insight.map.grid.SquareTile.self.vertices"></a>
####### SquareTile.self.vertices(coord) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>
Get the vertices for the tile with origin in coordinates coord

**Kind**: static method of <code>[SquareTile](#niclabs.insight.map.grid.SquareTile)</code>  
**Returns**: <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code> - coordinates of the vertices of the tile  

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>[Point](#niclabs.insight.map.Point)</code> &#124; <code>[LatLng](#niclabs.insight.map.LatLng)</code> | coordinates of the tile in the map |

<a name="niclabs.insight.map.grid.Tile"></a>
###### grid.Tile
**Kind**: static class of <code>[grid](#niclabs.insight.map.grid)</code>  

* [.Tile](#niclabs.insight.map.grid.Tile)
  * [new Tile()](#new_niclabs.insight.map.grid.Tile_new)
  * *[.origin(i, j)](#niclabs.insight.map.grid.Tile.origin) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>*
  * *[.query(coord)](#niclabs.insight.map.grid.Tile.query) ⇒ <code>Array.&lt;integer&gt;</code>*
  * *[.vertices(coord)](#niclabs.insight.map.grid.Tile.vertices) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>*
  * *[.draw(coord, map, options)](#niclabs.insight.map.grid.Tile.draw) ⇒ <code>object</code>*

<a name="new_niclabs.insight.map.grid.Tile_new"></a>
####### new Tile()
Construct an abstract tile for the map

Tiles are used to construct grids in the map. A grid divides the world into equally sized tiles
and then draws over the map the tiles that have data inside them. If the boundaries of the map
change, the tile configuration changes.

Since a tile is part of a grid, a tile can have a horizontal and vertical cooordinate indicating their
position in the grid.

<a name="niclabs.insight.map.grid.Tile.origin"></a>
####### *Tile.origin(i, j) ⇒ <code>[Point](#niclabs.insight.map.Point)</code>*
Return the origin coordinates of the tile (i,j) in cartesian
coordinate system. This can be passed as a parameter to
[niclabs.insight.grid.Tile.draw()](niclabs.insight.grid.Tile.draw())

**Kind**: static abstract method of <code>[Tile](#niclabs.insight.map.grid.Tile)</code>  
**Returns**: <code>[Point](#niclabs.insight.map.Point)</code> - cartesian origin of the tile  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>integer</code> | horizontal coordinate of the tile |
| j | <code>integer</code> | vertical coordinate of the tile |

<a name="niclabs.insight.map.grid.Tile.query"></a>
####### *Tile.query(coord) ⇒ <code>Array.&lt;integer&gt;</code>*
Get the coordinates of the tile [i,j] in the grid that contains the point with
the given coordinates

**Kind**: static abstract method of <code>[Tile](#niclabs.insight.map.grid.Tile)</code>  
**Returns**: <code>Array.&lt;integer&gt;</code> - coordinates of the tile that contains the given point  

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>[Point](#niclabs.insight.map.Point)</code> &#124; <code>[LatLng](#niclabs.insight.map.LatLng)</code> | coordinates of the point in the map |

<a name="niclabs.insight.map.grid.Tile.vertices"></a>
####### *Tile.vertices(coord) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code>*
Get the vertices for the tile ith origin in coordinates coord

**Kind**: static abstract method of <code>[Tile](#niclabs.insight.map.grid.Tile)</code>  
**Returns**: <code>[Array.&lt;Point&gt;](#niclabs.insight.map.Point)</code> - coordinates of the vertices of the tile  

| Param | Type | Description |
| --- | --- | --- |
| coord | <code>[Point](#niclabs.insight.map.Point)</code> &#124; <code>[LatLng](#niclabs.insight.map.LatLng)</code> | coordinates of the tile in the map |

<a name="niclabs.insight.map.grid.Tile.draw"></a>
####### *Tile.draw(coord, map, options) ⇒ <code>object</code>*
Draw a tile in the given coordinates on the specified map view

**Kind**: static abstract method of <code>[Tile](#niclabs.insight.map.grid.Tile)</code>  
**Returns**: <code>object</code> - object drawn on the map (e.g.) google maps polygon  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| coord | <code>[Point](#niclabs.insight.map.Point)</code> &#124; <code>[LatLng](#niclabs.insight.map.LatLng)</code> |  | coordinates of the tile in the map |
| map | <code>[MapView](#niclabs.insight.MapView)</code> |  | map view to draw the tile on |
| options | <code>Object</code> |  | configuration options for drawing the tile |
| [options.strokeColor] | <code>string</code> | <code>&quot;&#x27;#000000&#x27;&quot;</code> | color for the stroke of each tile |
| [options.strokeOpacity] | <code>float</code> | <code>0.6</code> | opacity for the stroke (between 0-1) |
| [options.strokeWeight] | <code>integer</code> | <code>2</code> | border weight for the tile |
| [options.fillColor] | <code>string</code> | <code>&quot;&#x27;#ffffff&#x27;&quot;</code> | color for the fill of the tile |
| [options.fillOpacity] | <code>float</code> | <code>0.6</code> | opacity for the fill of the tile |

<a name="niclabs.insight.map.heatmap"></a>
##### map.heatmap : <code>object</code>
Tools for drawing heatmaps on the map

**Kind**: static namespace of <code>[map](#niclabs.insight.map)</code>  

* [.heatmap](#niclabs.insight.map.heatmap) : <code>object</code>
  * [.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
    * [new Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap_new)
    * [.map](#niclabs.insight.map.heatmap.Heatmap.map) : <code>[MapView](#niclabs.insight.MapView)</code>
    * [.layer](#niclabs.insight.map.heatmap.Heatmap.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
    * [.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)
  * [.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
    * [new PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap_new)
    * [.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
    * [.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data) : <code>Object</code>
  * [.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
    * [new SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap_new)
    * [.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
    * [.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data) : <code>Object</code>

<a name="niclabs.insight.map.heatmap.Heatmap"></a>
###### heatmap.Heatmap
**Kind**: static class of <code>[heatmap](#niclabs.insight.map.heatmap)</code>  

* [.Heatmap](#niclabs.insight.map.heatmap.Heatmap)
  * [new Heatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.Heatmap_new)
  * [.map](#niclabs.insight.map.heatmap.Heatmap.map) : <code>[MapView](#niclabs.insight.MapView)</code>
  * [.layer](#niclabs.insight.map.heatmap.Heatmap.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
  * [.clear()](#niclabs.insight.map.heatmap.Heatmap.clear)

<a name="new_niclabs.insight.map.heatmap.Heatmap_new"></a>
####### new Heatmap(dashboard, options)
Construct a heatmap over the map


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this marker belongs to |
| options | <code>Object</code> | configuration options for the heatmap |

<a name="niclabs.insight.map.heatmap.Heatmap.map"></a>
####### Heatmap.map : <code>[MapView](#niclabs.insight.MapView)</code>
Map view where the heatmap belongs to

**Kind**: static property of <code>[Heatmap](#niclabs.insight.map.heatmap.Heatmap)</code>  
<a name="niclabs.insight.map.heatmap.Heatmap.layer"></a>
####### Heatmap.layer : <code>[Layer](#niclabs.insight.layer.Layer)</code>
Layer to which the heatmap belongs to

**Kind**: static property of <code>[Heatmap](#niclabs.insight.map.heatmap.Heatmap)</code>  
<a name="niclabs.insight.map.heatmap.Heatmap.clear"></a>
####### Heatmap.clear()
Clear the heatmap from the map

**Kind**: static method of <code>[Heatmap](#niclabs.insight.map.heatmap.Heatmap)</code>  
<a name="niclabs.insight.map.heatmap.PointHeatmap"></a>
###### heatmap.PointHeatmap
**Kind**: static class of <code>[heatmap](#niclabs.insight.map.heatmap)</code>  

* [.PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)
  * [new PointHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.PointHeatmap_new)
  * [.self.clear()](#niclabs.insight.map.heatmap.PointHeatmap.self.clear)
  * [.Data](#niclabs.insight.map.heatmap.PointHeatmap.Data) : <code>Object</code>

<a name="new_niclabs.insight.map.heatmap.PointHeatmap_new"></a>
####### new PointHeatmap(dashboard, options)
Draw a point base heatmap over the map

In a point based heatmap, each data point is a location with an optional
weight. A heatmap point is drawn for each location with the provided configuration


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this heatmap belongs to |
| options | <code>Object</code> | configuration options for the heatmap |
| options.data | <code>[Array.&lt;Data&gt;](#niclabs.insight.map.heatmap.PointHeatmap.Data)</code> | array of points to draw the heatmap |
| options.dissipating | <code>boolean</code> | Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false. |
| options.gradient | <code>Array.&lt;string&gt;</code> | The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values. |
| options.radius | <code>integer</code> | The radius of influence for each data point, in pixels. |
| options.opacity: | <code>float</code> | The opacity of the heatmap, expressed as a number between 0 and 1. |

<a name="niclabs.insight.map.heatmap.PointHeatmap.self.clear"></a>
####### PointHeatmap.self.clear()
Clear the map

**Kind**: static method of <code>[PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)</code>  
**Overrides**:   
<a name="niclabs.insight.map.heatmap.PointHeatmap.Data"></a>
####### PointHeatmap.Data : <code>Object</code>
Data point for PointHeatmap

**Kind**: static typedef of <code>[PointHeatmap](#niclabs.insight.map.heatmap.PointHeatmap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>float</code> | latitude for the heatmap point |
| lng | <code>float</code> | longitude for the heatmap point |
| [weight] | <code>float</code> | weight for the heatmap point |

<a name="niclabs.insight.map.heatmap.SegmentHeatmap"></a>
###### heatmap.SegmentHeatmap
**Kind**: static class of <code>[heatmap](#niclabs.insight.map.heatmap)</code>  

* [.SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)
  * [new SegmentHeatmap(dashboard, options)](#new_niclabs.insight.map.heatmap.SegmentHeatmap_new)
  * [.self.clear()](#niclabs.insight.map.heatmap.SegmentHeatmap.self.clear)
  * [.Data](#niclabs.insight.map.heatmap.SegmentHeatmap.Data) : <code>Object</code>

<a name="new_niclabs.insight.map.heatmap.SegmentHeatmap_new"></a>
####### new SegmentHeatmap(dashboard, options)
Draw a segment based heatmap over the map

In a segment based heatmap, each data segment is a set of points with an optional
weight. A heatmap segment is drawn for each location array with
the provided configuration.


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this heatmap belongs to |
| options | <code>Object</code> | configuration options for the heatmap |
| options.data | <code>[Array.&lt;Data&gt;](#niclabs.insight.map.heatmap.SegmentHeatmap.Data)</code> | array of segments to draw the heatmap |
| options.dissipating | <code>boolean</code> | Specifies whether heatmaps dissipate on zoom. When dissipating is false the radius of influence increases with zoom level to ensure that the color intensity is preserved at any given geographic location. Defaults to false. |
| options.gradient | <code>Array.&lt;string&gt;</code> | The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors — including RGBA — are supported except for extended named colors and HSL(A) values. |
| options.radius | <code>integer</code> | The radius of influence for each data point, in pixels. |
| options.opacity: | <code>float</code> | The opacity of the heatmap, expressed as a number between 0 and 1. |

<a name="niclabs.insight.map.heatmap.SegmentHeatmap.self.clear"></a>
####### SegmentHeatmap.self.clear()
Clear the map

**Kind**: static method of <code>[SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)</code>  
**Overrides**:   
<a name="niclabs.insight.map.heatmap.SegmentHeatmap.Data"></a>
####### SegmentHeatmap.Data : <code>Object</code>
Data segment for SegmentHeatmap

**Kind**: static typedef of <code>[SegmentHeatmap](#niclabs.insight.map.heatmap.SegmentHeatmap)</code>  

| Param | Type | Description |
| --- | --- | --- |
| coordinates | <code>Array.&lt;Object&gt;</code> | array of [lat,lng] coordinates |
| [weight] | <code>float</code> | weight for the heatmap segment. Defaults to 1. |

<a name="niclabs.insight.map.marker"></a>
##### map.marker : <code>object</code>
Collection of markers available for drawing on the map

**Kind**: static namespace of <code>[map](#niclabs.insight.map)</code>  

* [.marker](#niclabs.insight.map.marker) : <code>object</code>
  * [.CircleMarker](#niclabs.insight.map.marker.CircleMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
    * [new CircleMarker(dashboard, options)](#new_niclabs.insight.map.marker.CircleMarker_new)
  * [.ImageMarker](#niclabs.insight.map.marker.ImageMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
    * [new ImageMarker(dashboard, options)](#new_niclabs.insight.map.marker.ImageMarker_new)
  * [.Marker](#niclabs.insight.map.marker.Marker)
    * [new Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker_new)
    * [.map](#niclabs.insight.map.marker.Marker.map) : <code>[MapView](#niclabs.insight.MapView)</code>
    * [.layer](#niclabs.insight.map.marker.Marker.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
    * *[.marker()](#niclabs.insight.map.marker.Marker.marker) ⇒ <code>google.maps.Marker</code>*
    * [.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
    * [.clear()](#niclabs.insight.map.marker.Marker.clear)
    * [.visible([visible])](#niclabs.insight.map.marker.Marker.visible) ⇒ <code>boolean</code>
  * [.SimpleMarker](#niclabs.insight.map.marker.SimpleMarker) ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
    * [new SimpleMarker(dashboard, options)](#new_niclabs.insight.map.marker.SimpleMarker_new)

<a name="niclabs.insight.map.marker.CircleMarker"></a>
###### marker.CircleMarker ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
**Kind**: static class of <code>[marker](#niclabs.insight.map.marker)</code>  
**Extends:** <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  
<a name="new_niclabs.insight.map.marker.CircleMarker_new"></a>
####### new CircleMarker(dashboard, options)
Constructor for circle markers

Circle markers are drawn in the map as circular waypoints


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> |  | dashboard that this marker belongs to |
| options | <code>Object</code> |  | configuration options for the layer |
| options.layer | <code>string</code> |  | identifier for the layer that this marker belongs to |
| options.lat | <code>float</code> |  | latitude for the marker |
| options.lng | <code>float</code> |  | longitude for the marker |
| options.landmark | <code>string</code> |  | landmark that the marker indicates |
| [options.radius] | <code>number</code> | <code>400</code> | radius for the circle |
| [options.strokeColor] | <code>string</code> | <code>&quot;&#x27;#ff0000&#x27;&quot;</code> | color for the circle perimenter line |
| [options.strokeOpacity] | <code>float</code> | <code>0.8</code> | opacity for the circle perimeter line |
| [options.fillColor] | <code>string</code> | <code>&quot;&#x27;#ff0000&#x27;&quot;</code> | color for the circle filling |
| [options.fillOpacity] | <code>float</code> | <code>0.35</code> | opacity for the circle filling |

<a name="niclabs.insight.map.marker.ImageMarker"></a>
###### marker.ImageMarker ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
**Kind**: static class of <code>[marker](#niclabs.insight.map.marker)</code>  
**Extends:** <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  
<a name="new_niclabs.insight.map.marker.ImageMarker_new"></a>
####### new ImageMarker(dashboard, options)
Constructor for an image marker

An image marker includes an image for each waypoint


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this marker belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.layer | <code>string</code> | identifier for the layer that this marker belongs to |
| options.lat | <code>float</code> | latitude for the marker |
| options.lng | <code>float</code> | longitude for the marker |
| options.landmark | <code>string</code> | landmark that the marker indicates |
| options.src | <code>string</code> | image source |

<a name="niclabs.insight.map.marker.Marker"></a>
###### marker.Marker
**Kind**: static class of <code>[marker](#niclabs.insight.map.marker)</code>  

* [.Marker](#niclabs.insight.map.marker.Marker)
  * [new Marker(dashboard, options)](#new_niclabs.insight.map.marker.Marker_new)
  * [.map](#niclabs.insight.map.marker.Marker.map) : <code>[MapView](#niclabs.insight.MapView)</code>
  * [.layer](#niclabs.insight.map.marker.Marker.layer) : <code>[Layer](#niclabs.insight.layer.Layer)</code>
  * *[.marker()](#niclabs.insight.map.marker.Marker.marker) ⇒ <code>google.maps.Marker</code>*
  * [.clickable([activate])](#niclabs.insight.map.marker.Marker.clickable)
  * [.clear()](#niclabs.insight.map.marker.Marker.clear)
  * [.visible([visible])](#niclabs.insight.map.marker.Marker.visible) ⇒ <code>boolean</code>

<a name="new_niclabs.insight.map.marker.Marker_new"></a>
####### new Marker(dashboard, options)
Construct a new marker


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this marker belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.layer | <code>string</code> | identifier for the layer that this marker belongs to |
| options.lat | <code>float</code> | latitude for the marker |
| options.lng | <code>float</code> | longitude for the marker |
| options.landmark | <code>string</code> | landmark that the marker indicates |

<a name="niclabs.insight.map.marker.Marker.map"></a>
####### Marker.map : <code>[MapView](#niclabs.insight.MapView)</code>
Map view where the map belongs to

**Kind**: static property of <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  
<a name="niclabs.insight.map.marker.Marker.layer"></a>
####### Marker.layer : <code>[Layer](#niclabs.insight.layer.Layer)</code>
Layer to which the marker belongs to

**Kind**: static property of <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  
<a name="niclabs.insight.map.marker.Marker.marker"></a>
####### *Marker.marker() ⇒ <code>google.maps.Marker</code>*
Return the internal marker object associated with this Marker

**Kind**: static abstract method of <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  
**Returns**: <code>google.maps.Marker</code> - internal marker  
<a name="niclabs.insight.map.marker.Marker.clickable"></a>
####### Marker.clickable([activate])
Get/activate clickable status for the marker

When clicked the marker will trigger a [niclabs.insight.MapView#map_element_selected](niclabs.insight.MapView#map_element_selected) event
with the particular data for the marker

**Kind**: static method of <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [activate] | <code>boolean</code> | <code>true</code> | true to make clickable |

<a name="niclabs.insight.map.marker.Marker.clear"></a>
####### Marker.clear()
Clear the marker from the map

**Kind**: static method of <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  
<a name="niclabs.insight.map.marker.Marker.visible"></a>
####### Marker.visible([visible]) ⇒ <code>boolean</code>
Set/get the visibility for the marker

**Kind**: static method of <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  
**Returns**: <code>boolean</code> - true if the marker is visible  

| Param | Type | Description |
| --- | --- | --- |
| [visible] | <code>boolean</code> | new value for the visibility of the marker |

<a name="niclabs.insight.map.marker.SimpleMarker"></a>
###### marker.SimpleMarker ⇐ <code>[Marker](#niclabs.insight.map.marker.Marker)</code>
**Kind**: static class of <code>[marker](#niclabs.insight.map.marker)</code>  
**Extends:** <code>[Marker](#niclabs.insight.map.marker.Marker)</code>  
<a name="new_niclabs.insight.map.marker.SimpleMarker_new"></a>
####### new SimpleMarker(dashboard, options)
Constructor for simple markers

Simple markers are shown in the map as basic waypoints, with no style options


| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | dashboard that this marker belongs to |
| options | <code>Object</code> | configuration options for the layer |
| options.layer | <code>string</code> | identifier for the layer that this marker belongs to |
| options.lat | <code>float</code> | latitude for the marker |
| options.lng | <code>float</code> | longitude for the marker |
| options.landmark | <code>string</code> | landmark that the marker indicates |

<a name="niclabs.insight.map.LatLng"></a>
##### map.LatLng : <code>Object</code>
Object to represent geographic coordinates

**Kind**: static typedef of <code>[map](#niclabs.insight.map)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| lat | <code>float</code> | latitude |
| lng | <code>float</code> | longitude |

<a name="niclabs.insight.map.Point"></a>
##### map.Point : <code>Object</code>
Cartesian coordinates

**Kind**: static typedef of <code>[map](#niclabs.insight.map)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>float</code> | horizontal coordinate |
| y | <code>float</code> | vertical coordinate |

<a name="niclabs.insight.quadtree"></a>
#### insight.quadtree : <code>object</code>
Quadtree implementation

**Kind**: static namespace of <code>[insight](#niclabs.insight)</code>  

  * [.quadtree](#niclabs.insight.quadtree) : <code>object</code>
    * [.Bounds](#niclabs.insight.quadtree.Bounds)
      * [new Bounds(min, max)](#new_niclabs.insight.quadtree.Bounds_new)
      * [.center](#niclabs.insight.quadtree.Bounds.center) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
      * [.min](#niclabs.insight.quadtree.Bounds.min) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
      * [.max](#niclabs.insight.quadtree.Bounds.max) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
      * [.contains(point)](#niclabs.insight.quadtree.Bounds.contains) ⇒ <code>boolean</code>
      * [.intersects(box)](#niclabs.insight.quadtree.Bounds.intersects) ⇒ <code>boolean</code>
    * [.PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)
      * [new PointQuadTree(bounds, [capacity], [depth])](#new_niclabs.insight.quadtree.PointQuadTree_new)
      * [.capacity](#niclabs.insight.quadtree.PointQuadTree.capacity) : <code>integer</code>
      * [.bounds](#niclabs.insight.quadtree.PointQuadTree.bounds) : <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>
      * [.insert(point)](#niclabs.insight.quadtree.PointQuadTree.insert) ⇒ <code>boolean</code>
      * [.query(range)](#niclabs.insight.quadtree.PointQuadTree.query) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.quadtree.Point)</code>
    * [.Point](#niclabs.insight.quadtree.Point) : <code>Object</code>

<a name="niclabs.insight.quadtree.Bounds"></a>
##### quadtree.Bounds
**Kind**: static class of <code>[quadtree](#niclabs.insight.quadtree)</code>  

* [.Bounds](#niclabs.insight.quadtree.Bounds)
  * [new Bounds(min, max)](#new_niclabs.insight.quadtree.Bounds_new)
  * [.center](#niclabs.insight.quadtree.Bounds.center) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
  * [.min](#niclabs.insight.quadtree.Bounds.min) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
  * [.max](#niclabs.insight.quadtree.Bounds.max) : <code>[Point](#niclabs.insight.quadtree.Point)</code>
  * [.contains(point)](#niclabs.insight.quadtree.Bounds.contains) ⇒ <code>boolean</code>
  * [.intersects(box)](#niclabs.insight.quadtree.Bounds.intersects) ⇒ <code>boolean</code>

<a name="new_niclabs.insight.quadtree.Bounds_new"></a>
###### new Bounds(min, max)
Construct an axis aligned bounding box with the corners
at the provided coordinates


| Param | Type | Description |
| --- | --- | --- |
| min | <code>[Point](#niclabs.insight.quadtree.Point)</code> | minimal coordinates of the bounding box (e.g. lower left corner if zero is at the lower left corner of the canvas) |
| max | <code>[Point](#niclabs.insight.quadtree.Point)</code> | maximal coordinates of the bounding box (e.g. upper right corner if zero is at the lower left corner of the canvas) |

<a name="niclabs.insight.quadtree.Bounds.center"></a>
###### Bounds.center : <code>[Point](#niclabs.insight.quadtree.Point)</code>
Center of the bounding box

**Kind**: static property of <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>  
<a name="niclabs.insight.quadtree.Bounds.min"></a>
###### Bounds.min : <code>[Point](#niclabs.insight.quadtree.Point)</code>
Minimal coordinates of the bounding box
(e.g. lower left corner if zero is at the lowest leftmost corner of the canvas)

**Kind**: static property of <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>  
<a name="niclabs.insight.quadtree.Bounds.max"></a>
###### Bounds.max : <code>[Point](#niclabs.insight.quadtree.Point)</code>
Maximal coordinates of the bounding box
(e.g. upper right corner if zero is at the lowest leftmost corner of the canvas)

**Kind**: static property of <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>  
<a name="niclabs.insight.quadtree.Bounds.contains"></a>
###### Bounds.contains(point) ⇒ <code>boolean</code>
Check if this bounding box contains the given point.

As a convention, a bounding box contains all points inside its borders
as well as all the points in the east and south borders.

**Kind**: static method of <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>  
**Returns**: <code>boolean</code> - true if the box contains the point  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>[Point](#niclabs.insight.quadtree.Point)</code> | point to lookup |

<a name="niclabs.insight.quadtree.Bounds.intersects"></a>
###### Bounds.intersects(box) ⇒ <code>boolean</code>
Check if this bounding box intersects the given bounding box

**Kind**: static method of <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>  
**Returns**: <code>boolean</code> - true if the boxes intersect in at least one point  

| Param | Type | Description |
| --- | --- | --- |
| box | <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code> | bounding box to check intersection with |

<a name="niclabs.insight.quadtree.PointQuadTree"></a>
##### quadtree.PointQuadTree
**Kind**: static class of <code>[quadtree](#niclabs.insight.quadtree)</code>  

* [.PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)
  * [new PointQuadTree(bounds, [capacity], [depth])](#new_niclabs.insight.quadtree.PointQuadTree_new)
  * [.capacity](#niclabs.insight.quadtree.PointQuadTree.capacity) : <code>integer</code>
  * [.bounds](#niclabs.insight.quadtree.PointQuadTree.bounds) : <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>
  * [.insert(point)](#niclabs.insight.quadtree.PointQuadTree.insert) ⇒ <code>boolean</code>
  * [.query(range)](#niclabs.insight.quadtree.PointQuadTree.query) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.quadtree.Point)</code>

<a name="new_niclabs.insight.quadtree.PointQuadTree_new"></a>
###### new PointQuadTree(bounds, [capacity], [depth])
Construct a Point Quadtree

See [http://en.wikipedia.org/wiki/Quadtree](http://en.wikipedia.org/wiki/Quadtree)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bounds | <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code> |  | bounding box for the quadtree |
| [capacity] | <code>integer</code> | <code>50</code> | number of points that each node in the quadtree accepts before dividing |
| [depth] | <code>integer</code> | <code>40</code> | max depth of the quadtree |

<a name="niclabs.insight.quadtree.PointQuadTree.capacity"></a>
###### PointQuadTree.capacity : <code>integer</code>
Capacity for the quadtree

**Kind**: static property of <code>[PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)</code>  
<a name="niclabs.insight.quadtree.PointQuadTree.bounds"></a>
###### PointQuadTree.bounds : <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code>
Boundary of the quadtree

**Kind**: static property of <code>[PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)</code>  
<a name="niclabs.insight.quadtree.PointQuadTree.insert"></a>
###### PointQuadTree.insert(point) ⇒ <code>boolean</code>
Insert a new point in the quadtree

**Kind**: static method of <code>[PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)</code>  
**Returns**: <code>boolean</code> - true if the point could be inserted (point belongs in the bounds of the quadtree)  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>[Point](#niclabs.insight.quadtree.Point)</code> | new point to insert |

<a name="niclabs.insight.quadtree.PointQuadTree.query"></a>
###### PointQuadTree.query(range) ⇒ <code>[Array.&lt;Point&gt;](#niclabs.insight.quadtree.Point)</code>
Return all the points in the specified bounding box

**Kind**: static method of <code>[PointQuadTree](#niclabs.insight.quadtree.PointQuadTree)</code>  
**Returns**: <code>[Array.&lt;Point&gt;](#niclabs.insight.quadtree.Point)</code> - list of points in the given range  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>[Bounds](#niclabs.insight.quadtree.Bounds)</code> | spatial range to search |

<a name="niclabs.insight.quadtree.Point"></a>
##### quadtree.Point : <code>Object</code>
A cartesian point

**Kind**: static typedef of <code>[quadtree](#niclabs.insight.quadtree)</code>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>float</code> | horizontal coordinates |
| y | <code>float</code> | vertical coordinates |

<a name="niclabs.insight.handler"></a>
#### insight.handler(name, [kind], [handler]) ⇒ <code>[handler](#niclabs.insight..handler)</code>
Register a handler of a specific insight element ('layer', 'visualization', etc.)
to manage the creation, rendering of a specific part of the UI.

Third-party extensions to the insight need only to register their visualization
elements with this function for the dashboard UI to correctly recognize them
TODO: improve this

**Kind**: static method of <code>[insight](#niclabs.insight)</code>  
**Returns**: <code>[handler](#niclabs.insight..handler)</code> - handler for the registered name  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | name for the handler to return, register |
| [kind] | <code>string</code> | kind for the handler |
| [handler] | <code>[handler](#niclabs.insight..handler)</code> | callback to create the element |

<a name="niclabs.insight.dashboard"></a>
#### insight.dashboard([options]) ⇒ <code>[Dashboard](#niclabs.insight.Dashboard)</code>
Get/construct a [Dashboard](#niclabs.insight.Dashboard)

Returns the dashboard for the namespace if options are not provided

**Kind**: static method of <code>[insight](#niclabs.insight)</code>  
**Returns**: <code>[Dashboard](#niclabs.insight.Dashboard)</code> - dashboard object  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | list of configuration options for the dashboard see [Dashboard](#niclabs.insight.Dashboard) |

**Example**  
```javascript
// Create a map with the info view to the left
var dashboard = niclabs.insight.dashboard({
    'anchor': '#dashboard',
    'layout': 'left'
});
```
<a name="niclabs.insight.info(2)"></a>
#### insight.info([obj]) ⇒ <code>[InfoView](#niclabs.insight.InfoView)</code>
Helper method to assign/get the information view to/from the dashboard

**Kind**: static method of <code>[insight](#niclabs.insight)</code>  
**Returns**: <code>[InfoView](#niclabs.insight.InfoView)</code> - the dashboard information view  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | <code>Object</code> &#124; <code>[InfoView](#niclabs.insight.InfoView)</code> | configuration for the information view or information view object |
| obj.handler | <code>String</code> | name of the handler to construct the info view |

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
#### insight.layer(obj, [activate]) ⇒ <code>niclabs.insight.info.Layer</code>
Helper method to add/get a [Layer](#niclabs.insight.layer.Layer) for the dashboard

A layer acts as a link between a source of data and a visualization on the map

- If a number or string is provided as value for obj, the layer with that id is returned
- If a generic object is provided with the handler defined in the 'handler' property, a new layer
is created using the handler and the layer is added to the list of
layers of the dashboard
- If an object is provided without handler, it is assumed to be a Layer object and added to the
layer list as is.

**Kind**: static method of <code>[insight](#niclabs.insight)</code>  
**Returns**: <code>niclabs.insight.info.Layer</code> - - layer for the provided id  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>string</code> &#124; <code>number</code> &#124; <code>Object</code> &#124; <code>[Layer](#niclabs.insight.layer.Layer)</code> |  | layer id to get or configuration options for the new layer |
| [activate] | <code>boolean</code> | <code>false</code> | if true, set the layer as the active layer of the dashboard |

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
#### insight.map([obj]) ⇒ <code>[MapView](#niclabs.insight.MapView)</code>
Helper method to assign/get the map view to/from the dashboard

**Kind**: static method of <code>[insight](#niclabs.insight)</code>  
**Returns**: <code>[MapView](#niclabs.insight.MapView)</code> - the dashboard map view  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | <code>Object</code> &#124; <code>[MapView](#niclabs.insight.MapView)</code> | configuration for the map view or map view object |
| obj.handler | <code>String</code> | name of the handler to construct the map view |

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
<a name="niclabs.insight..handler"></a>
#### insight~handler : <code>function</code>
Constructs an insight element (visualization, layer, etc.)

**Kind**: inner typedef of <code>[insight](#niclabs.insight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| dashboard | <code>[Dashboard](#niclabs.insight.Dashboard)</code> | to assign to the handler |
| options | <code>Object</code> | configuration options for the handler, depending on the kind |

