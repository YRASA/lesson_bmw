/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 10:31:29
 * @LastEditTime: 2020-08-08 22:44:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\App.js
 */ 
import React from 'react';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import store from './store/index'
import routes from './routes/index.js'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          {/* useReducer + useContext -> redux */}
          {/* <Data> */}
            { renderRoutes(routes) }
          {/* </Data> */}
        </HashRouter>
      </Provider>
  );
}

export default App;
