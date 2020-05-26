import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/index';
import Create from './Page/Create/index';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={} />
      <Route path="/create" component={} />
    </BrowserRouter>
  );
}

export default App;
