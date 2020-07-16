/*
 * @Author: Zzceaon
 * @Date: 2020-07-12 17:47:30
 * @LastEditTime: 2020-07-16 17:34:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\action\actionCreators.js
 */ 
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

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