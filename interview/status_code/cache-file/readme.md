HTTP 304: Not Modified 
标准解释是：Not Modified 客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。

res.writeHead和res,setHeader:
1.res.writeHead()必须在res.end之前调用
2.如果两者同时存在(没必要),要先写res.setHeader(),后写res.writeHead(),且res.writeHead()优先
3.res.writeHead()只能写一次,res.setHeader()可以多次使用

1. 启动web服务,将文件内容返回