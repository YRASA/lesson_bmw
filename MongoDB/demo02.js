/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 20:43:36
 * @LastEditTime: 2020-08-16 21:57:17
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
  regeditTime:new Date(),
  interest:['玩游戏', '美食', '篮球']
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
  regeditTime:new Date(),
  interest:['足球', '美食', '篮球']
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
  regeditTime:new Date(),
  interest:['看电影', '美食', '英语']
}

let workmate4={
  name:'Jack',
  age:23,
  sex:1,
  job:'后端',
  skill:{
      skillOne:'C++',
      SkillTwo:'C',
      SkillThree:'Python'
  },
  regeditTime:new Date(),
  interest:['听音乐', '绘画']
}

let workmate5={
  name:'Sam',
  age:27,
  sex:1,
  job:'数据分析师',
  skill:{
      skillOne:'R',
      SkillTwo:'Python',
      SkillThree:'Excel'
  },
  regeditTime:new Date(),
  interest:['看电影', '美食', '旅行']
}

let workmate6={
  name:'Octavia',
  age:22,
  sex:0,
  job:'UI设计',
  skill:{
      skillOne:'PhotoShop',
      SkillTwo:'UI',
      SkillThree:'Word+Excel+PPT'
  },
  regeditTime:new Date(),
  interest:['德语', '蹦床', '日语']
}

let workmate7={
  name:'XiaoHong',
  age:28,
  sex:0,
  job:'项目经理',
  skill:{
      skillOne:'Excel+Word',
      SkillTwo:'JavaScript',
      SkillThree:'NodeJS'
  },
  regeditTime:new Date(),
  interest:['游泳', '高尔夫', '马术']
}

let workmate8={
  name:'John',
  age:26,
  sex:1,
  job:'CV',
  skill:{
      skillOne:'C++',
      SkillTwo:'Python',
      SkillThree:'Unity'
  },
  regeditTime:new Date(),
  interest:['看电影', '击剑', '看书']
}

let workmate9={
  name:'Lisa',
  age:20,
  sex:0,
  job:'前端',
  skill:{
      skillOne:'PhotoShop',
      SkillTwo:'Javascript',
      SkillThree:'NodeJS'
  },
  regeditTime:new Date(),
  interest:['滑雪']
}

let workmate10={
  name:'XiaoXia',
  age:24,
  sex:1,
  job:'架构师',
  skill:{
      skillOne:'JAVA',
      SkillTwo:'SpringBuilt',
      SkillThree:'K8S'
  },
  regeditTime:new Date(),
  interest:['跳伞', '赛车', '编程']
}

let db = connect('company')
let workmateArray = [workmate1, workmate2, workmate3, workmate4, workmate5, workmate6, workmate7, workmate8, workmate9, workmate10]
db.workmate.insert(workmateArray)
print('The data was inserted successfuly')