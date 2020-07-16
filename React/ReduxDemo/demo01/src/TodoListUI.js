/*
 * @Author: Zzceaon
 * @Date: 2020-07-16 16:21:06
 * @LastEditTime: 2020-07-16 16:40:14
 * @LastEditors: Please set LastEditors
 * @Description: 无状态组件(UI和业务分离)
 * @FilePath: \Course\React\ReduxDemo\demo01\src\TodoListUI.js
 */ 
import React from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const TodoListUI = (props) => {
  return (
    <div style={{ margin: '10px' }} >
      <div>
        <input
          placeholder={ props.inputValue }
          style={{ width: '250px', marginRight: '10px' }}
          onChange={ props.changeInputValue }
          value={ props.inputValue }
        />
        <Button
          type="primary"
          onClick={props.clickBtn}
        >增加</Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }} >
        <List
          bordered
          dataSource = { props.list }
          renderItem = { (item, index) => (
            <List.Item
              onClick={() => {props.deleteItem(index)}}>
              { item }
            </List.Item>)
          }
        />
      </div>
    </div>
  )
}
 
export default TodoListUI;