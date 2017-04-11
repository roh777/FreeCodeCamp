var roman = [ ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
              ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
              ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
             ];


function convertToRoman(num) {
  var res = [];
  var level = 0;
  
  while(num > 0 && level < 3) {
    var index = num % 10;
    num = Math.floor(num / 10);
    res.push(roman[level][index-1]);
    console.log(num , index);
    level++;
  }

  while(num-- > 0) {
    res.push('M');
  }

  return res.reverse().join('');
  
}

console.log( convertToRoman(3000) );