import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import authStore from './store/auth'

{/* <PrivateRoute path="/collect" component={Collect} /> */}
function PrivateRoute(props) {
    // auth
    const isLogin = authStore.isLogin
    // react-router
    // <Route />
    const { path, component } = props
    return !isLogin ? <Redirect to="/login" /> : <Route path={path} component={component} />
}

export default PrivateRoute