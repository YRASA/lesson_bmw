/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 16:45:17
 * @LastEditTime: 2020-07-20 16:45:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\cache\memorize.js
 */ 
function memorize(func) {
  let cache = {};
  return function(...args) {
    let k = JSON.stringify(args);
    if (cache[k] !== undefined)  {
      console.log('from cache')
      return cache[k]
    }
    // 计算
    let res = func(...args)     // 函数调用需要参数，
    cache[k] = res;
    console.log('cal')
    return res;
  }
}