- SPA: single page web application
    REACT VUE 单一页面 首屏加载过慢
- Next.js SSR 优点
    1.搭建轻松
    2.自带数据同步
    3.丰富插件 形成生态
    4.灵活配置
- 自动 create-next-app
    npx create-next-app XXX
    yarn create-next-app XXX
- 手动 自己配置
    yarn react react-dom next
    package.json -> script + "dev": "next"(调试) + "build": "next build"(打包) + "start": "next start"(开启服务)
    目录下新建pages文件夹, next.js会自动实现pages里的页面路由