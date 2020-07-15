import React, { useReducer, useCallback } from 'react';

// const initState = {
//   count: 0
// }
function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return {count: state.count + 1}
    case 'REDUCE':
      return {count: state.count - 1}
    default:
      return state
  }
}
// [1, 2] [1, 2]
function Counter() {
  const [store, dispatch] = useReducer(reducer, {count: 0})
  // 缓存: 避免重新定义
  // const handleAdd = () => {dispatch({type: 'ADD'})}
  const handleAdd = useCallback(() => {
    dispatch({type: 'ADD'})
  }, [])
  // []
  // []
  const handleReduce = useCallback(() => {
    dispatch({type: 'REDUCE'})
  }, [])
  return (
    <div>
      count: {store.count}
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReduce}>-</button>
    </div>
  )
}

export default Counter