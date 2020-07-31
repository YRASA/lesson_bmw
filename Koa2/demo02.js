/*
 * @Author: Zzceaon
 * @Date: 2020-07-29 21:47:15
 * @LastEditTime: 2020-07-29 21:49:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Koa2\demo02.js
 */ 
function takeLongTime() {
  return new Promise((resolve => {
    setTimeout(() => resolve("long_time_value"), 3000)
  }))
}

async function test() {
  const v = await takeLongTime()
  console.log(v)
}

test()