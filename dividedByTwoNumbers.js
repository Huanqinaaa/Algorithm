// What is the 2,333th number which can be divided with no remainder by 2 or 3 ? 
function dividedByTwoNumbers(a, b, n) {
    var arr = [];
    for(var i = 1;i < a*b*n;i++) {
        if(!(i % a) || !( i % b)) {
            arr.push(i);
            if(arr.length >= n) {
                break;
            };
        }else { continue;}
    }
    return arr[n - 1];
}

console.log(dividedByTwoNumbers(2, 3, 2333));