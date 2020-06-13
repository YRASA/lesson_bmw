// 递归
// 如果是纯函数: 输入相同, 输出也相同
// f(x) = x + 10
// f(10) = 20 // 10 -> 计算出一个20, 缓存一下 { 10: 20 }
// f(10) = 20 // 10 -> 没必要计算了 取缓存
// f(10) = 20 // 10 -> 没必要计算了 取缓存
// f(20)
function _add10(x) {
  return x + 10
}
let cache1 = {};
function add10(x) {
  if (cache1[x] !== undefined) {
    console.log('取出缓存');
    return cache1[x];
  }
  let res = x + 10;
  // k - v
  console.log('经过计算了')
  cache1[x] = res;
  return res;
}
console.log(add10(10));
console.log(add10(10));
console.log(add10(10));

// let ten = 10;
// function add10(x) {
//   return x + ten
// }
// add10(10);  // 20
// ten = 11;
// add10(10);  // 21

// 多个函数都要缓存呢?
// 功能
function _buildUrl(url, obj) {
  let parts = [];
  for (let key of Object.keys(obj)) {
    parts.push(`${key}=${obj[key]}`)
  }
  return `${url}?${parts.join('&')}`
}
let cache2 = {};
function buildUrl(url, obj) {
  let k = url + JSON.stringify(obj);
  console.log(k);
  if (cache2[k] !== undefined) {
    console.log(1);
    return cache2[k];
  }
  let parts = [];
  for (let key of Object.keys(obj)) {
    parts.push(`${key}=${obj[key]}`)
  }
  let res = `${url}?${parts.join('&')}`;
  cache2[k] = res;
  console.log(2);
  return res;
}
console.log(buildUrl('api.com', { a: 1, b: 2 }));
console.log(buildUrl('api.com', { a: 1, b: 2 }));
console.log(buildUrl('api.com', { a: 1, b: 2, c: 3 }));

// 雷同? 封装
// 1.不同 通过参数传进来, 功能不一样, 在js里面实现某个功能(放到函数里面完成)
// 2.公用 内部: 缓存(2.1 let cache; 2.2 if() {}; 2.3 cache[] = res;)
// 过程: 上面提到的 2.1 2.2 2.3 三个步骤, 完成缓存的一个过程
// 2.1 2.2 2.3 多个地方都需要这样一个过程(一段逻辑)
// 函数式: 过程抽象

// 输入是一个函数
function memorize(func) {
  let cache = {};
  return function(...args) {
    let k = JSON.stringify(args);
    if (cache[k] !== undefined) {
      console.log('from cache');
      return cache[k];
    }
    // 计算
    let res = func(...args);
    cache[k] = res;  // 函数调用需要参数
    console.log('cal');
    return res;
  }
}
// _add10 纯函数
let memo_add10 = memorize(_add10);  // 之前: true [] {} string 现在: 函数 _add10(20)
// memo_add10 变成了具有缓存功能的函数
memo_add10(10);
memo_add10(10);
memo_add10(10);
// let sum1 = memorize(_add10)(10);
// let sum2 = memorize(_add10)(10);
// let sum3 = memorize(_add10)(10);
// let sum4 = memorize(_add10)(10);
// 不能这样, 因为调用memorize()会初始化cache
// 调用memorize()之后再调用memo_add10(10) 延长了cache的闭包
let memo_buildUrl = memorize(_buildUrl);  // _buildUrl('api.com', { a: 1, b: 2 })
memo_buildUrl('api.com', { a: 1, b: 2 });
memo_buildUrl('api.com', { a: 1, b: 2 });
memo_buildUrl('api.com', { a: 1, b: 2 });

// memorize

let arr = [];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((el) => {
  console.log(el)
})