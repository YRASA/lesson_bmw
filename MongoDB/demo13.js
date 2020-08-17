/*
 * @Author: Zzceaon
 * @Date: 2020-08-17 00:29:08
 * @LastEditTime: 2020-08-17 13:50:58
 * @LastEditors: Please set LastEditors
 * @Description: 用户管理
 * @FilePath: \Course\MongoDB-Shell\demo13.js
 */
db.createUser({
  user: "Zzceaon",
  pwd: "123456",
  customData: {
    name: "zc",
    email: "123@qq.com",
    age: 17
  },
  roles: [
    {
      role: "readWrite",
      db: "company"
    },
    'read'
  ]
})

// db.system.users.find() // 查询用户
// db.system.users.remove({user: "Zzceaon"}) // 移除用户
// db.auth('Zzceaon', '123456')  // 用户登录