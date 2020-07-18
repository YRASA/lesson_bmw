/*
 * @Author: Zzceaon
 * @Date: 2020-07-19 01:00:15
 * @LastEditTime: 2020-07-19 01:33:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdemo2\src\TodoList.js
 */
import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
  let { inputValue, list, inputChange, addItem, delItem } = props
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={inputChange}
        />
        <button onClick={addItem}>增加</button>
      </div>
      <div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index} onClick={() => delItem(index)}>{item}</li>
              )
            })
          }
        </ul>
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