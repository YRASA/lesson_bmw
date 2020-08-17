/*
 * @Author: Zzceaon
 * @Date: 2020-08-16 22:24:44
 * @LastEditTime: 2020-08-17 13:47:37
 * @LastEditors: Please set LastEditors
 * @Description: 百万数据
 * @FilePath: \Course\MongoDB-Shell\demo09.js
 */
// 生成随机数
function GetRandomNum(min, max) {
  let range = max - min
  let rand = Math.random()
  return (min + Math.round(rand * range))
}
// console.log(GetRandomNum(10000, 99999))

// 生成随机用户名
function GetRandomUserName(min, max) {  // min max 位数
  let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnm".split("")
  let outputtext = ""
  for (let i = 1; i < GetRandomNum(min, max); i++) {
    outputtext = outputtext + tempStringArray[GetRandomNum(0, tempStringArray.length)]
  }
  return outputtext
}
// console.log(GetRandomUserName(7, 16))

// 200万条数据
let startTime = Date.now()
let db = connect('company')
db.randomInfo.drop()
let tempInfo = []
for (let i = 0; i < 2000000; i++) {
  tempInfo.push({
    username: GetRandomUserName(7, 16),
    regediteTime: new Date(),
    randomNum0: GetRandomNum(100000, 999999),
    randomNum1: GetRandomNum(100000, 999999),
    randomNum2: GetRandomNum(100000, 999999),
    randomNum3: GetRandomNum(100000, 999999),
    randomNum4: GetRandomNum(100000, 999999),
    randomNum5: GetRandomNum(100000, 999999),
    randomNum6: GetRandomNum(100000, 999999),
    randomNum7: GetRandomNum(100000, 999999),
    randomNum8: GetRandomNum(100000, 999999),
    randomNum9: GetRandomNum(100000, 999999)
  })
}

db.randomInfo.insert(tempInfo)
let runTime = Date().now() - startTime
print("[demo]--------"+runTime+"ms")

// db.randomInfo.find().skip(50000)