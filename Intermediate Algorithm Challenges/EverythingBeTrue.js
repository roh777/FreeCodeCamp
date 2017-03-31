
function truthCheck(collection, pre) {
  // Is everyone being true?
  var ans = false;
  for(var i = 0; i < collection.length; i++) {
    var obj = collection[i];
    
    if( obj.hasOwnProperty(pre)) {
       if(obj[pre])
         continue;
      else
        return false;
      
    }
    else return false;
    
  }
  return true;
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
