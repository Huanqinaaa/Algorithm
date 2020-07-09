// 圆圈内有n个数，每次消除第m个数，最终留下那个数字的索引。
function f(n, m) {
    if(n == 1) {
        return 0;
    }
    return [f(n-1, m) + m] % n;
}
console.log(f(100, 3));