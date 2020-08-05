import React, { createContext, useReducer } from 'react'
import { fromJS } from 'immutable'
// useReducer + useContext -> redux
// context
export const CaregoryDataContext = createContext({})

// 相当于之前的constants
export const CHANGE_CATEGORY = 'singers/CHANGE_CATEGORY'
export const CHANGE_ALPHA = 'singer/CHANGE_ALPHA'

// reducer纯函数
const reducer = (state, action) => {
  switch(action.type) {
    case CHANGE_CATEGORY:
      return state.set('category', action.data)
    case CHANGE_ALPHA:
      return state.set('alpha', action.data)
    default:
      return state
  }
}

// Provider组件
export const Data = props => {
  // useReducer的第二个参数中传入初始值
  const [data, dispatch] = useReducer(reducer, fromJS({
    category: '',
    alpha: ''
  }))
  return (
    <CaregoryDataContext.Provider value={{data, dispatch}}>
      {props.children}
    </CaregoryDataContext.Provider>
  )
}