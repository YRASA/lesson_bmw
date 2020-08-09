import React, { useState, useEffect } from 'react'

// export const MyComponent = () => {
//   const [username, setUsername] = useState("")
//   // unmount
//   useEffect(() => {
//     setTimeout(() => {
//       setUsername("Zzceaon")
//     }, 1500)
//   }, [])
//   return (
//     <>
//       <h4>{username}</h4>
//       <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
//     </>
//   )
// }

export const MyComponent = () => {
  const [visible, setvisible] = useState(false)
  return (
    <>
      { visible && <MyChildComponent /> }
      <button onClick={() => setvisible(!visible)}>Toggle Child component visibility</button>
    </>
  )
}
const MyChildComponent = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John',
    lastname: 'Doe'
  })
  // 挂载->上 卸载->下 更新->(下->上)
  useEffect(() => {
    // 上:
    console.log("Called when the component is mounted.")
    // unmount
    // 下:
    return () => console.log("Called on component unmounted, check the [] on the react use effect.")
  })
  return (
    <div>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <input type="text"
        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
      />
    </div>
  )
}