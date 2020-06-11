// console.log('国际化的 react + ts');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/login';
import './i18n';

ReactDOM.render(
  <HashRouter>
    <Switch>
      // 国际化的登陆页 login 登陆
      <Route excat path="/" component={ LoginPage } />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
)