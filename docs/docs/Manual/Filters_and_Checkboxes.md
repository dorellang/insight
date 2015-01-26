# Using Chartist.js with CityDashboard

On this tutorial we will learn how to use filters and checkboxes.
We will use Chartist charts so you may want to take a look to "Using Chartist.js with CityDashboard".

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

Now we are ready.

## Preparing the Dashboard.

Let's start adding the map, an empty InfoWindow and the Dashboard.

``` javascript
var myDashboard = new CityDashboard.Dashboard({
  'anchor': '#dashboard',
  'layout': 'left',
  'filter-number': 3
});

var map = new CityDashboard.GoogleMap({
  'lat': 10.4352197,
  'lng': -25.2370063,
  'zoom': 3
});

var infoWindow = new CityDashboard.InfoWindow();
```

This dashboard is configured to have 3 filters. You can see the three selections menus with only the `none` option.

We will use the `events.json` as our `data-source`.
Each node looks like this:

```javascript
{
  "lat": -75.00573824826532,
  "seconds": 59.98788310226541,
  "lng": -58.96374843938034,
  "event type": "q",
  "value": [[753807, 195566, 554185, 932448, 343018],
            [955479, 286667, 332640, 642609, 386212],
            [226198, 524298, 534142, 985479, 194119],
            [114692, 776123, 827803, 100826, 378663],
            [481196, 715063, 330283, 612944, 743654],
            [412644, 624414, 857613, 152381, 710239],
            [680606, 263868, 994873, 381740, 427900]]
}
```

This are just random values, but they will help ilustrate filtering and checkboxes.

Here is the code for the layer.

```javascript
myDashboard.addLayer({
      'id': '#worldEvents',
      'layer': 'marker-layer',
      'data-source': 'events.json',
      'layer_attr': {
        'type': 'simple'
      }
    });
```

## Adding a checkbox.

First create a simple linechart.

``` javascript
{
  'visualization': 'linechart-viz',
  'id': '#MyLineChart',
  'data-source': '#worldEvents,
  'title': 'Events last week.',
  'labels': ['23h','16h','12h','8h','0h'],
  'properties': {
    'class': 'ct-chart ct-golden-section'
  }
}
```

For all series to be seen, you may need to add the following styles.

``` css
.ct-series-a {
  stroke: red;
}
.ct-series-b {
  stroke: orange;
}
.ct-series-c {
  stroke: yellow;
}
.ct-series-d {
  stroke: green;
}
.ct-series-e {
  stroke: blue;
}
.ct-series-f {
  stroke: indigo;
}
.ct-series-g {
  stroke: violet;
}
```

Now we will add the checkbox and its handler. All checkboxes have a label and an estate, selected or not (true or false).

The checkbox handler is a function, that receives the state of all the checkboxes and the data.

``` javascript
'checkbox': {mo:true,tu:true,we:true,th:true,fr:true,sa:true,su:true},
'checkbox-handler': function (state,data) {
  var out = [];
  var l = (data.value || []).length;
  for (var i = 0; i < state.length && i< l; i++) {
    if (state[i])
      out[out.length] = data.value[i];
  };
  data.value = out;
  return data;
 }
```

This function filters the series not selected by the checkbox.

## Adding filters

We have 900 points, we would like to filter them.
A filter is a function that receives a raw data node and returns true if it should be displayed.

``` javascript
myDashboard.addFilter({
  'More than 20s': function (data) {return data.seconds > 20;},
  'Over Equator': function (data) {return data.lat > 0;},
  'By Type: a,f,g,e,t,h': function (data) {return "afgeth".indexOf(data['event type'])> 0;}
});
```

Adding a filter will put the tag on every filter selection. The applied filter is the composition of all selected filters.

You can now filter the markers, and even compose those filters.

If you want to add even more filters you could call `addFilter` for each filter, or add a bunch of them in the same call.

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

  <style type="text/css">
  .ct-series-a {
    stroke: red;
  }
  .ct-series-b {
    stroke: orange;
  }
  .ct-series-c {
    stroke: yellow;
  }
  .ct-series-d {
    stroke: green;
  }
  .ct-series-e {
    stroke: blue;
  }
  .ct-series-f {
    stroke: indigo;
  }
  .ct-series-g {
    stroke: violet;
  }
  </style>

  <script>
    var myDashboard = new CityDashboard.Dashboard({
      'anchor': '#dashboard',
      'layout': 'left',
      'filter-number': 3
    });

    var map = new CityDashboard.GoogleMap({
      'lat': 10.4352197,
      'lng': -25.2370063,
      'zoom': 3
    });

    var infoWindow = new CityDashboard.InfoWindow([{
      'visualization': 'linechart-viz',
      'id': '#MyLineChart',
      'data-source': '#worldEvents',
      'title': 'Events last week.',
      'labels': ['23h','16h','12h','8h','0h'],
      'properties': {
        'class': 'ct-chart ct-golden-section'
      },
      'checkbox': {mo:true,tu:true,we:true,th:true,fr:true,sa:true,su:true},
      'checkbox-handler': function (state,data) {
        var out = [];
        var l = (data.value || []).length;
        for (var i = 0; i < state.length && i<l; i++) {
          if (state[i])
            out[out.length] = data.value[i];
        };
        data.value = out;
        return data;
       }
    }]);

    myDashboard.addLayer({
      'id': '#worldEvents',
      'layer': 'marker-layer',
      'data-source': 'events.json',
      'layer_attr': {
        'type': 'simple'
      }
    });

    myDashboard.addFilter({
      'More than 20s': function (data) {return data.seconds > 20;},
      'Over Equator': function (data) {return data.lat > 0;},
      'By Type: a,f,g,e,t,h': function (data) {return "afgeth".indexOf(data['event type'])> 0;}
    });
  </script>
</html>
```