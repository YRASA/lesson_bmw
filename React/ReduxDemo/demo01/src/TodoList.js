/*
 * @Author: Zzceaon
 * @Date: 2020-06-21 11:28:29
 * @LastEditTime: 2020-07-12 17:43:37
 * @LastEditors: Please set LastEditors
 * @Description: 列表文件
 * @FilePath: \Course\React\ReduxDemo\demo01\src\TodoList.js
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

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
    store.subscribe(this.storeChange)
  }

  render() {
    return (
      <div style={{ margin: '10px' }} >
        <div>
          <input
            placeholder={ this.state.inputValue }
            style={{ width: '250px', marginRight: '10px' }}
            onChange={ this.changeInputValue }
            value={ this.state.inputValue }
          />
          <Button
            type="primary"
            onClick={this.clickBtn}
          >增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }} >
          <List
            bordered
            dataSource = { this.state.list }
            renderItem = { (item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{ item }</List.Item>) }
          />
        </div>
      </div>
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