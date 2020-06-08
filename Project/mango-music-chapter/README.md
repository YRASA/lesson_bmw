1. 做React/Vue项目, 仿一个音乐类的
2. 做一个可以上线的业务 思路 架构 技能点

- react 组件 由组件component实例和 一个css文件styl
    create-react-app css/less styl
    不一定要用官方的create-react-app, 下次自己的项目就可以从这个目录开始 项目模板
    类文件大写 一个文件夹一个组件 便于维护和模块化
- 单页应用 Single Page Application SPA
    只有一个页面的应用
    提升网站的用户体验
    点击路由时不会重新刷新整个页面, 而是根据路由配置把相应的组件显示出来
- 根据界面 可以分析出 头尾不动 中间内容根据Route 匹配
- Loading 组件 在整个应用中是什么地位?
    哪个目录下创建?
    containers
    components 路由级别组件
    Loading 服务于任何listAPI 列表组件 通用组件

    1. 数据请求阶段, 显示loading
    2. 数据来了之后隐藏
    父组要给loading传参

    