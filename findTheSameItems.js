// Pls find out the intersected items.
const A = [{a:10}, {a:12}, {a:14}];
const B = [{a:14}, {a:10}, {a:111}];

const A2 = new Set(A.map(x => JSON.stringify(x)));
const B2 = new Set(B.map(x => JSON.stringify(x)));
const res = A.map(x => JSON.stringify(x)).filter(x => B2.has(x)).map(x => JSON.parse(x));
console.log(res);