/*
 * @Author: Zzceaon
 * @Date: 2020-07-07 12:15:30
 * @LastEditTime: 2020-07-07 12:19:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\oj-template\src\mock\data2.js
 */ 
import Mock from 'mockjs';

export default Mock.mock('/comments/', 'get', {
  success: true,
  title: '作为意志和表象的世界',
  content: 'Die Welt als Wille und Vorstellung',
  'list|5-10': [{
    'title': '@title()',
    'email': '@email',
    'id': '@id',
    'key|+1': 1
  }]
})