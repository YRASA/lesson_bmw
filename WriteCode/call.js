/*
 * @Author: Zzceaon
 * @Date: 2020-09-08 22:18:14
 * @LastEditTime: 2020-09-08 22:44:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\WriteCode\call.js
 */
function person(a, b, c, d) {
  console.log('调用了call')
  return {
    name: this.name,
    a: a,
    b: b,
    c: c,
    d: d
  }
}
let egg = { name: 'zc' }
Function.prototype.myCall = function(obj) {
  let newObj = obj || window
  newObj.func = this  // this指向person
  let newArguments = []
  for (let i = 1; i < arguments.length; i++) {
    newArguments.push('arguments[' + i + ']')
  }
  let result = eval('newObj.func(' + newArguments + ')')
  delete newObj.func
  return result
}
let res = person.myCall(egg, 'Python', 'R', 'Golang', 'TensorFlow')
console.log(res)