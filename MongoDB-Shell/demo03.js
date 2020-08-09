/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 20:51:45
 * @LastEditTime: 2020-08-01 00:04:25
 * @LastEditors: Please set LastEditors
 * @Description: 修改文件
 * @FilePath: \Course\MongoDB-Shell\demo03.js
 */ 
let db = connect('company')
// 修改数据错误做法:
// db.workmate.update({name: "MinJie"}, {sex: 0})  // 导致所有数据被删除, 只剩下id和sex
// 正确做法(本办法, 直接修改文件再更新):
// let workmate3={
//   name:'MinJie',
//   age:20,
//   sex:0,
//   job:'UI设计',
//   skill:{
//       skillOne:'PhotoShop',
//       SkillTwo:'UI',
//       SkillThree:'Word+Excel+PPT'
//   },
//   regeditTime:new Date()
// }
// db.workmate.update({name: "MinJie"}, workmate3)
// 正确做法:
// $set
// db.workmate.update({name: "MinJie"}, {$set: {sex: 0, age: 20}})
// db.workmate.update({name: "MinJie"}, {$set: {"skill.SkillThree": 'word'}})  // 内嵌循环

// $unset: 删除一个值
// db.workmate.update({name: "MinJie"}, {$unset: {age: ''}})  // 只关心key

// 如果没有就自动加上(不过是加到最后, 并不是原来的位置)
// db.workmate.update({name: "MinJie"}, {$set: {age: 20}})

// $inc: 操作data
// db.workmate.update({name: "MinJie"}, {$inc: {age: -2}})

// 只加了一次, 没有全加
// db.workmate.update({}, {$set: {interest: []}})
// 正确做法:
// multi: 查找了第一个还继续吗?
// db.workmate.update({}, {$set: {interest: []}}, {multi: true})

// upsert: 没有找到就自动加上
// db.workmate.update({name: "XiaoWang"}, {$set: {age: 20}})  // 并不能添加
// db.workmate.update({name: "XiaoWang"}, {$set: {age: 20}}, {upsert: true})

// $push
// db.workmate.update({name: "XiaoWang"}, {$push: {interest: "draw"}})  // 没有也自动加上数组
// db.workmate.update({name: "MinJie"}, {$push: {"skill.SkillFour": "draw"}})

// $ne: 检查一个值是否存在，如果不存在再执行操作，存在就不执行(后面的语句)
// db.workmate.update({name: "XiaoWang", interest: {$ne: 'playGame'}}, {$push: {interest: 'Game'}})
// db.workmate.update({name: "XiaoWang", interest: {$ne: 'Game'}}, {$push: {interest: 'playGame'}})

// $addToSet: 查找, 没有则添加, 有则不($ne的升级版)
// db.workmate.update({name: "XiaoWang"}, {$addToSet: {interest: 'readbook'}})

// $each: 批量追加
// let newInterests = ['Sing', 'Dance', 'Code']
// db.workmate.update({name: "XiaoWang"}, {$addToSet: {interest: {$each: newInterests}}})

// $pop: 1->从末端进行删除 -1->从开始位置进行删除
// db.workmate.update({name: "XiaoWang"}, {$pop: {interest: -1}})

// 数组定位修改
// db.workmate.update({name: "XiaoWang"}, {$set: {"interest.0": "Game"}})  // 有点就要用双引号(还不如整体统一双引号)

// findAndModify: 查找并修改的意思。配置它可以在修改后给我们返回修改的结果
// db.runCommand()
print('The data was updated successfully')