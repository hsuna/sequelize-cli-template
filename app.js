import Koa from 'koa';

import bodyparser from 'koa-bodyparser';

import reportRouter from './router/report';
import apiRouter from './router/api';

import db from './db';

//import utils from './utils';
import { HOST } from './config';

const app = new Koa();

// 开启跨域
//app.use(utils.cors)

//用bodyparser 来解析post和url信息中的参数
app.use(bodyparser());
app.use(async (ctx, next) => {
    // the parsed body will store in ctx.request.body
    // if nothing was parsed, body will be an empty object {}
    ctx.body = ctx.request.body;
    await next();
});

// 加载路由
app.use(reportRouter.routes())
   .use(reportRouter.allowedMethods())
   .use(apiRouter.routes())
   .use(apiRouter.allowedMethods());

   // catch 404 and forward to error handler
app.use((ctx, next) => {
   let err = new Error('Not Found');
   err.status = 404;
   next(err);
});
  
// error handler
// no stacktraces leaked to user unless in development environment
app.use((err, ctx, next) => {
    ctx.status(err.status || 500);
    ctx.render('error', {
      message: err.message,
      error: (app.get('env') === 'development') ? err : {}
    });
});
  

/**同步模型 */
db.sequelize.sync({ 
    //force: true //强制同步模型
}).then(_ => {
    console.log("Server successed to start");
}).catch(err => {
    console.log("Server failed to start due to error: %s", err);
});

app.listen(HOST.port);
console.log("Magic happens at http://localhost:" + HOST.port);