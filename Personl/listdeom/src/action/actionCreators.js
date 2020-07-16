/*
 * @Author: Zzceaon
 * @Date: 2020-07-12 17:47:30
 * @LastEditTime: 2020-07-16 22:54:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\action\actionCreators.js
 */ 
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
import axios from 'axios'
import '../mock/data'
import store from '../store'

export const inputChangeAction = (value) => ({
  type: INPUT_CHANGE,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return () => {
    axios.get('/data')
      .then((res) => {
        const data = res.data.list
        const action = getListAction(data)
        store.dispatch(action)
      })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})