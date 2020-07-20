// Generate legal pairs of parenthesis .
function generate(left, right, n, s) {
    if(left == n && right == n) {
        console.log(s);
        return;
    }

    if(left < n) {
        generate(left+1, right, n, s+'(');
    }

    if(right < left) {
        generate(left, right+1, n, s+')');
    }
}
generate(0, 0, 3, '');