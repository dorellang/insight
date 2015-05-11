# Extending Visualizations

To create a brand new type of visualization you must follow this steps.

## Creating a new Visualization

1. Create a constructor.
  * The constructor of your visualization should call Visualization's constructor
  * The constructor must refresh the visualization.
  * Add a particular class name to your visualization, so it can be referenced by CSS.
  ``` javascript
  CityDashboard.MyVisualization = function ( props ) {
    CityDashboard.Visualization.call( this, props );
    this.viz.addClass('my-viz');
    //adding fields
    this.refresh();
  }
  ```
2. Extend `CityDashboard.Visualization`
  ``` javascript
  CityDashboard.MyVisualization.prototype = Object.create( CityDashboard.Visualization.prototype );
  ```
3. Create a refresh function.
  
  Here is were your visualization must be drawn.

  ``` javascript
  CityDashboard.GeneralVisualization.prototype.refresh  = function () {
    CityDashboard.Visualization.prototype.refresh.call( this );
    // refreshing...
  };
  ```

  ___*optional:*___ Add a `deflist`.
  ``` javascript
  this.viz.append( $('<dl>').addClass('deflist') );
  this.createDefList(this.data);
  ```
4. Create a remove function.

  ``` javascript
  CityDashboard.MyVisualization.prototype.remove = function () {
    CityDashboard.Visualization.prototype.remove.call( this );
    //removing ...
  }
  ```

## Updating InfoWindow

You must add a new case at createVisualization.

``` Javascript
else if ( type === 'my-viz' )
  viz = new CityDashboard.MyVisualization( pr );
```

## Using your Visualization

Create your visualization as any other.
New fields will be passed to your constructor automatically.

``` javascript

new CityDashboard.InfoWindow([{
  'visualization': 'my-viz',
  'id': '#MyNewViz',
  'data-source': '#MyNewViz,
  'title': 'New Viz.'
  'myField': 0,
  ...
}]);

mydashboard.addLayer({
  ...
  'layer_attr': {
        ...

        'id': '#viz2',
        'visualization': 'my-viz',
        'title': 'second viz',
        'myField': 2,
        ...
        }
})
