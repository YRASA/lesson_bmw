/*
 * @Author: Zzceaon
 * @Date: 2020-07-19 01:00:15
 * @LastEditTime: 2020-07-19 02:05:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdemo2\src\TodoList.js
 */
import React from 'react';
import { connect } from 'react-redux'
import { Input, Button, List } from 'antd'

const TodoList = (props) => {
  let { inputValue, list, inputChange, addItem, delItem } = props
  return (
    <div className="wrapper">
      <div>
        <Input
          placeholder="Basic usage" 
          value={inputValue}
          onChange={inputChange}
          style={{
            width: 200
          }}
        />
        <Button
          type="primary"
          onClick={addItem}
          style={{
            width: 60,
            marginLeft: 3
          }}
        >
          ADD
        </Button>
      </div>
      <div>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => delItem(index)}>{item}</List.Item>
          )}
          style={{
            width: 263,
            marginTop: 3
          }}
        />
      </div>
    </div>
  )
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: "input_change",
        value: e.target.value
      }
      dispatch(action)
    },
    addItem() {
      let action = {
        type: "add_item"
      }
      dispatch(action)
    },
    delItem(index) {
      let action = {
        type: "del_item",
        index
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)