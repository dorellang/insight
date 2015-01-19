CityDashboard.Dashboard = function ( parameters ) {

  if (!parameters.anchor)
    throw new Error( 'Anchor ID is required.');

  this.anchor = parameters.anchor;

  this.layout = 'layout-' + ( parameters.layout || 'none' );

  // placing

  var container = $( '<div>' )
  .setID( CityDashboard['mainContainerID'] )
  .addClass( this.layout );

  var infoDiv;
  if ( this.layout !== 'layout-none' ) {
    infoDiv = $('<div>')
    .setID( CityDashboard['infoWindowID'] );

    var resizeOrientation;
    if ( this.layout === 'layout-left') 
      resizeOrientation = 'e';
    else if ( this.layout === 'layout-right') 
      resizeOrientation = 'w';
    // else if ( this.layout === 'layout-top') 
    //   resizeOrientation = 's';
    // else if ( this.layout === 'layout-bottom') 
    //   resizeOrientation = 'n';

    infoDiv.resizable( resizeOrientation );

    container.append( infoDiv );
  }

  var mapDiv = $('<div>')
  .setID( CityDashboard['mapWindowID'] );
  container.append( mapDiv );

  $( this.anchor ).append( container );

  this.filters = new CityDashboard.FilterBar(parameters['filter-number'] || 0);

}

CityDashboard.Dashboard.prototype = {

  constructor: CityDashboard.Dashboard,

  addLayer: function ( parameters ) {

    var callback = function (pr) {
      new CityDashboard.Layer( pr, $(CityDashboard['mainContainerID'])[0].data );
    }

    CityDashboard.getData(parameters['data-source'],callback,parameters);

    return this;

  },

  addFilter: function ( filters ) {

    this.filters.addFilter( filters );

    return this;
  }

};
