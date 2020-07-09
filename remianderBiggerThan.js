// x, y < n, y devided by x, the remiander is bigger than k, pls give the possible pairs.
function fn1(n, k) {
    var j, i, count = 0;
    for(i = 1; i<=n; i++) {
        for(j = 1; j<=n; j++){
            if(i % j >= k) {
                count ++;
            }
        }
    }
    return count;
}

function fn2(n, k) {
    var y, a, b;
    var count = 0;
    for(y = 0;y<=n;y++) {
        if(y<=k) {
            continue;
        }
        b = parseInt(n/y);
        count += b*(y - k);
        a = n%y - k + 1;
        if(a > 0) {
            count += a;
        }
    }
    return count;
}