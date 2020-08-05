/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 14:34:04
 * @LastEditTime: 2020-08-04 18:06:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\api\utils.js
 */ 
export const getCount = (count) => {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万"
  } else {
    return Math.floor(count / 10000000) / 10 + "亿"
  }
}
export const debounce = (func, delay) => {
  let timer
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}