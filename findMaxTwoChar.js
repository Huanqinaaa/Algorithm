// How to find out the max two char in char string ?
var str = 'aaaabbbbcccbbbbbbdddddddsssaaaaaaaavdfsdfsdfsdfsdfsdf';
function findMaxTwoChar(str) {
    var arr = str.split('');
    arr.sort(function(a, b) {
        return a.localeCompare(b);
    });
    var newArr = [];
    for(var i = 0;i < arr.length;i++) {
        if(arr[i] != arr[i + 1]) {
           newArr.push(arr.splice(0, i+1).join(''));
           i = -1;
        }
    }
    newArr.sort(function(a, b) {
        return a.length - b.length;
    });
    console.log(newArr[newArr.length - 1], newArr[newArr.length - 1].length, newArr[newArr.length - 2], newArr[newArr.length - 2].length, newArr[newArr.length - 2] + newArr[newArr.length - 1]);
}
findMaxTwoChar(str);
