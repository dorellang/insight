# Styling CityDashboard

On this tutorial we will learn how to add styles to our dashboard.

Previous: [Filters and Checkboxes](Filters_and_Checkboxes.md)

## Before we start

We will use the next dashboard for styling.

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>My first Dashboard</title>
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
    /*Our style goes here*/
  </style>

  <script>
    var myDashboard = new CityDashboard.Dashboard({
      anchor: '#dashboard',
      layout: 'left'
    });

    var map = new CityDashboard.GoogleMap({
      lat: 10.4352197,
      lng: -25.2370063,
      zoom: 3
    })

    var infoWindow = new CityDashboard.InfoWindow([{
      'visualization': 'summary-viz',
      'id': '#summary',
      'data-source': '#summary',
      'title': 'Welcome!'
    },{
      'visualization': 'linechart-viz',
      'id': '#linechart',
      'data-source': '#linechart',
      'data': {
        'value': [[1,2,3,4,5,6,7,8,9],[1,2,4,8,16,32,64,128,256],[0,1,3,6,10,15,21,28,36],[1,1,2,3,5,8,13,21,34]],
        'Arithmetic': 'A(n) = A(n-1)+1',
        'Geometric': 'G(n) = 2*G(n-1)',
        'Triangular': 'T(n) = 4*T(n-1)*(8*T(n-1)+1)',
        'Fibonacci': 'F(n) = F(n-1)+F(n-2)'
      },
      'title': 'Sequences',
      'labels': ['1','2','3','4','5','6','7','8','9'],
      'properties': {
        'class': 'ct-chart'
      },
      'checkbox': {A:true,G:true,T:true,F:true},
      'checkbox-handler': function (state,data) {
        var out = [];
        for (var i = 0; i < state.length; i++) {
          if (state[i])
            out[out.length] = data.value[i];
        };
        data.value = out;
        return data;
      }
    }]);
  </script>
</html>
```

Our styles go in the empty `style` tag.

## Styling the curves.

If yo use the checkbox now you will notice that the colors of the lines change. We don't want this.

Because we don't want to modify our data value, we will preprocess them to add a class to each curve.

``` javascript
'preprocess': function (data) {
  var classnames = ['curve-A','curve-G','curve-T','curve-F'];
  data.value = data.value.map(function(d,i){return {data:d,className:classnames[i]};});
  return data;
}
```

Chartist will asign those classes to each curve. If you refresh now you can't see the curves. We must add those styles.

``` css
.curve-A {
  stroke: #7c2969;
}
.curve-G {
  stroke: #9e3549;
}
.curve-T {
  stroke: #89a236;
}
.curve-F {
  stroke: #519331 ;
}
```

Now you can see that each line in the chart has asigned a color, and that color does not change when the checkbox changes.

## Styling the InfoWindow

Lets add style to the InfoWindow and visualization.

``` css
.infoWindow {
  background-color: #0f0f0f;
}

.visualization {
  background-color: #a7908f;
}
```

## Other styles

You can see a summary of all the classes available to be styled.

| class        | Description                                                      |
|--------------|------------------------------------------------------------------|
|.infoWindow   | The container of the visualizations.                             |
|.visualization| The visualization itself.                                        |
|.viz-title    | The title of the visualization.                                  |
|.viz-bar      | The horizontal bar below the visualization title.                |
|.latlngView   | The container that shows the latitude and longitude information. |
|.deflist      | The container of the key-value definition list.                  |
|.deflist-key  | The key of the definition list.                                  |
|.deflist-value| The value of the definition list.                                |
|.options-panel| The panel with the close and arrow buttons.                      |
|.close-button | The visualization close button inside the options panel.         |
|.up-button    | The visualization up button inside the options panel.            |
|.down-button  | The visualization down button inside the options panel.          |
|.filterBar    | The panel containing the search bar and filter selectors.        |

## Closable and movable

The visualizations are set by default to be moved and closed. If you have a visualization that you wish cannot be closed you can set that option.

Add this attribute to our `#summary`.

``` javascript
'properties': {
  'movable': false,
  'closable': false
}
```

Note that `movable: false` doesn't prevent other visualizations to be moved around the static one.

## The result

The full code is available below.

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>My first Dashboard</title>
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
    .curve-A {
      stroke: #7c2969;
    }
    .curve-G {
      stroke: #9e3549;
    }
    .curve-T {
      stroke: #89a236;
    }
    .curve-F {
      stroke: #519331 ;
    }

    /*InfoWindow*/
    .infoWindow {
      background-color: #0f0f0f;
    }

    .visualization {
      background-color: #a7908f;
    }
  </style>

  <script>
    var myDashboard = new CityDashboard.Dashboard({
      anchor: '#dashboard',
      layout: 'left'
    });

    var map = new CityDashboard.GoogleMap({
      lat: 10.4352197,
      lng: -25.2370063,
      zoom: 3
    })

    var infoWindow = new CityDashboard.InfoWindow([{
      'visualization': 'summary-viz',
      'id': '#summary',
      'data-source': '#summary',
      'title': 'Welcome!',
      'properties': {
        'movable': false,
        'closable': false
      }
    },{
      'visualization': 'linechart-viz',
      'id': '#linechart',
      'data-source': '#linechart',
      'data': {
        'value': [[1,2,3,4,5,6,7,8,9],[1,2,4,8,16,32,64,128,256],[0,1,3,6,10,15,21,28,36],[1,1,2,3,5,8,13,21,34]],
        'Arithmetic': 'A(n) = A(n-1)+1',
        'Geometric': 'G(n) = 2*G(n-1)',
        'Triangular': 'T(n) = 4*T(n-1)*(8*T(n-1)+1)',
        'Fibonacci': 'F(n) = F(n-1)+F(n-2)'
      },
      'title': 'Sequences',
      'labels': ['1','2','3','4','5','6','7','8','9'],
      'properties': {
        'class': 'ct-chart'
      },
      'checkbox': {A:true,G:true,T:true,F:true},
      'checkbox-handler': function (state,data) {
        var out = [];
        for (var i = 0; i < state.length; i++) {
          if (state[i])
            out[out.length] = data.value[i];
        };
        data.value = out;
        return data;
      },
      'preprocess': function (data) {
        var classnames = ['curve-A','curve-G','curve-T','curve-F'];
        data.value = data.value.map(function(d,i){return {data:d,className:classnames[i]};});
        return data;
      }
    }]);
  </script>
</html>
```

Previous: [Filters and Checkboxes](Filters_and_Checkboxes.md)