/**
 * @author zc
 * @date 2020-4-14
 * @func 爬楼梯算法
 * @param {@type number} n
 */
// function climbStairs(n) {
//     // mao:es6新数据类型
//     const w = new Map();
//     // if (n >= 40) throw new Error('overflow');
//     if (n == 1) return 1;
//     if (n == 2) return 2;
//     if (w.has(n)) {
//         return w.get(n);
//     }
//     const ret =  climbStairs(n - 1) + climbStairs(n - 2);
//     // 存储
//     w.set(n, ret);
//     return ret;
// }
// console.log(climbStairs(50));

// function f(n) {
//     if (n == 1) return 1;
//     return f(n -1) + 1
// }
// console.log(f(100000))

// var m = new Map();
// m.set(1, "black");
// console.log(m.get(1));
// console.log(m.has(1));
// m.set({x:1}, 3); // key为对象
// let i = 0;
// m.forEach((item, key, mapObj) => {
//     console.log(item, key, mapObj);
//     i++;
// })
// console.log(i);

function f(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    let ret = 0,
        pre = 2,
        prepre = 1;
    for (let i  =3; i <= n; i++) {
        ret = pre + prepre;
        prepre = pre;
        pre = ret;
    }
    return ret;
}
console.log(f(300));
