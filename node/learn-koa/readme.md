- koa node的web开发框架
    koa 加速了 node web开发
    一个web服务就是一个web app
    koa 在3000端口上提供了http协议访问服务
    https://127.0.0.1:3000

    http.createServer()
    http node内置模块 createServer启动服务
    koa 封装了它们

    ctx content 上下文环境(request response)
    http协议 诞生于1991,用于传输学术论文
    基于请求(ctx.request)响应(ctx.response)的模式,在网络间传输HTML超文本的内容
    http/0.9 1991
- HTTP(web server 应用层协议)基于TCP(Transport Protocol)协议
    TCP 用户 运营商提供动态IP,网站 阿里云(IP) 传输, html
    TCP 连接 三次握手
    - 建立连接后,发送一个GET请求行(request method GET url / )的信息,
        GET / template.html
    - 服务器接收到请求信息后,读取对应的HTML文件,并将数据以ASCII的格式返回给浏览器
    - 断开连接

ctx.req ctx.res
请求头 响应头
req和res的关系:
n : 1
n大:高并发 node天生适合高并发(异步)
异步:createServer I/O file 数据库
php(同步 阻塞)
Go 多核计算

http网络通信协议 TCP/IP 7层
流动 node 流
建立一个通信管道(传输控制协议), stream
GET / 请求行
关闭断开连接 所以http可服务于更多用户
释放服务器的内存