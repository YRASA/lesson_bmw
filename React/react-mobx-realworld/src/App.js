/*
 * @Author: Zzceaon
 * @Date: 2020-06-17 11:03:35
 * @LastEditTime: 2020-06-26 15:52:21
 * @LastEditors: Please set LastEditors
 * @Description: 入口文件
 * @FilePath: \Course\React\react-mobx-realworld\src\App.js
 */ 
import React from 'react';
import { Provider } from 'mobx-react';
import { Layout, Row, Col } from 'antd';
import articleStore from './store/articleStore';
import Home from './pages/home';
import logo from './logo.svg';
import './util/request.js';
import './App.css';
// 每一个模块对应 store
const { Header, Content, Footer } = Layout;
const store = {
  articleStore
}
function App() {
  return (
    <Provider {...store} >
      <Layout>
        <Header>
          
        </Header>
        <Content className="site-layout">
          <Row>
            <Col offset={3} span={18}>
              <Home />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
