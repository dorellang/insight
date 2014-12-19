# InfoWindow
An information window.

## Example

``` javascript
var infoWindow = new CityDashboard.InfoWindow({
  'contents': [{
    'visualization': 'summary-viz',
    'data-source': '#myMarker',
    'id': '#summary',
    'properties': {
      'title': 'My Marker Summary'
    }
  }]
});
```

## Constructor

#### InfoWindow( visualizations )
Creates an information window with all the visualizations.

> visualizations - An array of visualization properties.

## Parameters

#### `.visualizations`
  An array of Visualization objects.

---