## 函数式编程
- 不可变
- 纯函数: 提倡写一个函数风格

## immutable

深拷贝浅拷贝: 各有优缺点

- 结构共享

可变:
- push
- shift
- pop
- splice

不可变:
- concat
- peek
- slice

```js
let defaultState = fromJS({})
function reducer(state = default, action) {
  switch() {
    case:
      return
  }
}
```

简历:
使用 react + immutable + react-router(x)
运用 immutable结构共享的特性 优化性能(√)