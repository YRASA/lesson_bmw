/*
 * @Author: Zzceaon
 * @Date: 2020-08-16 21:58:21
 * @LastEditTime: 2020-08-17 13:42:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Einterestdit
 * @FilePath: \Course\MongoDB-Shell\demo07.js
 */
// db.workmate.find(
//   {interest: [ "看电影", "击剑", "看书" ]},
//   {name: 1, interest: 1, age: 1, _id: 0}
// )
// db.workmate.find(
//   {interest: [ "看书" ]},  // []代表完全匹配
//   {name: 1, interest: 1, age: 1, _id: 0}
// )
// db.workmate.find(
//   {interest: "看书"},
//   {name: 1, interest: 1, age: 1, _id: 0}
// )

// $all && or ||
// db.workmate.find(
//   {interest: {$all: ["美食", "篮球"]}},
//   {name: 1, interest: 1, age: 1, _id: 0}
// )

// $in or
// db.workmate.find(
//   {interest: {$in: ["美食", "篮球"]}},
//   {name: 1, interest: 1, age: 1, _id: 0}
// )

// $size 个数
// db.workmate.find(
//   {interest: {$size: 2}},
//   {name: 1, interest: 1, age: 1, _id: 0}
// )

// $slice
// db.workmate.find(
//   {interest: {$size: 3}},
//   {name: 1, interest: {$slice: -1}, age: 1, _id: 0}
// )
// interest: {$slice: 1} 显示第1页
// interest: {$slice: -1} 显示最后一页
// interest: {$slice: [x, x]} 显示第几页到第几页

// sort 1 -1 排序 升序 降序

// 分页 显示2 年龄从小到大
// db.workmate.find({}, {name: 1, age: 1, _id: 0}).limit(2).skip(0).sort({age: 1})  // 第一页
// db.workmate.find({}, {name: 1, age: 1, _id: 0}).limit(2).skip(2).sort({age: 1})  // 第二页

// $where 风险大尽量不要用
// db.workmate.find(
//   {$where: "this.age>30"},  // where里直接可以用>和<
//   {name: 1, age: 1, _id: 0}
// )