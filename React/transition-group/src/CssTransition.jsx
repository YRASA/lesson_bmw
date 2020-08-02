import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

function Demo() {
  const [isIn, setIsIn] = useState(true)
  // *: classNames
  // 移进: *-enter ms *-enter-active *-enter-done
  // 移走: *-exit ms *-exit-active *-exit-done
  return (
    <>
      {/* className != classNames */}
      {/* timeout: 2000要与css中的一致 */}
      <CSSTransition timeout={2000} classNames="msg" in={isIn}>
        <div className="box"></div>
      </CSSTransition>
      <button onClick={() => { setIsIn(!isIn) }}>toggle</button>
    </>
  )
}

export default Demo