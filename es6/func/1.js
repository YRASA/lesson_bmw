// 正方形面积
/**
 * @return number
 * @param {number} w 
 * @param {number} h 
 */
function area(w, h) { // es5
    // console.log(w, h);
    // console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    if (arguments.length < 2) {
        console.error('请传递w,h两个参数');
        throw new Error('请传递w,h两个参数');
        return;
    }
    if (typeof w != 'number' || typeof h != 'number') {
        throw new Error('参数类型有误');
        return;
    }
    return w * h;
}
console.log(area(1, 2));
// var area = function(w, h) { // 匿名函数

// }

// let getArea = (w, h) => w * h // es6