- router
    1.react-router react-router-dom react-router-config
    2.react-router 嵌套
      config router 配置一下
    当路由比较复杂时, 传统的Router/Route配置难以维护, 企业级的Router配置方案react-router-config, 清晰易管理, 可维护的routes/index.js配置
    layout 项目中总有几种布局, 匹配那个级别的所有路由
    routes react-router-config renderRoutes(route.routes)

- memo: React缓存组件
- styled-components 静态页面, 专门解决切页面问题, 不用过于组件化的语法, 页面有很多状态不可用
- (NavLink>TabItem>span{推荐})*3
- fastclick 移动端
    import fastclick from 'fastclick';
    fastclick.attach(document.body);