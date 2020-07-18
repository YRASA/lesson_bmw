/*
 * @Author: Zzceaon
 * @Date: 2020-07-16 16:45:14
 * @LastEditTime: 2020-07-16 16:50:35
 * @LastEditors: Please set LastEditors
 * @Description: 无状态组件(UI和业务分离)
 * @FilePath: \Course\Personl\listdeom\src\TodoListUI.js
 */ 
import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{margin: "10px"}}>
      <div>
        <Input
          placeholder={props.inputValue}
          style={{width: "250px", marginRight: "10px"}}
          onChange={props.inputChange}
          value={props.inputValue}
        />
        <Button
          type="primary"
          onClick={props.addItem}
        >
          Add
        </Button>
      </div>
      <div style={{width: "300px", margin: "10px"}}>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {props.deleteItem(index)}}>
          {item}
          </List.Item>)
        }
      />
      </div>
    </div>
  )
}
 
export default TodoListUI;