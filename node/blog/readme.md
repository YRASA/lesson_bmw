- 博客网站 需要哪些技能?
    React 做 UI 组件化思维
    - 列表
    - 详情页
    - 评论
    node 做后端, 后台数据库 mysql mongodb
    怎样向应用提供数据?
    - 爬取 cherrio
    - MVC Model(数据库)-View(React)-Controller(Node)
    什么可以实现增删改查 但不像启用数据库那么繁琐?
    - 简单服务的话, json 文件作为资源, 代替数据库
    使用json-server 来启用它 restful api 格式
    /posts post {id:,title:,content:}

    /posts/show/1 看谋篇文章的URL 哪里错了?
    复杂 不过有动词show /posts/1 show的概念由谁表达?
    / GET 动词
    /posts POST
JSON 是数据格式
    设计一个URL
    汇款需求, 从账户1向账户2汇款500元, 如何设计?
    json-server 自己做了

    /accounts/:1/transfer/:500/to/:2
    restful 动词 + URL(不要出现动词)
    资源
    /transaction 转账 POST
    {from:1, to:2, amount:500.00}
    restful 是后端设计URL的国际规范

PUT: 用来传输文件,要求在请求报文的主体中包含文件内容,然后保存到请求URI指定的位置。(可用来修改文件资源)

npm init -y
yarn add express
yarn add json-server
.\node_modules\.bin\json-server --watch db.json --post 3300
添加package.json 再npm run json-server

做网站是为了暴露资源