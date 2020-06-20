## React三大体系
- React.js 用于Web开发和组件的编写
- ReactNative 用于移动端开发
- ReactVR 用于虚拟现实技术的开发

## 生命周期

### Initialization
- setup props and state

### Mounting
- componentWillMount
- render
- componentDidMount

### Updation
- props
  - componentWillReceiveProps
  - shouldComponentUpdate(false下面不执行)
  - componetWillUpdate
  - render
  - componentDidUpdate

- states
  - shouldComponentUpdate(false下面不执行)
  - componetWillUpdate
  - render
  - componentDidUpdate

### Unmounting
- componentWillUnmount

Xiaojiejie.js:15 componentWillMount---
Xiaojiejie.js:40 3-render---
Xiaojiejie.js:19 componentDidMount---
Xiaojiejie.js:23 1-shouldComponentUpdate---
Xiaojiejie.js:28 2-componentWillUpdate---
Xiaojiejie.js:40 3-render---
XiaojiejieItem.js:13 child-componentWillReceiveProps---
Xiaojiejie.js:32 4-componentDidUpdate---
Xiaojiejie.js:23 1-shouldComponentUpdate---
Xiaojiejie.js:28 2-componentWillUpdate---
Xiaojiejie.js:40 3-render---
XiaojiejieItem.js:13 child-componentWillReceiveProps---
XiaojiejieItem.js:17 componentWillUnmount---
Xiaojiejie.js:32 4-componentDidUpdate---

npm install xxx
npm install -g xxx 全局
npm install -save xxx 生产环境
npm install -save-dev xxx 开发环境

## react-transition-group
- Transition
- CSSTransition
- TransitionGroup

.xxx-enter{}
.xxx-enter-active{}
.xxx-enter-done{}
.xxx-exit{}
.xxx-exit-active{}
.xxx-exit-done{}

## headerEdit
- ctrl + shift + p
- ctrl + Alt + i
- ctrl + Alt + t