/*
 * @Author: Zzceaon
 * @Date: 2020-07-07 11:27:35
 * @LastEditTime: 2020-07-07 12:18:22
 * @LastEditors: Please set LastEditors
 * @Description: 假数据
 * @FilePath: \Course\React\oj-template\src\mock\data1.js
 */ 
import Mock from 'mockjs';

export default Mock.mock('/posts/', 'get', {
  success: true,
  title: '纯粹性理性批判',
  content: 'Kritik der reinen Vernunft',
  'list|5-10': [{
    'title': '@title()',
    'email': '@email',
    'id': '@id',
    'key|+1': 1
  }]
})