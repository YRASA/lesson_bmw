/*
 * @Author: Zzceaon
 * @Date: 2020-07-12 21:39:07
 * @LastEditTime: 2020-07-13 00:13:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\geektime\src\mock\data.js
 */ 
import Mock from 'mockjs'

export default Mock.mock("/data", {
  "list|20-30": [{
    "title": "@title()",
    "image": "@image('75x75')",
    "learned|10-20": 10,
    "lesson|20-30": 20,
    "t1|1-2": 1,
    "t2|1-5": 1,
    "index|+1": 1
  }]
})