// How to find out the most duplicated char in one character string ?
var str = "hfhfgffsdfsdfsdfsdfsdfsdfsdfsdf";
function getMaxCountAndChar(str) {
    var Obj = {};
    for (var i = 0; i < str.length; i++) {
        if (Obj[str.charAt(i)]) {
            Obj[str.charAt(i)]++;
        } else {
            Obj[str.charAt(i)] = 1;
        }
    }
    var num = 0;
    var char = "";
    for (var key in Obj) {
        if (Obj[key] > num) {
            num = Obj[key];
            char = key;
        }
    }
    console.log("出现最多次数的是:" + char + ",出现了:" + num + "次");
    obj = {};
}
getMaxCountAndChar(str);