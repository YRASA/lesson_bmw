1.setTimeout
2.Promise
3.请求
4.addEventListener
5.页面

浏览器内部有很多线程
1.定时器触发线程
2.http
3.GUI线程

IntersectionObserver

什么是Event-Loop:
  浏览器协调用户交互、渲染、网络等任务
```js
setTimeout(() => {
  console.log(1)
}, 0)
Promise.resolve(3).then(console.log)
console.log(2)
>>> 2 3 1
```

宏任务、任务
setTimeout, 整体的一段script

微任务(由js本身引起的)
Promise.then MuatationObserver Process.nextTick(node)

## 流程
1.从宏任务队列里面取出**一个**执行
2.从微任务队列里面取出**一个**执行, 如果在执行过程中又产生了微任务, 再次重复第二步
3.有可能进入浏览器的更新渲染
  1.reAnimationframe 回调
  2.执行 IntersectionObserver 回调
  3.重新绘制渲染(两个宏任务之间)

以60FPS为例, 每一帧花费16.6666ms
渲染:
  一个宏任务 -> 清空微任务过程 -> 渲染 -> 一个宏任务 -> 清空微任务过程 -> 渲染 ->......