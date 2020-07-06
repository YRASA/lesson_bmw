<!--
 * @Author: Zzceaon
 * @Date: 2020-07-06 10:07:09
 * @LastEditTime: 2020-07-07 01:14:21
 * @LastEditors: Please set LastEditors
 * @Description: 有赞面经
 * @FilePath: \Course\interview\有赞\README.md
--> 
css选择器有哪些?
- a[href="baidu.com]

选择器的优先级
1, 0, 0, 0 style=""
0, 1, 0, 0, id
0, 0, 1, 0 class
0, 0, 0, 1 元素 div h2
0, 0, 0, 0 * > + ~ 

10个class和1个id, id的优先级最高
.a.b.c.d.e.f.g.h.i.j

flex布局


position有哪些属性


absolute, relative, fixed定位的区别
相对于包含块

es6新特性、 es5与es6写法上有什么不同


let, const, var的区别
块级: let const, var 没有
var变量提升
暂时性死区

箭头函数和普通函数的区别
this(箭头函数this确定,new没有意义)

js异步处理方式有哪些


Promise有哪些静态方法
Promise.all
Promise.race
Promise.allSettled

js的数据类型


什么是闭包，闭包可以用来做什么
(作用域)词法环境

js有哪些类型检查的方法


instance of在原型链上的查找方式，是递归还是...？
1.判断构造函数上面存不存在Symbol.hasInstace方法, 如果有, 则取这个方法的返回值
2.否则判断左边对象的原型链上存不存在右边构造函数的.prototype

call,bind,apply的区别


浏览器事件模型，一个点击按钮点完发生了什么？
事件流

如何对多个事件进行处理？
1.有一万个li节点, 要给这些节点绑定事件, 事件代理
2.全局事件(定时器)一定要清理

跨域，同源策略


jsonp的原理


cors跨域有哪些头部


cookie,seesion,localstorage的区别