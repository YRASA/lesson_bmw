import React, { createContext, useState, useEffect, useContext, useRef } from 'react';
// 跨层级传递数据
const context = createContext({
  theme: 'red'
})
// 消息队列 robbitmq
// 生产者消费者
function P() {
  let [obj, setTheme] = useState({theme: "red"})
  useEffect(() => {
    setTimeout(() => {
      // obj.theme = "blue"
      setTheme({
        theme: "blue"
      })
    }, 3000)
  }, [])
  return (
    <context.Provider value={obj}>
      <Child a="1" />
    </context.Provider>
  )
}
function Child() {
  // console.log("render1")
  return <Son />
}
// connect
function Son() {
  const ref = useRef()
  // 取出最近的context
  const value = useContext(context)
  // console.log("render2")
  // didMount
  useEffect(() => {
    console.log(ref.current)  // ref.current 该组件
    // ref.current.foucs() 聚焦
  }, [])
  return (
    <p>
      777
      <h2
        style={{color: value.theme}}
        ref={ref}
        // ref="ref1"
        // ref={() => {}}
      >
        h2
      </h2>
      {/* <context.Consumer>
        {
          (value) => {
            return (
              <h2 style={{color: value.theme}}>h2</h2>
            )
          }
        }
      </context.Consumer> */}
    </p>
  )
}
export default P;