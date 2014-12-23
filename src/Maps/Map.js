CityDashboard.Map = function () {
  this.observers = [];
};

CityDashboard.Map.prototype = {
	constructor: CityDashboard.Map,

  addObserver: function ( observer ) {
    this.observers[ this.observers.length ] = observer;
  },

  notify: function ( message ) {
    for (var i = this.observers.length - 1; i >= 0; i--) {
      this.observers[i].update( message );
    };
  }
};