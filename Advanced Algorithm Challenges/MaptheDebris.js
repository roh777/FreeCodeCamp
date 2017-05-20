function timePeriod(r) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var twoPie = 2 * Math.PI;
  var secondTerm = Math.sqrt(Math.pow(r+earthRadius,3) / GM);
  return Math.round(twoPie*secondTerm);
  
}


function orbitalPeriod(arr) {
  
  arr.forEach(function(obj){
    var r = obj.avgAlt;
    delete obj.avgAlt;
    obj["orbitalPeriod"] = timePeriod(r);
  });
  return arr;
}

ans = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(ans);