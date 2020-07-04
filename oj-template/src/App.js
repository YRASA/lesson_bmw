/*
 * @Author: Zzceaon
 * @Date: 2020-07-04 17:07:19
 * @LastEditTime: 2020-07-04 17:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\oj-template的副本\src\App.js
 */ 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Dog extends Component{
//   constructor() {
//     super();
//     this.state = {
//       isRunning: false,
//       isBarking: false,
//     }
//   }
//   bark() {
//     this.setState({
//       isRunning: true
//     })
//     console.log("bark")
//   }
//   run() {
//     this.setState({
//       isBarking: true
//     })
//     console.log("run")
//   }
//   barkAndRun () {
//     this.bark();
//     this.run();
//     setTimeout(() => {
//       this.setState({
//         isRunning: false,
//         isBarking: false
//       }, () => {
//         console.log("stop")
//       })
//     }, 2000);
//   }
//   render() {
//     return (
//       <div className="App" onClick={this.barkAndRun.bind(this)}>
//         Dog
//       </div>
//     );
//   }
// }

// class Poem extends Component {
//   componentDidMount() {
//     console.log(this.p.offsetHeight)
//   }
//   render() {
//     const { content } = this.props
//     return (
//       <p ref={(p) => this.p = p}>
//         { content }
//       </p>
//     )
//   }
// }

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      content: 120
    }
  }
  render () {
    return (
      <div>
        {  this.state.content === 0 ? "没有消息" :  this.state.content > 99 ? "99+" : this.state.content }
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      {/* <Dog /> */}
      {/* <Poem content="汉皇重色思倾国，御宇多年求不得。
杨家有女初长成，养在深闺人未识。
天生丽质难自弃，一朝选在君王侧。
回眸一笑百媚生，六宫粉黛无颜色。
春寒赐浴华清池，温泉水滑洗凝脂。
侍儿扶起娇无力，始是新承恩泽时。
云鬓花颜金步摇，芙蓉帐暖度春宵。
春宵苦短日高起，从此君王不早朝。
承欢侍宴无闲暇，春从春游夜专夜。" /> */}
      <Notification />
    </div>
  );
}

export default App;
