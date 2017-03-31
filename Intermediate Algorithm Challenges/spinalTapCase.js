function isUp(s) {
  if(s === undefined || s ===' ' || s==='_' ||  s === '-') return false;
  return s.toUpperCase() === s;
}

function isLow(s) {
  if(s === undefined || s ===' ' || s==='_' || s === '-') return false;
  return s.toLowerCase() === s;
}

function spinalCase(s) {
   var res = [];
  for(var i = 0; i < s.length; i++) {
    
    if( isUp(s[i]) && isLow(s[i-1]) ) {
      res.push('-');
    }
   
     if( s[i] == ' ' || s[i] == '_'|| s[i] == '-')
       res.push('-');
     else 
       res.push(s[i].toLowerCase());
    
    
     
  }
  
  return res.join('');
  
}
