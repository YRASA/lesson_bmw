/*
 * @Author: Zzceaon
 * @Date: 2020-07-16 22:50:55
 * @LastEditTime: 2020-07-16 22:58:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdeom\src\store\sagas.js
 */ 
import { takeEvery, put } from 'redux-saga/effects'
import { getListAction } from '../action/actionCreators'
import { GET_MY_LIST } from '../action/actionTypes'
import axios from 'axios'
import '../mock/data'

function* mySagas(){
  yield takeEvery(GET_MY_LIST, getList)
}
function* getList(){
  const res = yield axios('/data')
  const action = getListAction(res.data.list)
  yield put(action)
}

export default mySagas