// return masked string
function maskify(cc) {
  var number = cc;
  var regexp = /(\d+|\w+)(\d{4}|\w{4})$/;
  
  var lastFourNumbers = number.replace(regexp, '$2');
  var otherNumbers = number.match(regexp, '$1') ? number.replace(regexp, '$1') : '';
  var maskNumbers = otherNumbers.replace(/[\d+|\w+]/g, '#');
  
  return maskNumbers+lastFourNumbers;
}