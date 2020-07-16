/*
 * @Author: Zzceaon
 * @Date: 2020-07-11 23:38:59
 * @LastEditTime: 2020-07-16 17:38:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\TodoList.js
 */ 
import React, { Component } from 'react';
import store from './store';
import { inputChangeAction, addItemAction, deleteItemAction, getListAction } from './action/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
import './mock/data'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.addItem = this.addItem.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  componentDidMount() {
    axios.get('/data')
      .then((res) => {
        const data = res;
        const action = getListAction(data)
        store.dispatch(action)
      })
  }
  render() { 
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        inputChange={this.inputChange}
        addItem={this.addItem}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
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