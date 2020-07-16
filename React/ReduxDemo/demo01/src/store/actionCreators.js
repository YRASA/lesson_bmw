/*
 * @Author: Zzceaon
 * @Date: 2020-07-12 17:34:37
 * @LastEditTime: 2020-07-16 17:10:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ReduxDemo\demo01\src\store\actionCreators.js
 */ 
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
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