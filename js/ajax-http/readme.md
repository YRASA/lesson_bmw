前端(fe) <=> http <=> 后端(rd) 数据库
## ajax
- 同步
一行接着一行执行
代码书写的顺序并不是执行顺序
- 异步

## node
- js chrome:v8 解释执行js
- 页面
- 网络

js只在浏览器里面运行
v8 单独拿到服务端,node

用node解释执行:
node index.js

1.双击打开
本地 file协议
2.live-server打开
IP http协议
将网页放到本地服务器

端口号:区别每一个运用
如:
数据库 8080
搜索服务 443

## http
- 请求行
    - 方法:GET juejin.com?query=js
    - url: juejin.com?query=js
    - version: 1.1
    
- 首(头)部
    - key: value
    - Content-Type: 内容类型

- 实体
    - 传输的具体数据

http://127.0.0.1:8081 用户输入 浏览器发起，返回首页 html
http://127.0.0.1:8081/search 前端 js 发起

前端用 ajax 发送请求 后端node req 接收 后端 node res 发出响应 前端ajax onreadystatechange接收渲染