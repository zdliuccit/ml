const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
});
app.use(async ctx => {
  ctx.body = 'Hello World Hello World'
})

app.listen(3000)
