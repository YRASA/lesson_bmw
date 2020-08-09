/*
 * @Author: Zzceaon
 * @Date: 2020-08-02 17:37:58
 * @LastEditTime: 2020-08-02 18:10:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\transition-group-router\src\App.js
 */ 
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TransitionGroupDemo from "./TransitionGroup/TransitionGroupDemo";
import Transition from "./Transition/Transition";
import CSSTransitionDemo from "./CssTransition/CssTransition";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter
} from "react-router-dom";

export default function App() {
  console.log("app render");
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/TransitionGroupDemo">TransitionGroupDemo</Link>
          </li>
          <li>
            <Link to="/Transition">Transition</Link>
          </li>
          <li>
            <Link to="/CSSTransitionDemo">CSSTransitionDemo</Link>
          </li>
        </ul>
      </nav>
      {Math.random()}
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <WithAnimatinoRouter /> */}
      <AnimationRouter />
    </Router>
  );
}
function AnimationRouter() {
  const location = useLocation();
  return (
    <>
      <br />
      {Math.random()}
      <TransitionGroup>
        <CSSTransition
          timeout={3000}
          key={Math.random()}
          classNames={`${Math.random()} slide`}
        >
          <Switch location={location}>
            <Route
              path="/TransitionGroupDemo"
              component={TransitionGroupDemo}
            />
            <Route path="/Transition" component={Transition} />
            <Route path="/CSSTransitionDemo" component={CSSTransitionDemo} />
            <Route path="/" component={Home} exact />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
const WithAnimatinoRouter = withRouter(AnimationRouter);
function Home() {
  return <h2>Home</h2>;
}