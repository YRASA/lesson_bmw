/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 20:35:55
 * @LastEditTime: 2020-07-31 20:42:55
 * @LastEditors: Please set LastEditors
 * @Description: 批量插入
 * @FilePath: \Course\MongoDB-Shell\demo01.js
 */ 
let startTime = (Date.now())
let db = connect('log')
let tempArray = []
// for (let i = 0; i < 1000; i++) {
//   db.test.insert({num: 1})
// }
for (let i = 0; i < 1000; i++) {
  tempArray.push({num: 1})
}
db.test.insert(tempArray)
let runTime = Date.now() - startTime
print('This run is ' + runTime + 'ms')