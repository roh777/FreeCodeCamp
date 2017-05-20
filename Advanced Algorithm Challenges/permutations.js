function permutations(str, n) {
    if(n == 0) {
	return new Array(str[n]);
    }
    else {
	var prevPerm = permutations(str, n-1);
	var curPerm = new Array();
	var curChar = str[n];

	for(var i = 0; i <prevPerm.length; i++) {
	    var s = prevPerm[i];
	    for(var j = 0; j <= s.length; j++) {
		curPerm.push(s.substr(0,j) + curChar + s.substr(j));
	    }
	}
	return curPerm;
    }
}

	    
function checkForConsecutive(str) {
	for(var i = 0; i < str.length-1; i++) {
		if(str[i] === str[i+1]) {
			return false;
		}
	}
	return true;
}

var allPermutations = permutations("abcdefa",6);

var count = 0;
for(var i = 0; i < allPermutations.length; i++) {
	if(checkForConsecutive(allPermutations[i])) count++;
}

console.log(count);






