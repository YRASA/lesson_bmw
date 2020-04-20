## this
**运行**时决定,跟定义时无关
书写的时候
```js
function foo() {
    this.a + b;
}
foo();
```
- 默认this指向window
- 对象.调用指向对象
- call/apply调用指向第一个参数

ES6中，有所改变：var、function声明的全局变量，依然是顶层对象的属性；let、const、class声明的全局变量不属于顶层对象(window)的属性，也就是说ES6开始，全局变量和顶层对象的属性开始分离、脱钩。