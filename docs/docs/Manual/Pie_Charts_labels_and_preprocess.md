# Pie Charts, labels and preprocess.

This is a continuation for the tutorial "Using Chartis.js with CityDashboard". We will add a Chartist.Pie chart to our visualization. We will also lear about preprocess and labels.

Previous: [Using Chartist.js with CityDashboard](Using_Chartist.js_with_CityDashboard.md)

Next: [Using D3 with CityDashboard](Using_D3_with_CityDashboard.md)

## Before we start

We will use the code as it was left on the last tutorial.

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

## Adding a Pie Chart

Let's start adding the pie chart to the InfoWindow.

``` javascript
var infoWindow = new CityDashboard.InfoWindow([
  ...
,{
  'visualization': 'piechart-viz',
  'id': '#MyPieChart',
  'data-source': '#MyMarkers',
  'title': 'Visitors using a Pie chart.',
  'properties': {
    'class': 'ct-chart'
  },
  'labels': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
}]);
```
As you can see this generates an error. This chart expect an array of values, insted of an array of series.

We will solve this with preprocessing.

## Preprocessing data.

CityDashboard visualizations support custom preprocessing functions. This function takes the raw data, and must return the data to be shown.

In our case we will take the array of series given by our markers an transform it to a simple array.

``` javascript
{
  'visualization': 'piechart-viz',
  'id': '#MyPieChart',
  'data-source': '#MyMarkers',
  'title': 'Visitors using a Pie chart.',
  'properties': {
    'class': 'ct-chart'
  },
  'labels': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  'preprocess': function (data) {
        data.value = data.value[0];
        return data;
      }
}
```

You can see that some of our pie charts can't be seen because of a black background. Let's use the preprocess function once more to see our values.

``` javascript
'preprocess': function (data) {
  data.value = data.value[0];
  var d = [];
  for(var i = 0;i < data.value.length; i++){
    d[d.length] = {
                'data': data.value[i],
                'className': 'Pie'
              };
  }
  data.value = d;
  return data;
}
```

Once more we modify our data, this format is given to us by Chartist.
We give each area of the chart a class. Let's add some style so we can see the values.

``` css
.Pie{
  fill: red;
}
.Pie:nth-child(2){
  fill: yellow;
}
.Pie:nth-child(3){
  fill: orange;
}
.Pie:nth-child(4){
  fill: green;
}
.Pie:nth-child(5){
  fill: SteelBlue ;
}
.Pie:nth-child(6){
  fill: gray;
}
.Pie:nth-child(7){
  fill: aqua;
}
```

## Function Labels

Similar to the preprocess function, we can create labels. A label function will receive the same values to the series, and must return an array of strings.

``` javascript
'labels': function (data) {
  var label = []
  for(var i=0;i < data.length;i++){
    label[label.length] = Math.floor(data[i].data / 1000) + "K";
  }
  return label;
},
```

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
    .Pie{
      fill: red;
    }
    .Pie:nth-child(2){
      fill: yellow;
    }
    .Pie:nth-child(3){
      fill: orange;
    }
    .Pie:nth-child(4){
      fill: green;
    }
    .Pie:nth-child(5){
      fill: SteelBlue;
    }
    .Pie:nth-child(6){
      fill: gray;
    }
    .Pie:nth-child(7){
      fill: aqua;
    }
  </style>

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
    }
    ,{
      'visualization': 'piechart-viz',
      'id': '#MyPieChart',
      'data-source': '#MyMarkers',
      'title': 'Visitors using a Pie chart.',
      'properties': {
        'class': 'ct-chart'
      },
      'labels': function (data) {
        var label = []
        for(var i=0;i < data.length;i++){
          label[label.length] = Math.floor(data[i].data / 1000) + "K";
        }
        return label;
      },
      'preprocess': function (data) {
        data.value = data.value[0];
        var d = [];
        for(var i=0;i < data.value.length;i++){
          d[d.length] = {
                      'data': data.value[i],
                      'className': 'Pie'
                    };
        }
        data.value = d;
        return data;
      }
    }
    ]);

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

Previous: [Using Chartist.js with CityDashboard](Using_Chartist.js_with_CityDashboard.md)

Next: [Using D3 with CityDashboard](Using_D3_with_CityDashboard.md)