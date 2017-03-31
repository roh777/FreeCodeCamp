
function dropElements(arr, func) {
  var res=[];
  
  for(var i in arr) {
    if( func(arr[i])) {
      res = arr.slice(i);
      break;
    }
  }
  
  return res;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
