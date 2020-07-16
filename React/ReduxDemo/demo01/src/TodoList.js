/*
 * @Author: Zzceaon
 * @Date: 2020-06-21 11:28:29
 * @LastEditTime: 2020-07-16 20:16:34
 * @LastEditors: Please set LastEditors
 * @Description: 列表文件
 * @FilePath: \Course\React\ReduxDemo\demo01\src\TodoList.js
 */
import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getMyListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

const data = [
  "早8点开晨会，分配今天的任务",
  "早9点和项目经理开需求沟通会",
  "早9点和项目经理开需求沟通会"
]

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  componentDidMount() {
    const action = getMyListAction()
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  storeChange() {
    this.setState(store.getState())
  }

  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;