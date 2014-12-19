# Creating a Dashboard

The goal of this section is to give a brief introduction to citydashboard.js. We will start setting up a map with a two marker.

## What is citydashboard.js?

citydashboard.js is a library that helps create a dashboard intended to be used with maps, especifically with city visualiations.

## Before we start

Before you can use citydashboard.js, you need somewhere to display it.
Save the following HTML to a file on your computer, along with a copy of citydashboard.min.js in the js/ directory, and open it on your browser.

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>My first Dashboard</title>
    <style>
      html,
      body {
        margin: 0;
      }
      #Dashboard {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <!-- GoogleMaps script import goes here -->
    <script src="js/citydashboard.min.js"></script>
    <script>
      //our Javascript code goes here.
    </script>
    <div id="Dashboard"></div>
  </body>
</html>
```

That's all you need. All code below goes into the empty `<script>` tag.

## Creating the Dashboard

A City Dashboard consists on two things: A map and an information window.

citydashboard.js has an easy support of GoogleMaps. You must include the Javascript API of GoogleMaps, and remember to add your developer key.

`<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>`

For more information about the GoogleMaps API and developers key, please visit [Google Developers](https://developers.google.com/maps/documentation/javascript/tutorial?).

Now we can create a map for our visualization.

``` javascript
var map = new CityDashboard.GoogleMap({
  'lat': 48.8583,
  'lng': 2.2944,
  'zoom': 15
});
```
This will set up our map. Let's give a closer look at the configuration parameters. `lat` and `lng` are the map's initial center coordinates, and `zoom` is the map's zoom level.

Now we have a map setted up, but we want this dashboard to give us some information.

We want to have a marker, when we click it the information window must show a summary of the marker.

Let's set up the information window with a `summary-viz`.

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
We just configurated the information window, adding a summary visualization with "My Marker Summary" as title, and we pointed out that the data comes from a map element called `'#myMarker'`.

The next step is to bind together the map and the information window.

``` javascript
var myDashboard = new CityDashboard.Dashboard({
        'anchor': '#dashboard',
        'map': map,
        'info': infoWindow,
        'layout': 'left'
      });
```
The Dashboard is now binded with its map and information window.We tell the Dashboard that `'#dashboard'` is the container of our visualization.

We also choose to place the information window to the left, relative to the map.

```
myDashboard.show();
```

Until now if you refresh your page you won't see any visualization. When you call the method `show()` the dashboard is placed inside the `'#dashboard'` container and the visualization begins.

Now you can see the map over Paris, near the Eiffel Tower. At the left of the map is a bar with a single visualization, with 'My Marker Summary' as its title and without data.

We configured the summary to look for an element `'#myMarker'` on the map, but there are no elements on it.

## Adding a Marker

Every on-map visualization goes in a **Layer**. This Layers contain elements we call markers. We must set up this markers to do an action when we clicked them.

``` javascript
myDashboard.addLayer({
  'id': '#myMarker',
  'layer': 'marker-layer',
  'data-source': '#myMarker',
  'data': {'lat': 48.8556,
          'lng': 2.2986,
          'value': {
            'landmark': 'Champ de Mars'
          }},
  'marker-action': {
    'action': 'update-viz',
    'visualization': 'summary-viz',
    'target': '#summary'
  }
});
```

First notice that our markers will have the `'#myMarker'` id, so now our information window will use the first marker it founds as its data-source.

We choose a marker-type layer.

The data-source of our markers are themselves, because we give them their data manually using the `'data'` property.

Finally we give them an action when clicked. The `'action'` property tells the marker what kind of action must perform. In this case an update of the visualization configuration.

The `'visualization'` property tells the marker the type of the target visualization and the `'target'` property contains the id of the visualization we want to change.

> **About the data**
>
> The data property must be a single JSON or an Array of them, with properties `'lat'`, `'lng'` and `'value'`.

If you refresh the page now you will see a black dot over the Champ de Mars. The summary now contains the information added.The latitude and longitude of the element, and the values given.

Let's add a second marker so we can see the change happen.

Change the data parameter on the `'#myMarker'`, adding the JSON for the Eiffel Tower.

``` javascript
'data': [{'lat': 48.8556,
          'lng': 2.2986,
          'value': {
            'landmark': 'Champ de Mars'
          }},
         {'lat': 48.8583,
          'lng': 2.2944,
          'value': {
            'landmark': 'Eiffel Tower'
          }}],
```

You can see now two black dots. Click on them and you'll see the summary change.

## Customize Markers

Let's customize it a bit. We don't want a black dot, instead we want a blue square.

``` javascript
'marker-attr': {
  'type': 'rect',
  'width': 50,
  'height': 50,
  'fill': 'blue'
}
```
Now we replaced the black dots with blue squares!

## The result

Congratulations! You have completed your first CityDashboard.js visualization. It's simple, you have to start somewhere.

The full code is available below. Play around with it to get a better understanding of how it works.

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>My first Dashboard</title>
    <style>
      html,
      body {
        margin: 0;
      }
      #Dashboard {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <script src="js/citydashboard.min.js"></script>
    <script>
      // Setting up our map.
      var map = new CityDashboard.GoogleMap({
        'lat': 48.8583,
        'lng': 2.2944,
        'zoom': 15
      });

      // Setting up our information window.
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

      // Binding the map and the information window.
      var myDashboard = new CityDashboard.Dashboard({
        'anchor': '#dashboard',
        'map': map,
        'info': infoWindow,
        'layout': 'left'
      });

      // Adding a Marker Layer
      myDashboard.addLayer({
        'id': '#myMarker',
        'layer': 'marker-layer',
        'data-source': '#myMarker',
        'data': [{'lat': 48.8556,
                  'lng': 2.2986,
                  'value': {
                    'landmark': 'Champ de Mars'
                  }},
                 {'lat': 48.8583,
                  'lng': 2.2944,
                  'value': {
                    'landmark': 'Eiffel Tower'
                  }}],
        'marker-action': {
          'action': 'update-viz',
          'visualization': 'summary-viz',
          'target': '#summary'
        },
        'marker-attr': {
          'type': 'rect',
          'width': 50,
          'height': 50,
          'fill': 'blue'
        }
      });

      // Show the Dashboard
      myDashboard.show();

    </script>
    <div id="Dashboard"></div>
  </body>
</html>
```