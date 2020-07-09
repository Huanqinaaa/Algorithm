function parseQuery(query) {
    var obj = {},
        seg = query.replace(/^\?/, '').split('&'),
        len = seg.length, i = 0, s;
        var obj = {}, objArr = {};
    for (; i < len; i++) {
        if (!seg[i]) { continue; }
        s = seg[i].split('=');

        if(!obj[s[0]]) {
            obj[s[0]] = s[1];
        }else {
            if(!objArr[s[0]]) {
                objArr[s[0]] = [];
            }
            if(objArr[s[0]].length === 0) {
                objArr[s[0]][0] = obj[s[0]];
                objArr[s[0]].push(s[1]);
                obj[s[0]] = objArr[s[0]];
            }else{
                objArr[s[0]].push(s[1]);
                obj[s[0]] = objArr[s[0]];
            } 
        }
    }
    return obj;
}
console.log(parseQuery('?a=1&b=2&c=3&d=4&b=6&b=78&a=9'));