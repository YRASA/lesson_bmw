import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants';
// const map = fromJS({a: 1, b: 2});
// const list = fromJS([1, 2, 3, 4]);
// console.log(map);
// console.log(list);
// 数据 状态
// 初始化: immutable
// 修改的时候: immutable concat特点
// 获取
// Map = {}, List = []
const defaultState = fromJS({
  homeList: []
})
// reducer: 原生 js 对象 改成
// state 已经变成 immutable 结构的

export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_HOME_LIST:
      const newHomeList = action.homeList;
      return state.set('homeList', newHomeList);  // immutable 都类似 concat
      // lodash 工具
      // return {
      //   homeList: action.homeList
      // };
    default:
      return defaultState;
  }
}