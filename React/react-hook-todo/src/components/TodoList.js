/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 10:39:54
 * @LastEditTime: 2020-07-20 11:33:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hook-todo\src\components\TodoList.js
 */ 
/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 10:39:54
 * @LastEditTime: 2020-07-20 10:54:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hook-todo\src\components\TodoList.js
 */ 
import React, { useState } from 'react';
import { Input } from 'antd'
import { List } from 'antd/lib/form/Form';

const { Item } = List
const TodoList = ({ todos, onToggleFinished }) => {
  // 删除
  const onDelete = e => {

  }
  return (
    <div className="list-wrapper">
      { todos.length === 0 ? (
        <p>暂无待办事项</p>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={({id, text, finished}, idx) => {
            const itemClasses = className({
              "list-item": true,
              "list-item--finished": finished
            })
            return (
              <Item className="list-item list-item--finished">
                <img src="" alt="" className="list-item--avatar"/>
              </Item>
            )
          }}
        />
      ) }
    </div>
  )
}
