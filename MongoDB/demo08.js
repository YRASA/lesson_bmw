/*
 * @Author: Zzceaon
 * @Date: 2020-08-16 22:19:02
 * @LastEditTime: 2020-08-16 22:23:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\MongoDB-Shell\demo08.js
 */
let db = connect('company')
let result = db.workmate.find()
// hasNext 是否有下一条
// while (result.hasNext()) {
//   printjson(result.next())
// }
// forEach完全操作游标cursor
result.forEach(function(result) {
  printjson(result)
})