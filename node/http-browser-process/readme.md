## req
浏览器: xhr fetch
node: http.get()

不同api -> http -> 一样

http: 超文本传输

- 调用xhr
```js
const xhr = new Xmlhttprequest();
xhr.setheader('Content-Type': 'application/json');
xhr.open('POST', ''api.com', true);
xhr.onload = function() {
    
}
xhr.send({a: 1, b: 2});
```
- 浏览器拼接报文
    http1.1 报文(纯文本):
    - 首行\r\n
    - 首部\r\n
    - \r\n
    - 实体\r\n

## 解析报文
split('\r\n');

限制: 必须等到拿到一个完整的报文
现实: 报文传输, 可以允许我们分段传输

## 解析
有限状态机FSM(finate state machine)
infinate

浏览器解析报文: body(html), headers, 响应行
html怎么渲染出来? 浏览器也要解析html
js怎么被执行? 浏览器也要解析js

解析成什么?

## 编译原理
代码都是字符串
- 词法分析(分词): 代码切割成一个个最小的单位
- 语法分析: 栈 LL LR
- 生成中间代码
- 生成目标代码

词法分析:
我今天很高兴 -> 我 今天 很 高兴
const net = require('net'); -> const net = require 'net'
```js
function cal(str) {

}
let str = '34 + 567 -890'
1. 34 + 567 - 890
```

语法分析:
```js
{
    person: '我',
    time: '今天',
    do: '很高兴'
}
```
```js
{
    statement: {
        type: 'class',
        loc: {
            row: 4,
            column: 5
        }
        className: 'Xmlhttprequest',
        constructor: {
            type: 'function',
            functionName: ''
        }
    }
}
```
```jsx
<div>
    <span></span>
</div>
```

1：遇到开始标签入栈，同时把这个标签最作为栈顶元素的字节点
2：遇到结束标签就 出栈

DOM 树, AST 抽象语法树
栈