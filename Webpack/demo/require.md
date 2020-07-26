<!--
 * @Author: Zzceaon
 * @Date: 2020-07-26 20:09:14
 * @LastEditTime: 2020-07-26 20:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Webpack\demo\require.md
--> 
大体结构:
```js
(function(modules) {
  var installedModules = {};  // 放置已经加载的模块

  function __webpack_require__(moduleId) {  // 浏览器环境下的require
    // code
  }
  // ...
  return __webpack_require__(0);  // entry file  调用
})([/* modules array */]);
```

核心方法:
```js
function __webpack_require__(moduleId) {
  // Check if module is in cache
  if (installedModules[moduleId]) {
    return installedModules[moduleId].exports;
  }
  // Create a new module (and put it into the cache)
  var module = installedModules[moduleId] = {
    i: moduleId,
    l: false,
    exports: {}
  };
  // Execute the module function
  modules[moduleId].call(  // 执行模块逻辑
    module.exports,
    module, module.exports,
    __webpack_require__
  );
  // Flag the module as loaded
  module.l = true;
  // Return the exports of the module
  return module.exports
}
```

Webpack打包过程:
  - 从入口文件开始, 分析整个应用的依赖树
  - 将每个依赖模块包装起来, 放到一个数组中等待调用
  - 实现模块加载的方法, 并把它们放到模块执行的环境中, 确保模块间可以互相调用
  - 把执行入口文件的逻辑放在一个函数表达式中, 并立即执行这个函数