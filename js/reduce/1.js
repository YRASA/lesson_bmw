/*
 * @Author: Zzceaon
 * @Date: 2020-07-02 10:30:17
 * @LastEditTime: 2020-07-04 16:08:15
 * @LastEditors: Please set LastEditors
 * @Description: 手写reduce
 * @FilePath: \Course\js\reduce\1.js
 */ 
function reduce(arr, reduceCallback, initialValue) {
  // 参数校验
  if (Array.isArray() || !arr.length ||
    typeof reduceCallback !== 'function') {
    return [];
  } else {
    // initialValue 0 1
    // 定义中间变量
    let hasInitialValue = initialValue !== undefined;
    // 分步法 定义变量
    let value = hasInitialValue ? initialValue : arr[0];  // 上一次的执行结果
    for (let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
      value = reduceCallback(value, arr[i], i, arr);
    }
    return value;
    // 抽象能力
    // reduceCallback四个能力
    // 1.initialValue false 少执行一次?
    // for
    // 2.reduceCallback 怎么合并
    // let value;
    // return value;
  }
}
reduce([1, 2, 3], function(pre, cur, index, arr) {
  return pre + cur;
}, 0);
// [1, 2, 3].reduce
// Array.prototype.reduceFn
