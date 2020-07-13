/*
 * @Author: Zzceaon
 * @Date: 2020-07-13 22:24:00
 * @LastEditTime: 2020-07-13 23:01:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\geektime\src\Lesson.js
 */
import React, { Component } from 'react';
import axios from 'axios';
import { Tabs, Layout, Avatar, Button, List } from 'antd';
import './mock/data';
import data from './mock/data';

const { TabPane } = Tabs
const { Header, Content } = Layout

class Lesson extends Component {
  state = {
    lesson: [],
    tab1: 0,
    tab2: 0
  }
  componentDidMount() {
    axios.get("/data")
      .then((res) => {
        this.setState({
          lesson: res.data.list
        })
      })
  }
  callback1 = (e) => {
    this.setState({
      tab1: Number(e)
    })
  }
  callback2 = (e) => {
    this.setState({
      tab2: Number(e)
    })
  }
  render() {
    const data = this.state.lesson
    let { tab1, tab2 } = this.state
    let res = data.filter((e) => (tab1 === 0 || tab1 === e.t1) && (tab2 === 0 || tab2 === e.t2))
    return (
      <Layout className="layout">
        <Header
          style={{
            backgroundColor: "#fff",
            borderBottom: "1px solid #ebebeb"
          }}
        >
          <div
            className="logo"
            style={{
              width: "120px",
              height: "65px",
              backgroundImage: "url(https://static001.geekbang.org/static/time/img/geek_elements/logo-wap.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          />
        </Header>
        <Content style={{
          padding: '0 50px',
          backgroundColor: "#fff"
        }}>
          <div className="wrapper">
            <h2
              style={{marginLeft: "15px"}}
            >
              我的课程
            </h2>
            <Tabs
              defaultActiveKey="0"
              onChange={this.callback1}
              size="large"
              style={{
                marginLeft: "15px"
              }}
            >
              <TabPane tab={"全部(" + data.length + ")"} key="0">
              </TabPane>
              <TabPane tab="未学完" key="1">
              </TabPane>
              <TabPane tab="已学完" key="2">
              </TabPane>
            </Tabs>
            <Tabs
              defaultActiveKey="0"
              onChange={this.callback2}
              type="card"
              size="large"
            >
              <TabPane tab="所有形式" key="0">
              </TabPane>
              <TabPane tab="专栏" key="1">
              </TabPane>
              <TabPane tab="视频课" key="2">
              </TabPane>
              <TabPane tab="微课" key="3">
              </TabPane>
              <TabPane tab="每日一课" key="4">
              </TabPane>
              <TabPane tab="其他" key="5">
              </TabPane>
            </Tabs>
            <List
              itemLayout="horizontal"
              dataSource={res}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar shape="square" size={75} src={item.image} />}
                    title={<a href="#" style={{display: "block", marginBottom: "25px"}}>{item.title}</a>}
                    description={"共" + item.lesson + "讲|已学" +
                      item.learned + "讲|学完" +
                      parseInt(item.learned / item.lesson * 100) + "%"
                    }
                  />
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "#fa8919",
                      borderColor: "#fa8919",
                      borderRadius: "4px"
                    }}
                  >开始学习</Button>
                </List.Item>
              )}
            />,
          </div>
        </Content>
      </Layout>
    )
  }
}

export default Lesson;