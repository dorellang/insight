var CityDashboard = { REVISION: '0' };

CityDashboard.append = function ( selector, obj ) {

  return $( selector )
  .append( $ ( '<' + obj['type'] + '>' )
  .attr( obj['attr'] )
  .addClass( obj['class'] )
  .css( obj['style'] ) );

}