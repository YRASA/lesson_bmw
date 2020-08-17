/*
 * @Author: Zzceaon
 * @Date: 2020-08-16 19:35:25
 * @LastEditTime: 2020-08-17 13:39:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\MongoDB-Shell\demo06.js
 */
// db.workmate.find(
//   {"skill.skillOne": "HTML+CSS"},
//   {name: true, "skill.skillOne": true, _id: false}  // 显示哪个字段
// )
// 1 -> true  0 -> false
// db.workmate.find(
//   {"skill.skillOne": "HTML+CSS"},
//   {name: 1, "skill.skillOne": 1, _id: 0}
// )

// >=: $gte  <=: $lte
// db.workmate.find(
//   {age: {$lte: 30, $gte: 25}},
//   {name: 1, "skill.skillOne": 1, age: 1, _id: 0}
// )
// var startDate = new Date('01/01/2020');
// db.workmate.find(
//   {regeditTime: {$gt: startDate}},
//   {name: 1, "skill.skillOne": 1, age: 1, _id: 0}
// )

// $in: 一个key多个value
// db.workmate.find(
//   {age: {$in: [25, 33, 30]}},
//   {name: 1, "skill.skillOne": 1, age: 1, _id: 0}
// )
// $nin
// db.workmate.find(
//   {age: {$nin: [25, 33]}},
//   {name: 1, "skill.skillOne": 1, age: 1, _id: 0}
// )

// $or ||
// db.workmate.find(
//   {$or: [
//     {age: {$gte: 30}},
//     {'skill.SkillThree': 'PPT'}
//   ]},
//   {name: 1, "skill.SkillThree": 1, age: 1, _id: 0}
// )

// $and
// db.workmate.find(
//   {$and: [
//     {age: {$gte: 30}},
//     {'skill.SkillThree': 'PPT'}
//   ]},
//   {name: 1, "skill.SkillThree": 1, age: 1, _id: 0}
// )

// $nor 不是否则 => $not
// db.workmate.find(
//   {$nor: [
//     {age: {$gt: 30}},
//     {'skill.SkillThree': 'PPT'}
//   ]},
//   {name: 1, "skill.SkillThree": 1, age: 1, _id: 0}
// )

// $not
// db.workmate.find({
//   age: {
//     $not: {
//       $lte: 30,
//       $gte: 20
//     }
//   }
// },
// {name: 1, "skill.SkillThree": 1, age: 1, _id: 0}
// )