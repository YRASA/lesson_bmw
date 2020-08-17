/*
 * @Author: Zzceaon
 * @Date: 2020-08-16 23:55:13
 * @LastEditTime: 2020-08-17 00:04:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\MongoDB-Shell\demo11.js
 */
let startTime = Date.now()
let db = connect('company')
let res = db.randomInfo.find({username: '8f9wtogn', randomNum0: 962110}).hint({randomNum0: 1})  // 以它为第一个查询条件
res.forEach(rs => {printjson(rs)})
let runTime = Date.now() - startTime
print('[Demo]this run time is ' + runTime +'ms')