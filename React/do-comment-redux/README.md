- react 小书
- react全家桶: react + react-router-dom + redux

React = data + UI

效果: 数据不需要以派发的方式来做(父组件 -> 子组件), 任何组件可随时和redux connect
搭建的时候: store -> Provier -> APP
connect(mapStateToProps)()
reducer可以有多个

1.状态收归redux管理, 由reducer提供
2.connect借到组件上去

yarn start
yarn add react-redux
yarn add redux