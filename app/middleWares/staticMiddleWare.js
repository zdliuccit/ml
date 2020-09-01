/**
 * 设置静态资源请求目录和设置缓存
 * @return {Promise.<void>}
 */
import serverStatic from 'koa-static'

const path = require('path')

export default function () {
  return serverStatic(path.join(process.cwd(), 'public'), { maxAge: 60 * 60 * 24 * 30 * 1000, gzip: true })
}
