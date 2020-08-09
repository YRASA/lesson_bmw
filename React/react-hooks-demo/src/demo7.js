import React, { useState, useEffect, useRef } from 'react'

export const MyComponent = () => {
  const [visible, setVisible] = useState(false)
  // mount unmount
  return (
    <>
      { visible && <MyChildComponent /> }
      <button onClick={() => setVisible(!visible)}>Toggle Child Component visibility: </button>
    </>
  )
}

export const MyChildComponent = () => {
  const [filter, setFilter] = useState("")
  const [userCollection, setUserCollection] = useState([])
  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
    return () => (mountedRef.current = false)
  })
  const setUserCollectionSafety = userCollection => mountedRef.current && setUserCollection(userCollection)
  useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
        .then(response => response.json())
        // 不能做
        .then(json => setUserCollectionSafety(json))
    }, 2500)
  }, [filter])
  return (
    <div>
      <input type="text" value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {
          userCollection.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}