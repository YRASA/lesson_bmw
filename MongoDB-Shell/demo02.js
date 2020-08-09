/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 20:43:36
 * @LastEditTime: 2020-07-31 20:57:37
 * @LastEditors: Please set LastEditors
 * @Description: 批量插入
 * @FilePath: \Course\MongoDB-Shell\demo02.js
 */ 
let workmate1={
  name:'JSPang',
  age:33,
  sex:1,
  job:'前端',
  skill:{
      skillOne:'HTML+CSS',
      SkillTwo:'JavaScript',
      SkillThree:'PHP'
  },
  regeditTime:new Date()
}

let workmate2={
  name:'ShengLei',
  age:30,
  sex:1,
  job:'JAVA后端',
  skill:{
      skillOne:'HTML+CSS',
      SkillTwo:'J2EE',
      SkillThree:'PPT'
  },
  regeditTime:new Date()
}

let workmate3={
  name:'MinJie',
  age:20,
  sex:1,
  job:'UI设计',
  skill:{
      skillOne:'PhotoShop',
      SkillTwo:'UI',
      SkillThree:'Word+Excel+PPT'
  },
  regeditTime:new Date()
}
let db = connect('company')
let workmateArray = [workmate1, workmate2, workmate3]
db.workmate.insert(workmateArray)
print('The data was inserted successfuly')