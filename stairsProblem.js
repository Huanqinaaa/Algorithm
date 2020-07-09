// Each time you can jump one or two stairs, so how many possibilities if you have to climb N stairs ?
function stairs(n) {
    if(n == 1 || n == 2) {
        return n;
    }
    return stairs(n-1) + stairs(n-2);
}

console.log(stairs(10));