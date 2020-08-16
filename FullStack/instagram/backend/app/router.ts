import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // controller url -> render view
  // 路由列表 nginx 服务器代理 IP https://www.baidu.com -> IP -> nginx 80(负载均衡内网哪台机器) -> egg.js:7001
  router.get('/', controller.home.index);
  router.get('/api/login', controller.login.index);
};
