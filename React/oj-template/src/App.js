/*
 * @Author: Zzceaon
 * @Date: 2020-07-07 10:13:19
 * @LastEditTime: 2020-07-07 12:16:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\oj-template\src\App.js
 */ 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 数据和组件分离
import axios from 'axios';
import './mock/data1.js';
import './mock/data2.js';

// JSX UI state MVVM 行为 OO

// 函数的返回值是一个组件
// /posts/ axios api url /comments/
// Post 组件作为参数 高阶组件
// 通用性的提供数据请求及更新的解决方案
// 有人为它服务
class Post extends Component{
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
class Comment extends Component{
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
const loadAndRefresh = (url) => (WrappedComponent) => {  // 第二个(): 返回值
  // 返回组件
  return class extends Component {
    constructor() {
      super()
      this.state = {
        msg: '',
        content: ''
      }
    }
    componentDidMount() {
      // 管理数据请求
      this._loadData()
    }
    async _loadData() {
      this.setState({
        msg: 'data loading...'
      })
      axios.get(url)
        .then(res => {
          // console.log(res.data)
          this.setState({
            msg: res.data.title,
            content: res.data.content
          })
        })
    }
    render() {
      const props = {
        msg: this.state.msg,
        content: this.state.content
      }
      return (
        <WrappedComponent {...props} />
      )
    }
  }
}
// 复用
const WrappedPost = loadAndRefresh('/posts/')(Post)
const WrappedComment = loadAndRefresh('/comments/')(Comment)

function App() {
  return (
    <div className="App">
      {/* message */}
      {/* <Post /> */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}

export default App;
