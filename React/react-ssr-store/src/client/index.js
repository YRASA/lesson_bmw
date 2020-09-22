/*
 * @Author: Zzceaon
 * @Date: 2020-09-18 19:24:20
 * @LastEditTime: 2020-09-18 19:38:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-ssr-store\src\client\index.js
 */
import React from 'react'
import ReactDom from 'react-dom'
import Header from '../common/Header'

ReactDom.hydrate(<Header />,
  document.getElementById('root')
)