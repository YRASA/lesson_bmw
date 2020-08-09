/*
 * @Author: Zzceaon
 * @Date: 2020-08-07 11:52:48
 * @LastEditTime: 2020-08-07 12:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\mobx\src\store\index.js
 */
import { observable, computed, action } from 'mobx'

class Todo {
  id = Math.random()
  // es7新特性 -> 可以在constructor之外定义
  @observable title
  @observable finished = false

  constructor(title) {
    this.title = title
  }
}
class TodoList {
  @observable todos = []
  // state 读 写
  @action
  addTodo = title => {
    if (!title) return
    this.todos.push(new TodoList(title))
  }
}

const store = new TodoList()
export default store