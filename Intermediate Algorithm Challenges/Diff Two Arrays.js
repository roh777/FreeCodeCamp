
function diffArray(arr1, arr2) {
  var a1 = [];
  var a2 = []; //store indexes for common elements in both arrays
  
  arr1.forEach( function(x, i) {
    arr2.forEach( function(y, j) {
      if(x === y) {
        a1.push(i);
        a2.push(j);
      }
    });
  });
  
  a1.sort().reverse(); //sort indexes in descending order
  a2.sort().reverse(); //inorder to maintain index orders while splicing.

  a1.forEach( function(index) {
    arr1.splice(index, 1);
  });

  a2.forEach( function(index) {
    arr2.splice(index, 1);
  });

  return arr1.concat(arr2);
  
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) ); 
