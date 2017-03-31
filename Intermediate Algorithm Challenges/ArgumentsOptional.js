function addTogether(a) {
  
  if(arguments.length === 1 && typeof a === 'number') {
    
    return function(b) {
      
      if(typeof b === 'number')
        return a+b;
      else 
        return undefined;
      
    };
    
  } else {
    
     var sum = 0;
    
     for(var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === 'number')
          sum += arguments[i];
        else 
          return undefined;
      }
  
   return sum;
  }
  
}

addTogether(2,3);
