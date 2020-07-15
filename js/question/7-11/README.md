<!--
 * @Author: Zzceaon
 * @Date: 2020-07-15 12:09:01
 * @LastEditTime: 2020-07-15 18:34:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\question\7-11\README.md
--> 
##
1.既然 Vue 通过数据劫持可以精准探测数据在具体dom上的变化, 为什么还需要虚拟DOM diff呢?
  DOM diff: 得到需要更新的节点
  依赖收集: Vue 响应式(依赖收集, 劫持get、set)
  {
    a: 1
    b: null
  }
  <tempalte>
    <div>{{ data.a }}</div>
    <p>{{ data.a }}</P>
  </tempalte>
  let dep = {
    a: ['div', 'p']
    b: []
  }
  let dep = {
    a: ['xxx组件']
  }
  react: setState不知道页面上哪些地方需要更新, 需要diff去对比出哪些需要变化
  Vue: 依赖收集(那些地方依赖这个数据), 知道哪些地方需要更新的。Vue数据源比较多, 如果收集依赖时粒度非常细, 会导致依赖占用内存非常大, 尽量让收集的粒度不那么细(可以收集到组件级别)
  数据变化只知道哪个组件需要更新, 但是不知道组件的具体哪个需要更新, 需要借助DOM diff。组件内部diff

2.Number 范围(double)
  数组长度不能超出 2^32 - 1
  Number.MAX_SAFE_INTEGER
  >>>9007199254740991
  Number.MAX_VALUE
  >>>1.7976931348623157e+308(1.7976931348623157 * 10^308)
  arr = new Array(2 ** 32 - 1).fill(1)
  >>>崩溃
  
  let arr = new Array(2 ** 32 - 1)
  arr.length
  >>>4294967295
  arr.push(1)
  >>>崩溃

  Number.MIN_VALUE
  >>>5e-324(5 * 10^-324)

3.实现lodash的_.get
  get(obj, 'a.b.c')

4.Promise.all中任何一个Promise出现错误的时候都会执行reject, 导致其他正常返回的数据也无法使用, 你有什么办法解决?
  1.allSettled
  2.promise 定义的时候, 都采取resolve形式, 自己在then回调里判断结果可用与否

5.xss
  1.问题
  2.解决方式
    1.html entity编码、过滤(不合法事件)
    2.CSP: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP
    3.因为 xss 可能获取你的 cookie 所以我们可以设置重要的 cookie httpOnly 为 true

6.为什么setTimeout不阻塞js但为宏任务?
  ```js
  Promise.resolve().then(() => {
    console.log('promise1');
    Promise.resolve().then(() => console.log('promise3'));
  })
  setTimeout(() => {
    console.log('setTimeout1');
    Promise.resolve().then(() => {
      console.log('promise2');
    })
  }, 0)
  setTimeout(() => {
    console.log('setTimeout2')
  }, 0)
  ```
  引起回调触发的宿主对象不一样
  ## (宏)任务 由浏览器触发
  <!-- 计时、网络...线程 -->
  setTimeout(() => {
    // ...浏览器
  })

  ## microtask 由js触发: promise的then由js触发
  Promise.then(
    // ...
    js
  )
