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

- search 业务
  接口文档
  - 热门搜索
    url /search/hot
    参数为 null
    返回值 result.hot
  - 搜索建议
    /suggest?keyword
    参数 keyword
    返回值 albums
  - 搜索结果
    /search?keyword=

数据接口汇总及分析
	当React项目分为组件和reducer后，界面由数据驱动，数据通过接口由后端提供，理清后端接口等于把握项目整体结构，通过总结后端接口，可以提升业务开发能力。
    1.前后端协作
       接口文档
       连调
       	    mock.js
           前端拿到设计稿（蓝湖 rem w h 不需要切图了），使用mock.js把前端调通，在项目上线前的几天与后端连调一下（axios baseURL 切换），提交测试，准备上线
    2.业务经验分析
    	 搜索
         - 热点搜索