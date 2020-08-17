/*
 * @Author: Zzceaon
 * @Date: 2020-08-03 00:12:27
 * @LastEditTime: 2020-08-16 19:16:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\MongoDB-Shell\demo05.js
 */
// findAndModify 查找并修改
var myModify = {
  findAndModify: "workmate",
  query: {name: 'JSPang'},
  update: {$set: {age: 18}},
  new: true  // 返回新值
}

var resultMessage = db.runCommand(myModify)
printjson(resultMessage)