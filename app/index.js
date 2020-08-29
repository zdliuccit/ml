const Koa = require('koa')
const app = new Koa()
const appConfig = require('./../app.config')
const koaLogger = require('koa-logger')
const koaCompress = require('koa-compress')
const middles = require('./middleWares')
// 中间件,一组async函数，generator函数需要convert转换
const middleWares = [
  koaLogger(),
  koaCompress(),
  ...middles
]

middleWares.forEach((middleware) => {
  app.use(middleware)
})

app.on('error', (err) => {
  console.error('Server error: \n%s\n%s ', err.stack || '')
})

app.listen(appConfig.appPort)
