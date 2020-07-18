<!--
 * @Author: Zzceaon
 * @Date: 2020-06-21 10:50:17
 * @LastEditTime: 2020-07-17 10:49:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ReduxDemo\demo01\README.md
--> 
## Redux DevTools
const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

## 中间件
  - 什么时候会用到这个插件？比如在Dispatch一个Action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware（中间件）。在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由。 这个中间件可以使用是Redux-thunk来进行增强(当然你也可以使用其它的)，它就是对Redux中dispatch的加强
  - 中间件不是React的中间件，而是Redux的中间件
  - Redux-thunk
  - Redux-saga

## ES6 generator
  - Generator是一个迭代器生成函数，其返回值是一个迭代器（Iterator），可用于异步调用。
    ```js
    function* tell() {
      console.log('执行a处理');
      yield 'a';
      console.log('执行b处理');
      yield 'b';
      console.log('执行c处理');
      return 'c';
    }
    let k = tell();
    // 执行next()的时候，会运行到第一个yield为止
    console.log(k.next());  // 执行a处理
                            // {value: "a", done: false}
    // 执行next()的时候，会运行到第二个yield为止
    console.log(k.next());  // 执行b处理
                            // {value: "b", done: false}
    // 执行next()的时候，会运行到第三个yield为止
    console.log(k.next());  // 执行c处理
                            // {value: "c", done: true}
    console.log(k.next());  // {value: undefined, done: true}
    ```
  - 比如某个事物只有三种状态（状态A，状态B，状态C），而这三种状态的变化是 状态A => 状态B => 状态C => 状态A ，这就是状 态机。Generator特别适用于处理这种状态机。
    ```js
    // A，B，C三种状态循环
    function* state(){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();

    console.log(status.next()); // {value: "A", done: false}
    console.log(status.next()); // {value: "B", done: false}
    console.log(status.next()); // {value: "C", done: false}
    console.log(status.next()); // {value: "A", done: false}
    console.log(status.next()); // {value: "B", done: false}
    ```
  - async 函数就是 Generator 函数的语法糖。

## Effects
  -在 redux-saga 的世界里，Sagas 都用 Generator 函数实现。我们从 Generator 里 yield 纯 JavaScript 对象以表达 Saga 逻辑。 我们称呼那些对象为 Effect。Effect 是一个简单的对象，这个对象包含了一些给 middleware 解释执行的信息。 你可以把 Effect 看作是发送给 middleware 的指令以执行某些操作（调用某些异步函数，发起一个 action 到 store，等等）。
  - 你可以使用 redux-saga/effects 包里提供的函数来创建 Effect。
  - Saga辅助函数
      辅助函数，是在 Effect 创建器的基础之上构建的（译注：即高阶 API）
      - takeEvery(pattern, saga, ...args)
          在发起的 action 与 pattern 匹配时派生指定的 saga。
          每次发起一个 action 到 Store，并且这个 action 与 pattern 相匹配，那么 takeEvery 将会在后台启动一个新的 saga 任务。
  - Effect 创建器
      每个函数都会返回一个 plain Javascript object (纯文本 Javascript 对象) 并且不会执行任何其它的操作。
      执行是由 middleware 在上述迭代过程中进行的。
      middleware 检查每个 Effect 的信息，并进行相应的操作。
      - put(action)
          创建一条 Effect 描述信息，指示 middleware 发起一个 action 到 Store。