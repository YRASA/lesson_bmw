1. css reset
  normalize.css(1rem = 32px)
  index.css css移动业务设置
2. 无状态组件的创建流程
  - 组件插入父级组件中, 思考好props
  - 组件的类型如果是无状态组件
      prop-types css propsTypes
      形参props
      return (<div></div>)
  - props 解构需要的props
  - 功能函数建议由父组件处理
      纯粹的负责 render
      函数复用
3.youth react hooks new developed method
    class Component -> function
    函数式编程
    class + constructor + 生命周期 + render -> function + react hooks
  - useCallback 缓存函数
  - useMemo
4.状态组件编写顺序
5.redux
  - 简单的redux 项目结构
    store.js createStore reducers
      中间件 thunk axios redux-thunk 支持异步
    reducers.js combineReducers
    actions.js 数据请求, 状态改变的触发都由actions来负责
      ActionTypes 可读性
  - redux API -> 设计状态(reducer + actions)
      初始值 from to 两个reducer函数
      函数 初始值 action return 初始值
      状态会怎么改变 动作的声明 SET_FROM
      - switch case
      - {type,payload} action
      - actionTypes 可读性
      - actions 写出来
  - 数据组件化
      1.connect 高阶返回原组件
        connect({
          mapState,
          mapDispatch
        })(Component)
      2.创建组件
      3.状态组件, 无状态组件重用方法
  - reducer
      1.action标准做法
      - 返回 { type:, payload: } 更新reducer
      状态
      - 组件里的事件、生命周期等功能主要是和数据、状态打交道, 都归为action来做
      - 所有的action export function
      在组件里引入需要的action
      - bindActionCreators
      action变成本地调用的函数
        dispatch
      - useMemo 缓存函数
      - connect 中去第二个参数返回 action

  1.action
    from 北京
    to 上海
    两个action 思想的切换
    盯修改的本质 redux

- from to 的复盘
    1.redux 哲学, 编程思想
    - reducer纯函数 返回状态及接收状态的更新
    那一刻只有一个状态与之对应, switch case
    - action actionTypes
        是更新reducer的使者 dispatch action
    from to 都有独立的reducer函数和action
    - exchangeFromTo()
        dispatch getState
  