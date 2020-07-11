import React from 'react'
import { Tabs, List, Avatar } from 'antd';
import './mock/data.js';
import axios from 'axios';

const { TabPane } = Tabs;

class Learn extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    axios.get('/data')
      .then(res => {
        // console.log(res.data.list)
        this.setState({
          list: res.data.list
        })
      })
  }
  render() {
    // console.log(this.state)
    const data = this.state.list
    // console.log(data.title)
    return (
      <React.Fragment>
        <Tabs  type="card">
          <TabPane tab="所有形式" key="1">
            <List.Item>
                <List.Item.Meta
                  avatar={<Avatar shape="square" size={75} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title=""
                />
            </List.Item>
          </TabPane>
          <TabPane tab="专栏" key="2">
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar shape="square" size={75} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title=""
              />
            </List.Item>
          </TabPane>
          <TabPane tab="视频课" key="3">
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar shape="square" size={75} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title=""
              />
            </List.Item>
          </TabPane>
          <TabPane tab="微课" key="4">
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar shape="square" size={75} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title=""
              />
            </List.Item>
          </TabPane>
          <TabPane tab="每日一课" key="5">
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar shape="square" size={75} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title=""
              />
            </List.Item>
          </TabPane>
          <TabPane tab="其他" key="6">
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar shape="square" size={75} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title=""
              />
            </List.Item>
          </TabPane>
        </Tabs>
      </React.Fragment>
    )
  }
}

export default Learn;