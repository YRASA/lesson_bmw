<!--
 * @Author: Zzceaon
 * @Date: 2020-07-10 21:11:41
 * @LastEditTime: 2020-07-10 21:19:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\module\README.md
--> 
## commonJS
导出：
module.exports = function() {}
module.exports = {}
导入：
require

1.commentjs 一定是要, 代码运行起来才指导引入了哪些模块
2.可以出现在逻辑分支里

## es-module
1. import/export 不论你写在哪，都会提前执行
2. 在代码静态分析(代码不用执行代码)，就可以分析出你引入了哪些模块

AMD
CMD
UMD: 统一模块化方案
```js
(function() {
  // 判断代码最终执行的环境到底是 node 还是浏览器
})()
```
CJS
es