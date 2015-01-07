CityDashboard.Visualization = function ( id, data_source, properties) {
  this.id = "id";
  this.data_source = "data_source";

  var title, color, background_color;

  this.properties = {
    'color' : properties['color'] || 'white',
    'background-color': properties['background-color'] || 'blue',
    'font-family': properties['font-family'] || '"Arial", sans-serif',
  };

  this.title = properties['title'] || '';

};

CityDashboard.Visualization.prototype = {
  constructor: CityDashboard.Visualization
};

CityDashboard.Visualization.prototype.placeBasic = function ( container ) {

  var viz = $('<div>').attr('id',this.id).addClass('visualization').append(this.title);
  container.append( viz );
  return viz;

}