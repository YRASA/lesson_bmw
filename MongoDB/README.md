## 数据库 -> 集合 -> 文件(一行数据)
- show dbs 查看数据库
- use log 进入数据库, 如果没有, 自动创建数据库
- db 定位当前位置
- db.login.insert 在集合插入文件, 如果没有, 自动创建集合
- show collections 查看集合
- db.login.find() 查看集合中的文件
- db.login.findOne() 查看集合中的第一个文件(小驼峰)
- db.login.update 更新集合中的文件
- db.login.remove 移除集合中的文件
- db.login.drop() 删除集合
- db.dropDatabase() 删除数据库
- 批量插入不能超过48M
- $xxx: 修改器 / xxx: 修饰符
- 在MongoDB Cli运行文件就用load('xxx.xx'),但是每次load都要重连一次MongoDB, 以外的Cli就用mongo xxx.xx(感觉这个方便一点)
- 在操作数据库时，对数据的修改是需要有足够的安全措施的，其实在实际工作中，我们用db.collections.update的时候不多，在修改时我们都会用findAndModify，它可以给我们返回来一些必要的参数，让我们对修改多了很多控制力，控制力的加强也就是对安全的强化能力加强了。
- 应答式写入: 直接返回结果（报表）
- db.runCommand( ): 数据库运行命令的执行器，执行命令首选就要使用它，因为它在Shell和驱动程序间提供了一致的接口
- db.listCommands()
- db.workmate.find 查看参数
    function(query, fields, limit, skip, batchSize, options)
      - limit: 返回几个结果
      - skip 跳过
      - limit + skip => 分页

findAndModify(比db.collections.update安全)属性值:
  - query: 需要查询的条件/文档
  - sort: 进行排序
  - remove: [boolean]是否删除查找到的文档
  - new: [boolean]返回更新前的文档还是更新后的文档
  - fields: 需要返回的字段
  - upset: 没有这个值是否增加
  - remove和update只能存在一个

MongoDB没有>和<
  - 小于(less-than): $lt
  - 小于等于(less-than-equal): $lte
  - 不等于(not-equal): $ne
  - 大于等于(greater-than-equal): $gte
  - 大于(greater-than): $gt

- db.randomInfo.stats() 查看状态
- it 下一页

- db.randomInfo.getIndexes() 查看索引(一个对象一个索引)
- db.randomInfo.ensureIndex({username: 1}) 建立索引(每一个集合直允许建立64个索引)
- 按顺序数字比字符串快
- 数字比文本快
- db.randomInfo.dropIndex('randomNum0_1')  // 删除索引 ()里为name不是key

- 数据不超万条时，不需要使用索引。性能的提升并不明显，而大大增加了内存和硬盘的消耗。
- 查询数据超过表数据量30%时，不要使用索引字段查询, 如sex。实际证明会比不使用索引更慢，因为它大量检索了索引表和我们原表。
- 数字索引，要比字符串索引快的多，在百万级甚至千万级数据量面前，使用数字索引是个明确的选择。
- 把你经常查询的数据做成一个内嵌数据（对象型的数据），然后集体进行索引。

- db.info.ensureIndex({contextInfo: 'text'}) 全文索引

- mongo命令在一般的工作环境中不用
- 数据库用户角色：read、readWrite；
- 数据库管理角色：dbAdmin、dbOwner、userAdmin;
- 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；
- 备份恢复角色：backup、restore；
- 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
- 超级用户角色：root
- 内部角色：__system

- db.system.users.find() 查询用户
- db.system.users.remove() 移除用户
- db.auth('Zzceaon', '123456') 用户登录

- mongod --dbpath=D:\MongoDB\data\db --auth
- mongo -u Zzceaon -p 123456 127.0.0.1:27017/admin  admin->库