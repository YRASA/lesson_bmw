import React, { Fragment, useState, createContext } from 'react';
import { Provider, connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
const context = createContext();  // 特殊(跨层级)state
// connect
{/* <Provider store={store}/> */}
// const { Provider, Consumer } = context;

const { createStore, combineReducers } = require('redux')
let isLogin = false;
// isLogin = true
let posts = [];
// 状态 reducer（纯函数）
// state 上一次的状态
// createStore 经过 reducer 生成 store    ： 状态默认值
// dispatch action 也要 reducer 生成 store： 用户触发
// reducer 兼顾两者：判断 
//
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');
function loginReducer(state = isLogin, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      // state = !state
      console.log(3333)
      return !state;            // 返回 新的state，不是修该原来那个变量
    default:                   // default 默认值
      return state; 
  }
  // return false;
}
function postsReducer(state = posts, action) {
  switch (action.type) {
    case POSTS_STATUS:
      return action.newPosts;
    default :
      return state
  }
}
// action：纯对象（{}）, type 字段：区分这个action 干啥的，常量, 整个应用唯一
// 自研状态管理库：单向

const loginAction = {
  type: LOGIN_STATUS,
  a: 1
}
const postAction = {
  type: POSTS_STATUS,
  newPosts: [{ a: 1 }, { a: 2 }]
}
// 分了 login posts
// 接受一个
// combineReducers 集合
const rootReducer = combineReducers({
  login: loginReducer,
  posts: postsReducer
})
// 状态存到 store
// createStore（需要返回值） 也调用了 reducer
// createStore 没有指定 任何 action type
const store = createStore(rootReducer);
console.log(store);
// mapStateToProps
console.log('now', store.getState());

// action - reducer

// mapDispatchToProps
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
// stateFul => class state
// stateLess => function react16(hook 一系列 api, useXXXX) state
function Login() {
  return (
    <div>
      Login
      {/* <Consumer>
        {
          (obj) => {
            // 全局的 store
            console.log(obj);
            return (
              <span style={{ color: obj.state.theme }}>span</span>
            )
          }
        }
      </Consumer> */}
    </div>
  )
}
function Header(props) {
  // class this.props
  // FC
  console.log(props);
  return (
    <div>
      Header
      {/* <Login theme={theme}/> */}
      <Login />
      { props.login ? '1' : '0' }
      <button onClick={ () => props.changeLoginStatus() }>
        btn
      </button>
      {/* Login 还有其他组件 <Avatar theme={theme}></Avatar> */}
    </div>
  )
}
// 获取全局store上的数据, 也可以 Consumer 来获取
// store里的数据是全局的, Header 只要与 header 相关的数据
// {login: true, posts: []}
// mapState从全局的store过滤一下当前组件需要的一些数据
// Consumer 用connect
// 取到
function mapState(state) {
  // 把想要的数据return出来
  return {
    login: state.login
  }
}
// toProps
// 修改数据
function mapDispatch(dispatch) {
  return {
    changeLoginStatus() {
      dispatch(loginAction)
    }
  }
}
const ConnectedHeader = connect(mapState, mapDispatch)(Header);
function Footer() {
  return 'Footer'
}
function App() {
  // this.state = {}
  // let res = [{ theme: 'res' }, function setTheme() {}]
  // let [s, set] = res;
  // Provider 提供
  // Consumer 消费
  const [state, setTheme] = useState({ theme: 'red' });
  console.log(state);
  // {}
  let obj = {
    state,
    setTheme,
    obj1: {
      obj2: {}
    }
  };
  let isLogin = true;
  let foo = () => {};
  // <Provider value={obj/isLogin/foo}></Provider>
  return (
    // connect mapDispatch
      <Provider store={store}>
        {/* Provider 内部的组件才能获取 Provider提供的数据
        获取 Consumer */}
        <Fragment>
          {/* <Header theme={state.theme}/> */}
          <ConnectedHeader />
          <Footer />
        </Fragment>
        {/* <App /> */}
      </Provider>
  );
}

export default App;
