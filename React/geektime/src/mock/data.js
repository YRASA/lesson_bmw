/*
 * @Author: Zzceaon
 * @Date: 2020-07-11 14:27:54
 * @LastEditTime: 2020-07-11 16:12:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\geektime\src\mock\data.js
 */ 
import Mock from 'mockjs';

export default Mock.mock('/data', 'get', {
  success: true,
  'list|5-10': [{
    "image": "@image('75x75')",
    "title": "@title()",
    "finish": "@float(0, 100, 1, 0)"
  }]
})