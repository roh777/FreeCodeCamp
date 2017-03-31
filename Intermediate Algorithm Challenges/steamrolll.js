


function steamrollArray(arr) {
  var res = [];
  for(var i in arr) {
     steamrollHelper(arr[i]);
  }

  function steamrollHelper(a) {
  if( !Array.isArray(a)) {   
    return res.push(a);
  }
  else 
    for(var i in a) {
      steamrollHelper(a[i]);
    }
}

  return res;
}

console.log(steamrollArray([[32],[[3],[9]]]) );
