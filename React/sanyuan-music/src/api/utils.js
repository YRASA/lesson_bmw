/*
 * @Author: Zzceaon
 * @Date: 2020-07-27 10:44:31
 * @LastEditTime: 2020-07-27 10:48:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\api\utils.js
 */ 
//防抖函数

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
};

export { debounce };