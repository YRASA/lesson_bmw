import React from 'react';
import ReactDOM from 'react-dom'; // index.js 入口文件需要缝合dom关系
import CommentAPP from './CommentAPP'; // 模块机制
ReactDOM.render(
  <CommentAPP />,
  // 真实DOM
  document.getElementById('root')
)
