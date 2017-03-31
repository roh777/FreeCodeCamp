
function findElement(arr, func) {
  var num = 0;
  num = arr.find(func);
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
