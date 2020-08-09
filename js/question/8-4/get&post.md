## POST GET
一个是req body, 一个是querystring (a=1&b=2)
在浏览器
用户输入url
link script GET 参数也只能放到url里面去了
xmlHttpRequest http postman 只要客户端服务端约定好, 参数放到哪里是不受限制的

baidu.com/search?s=js
组成url的一部分

从协议本身来看, 并没有限制GET传递参数不能放到body, POST传递参数不可以放到querystring

一个url由哪些部分组成?

- 语义不一样 GET POST
- GET资源可以缓存, POST不能缓存
- GET url 长度有限(浏览器限制), POST req body 不受限制
- GET不安全 POST更安全一点  其实都是不安全的, http明文传输, https