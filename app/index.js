const Koa = require('koa')
const app = new Koa()
const Logger = require('koa-logger')
const Compress = require('koa-compress')
const Session = require('koa-session')
const KeyGrip = require('keygrip')
const appConfig = require('./../app.config')
const middles = require('./middleWares')
const router = require('./router')()

/** 设置签名cookie密钥。*/
app.keys = new KeyGrip(['zdliuccit', 'ml', 'app'], 'sha256');

/** session设置 */
const SESSION_CONFIG = {
  key: 'ml-app', /** cookie键 */
  maxAge: 86400000, /** session过期时间 */
  renew: false, /** 当会话即将过期时续订会话，因此我们可以始终保持用户登录。 */
};
app.use(Session(SESSION_CONFIG, app));

/**
 * 中间件,一组async函数，generator函数需要convert转换
 */
const middleWares = [
  Logger(),
  Compress(),
  ...middles
]

middleWares.forEach((middleware) => {
  app.use(middleware)
})

/**
 * 启动路由
 */
app.use(router.routes());
/**
 * 在当所有路由中间件最后调用.此时根据 ctx.status 设置 response 响应头
 */
app.use(router.allowedMethods());

/**
 * app错误监听
 */
app.on('error', (err) => {
  console.error('Server error: \n%s\n%s ', err.stack || '')
})

app.listen(appConfig.appPort)
