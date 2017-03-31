


function gcd(a,b) {
    if (b == 0) 
        return a;
    return gcd(b, a%b);
}

function lcm(a,b) {
    return (a*b) / gcd(a,b);
}

function lcmInRange(arr) {
    l = arr[0]
    r = arr[1]
    a = Math.min(l,r);
    b = Math.max(l,r);
   var x = a;
   var y = a+1;
    for( ; y <= b; y++) {
        x = lcm(x,y);
    }

    return x;
}

console.log(lcmInRange([32,9]));