## 状态

```js
let isLogin = false;  // state
// login-component
isLogin = true;
// logout-component
isLogin = false;
// 支付
isLogin = 123
检查 isLogin
bug
```

## redux
设计一套修改state的流程(单向)
在修改变量过程中加入一些环节，状态的改变可控(函数式编程)