/*
 * @Author: Zzceaon
 * @Date: 2020-07-16 19:54:31
 * @LastEditTime: 2020-07-16 21:50:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ReduxDemo\demo01\src\store\sagas.js
 */ 
import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import '../mock/data'
import axios from 'axios'

// generator
function* mySaga(){
  yield takeEvery(GET_MY_LIST, getList)  // 等待监听
}

function* getList(){
  const res = yield axios.get('/data')
  const action = getListAction(res.data.list)
  yield put(action)
}

export default mySaga