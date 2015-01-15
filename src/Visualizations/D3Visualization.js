CityDashboard.D3Visualization = function ( props ) {
  CityDashboard.Visualization.call( this, props );

  this.viz.addClass('d3-viz').append( $('<div>') );

  var el = $('<div>').addClass('def-list');

  this.viz.append( el );

  // el.find('svg').noUnderflow();

  var initwidth = el.width();
  var initheight = 0.61803398875*initwidth;

  this.svg = d3.select( this.id+' div' ).append('svg');

  if (props['golden-ratio']){
    this._create = function () {

      arguments[1] = arguments[1].value || arguments[1];
      arguments[3] = el.width()*0.61803398875;
      return props.viz.apply(props,arguments);
    }
  } else {
    this._create = function () {
      arguments[3] = initheight;
      arguments[1] = arguments[1].value || arguments[1];
      return props.viz.apply(props,arguments);
    }
  }
  
  //need to call refresh so the lat-lng appears in the first call
  CityDashboard.Visualization.prototype.refresh.call( this );
  this._create(this.svg,this.data,initwidth,initheight);

};

CityDashboard.D3Visualization.prototype = Object.create( CityDashboard.Visualization.prototype );

CityDashboard.D3Visualization.prototype.refresh = function () {
  CityDashboard.Visualization.prototype.refresh.call( this );

  this.svg.selectAll("*").remove();

  var el = $( this.id );
  this._create(this.svg,this.data,el.width(),el.height());
};

CityDashboard.D3Visualization.prototype.remove = function () {
  CityDashboard.Visualization.prototype.remove.call( this );
  
  this.svg.remove();
};