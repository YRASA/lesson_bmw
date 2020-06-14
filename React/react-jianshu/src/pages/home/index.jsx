import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../../store/actions/home';

class Home extends Component {
  componentDidMount() {
    this.props.fetchHomeList();
    // this.props.dispatch(getHomeList)
  }
  state = {  }
  render() { 
    console.log(this.props)
    return ( 
      <div>
        home
        length: { this.props.homeList.length }
      </div>
     );
  }
}
// 获取 数据
// state: 整个 store, home 页面, 只要 home模块, 过滤一下
// 过滤完结果 (return) 都会由 connect 传给组件的 props
const mapStateToProps = (state) => {
  return {
    homeList: state.home.homeList,
    a: 1,
    b: 2,
    c: 3
  }
}
// 用户操作UI 引起页面变化
// 发起一个 action
// dispatch 行为 connect 传给组件
const mapDispatchToProps = (dispatch) => {
  return {
    // 逻辑尽可能封装在这里
    fetchHomeList() {
      dispatch(getHomeList)
    },
    // dispatch
  }
}
// 连接 桥 代理
// redux -> 桥 -> react
// redux store -> react Provider 全局 功能
// 每个组件里面都可以获取到它
// 规定获取 redux 里面数据, mapStateToProps 的 返回值, connect 返回值放到 props
export default connect(mapStateToProps, mapDispatchToProps)(Home);