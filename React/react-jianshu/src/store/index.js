import { combineReducers } from 'redux-immutable';
import { createStore,
  // combineReducers,
  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from './reducers/home/index';
import { fromJS } from 'immutable';

// 多个 reducer 合并成一个
// redux生成的
// redux 原生的 combineReducers 返回的一个 reducer
// 全链路上的: {} [] 其他的: 字符串 true 本身就是不可变的
// let defaultRootState = fromJS({
//   home: Map { homeList => List },
//   detail: Map
// })
// function rootReducer(state = defaultRootState, action) {}
const rootReducer = combineReducers({
  home: HomeReducer
})
// rootReducer = { home: immutable }
// rootReducer 整个 rootReducer 并不是 immutable 的
// state = { title: fromJS() }
// HomeReducer 里面数据 immutable
// rootReducer 里面的数据 还是原生 js
// 创建 store 只能接收到 一个 reducer
// 所以创建之前合并一下

export default createStore(rootReducer)