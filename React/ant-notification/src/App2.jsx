import React from 'react';
import Notification from './Notification';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Notification>
        成功
        <h2>失败</h2>
      </Notification>
      {/* Notification、Progress 对应的 html 引入到当前组件里面 */}
      <Notification a={1} b={2} title={'h2'}/>
      <Progress percent={50}/>
    </div>
  );
}

export default App;