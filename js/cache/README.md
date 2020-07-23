<!--
 * @Author: Zzceaon
 * @Date: 2020-07-20 14:47:53
 * @LastEditTime: 2020-07-20 16:18:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\js\cache\README.md
--> 
- readFile()方法-->异步读取文件
- readFileSync()方法是其同步方法的版本，会产生阻塞效果

live-server index.html --port=9090

- Cache-control: public
    表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存，即使是通常不可缓存的内容。（例如：1.该响应没有max-age指令或Expires消息头；2. 该响应对应的请求方法是 POST 。）
- Cache-control: private
    表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。私有缓存可以缓存响应内容，比如：对应用户的本地浏览器。
- Cache-Control: max-age=<seconds>
    设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与Expires相反，时间是相对于请求的时间。
- Cache-control: no-cache
    在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证(协商缓存验证)。

- 304状态码
    果客户端发送了一个带条件的GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个304状态码。简单的表达就是：服务端已经执行了GET，但文件未变化。

- Last-Modified
    The Last-Modified  是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。 它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。由于精确度比  ETag 要低，所以这是一个备用机制。包含有  If-Modified-Since 或 If-Unmodified-Since 首部的条件请求会使用这个字段。