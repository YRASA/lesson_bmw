/*
 * @Author: Zzceaon
 * @Date: 2020-07-21 10:08:25
 * @LastEditTime: 2020-07-22 12:38:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\sanyuan-music\src\App.js
 */ 
import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes/index'
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfontBase/iconfont'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
