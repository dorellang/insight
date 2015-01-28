# Using D3 with CityDashboard

CityDashboard can use D3.js for its visualizations. The created svg element is ready to be used.

## Before we start

Please remember to import of the D3.js library.

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Creating a Dashboard using D3.js</title>
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

    <!-- jQuery -->
    <script src="js/jquery-1.11.1.min.js"></script>
    <!-- Google Maps import -->
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <!-- D3 import -->
    <script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>

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

    var infoWindow = new CityDashboard.InfoWindow();
  </script>
</html>
```

## The D3 visualization

We will use the chart from [mbostock’s block #1642989 ](http://bl.ocks.org/mbostock/1642989).

CityDashboard prepares the svg canvas where the chart must be drawn. It also delivers the received data and returns the width and height of the canvas.

To use a d3 visualization you must give the dashboard a create function. This function is called every time the visualizations needs to be updated. In other words, every time a marker is pressed, the InfoWindow is resized or a checkbox is clicked.

This function receives the following arguments:

|argument|description                                      |
|--------|-------------------------------------------------|
|svg     | The svg d3 element that will contain the chart. |
|data    | The current data to be displayed. (preprocessed)|
|width   | The width of the svg element.                   |
|height  | The height of the svg element.                  |

Lets add the visualization to the InfoWindow.

```javascript
'visualization': 'd3-viz',
'id': '#myplot',
'data-source': '#myplot',
'title': 'Spline Transition',
'viz': function (svg,data,width,height) {...}
```

You can add the D3 code inside this function. Just remember to use the svg, data, width, and height.

You can always add styles to this particular svg using `#myplot tag`.

``` css
#myplot svg {
  font: 10px sans-serif;
}

#myplot  .line {
  fill: none;
  stroke: #000;
  stroke-width: 1.5px;
}

#myplot .axis path,
#myplot .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
```


## The Result

Here goes the full code.

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Creating a Dashboard using D3.js</title>
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

    <!-- jQuery -->
    <script src="js/jquery-1.11.1.min.js"></script>
    <!-- Google Maps import -->
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <!-- D3 import -->
    <script src="//d3js.org/d3.v3.min.js" charset="utf-8"></script>

    <!-- CityDashboard import -->
    <script src="js/CityDashboard.min.js"></script>
  </head>

  <body>
    <div id="dashboard"></div>
  </body>

  <style>
  #myplot svg {
    font: 10px sans-serif;
  }

  #myplot  .line {
    fill: none;
    stroke: #000;
    stroke-width: 1.5px;
  }

  #myplot .axis path,
  #myplot .axis line {
    fill: none;
    stroke: #000;
    shape-rendering: crispEdges;
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
      'visualization': 'd3-viz',
      'id': '#myplot',
      'data-source': '#myplot',
      'title': 'Spline Transition',
      'viz': function (svg,data,width,height) {
        // http://bl.ocks.org/mbostock/1642989
        var n = 40,
          random = d3.random.normal(0, .2),
          data = d3.range(n).map(random);

        var margin = {top: 20, right: 20, bottom: 20, left: 40};//,
          // width = width - margin.left - margin.right,
          // height = height - margin.top - margin.bottom;

        var x = d3.scale.linear()
          .domain([1, n - 2])
          .range([0, width]);

        var y = d3.scale.linear()
          .domain([-1, 1])
          .range([height, 0]);

        var line = d3.svg.line()
          .interpolate("basis")
          .x(function(d, i) { return x(i); })
          .y(function(d, i) { return y(d); });

        //var svg = d3.select("body").append("svg")
        svg
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("defs").append("clipPath")
          .attr("id", "clip")
        .append("rect")
          .attr("width", width)
          .attr("height", height);

        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + y(0) + ")")
          .call(d3.svg.axis().scale(x).orient("bottom"));

        svg.append("g")
          .attr("class", "y axis")
          .call(d3.svg.axis().scale(y).orient("left"));

        var path = svg.append("g")
          .attr("clip-path", "url(#clip)")
        .append("path")
          .datum(data)
          .attr("class", "line")
          .attr("d", line);

        tick();

        function tick() {

          // push a new data point onto the back
          data.push(random());

          // redraw the line, and slide it to the left
          path
            .attr("d", line)
            .attr("transform", null)
          .transition()
            .duration(500)
            .ease("linear")
            .attr("transform", "translate(" + x(0) + ",0)")
            .each("end", tick);

          // pop the old data point off the front
          data.shift();
        }
      }
    }]);
  </script>
</html>
```