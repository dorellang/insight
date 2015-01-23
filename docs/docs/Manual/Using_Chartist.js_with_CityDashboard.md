# Using Chartist.js with CityDashboard

On this tutorial we will learn how to use Chartist.js charts with CityDashboard, we will also learn about the two ways we can create visualizations.

## Before we start.

Before we can start configuring our dashboard, we must import the necessary libraries. Besides jQuery and GoogleMaps, you must import the Chartist.js library, with its CSS file.

``` html

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Creating a Dashboard using Chartist.js</title>
    <style>
      html,
      body {
        margin: 0;
        width: 100%;
        height: 100%;
      }
      #dashboard {
        width: 100%;
        height: 100%;
      }
    </style>
    <!-- CityDashboard Styles -->
    <link rel="stylesheet" type="text/css" href="css/CityDashboard.css">
    <!-- Chartist.js styles -->
    <link rel="stylesheet" type="text/css" href="css/chartist.min.css">

    <!-- jQuery -->
    <script src="js/jquery-1.11.1.min.js"></script>
    <!-- Google Maps import -->
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <!-- Chartist import -->
    <script src="js/chartist.min.js"></script>

    <!-- CityDashboard import -->
    <script src="js/CityDashboard.min.js"></script>
  </head>

  <body>
    <div id="dashboard"></div>
  </body>

  <script>
    // our code goes here
  </script>
</html>

```

We are now ready.

## Configuring the Dashboard

If you followed us from Creating a Dashboard, you know how to set up a Map and an InfoWindow. If you don't, we recomend you to give it a view.

This is the code needed to create a Map over Paris and an empty InfoWindow:

``` javascript

var myDashboard = new CityDashboard.Dashboard({
  'anchor': '#dashboard',
  'layout': 'left'
});

var map = new CityDashboard.GoogleMap({
  'lat': 48.8600535,
  'lng': 2.3255249,
  'zoom': 14
});

var infoWindow = new CityDashboard.InfoWindow();

```

## Creating a Line Chart.

There are two ways to create a visualization using CityDashboard.js. The **first** one is to configure it using the InfoWindow. The **second** way is to configure the visualization as the target of a marker.

When the target id of a layer is an existing visualization, the target is updated. If the visualization does not exists or was removed, the visualization is created.

This time instead of creating our linechart at the InfoWindow, we will configure it on addLayer.

```javascript

myDashboard.addLayer({
  'id': '#MyMarkers',
  'layer': 'marker-layer',
  'data-source': '#MyMarkers',
  'data': [],
  'layer_attr': {
    'type': 'simple',
    'visualization': 'linechart-viz',
    'id': '#MyLineChart',
    'title': 'Visitors last week.',
    'labels': ['Mon','Tue','Wen','Thu','Fri','Sat','Sun'],
    'properties': {
      'class': 'ct-chart ct-golden-section'
    }
  }
});

```

All the magic happens at `'layer_attr'`. The parameter `visualization` will tell CityDashboard what type of visualization the target `#MyLineChart` will be. In this case we are using a `linechart-viz`. This creates a Chartist.Line chart inside our visualization.

## Adding Data.

``` javascript
'data': [
  {
    'lat': 48.860611,
    'lng': 2.337644,
    'landmark': 'Musée du Louvre',
    'value': [[2237, 4650, 5221, 8089, 2970, 2847, 9059]],
    'note': 'This are not the actual number of visitors.'
  },{
    'lat': 48.859961,
    'lng': 2.326561,
    'landmark': 'Musée d’Orsay',
    'value': [[8971, 10724, 5257, 2434, 10583, 9038, 5240]],
    'note': 'This are not the actual number of visitors.'
  },{
    'lat': 48.873792,
    'lng': 2.295028,
    'landmark': 'L’Arc de Triomphe',
    'value': [[9679, 10777, 9417, 1521, 6218, 1740, 2490]],
    'note': 'This are not the actual number of visitors.'
  },{
    'lat': 48.852968,
    'lng': 2.349902,
    'landmark': 'Cathédrale Notre-Dame',
    'value': [[9806, 10989, 8219, 1503, 3847, 2007, 10751]],
    'note': 'This are not the actual number of visitors.'
  },{
    'lat': 48.85837,
    'lng': 2.294481,
    'landmark': 'Tour Eiffel',
    'value': [[3576, 10255, 2112, 5716, 9728, 10805, 6082]],
    'note': 'This are not the actual number of visitors.'
  }],
```
Layers expect an array of objects. Marker layers need the `lat` and `lng` properties to place the node. The `landmark` property will add the text to the markers when you hover it.

