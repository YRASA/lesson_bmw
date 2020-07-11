import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { Tabs } from 'antd';
import Learn from './Learn';
// import axios from 'axios';
// import './mock/data.js';

const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   image: '',
    //   title: '',
    //   finish: 0
    // }
  }
  // componentDidMount() {
  //   axios.get('/data')
  //     .then(res => {
  //       console.log(res.data)
  //       this.setState({
  //         image: res.data.image,
  //         title: res.data.title,
  //         list: res.data.list
  //       })
  //     })
  // }
  render() {
    return (
      <div className="App">
        <div></div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="全部" key="1">
            <Learn />
          </TabPane>
          <TabPane tab="未学完" key="2">
            <Learn />
          </TabPane>
          <TabPane tab="已学完" key="3">
            <Learn />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
