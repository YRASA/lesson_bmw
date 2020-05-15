# 计算机网络
- a标签,怎么样点击它不跳转
- 浏览器输入 http://www.baidu.com http协议
  会发生什么? 状态码
    307 临时重定向
    200
    https://www.baidu.com 跳转到 加密的http协议 https
    浏览器可以读懂状态码
    1.http://www.baidu.com
        res writeHead(307) 
        Response Header -> Location: https://www.baidu.com/
      redirect
    2.https://www.baidu.com

    1XX 正在处理中
    2XX 成功
    3XX 跳转
    4XX 客户端错误 404
    5XX 服务器端错误 500 503 服务器端不能响应

cookie是短暂保存在客户端，sessionStorage是短暂保存在服务器端，locaStorage是永久保存在本地  