The `value` property is used by the visualizations to chart them. Notice the array of arrays this is because Chartist.js Line charts support several data series.

## Adding a Bar Chart.
Now we will add another visualization using the same data.

If we want to create another visualization when adding a layer, we will have two layers with the same markers.
We will create our bar chart at the InfoWindow.

``` javascript
var infoWindow = new CityDashboard.InfoWindow([{
  'visualization': 'barchart-viz',
  'id': '#MyBarChart',
  'data-source': '#MyMarkers',
  'labels': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  'title': 'Visitors using a Bar Chart.',
  'properties': {
    'class': 'ct-chart',
    'options': {
      'seriesBarDistance': 10
    }
  }
}]);
```

This time we created a visualization of type `barchart-viz`. This tells CityDashboard to create a Chartist.Bar inside our visualization.

You can set the Chartist `options` at the properties attribute, as well as the `responsiveOptions`.

The class of the container of our Chartist Chart is setted using the `class` attribute of our visualization `properties`.

## Adding a Pie Chart

The last Chartist chart supported is the Pie chart. The pie chart is different because it expects a simple array instead of an array of arrays as its data.

We will continue this tutorial at Pie Charts, labels and preprocess.

## The result

The full code is available below.

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Creating a Dashboard using Chartist.js</title>
    <style>
      html,
      body {
        margin: 0;
        width: 100%;
        height: 100%;
      }
      #dashboard {
        width: 100%;
        height: 100%;
      }
    </style>
    <!-- CityDashboard Styles -->
    <link rel="stylesheet" type="text/css" href="css/CityDashboard.css">
    <!-- Chartist.js styles -->
    <link rel="stylesheet" type="text/css" href="css/chartist.min.css">

    <!-- jQuery -->
    <script src="js/jquery-1.11.1.min.js"></script>
    <!-- Google Maps import -->
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <!-- Chartist import -->
    <script src="js/chartist.min.js"></script>

    <!-- CityDashboard import -->
    <script src="js/CityDashboard.min.js"></script>
  </head>

  <body>
    <div id="dashboard"></div>
  </body>

  <script>
    var myDashboard = new CityDashboard.Dashboard({
      'anchor': '#dashboard',
      'layout': 'left'
    });

    var map = new CityDashboard.GoogleMap({
      'lat': 48.8600535,
      'lng': 2.3255249,
      'zoom': 14
    });

    var infoWindow = new CityDashboard.InfoWindow([{
      'visualization': 'barchart-viz',
      'id': '#MyBarChart',
      'data-source': '#MyMarkers',
      'labels': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      'title': 'Visitors using a Bar Chart.',
      'properties': {
        'class': 'ct-chart',
        'options': {
          'seriesBarDistance': 10
        }
      }
    }]);

    myDashboard.addLayer({
      'id': '#MyMarkers',
      'layer': 'marker-layer',
      'data-source': '#MyMarkers',
      'data': [
      {
        'lat': 48.860611,
        'lng': 2.337644,
        'landmark': 'Musée du Louvre',
        'value': [[2237, 4650, 5221, 8089, 2970, 2847, 9059]],
        'note': 'This are not the actual number of visitors.'
      },{
        'lat': 48.859961,
        'lng': 2.326561,
        'landmark': 'Musée d’Orsay',
        'value': [[8971, 10724, 5257, 2434, 10583, 9038, 5240]],
        'note': 'This are not the actual number of visitors.'
      },{
        'lat': 48.873792,
        'lng': 2.295028,
        'landmark': 'L’Arc de Triomphe',
        'value': [[9679, 10777, 9417, 1521, 6218, 1740, 2490]],
        'note': 'This are not the actual number of visitors.'
      },{
        'lat': 48.852968,
        'lng': 2.349902,
        'landmark': 'Cathédrale Notre-Dame',
        'value': [[9806, 10989, 8219, 1503, 3847, 2007, 10751]],
        'note': 'This are not the actual number of visitors.'
      },{
        'lat': 48.85837,
        'lng': 2.294481,
        'landmark': 'Tour Eiffel',
        'value': [[3576, 10255, 2112, 5716, 9728, 10805, 6082]],
        'note': 'This are not the actual number of visitors.'
      }],
      'layer_attr': {
        'type': 'simple',
        'visualization': 'linechart-viz',
        'id': '#MyLineChart',
        'title': 'Visitors last week.',
        'labels': ['Mon','Tue','Wen','Thu','Fri','Sat','Sun'],
        'properties': {
          'class': 'ct-chart ct-golden-section'
        }
      }
    });
  </script>
</html>
```