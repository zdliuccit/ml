/**
 * @file 中间件集合
 */
import staticMiddleWare from './staticMiddleWare'

/**
 * 中间件,一组async函数，generator函数需要convert转换
 */
export default (app) => {
  const middleWares = [
    staticMiddleWare()
  ]
  middleWares.forEach((middleware) => {
    app.use(middleware)
  })
}
