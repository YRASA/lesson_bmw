<!--
 * @Author: Zzceaon
 * @Date: 2020-06-21 10:50:17
 * @LastEditTime: 2020-07-16 18:34:12
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
  什么时候会用到这个插件？比如在Dispatch一个Action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware（中间件）。在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由。 这个中间件可以使用是Redux-thunk来进行增强(当然你也可以使用其它的)，它就是对Redux中dispatch的加强，