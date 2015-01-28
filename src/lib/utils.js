(function ( $ ) {
  $.fn.resizable = function ( orientation ) {
    var resizer = $('<div>').addClass('resizer').addClass(orientation+'-resize');
    this.append(resizer).addClass('resizable');

    resizer.on('mousedown',initDrag);

    var startX, startY, startWidth, startHeight;

    var resizable = this;

    function initDrag (e){
      startX = e.clientX;
      startY = e.clientY;
      startWidth = resizable.outerWidth();
      startHeight = resizable.outerHeight();

      $(document).on('mousemove',doDrag);
      $(document).on('mouseup',stopDrag);
    };
  
    var east,south,north,west;
    south = orientation.search("s") >= 0;
    east = orientation.search("e") >= 0;
    north = orientation.search("n") >= 0;
    west = orientation.search("w") >= 0;

    function doDrag (e) {
      if (south)
        resizable.css('height',(startHeight + e.clientY - startY) + 'px');
      if (east)
        resizable.css('width',(startWidth + e.clientX - startX) + 'px');
      if (north)
        resizable.css('top',(e.clientY) + 'px')
                 .css('height',(startHeight + startY - e.clientY) + 'px');
      if (west)
        resizable.css('left',(e.clientX) + 'px')
                 .css('width',(startWidth - e.clientX) + 'px');
    };

    function stopDrag (e){
      $(document).off( 'mousemove', doDrag );
      $(document).off( 'mouseup', stopDrag );
      resizable.trigger('resize');
    };

    this.scroll(function(e){
      resizer.css('top',resizable.scrollTop());
    });

    return this;
  };
  $.fn.setID = function( selector ) {
    if ( selector.charAt(0) === '#' )
      selector = selector.slice(1);
    this.attr( 'id', selector);
    return this;
  };
  $.fn.movable = function () {

    var panel = this.children('.options-panel');
    if ( !panel.length ){
      panel = $('<span>').addClass('options-panel');
      this.prepend(panel);
    }

    var up = $('<span>').addClass('up-button').append('&#x25B2;');
    var down = $('<span>').addClass('down-button').append('&#x25BC;');
    panel.prepend(down);
    panel.prepend(up);

    var _this = this;

    up.on('click',function(){

      _this.insertBefore( _this.prev() );
    
    });

    down.on('click',function(){

      _this.insertAfter(_this.next());
    
    });

    return this;
  };
  $.fn.closable = function( handler ){

    if (!handler) {
      handler = function () {return;};
    }

    var panel = this.children('.options-panel');
    if ( !panel.length ){
      panel = $('<span>').addClass('options-panel');
      this.prepend(panel);
    }

    var close = $('<span>').addClass('close-button').text('X');

    panel.append(close);

    var _this = this;

    close.on('click',function () {
      _this.remove();
      handler();
    });


    return this;
  };
  // $.fn.onUnderflow = function ( fn ) {
  //   var flow = false;
  //   this.on('OverflowEvent' in window ? 'overflowChanged' : 'underflow', function (e) {
  //     if (e.type == 'underflow' ||
  //       ((e.orient == 0 && e.horizontalOverflow == flow) ||
  //         (e.orient == 1 && e.verticalOverflow == flow) ||
  //         (e.orient == 2 && e.horizontalOverflow == flow && e.verticalOverflow == flow))) {
  //       return fn.call(this, e);
  //     }
  //   });
  // };
  // $.fn.noUnderflow = function () {
  //   this.onUnderflow( function () {
  //     this.width(this.parent().innerWidth());
  //   });
  // }
}(jQuery));