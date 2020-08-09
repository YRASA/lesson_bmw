## 打包库
    yarn add rollup -S
## 打包
    npx rollup index.js --file dist.js --format cjs
## commonjs循环
a.js:
console.log('a 开始');
exports.done = false;
const b = require('./b.js');
console.log('在 a 中，b.done = %j', b.done);
exports.done = true;
console.log('a 结束');

b.js:
console.log('b 开始');
exports.done = false;
const a = require('./a.js');
console.log('在 b 中，a.done = %j', a.done);
exports.done = true;
console.log('b 结束');

main.js:
console.log('main 开始');
const a = require('./a.js');
const b = require('./b.js');
console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);

当 main.js 加载 a.js 时， a.js 又加载 b.js。 此时， b.js 会尝试去加载 a.js。 为了防止无限的循环，会返回一个 a.js 的 exports 对象的 未完成的副本 给 b.js 模块。 然后 b.js 完成加载，并将 exports 对象提供给 a.js 模块。
当 main.js 加载这两个模块时，它们都已经完成加载。 因此，该程序的输出会是：
$ node main.js
main 开始
a 开始
b 开始
在 b 中，a.done = false
b 结束
在 a 中，b.done = true
a 结束
在 main 中，a.done=true，b.done=true


总结: 总体按照顺序来,require过的第二次require直接无视,原因如下:
## 缓存
    模块在第一次加载后会被缓存。 这也意味着（类似其他缓存机制）如果每次调用 require('foo') 都解析到同一文件，则返回相同的对象。
    多次调用 require(foo) 不会导致模块的代码被执行多次。 这是一个重要的特性。 借助它, 可以返回“部分完成”的对象，从而允许加载依赖的依赖, 即使它们会导致循环依赖。
    如果想要多次执行一个模块，可以导出一个函数，然后调用该函数。

JSON stringify 不能拷贝函数和嵌套关系
JSON.parse(JSON.stringify())返回新对象
JSON只能解析数组和字符串