/*
 * @Author: Zzceaon
 * @Date: 2020-08-17 00:06:13
 * @LastEditTime: 2020-08-17 00:26:13
 * @LastEditors: Please set LastEditors
 * @Description: 全文索引
 * @FilePath: \Course\MongoDB-Shell\demo12.js
 */
db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

// db.info.ensureIndex({contextInfo: 'text'})  // 全文索引
// db.info.find({$text: {$search: "programmer"}})
// db.info.find({$text: {$search: "programmer family diary drink"}})  // 只要单个匹配就可以
// db.info.find({$text: {$search: "programmer family diary -drink"}})  // -drink 不查有drink的
// db.info.find({$text: {$search: " \"love PlayGame\" drink"}})  // \"love PlayGame\" 两个词