import React from 'react';
import { fromJS } from 'immutable';
import ImmutableComponent from './components/common';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

class App extends ImmutableComponent {
  // 最外层数据依然是原生js对象?
  // redux
  state = {
    title: fromJS([1,2,3,[]])  // '123' 本身是不可变的
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: fromJS([1,2,3,[]])
      })
    }, 3000)
  }
  render() {
    console.log('app render');
    return (
      <div>
        123456
        <Header title={this.state.title} />
      </div>
    )
  }
}

export default App;
