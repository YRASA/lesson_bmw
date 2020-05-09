<div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div>

DOM 树 AST Tree Abstract

对象字面量,表达能力
JSON描述一下

{
  name: 'san',
  sex: '男
}

html document 关系:
- url 输入 开打页面之后发生了什么
    download index.html html标签
    1.空白页面,背后发生了:启动了一个tab 进程1(主进程)
    2.windows.url = http://127.0.0.1:9389/js/ats/index.html
        html 文档标记语言
    - tab 主进程 url
        启动一个网络请求 进程2(子进程) url http://127.0.0.1:9389/ html文件
    - 渲染页面进程

    WEB应用:多进程架构
    当我们用chrome打开页面时
    启动了4个进程 应用进程(pid 资源计算和资源调用的最小单元) 浏览器运行
    tab 负责一次页面渲染需要的主进程
    两个子进程 Network Service http 请求 200
    GPU 计算 高速css 绘制

    GPU 加速 chrome为了让页面加载更快,使用了GPU加载页面(战胜IE的原因)

    html 文本 html/text

    将文本转变成dom对象,在内存里面
    chrome v8
    BOM Browser Object Model
    DOM Document Object Model

  abstract syntax tree 抽象语法树

  什么api可以把所有的css都查询出来
  document.styleSheets