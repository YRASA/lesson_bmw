/*
 * @Author: Zzceaon
 * @Date: 2020-08-06 15:47:33
 * @LastEditTime: 2020-08-06 16:00:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\react-hooks-demo\src\demo.js
 */
import React, {useState} from 'react';

// export const MyComponent = props => {
//   // JSX -> dom node
//   const [myName, setMyName] = React.useState('John Doe')
//   return (
//     <> 
//       <h4>{myName}</h4>
//       <input type="text" value={myName}
//         onChange={(e) => setMyName(e.target.value)}/>
//     </>
//   )
// }

export const MyComponent = props => {
  const [userInfo, setUserInfo] = useState({
    name: 'John',
    lastname: 'Doe'
  })
  return (
    <> 
      <h4>{userInfo.name}{userInfo.lastname}</h4>
      <input type="text"
        value={userInfo.name}
        onChange={(e) => setUserInfo({
          ...userInfo, name: e.target.value
        })}
      />
      <input type="text"
        value={userInfo.lastname}
        onChange={(e) => setUserInfo({
          ...userInfo, lastname: e.target.value
        })}
      />
    </>
  )
}
