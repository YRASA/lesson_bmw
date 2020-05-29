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
现实: 斑纹传输, 可以允许我们分段传输

## 解析
有限状态机FSM(finate state machine)
infinate