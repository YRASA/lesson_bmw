import React from 'react';
import DemoUseEffect from './UseEffect';
import DemoUseContext from './UseContext';
import DemoUseReducer from './useReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <DemoUseEffect />
      <DemoUseContext />
      <DemoUseReducer />
    </div>
  );
}

export default App;
