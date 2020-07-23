/*
 * @Author: Zzceaon
 * @Date: 2020-07-20 11:33:33
 * @LastEditTime: 2020-07-20 12:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hook-todo\src\api.js
 */ 
const todos = [
  {
    id: 1,
    text: "todo1",
    finished: true
  },
  {
    id: 2,
    text: "todo2",
    finished: false
  },
  {
    id: 3,
    text: "todo3",
    finished: true
  },
  {
    id: 4,
    text: "todo4",
    finished: false
  },
  {
    id: 5,
    text: "todo5",
    finished: false
  }
];
// 本地
// delay(2000)
// async await
// fn
// 应用场景
const delay = time => new Promise(resolve => setTimeout(resolve, time))  // 光杆司令(resolve不传参, 只等待time)
const withDeplay = fn => async (...args) => {
  await delay(1000)
  return fn(...args)
}
// withDeplay(function() {
  
// })({todos: todos})
export const fetchTodos = withDeplay(params => {
  return Promise.resolve({
    
  })
})
