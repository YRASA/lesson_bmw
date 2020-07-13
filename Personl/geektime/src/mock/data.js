/*
 * @Author: Zzceaon
 * @Date: 2020-07-13 22:20:00
 * @LastEditTime: 2020-07-13 23:01:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\geektime\src\mock\data.js
 */ 
import Mock from 'mockjs'

export default Mock.mock('/data', {
  "list|20-30": [{
    "title": "@title()",
    "image": "@image('75x75')",
    "lesson|20-30": 20,
    "learned|0-30": 1,
    "t1|1-2": 1,
    "t2|1-5": 1,
    "index|+1": 1
  }]
})