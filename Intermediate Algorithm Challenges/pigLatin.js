
function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  var i = 0;
  while(vowels.indexOf(str[i]) < 0) {
    i++;
  }
  
  if(i == 0) {
    return str + 'way';
  }
  
  var temp = str;
  str = temp.substr(i) + temp.substr(0,i) + 'ay';
  
  return str;
  
}

translatePigLatin("consonant");
