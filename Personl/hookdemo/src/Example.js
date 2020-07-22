/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 05:44:15
 * @LastEditTime: 2020-07-21 21:30:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\hookdemo1\src\Example.js
 */ 
import React, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }
  componentDidMount() {
    console.log(`componentDidMount=>You clicked ${this.state.count} times`)
  }
  componentDidUpdate() {
    console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
  }
  render() { 
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.addCount.bind(this)}>Click me</button>
      </div>
    )
  }
  addCount() {
    this.setState({count: this.state.count + 1})
  }
}
 
export default Example