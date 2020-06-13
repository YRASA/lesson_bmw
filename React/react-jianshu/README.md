## 组件 重新渲染
有哪几种情况引起?
- state: state 变了
- 地址 -> react-router -> ?
- props 变了, react.createContext()

## 减少重新渲染
state props 对比过后没有任何变化 => 没有必要渲染

## simple react snippets
- imrc
- cc

当为fromJS时 is为深比较
当为Map时 is为浅比较