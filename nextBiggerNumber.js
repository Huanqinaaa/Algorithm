function NextBiggerNumber(num) {
    var that = num;
    var num = num.toString().split('');
    var len = num.length;
    var temp = null;
    var arr = [];
    for(var i = 0;i < len; i++) {
        for(var j = 0;j < len-1;j++) {
            temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
            arr.push(num.join(''));
        }
    }
    var newArr = arr.filter(function(item, index) {
        return item > that;
    });
    if(newArr.length !== 0) {
        newArr.sort(function(a, b) {
            return a - b;
        });
        return newArr[0];
    }else {
        return (that + ' is already the biggest !');
    }
}
var target = NextBiggerNumber(123456);
console.log(target);