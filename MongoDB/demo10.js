/*
 * @Author: Zzceaon
 * @Date: 2020-08-16 23:31:05
 * @LastEditTime: 2020-08-16 23:52:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\MongoDB-Shell\demo10.js
 */
let startTime = Date.now()
let db = connect('company')
let res = db.randomInfo.find({username: 'n9y5nap7d'})
res.forEach(rs => {printjson(rs)})
let runTime = Date.now() - startTime
print('[Demo]this run time is ' + runTime +'ms')

// db.randomInfo.getIndexes()  // 查看索引(一个对象一个索引)
// 建立索引
// db.randomInfo.ensureIndex({username: 1})

// 第一遍查询时间长是因为没有cache
