function FindSymDiff(a,b) {
    var diff = [];

    a.forEach( function(e) {
        var flag = true;
        b.forEach( function(f) {
            if(e == f) {
                flag = false;
            }
        });

        if(flag) diff.push(e);
    });

    b.forEach( function(e) {
        var flag = true;
        a.forEach( function(f) {
            if(e == f) {
                flag = false;
            }
        });

        if(flag) diff.push(e);
    });

    return diff;
}

function sym (arg) {
    curDiff = [];
    for(var i = 0; i < arguments.length; i++) {
        curDiff = FindSymDiff(curDiff, arguments[i]);
    }
    return Array.from(new Set(curDiff));
}

a = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
console.log(a);