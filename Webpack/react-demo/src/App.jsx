import React from 'react';
import ReactDom from 'react-dom'
import { isNull, isZero } from './util'

isNull({})
// 原始webpack只处理ES5及以下的JS
const App = () => {
  return (
    <div>
      <h1>React大法好!</h1>
    </div>
  )
}

export default App
ReactDom.render(<App />, document.getElementById('app'))  // JSX