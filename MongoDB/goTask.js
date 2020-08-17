/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 20:15:33
 * @LastEditTime: 2020-08-10 01:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\MongoDB-Shell\goTask.js
 */ 
let userName = "Zzceaon"
let timeStamp = Date.parse(new Date())
let jsonDatabase = {"loginName": userName, "loginTime": timeStamp}
let db = connect('log')  // use log
db.login.insert(jsonDatabase)
print('log print success')