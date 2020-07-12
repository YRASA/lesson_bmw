/*
 * @Author: Zzceaon
 * @Date: 2020-07-11 23:38:59
 * @LastEditTime: 2020-07-12 17:53:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\TodoList.js
 */ 
import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import { inputChangeAction, addItemAction, deleteItemAction } from './action/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.addItem = this.addItem.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.inputChange = this.inputChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return (
      <div style={{margin: "10px"}}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{width: "250px", marginRight: "10px"}}
            onChange={this.inputChange}
            value={this.state.inputValue}
          />
          <Button
            type="primary"
            onClick={this.addItem}
          >
            Add
          </Button>
        </div>
        <div style={{width: "300px", margin: "10px"}}>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
        />
        </div>
      </div>

    )
  }
  inputChange(e) {
    const action = inputChangeAction(e.target.value)
    store.dispatch(action)
  }
  addItem() {
    const action = addItemAction()
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  deleteItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}
 
export default TodoList;