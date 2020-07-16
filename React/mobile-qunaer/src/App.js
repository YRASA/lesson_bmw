/*
 * @Author: Zzceaon
 * @Date: 2020-07-14 10:11:38
 * @LastEditTime: 2020-07-16 15:01:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\mobile-qunaer\src\App.js
 */ 
import React, { useCallback, useMemo } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import { connect } from 'react-redux';
import Journey from './components/journey/Journey.jsx';
import { bindActionCreators } from 'redux';
import { exchangeFromTo } from './store/action';

function App(props) {
  console.log(props)
  const { 
    from,
    to,
    dispatch
  } = props
  const onBack = useCallback(() => {
    window.history.back()
  }, [])
  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo
    }, dispatch)
  }, [])
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <from action='./query.html' className="from">
        <Journey from={from} to={to} {...cbs}/>
      </from>
    </div>
  );
}

export default connect(function mapStateToProps(state) {
  // 状态的读操作
  return state
}, function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
})(App);
// export default App;