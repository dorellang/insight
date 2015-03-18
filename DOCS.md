<a name="CityDashboard"></a>
#CityDashboard
Here goes the documentation for the entire namespace

**Members**

* [CityDashboard](#CityDashboard)
  * [class: CityDashboard.Map](#CityDashboard.Map)
    * [new CityDashboard.Map(options)](#new_CityDashboard.Map)
    * [Map.center([lat], [lng])](#CityDashboard.Map.center)
    * [Map.lat()](#CityDashboard.Map.lat)
    * [Map.lng()](#CityDashboard.Map.lng)
    * [Map.zoom([zoom])](#CityDashboard.Map.zoom)
    * [Map.container()](#CityDashboard.Map.container)
    * [type: Map.Coordinates](#CityDashboard.Map.Coordinates)
  * [class: CityDashboard.GoogleMap](#CityDashboard.GoogleMap)
    * [new CityDashboard.GoogleMap(options)](#new_CityDashboard.GoogleMap)
    * [GoogleMap.map.zoom([zoom])](#CityDashboard.GoogleMap.map.zoom)
    * [GoogleMap.map.center([lat], [lng])](#CityDashboard.GoogleMap.map.center)
  * [class: CityDashboard.Dashboard](#CityDashboard.Dashboard)
    * [new CityDashboard.Dashboard(parameters)](#new_CityDashboard.Dashboard)
  * [class: CityDashboard.FilterBar](#CityDashboard.FilterBar)
    * [new CityDashboard.FilterBar()](#new_CityDashboard.FilterBar)
    * [FilterBar.addFilter(filter)](#CityDashboard.FilterBar.addFilter)

<a name="CityDashboard.Map"></a>
##class: CityDashboard.Map
**Members**

* [class: CityDashboard.Map](#CityDashboard.Map)
  * [new CityDashboard.Map(options)](#new_CityDashboard.Map)
  * [Map.center([lat], [lng])](#CityDashboard.Map.center)
  * [Map.lat()](#CityDashboard.Map.lat)
  * [Map.lng()](#CityDashboard.Map.lng)
  * [Map.zoom([zoom])](#CityDashboard.Map.zoom)
  * [Map.container()](#CityDashboard.Map.container)
  * [type: Map.Coordinates](#CityDashboard.Map.Coordinates)

<a name="new_CityDashboard.Map"></a>
###new CityDashboard.Map(options)
Constructs a new map

**Params**

- options `Object` - configuration options for the map  
  - \[zoom=12\] `integer` - starting zoom level of the map  
  - \[lat=0\] `float` - latitude for the map center  
  - \[lng=0\] `float` - lng for the map center  

<a name="CityDashboard.Map.center"></a>
###Map.center([lat], [lng])
Set/get the map center.
Overriding implementations should modify this method so the
map reflects the new center.

**Params**

- \[lat\] `float` - latitude for the map center  
- \[lng\] `float` - longitude for the map center  

**Returns**: [Coordinates](#CityDashboard.Map.Coordinates) - coordinates for the map center  
<a name="CityDashboard.Map.lat"></a>
###Map.lat()
Get the latitude for the map center

**Returns**: `float` - latitude for the map center  
<a name="CityDashboard.Map.lng"></a>
###Map.lng()
Get the longitude for the map center

**Returns**: `float` - longitude for the map center  
<a name="CityDashboard.Map.zoom"></a>
###Map.zoom([zoom])
Set/get the map zoom level.
Overriding implementations should modify this method so the
map reflects the new zoom.

**Params**

- \[zoom\] `int` - zoom  

**Returns**: `int` - zoom level of the map  
<a name="CityDashboard.Map.container"></a>
###Map.container()
Get the jquery object for the html element of the map

**Returns**: `jQuery` - container for the map  
<a name="CityDashboard.Map.Coordinates"></a>
###type: Map.Coordinates
Object to represent geographic coordinates

**Properties**

- lat `float` - latitude for the map center  
- lng `float` - longitude for the map center  

**Type**: `Object`  
<a name="CityDashboard.GoogleMap"></a>
##class: CityDashboard.GoogleMap
**Extends**: `CityDashboard.Map`  
**Members**

* [class: CityDashboard.GoogleMap](#CityDashboard.GoogleMap)
  * [new CityDashboard.GoogleMap(options)](#new_CityDashboard.GoogleMap)
  * [GoogleMap.map.zoom([zoom])](#CityDashboard.GoogleMap.map.zoom)
  * [GoogleMap.map.center([lat], [lng])](#CityDashboard.GoogleMap.map.center)

<a name="new_CityDashboard.GoogleMap"></a>
###new CityDashboard.GoogleMap(options)
Constructor of GoogleMap

**Params**

- options `Object` - configuration options for the map  
  - \[zoom=12\] `integer` - starting zoom level of the map  
  - \[lat=0\] `float` - latitude for the map center  
  - \[lng=0\] `float` - lng for the map center  

**Extends**: `CityDashboard.Map`  
<a name="CityDashboard.GoogleMap.map.zoom"></a>
###GoogleMap.map.zoom([zoom])
Set/get the zoom level for the map

Overrides the functionality of CityDashboard.Map.zoom() by modifying
the underlying google map zoom level as well

**Params**

- \[zoom\] `int` - zoom  

**Returns**: `int` - zoom level of the map  
<a name="CityDashboard.GoogleMap.map.center"></a>
###GoogleMap.map.center([lat], [lng])
Set/get the map center.

Overrides the functionality of CityDashboard.Map.center() by modifying
the underlying google map center as well

**Params**

- \[lat\] `float` - latitude for the map center  
- \[lng\] `float` - longitude for the map center  

**Returns**: [Coordinates](#CityDashboard.Map.Coordinates) - coordinates for the map center  
<a name="CityDashboard.Dashboard"></a>
##class: CityDashboard.Dashboard
**Members**

* [class: CityDashboard.Dashboard](#CityDashboard.Dashboard)
  * [new CityDashboard.Dashboard(parameters)](#new_CityDashboard.Dashboard)

<a name="new_CityDashboard.Dashboard"></a>
###new CityDashboard.Dashboard(parameters)
Constructor for the dashboard
TODO: documentation missing

**Params**

- parameters `Object` - configuration options for the dashboard  
  - \[layout='none'\] `string` - Dashboard layout, one of ['left', 'right', 'none'], puts the info window to the left, to the right or it removes it  
  - anchor `string` - Required id for anchoring the dashboard  

<a name="CityDashboard.FilterBar"></a>
##class: CityDashboard.FilterBar
**Members**

* [class: CityDashboard.FilterBar](#CityDashboard.FilterBar)
  * [new CityDashboard.FilterBar()](#new_CityDashboard.FilterBar)
  * [FilterBar.addFilter(filter)](#CityDashboard.FilterBar.addFilter)

<a name="new_CityDashboard.FilterBar"></a>
###new CityDashboard.FilterBar()
Defines the behavior of the filter bar of the dashboard

<a name="CityDashboard.FilterBar.addFilter"></a>
###FilterBar.addFilter(filter)
Add a new filter to the filter bar, displayed as a `<select>` object in the UI, it returns the jquery element
of the filter for further customizations

Example:
```javascript
myDashboard.addFilter({
 description: 'Geographic Location', // the empty string is used if not provided
 options: [
     {name: 'More than 20s', filter: function (data) {return data.seconds > 20;}},
     {name: 'Over Equator', filter: function (data) {return data.lat > 0;}},
     {name: 'By Type: a,f,g,e,t,h', filter: function (data) {return "afgeth".indexOf(data['event type'])> 0;}}
 ]
});
```

**Params**

- filter `Object` - configuration for the filter  

**Returns**: `jQuery` - reference to the added element for further customization  
