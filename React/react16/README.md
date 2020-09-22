{
  type: 'div',
  children: [
    {type: 'span', children: []},
    {}
  ]
}
react16: fiber
输入: 用户交互 优先级更高
页面的更新
遍历fiber树的时候可以中断
setState
forceUpdate

Fiber reconciler 主要目标:
  - 能够把可中断的任务切片处理。
  - 能够调整优先级，重置并复用任务。
  - 能够在父元素与子元素之间交错处理，以支持 React 中的布局。
  - 能够在 render() 中返回多个元素。
  - 更好地支持错误边界。

- Suspense在DidMount前
- 组件(loading)在DidMount后