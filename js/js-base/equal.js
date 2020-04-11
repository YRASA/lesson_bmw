let a = 1;
let b = 1;
let c = [1]; // 北京路
let d = [1]; // 北京路
let e = '1';
let g = {};
let h = {};
console.log(a == b);
// 存储引用类型是存在不同地方的,所以cdgh指向不同的地址,导致==和===都不相等
console.log(c == d, c === d);
console.log(g === h);
console.log(a == e, a === e);