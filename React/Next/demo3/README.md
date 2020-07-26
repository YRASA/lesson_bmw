## Router传递参数
    Next.js: query ?id=1
    react-router: path:id=1

路由将要开始: routeChangeStart
路由完成: routeChangeComplete
beforeHistoryChange
路由错误: routeChangeError(404不算Error)
hashChangeStart
hashChangeComplete

请求业务只能写在getInitialProps里
Lazy Loading 模块moment 组件
异步加载自定义组件要用到 'next/dynamic'
自定head组件 -> SEO
return()里面换行才用<></>包裹

Next.js -> SEO
Antd !-> SEO
@zeit/next-css: 支持css用import引入
babel-plugin-import: 按需加载(antd打包太大, 只能按需加载)

.babelrc:
{
  "presets": ["next/babel"],  // presets: 延用
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",  // 按需加载
        "style": "css"  // 按需加载
      }
    ]
  ]
}