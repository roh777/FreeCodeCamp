function pairwise(arr, arg) {
	pair = [];
	for(var i = 0; i < arr.length; i++) {
		var cur = arr[i];
		for(var j = 0; j < arr.length; j++) {
			if(i !=j && (cur + arr[j] === arg) ) {
				pair.push(i,j);
				arr[i] = 1<<31;
				arr[j] = 1 << 31;
				break;
			}
		}
	}
	console.log(arr);
	return pair.reduce((acc, val)=>{ return acc + val;}, 0);
}

ans = pairwise([0, 0, 0, 0, 1, 1], 1);
console.log(ans);