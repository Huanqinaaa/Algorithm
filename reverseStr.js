// reverse the string
function reverseStr(str) {
    var len = str.length;
    if(len == 1) {
        return str;
    } else {
        return reverseStr(str.substring(1)) + str.charAt(0);
    }
}

var str1 = "1234";
console.log(reverseStr(str1));