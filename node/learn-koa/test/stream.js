const KoaStatic = require('koa-static');
const Koa = require('koa');
const app  = new Koa();
app.use(KoaStatic('./'));
app.listen(8088);
// http://localhost:8088/template.html