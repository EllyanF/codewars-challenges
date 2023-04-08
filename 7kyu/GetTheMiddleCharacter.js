function getMiddle(s) {
    return checkIsEven(s) 
      ? s.slice((s.length/2)-1, (s.length/2+1)) 
      : s.slice(s.length/2, (s.length/2)+1)
  }
  
  function checkIsEven(s) {
    return s.length % 2 == 0 ? true : false;
  }