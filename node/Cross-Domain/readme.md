## 跨域
浏览器安全策略, 服务端没有限制

一个源向另外一个源发出请求
同源满足: 同协议 同域名 同端口
两个源不相同: 产生跨域
CORS: cross origin resource share

前后端分离, 前端和后端的域名不一样, 产生跨域

## 1
Access-Control-Allow-Origin

## http 头
请求头
accept

响应头
Set-Cookie

通用头:
Content-Type
- 前端请求的时候带给后端内容类型: x-www-from-url../, text/plain, multipart/form-data, application/json
- 后端告诉前端内容的类型: MIME

## 简单请求
跨域直接发出请求

## 非简单请求
- OPTIONS prefilght /apt
- POST /api

直接打开：origin  -> null

cookie 就是 存在前端的，cookie 和 服务器会话 一起用。
1：可以通过后端设置  
2：可以通过前端设置  document.cookie = 'abc=123'

Access-Control-Allow-Credentials: 前端发请求的时候允许携带 cookie

## JSONP
引入外部资源不受跨域限制, 不同于 xhr fetch:
img
link
script

借助script实现

1.jsonp后端返回的是什么 头条
    前端函数和后端返回的数据