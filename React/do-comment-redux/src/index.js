import React from 'react';
import ReactDOM from 'react-dom';
// 数据管理模式
// 创建stroe 中央仓库 数据管理架构
// createStore comments 放到中央仓库里去
import { createStore } from 'redux'; // 全家桶 三巨头 数据管理
import { Provider } from 'react-redux'; // Provider 提供
// 数据放到仓库里 和组件独立
// 数据开发可以独立 UI组件更纯粹
import CommentApp from './containers/CommentApp';
import commentsReducer from './reducers/comments'
// 仓库 单一状态树
const store = createStore(commentsReducer);

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)

// commentApp comments 父组件, props 传参

// react-router react-redux