/*
 * @Author: Zzceaon
 * @Date: 2020-07-09 00:10:00
 * @LastEditTime: 2020-07-09 00:29:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\antd-mockjs-hoc\src\App.js
 */ 
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'antd';

// 全局的就可以 css是一定要引入的
// import 'antd/dist/antd.css';
// antd 全局引入方式 babel
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
function App() {
  return (
    <div className="App">
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default App;
