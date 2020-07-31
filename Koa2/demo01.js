/*
 * @Author: Zzceaon
 * @Date: 2020-07-29 21:40:19
 * @LastEditTime: 2020-07-29 21:46:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Koa2\demo01.js
 */ 
// await: async wait
function getSomething() {
  return "something"
}
async function testAsync() {
  return "Zzceaon"
}
// const res = testAsync()
// console.log(res)
// 直接调用返回promise
// >>> Promise { 'Zzceaon' }
async function test() {
  const v1 = await getSomething()
  const v2 = await testAsync()
  console.log(v1, v2)
}
test()
// >>> something Zzceaon