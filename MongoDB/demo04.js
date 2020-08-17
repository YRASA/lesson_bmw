db.workmate.update({sex: 1}, {$set: {money: 1000}}, false, true)  // upset multi  upset:false -> 没有查到不增
let resultMessage = db.runCommand({getLastError: 1})  // getLastError:1 -> 返回功能错误
// if (resultMessage.updatedExisting) {

// } else {
  
// }
printjson(resultMessage)
// > load('./demo04.js')
// {
//         "connectionId" : 1,
//         "updatedExisting" : true,
//         "n" : 3,
//         "syncMillis" : 0,
//         "writtenTo" : null,
//         "err" : null,
//         "ok" : 1
// }
// true  // 是否连接成功
// >

// > db.runCommand({ping:1})
// { "ok" : 1 }
// >