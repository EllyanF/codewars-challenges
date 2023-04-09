function createPhoneNumber(numbers){
    var stringifyArray = numbers.join('');
    var regexp = /^(\d{3})(\d{3})(\d{4})$/gm;
    
    return stringifyArray.replace(regexp, '($1) $2-$3');
  }