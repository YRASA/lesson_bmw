- telnet smtp.qq.com 25
- helo xxx (建立连接)
- auth login
- base64加密账户输入
- 出现334 -> base64加密密钥输入(IMPA)
- mail from:<自己账户>
- rcpt to:<目标账户>
- data(分隔线) 换行:按住shift+Enter
- from:scroll
  xxxxxxxxxx
  xxxxxxxxxxxx
  to: 123
  subject:hello
  dear xiaoli: hahaha
  .(结束符)

- npm i nodemailer
- index.js -> nodemailer模板
- node index.js

- npm i ejs
- node index.js

backfroundColor: blue qq邮箱不显示: 保证不会破坏网页
ejs不支持for of
<% %> 没有=: 语句被执行
ejs文件不能写注释