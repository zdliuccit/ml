/**
 * @file 中间件集合
 */
import staticMiddleWares from './static'
import limitFlowMiddleWares from './limitFlow'

/**
 * 中间件,一组async函数，generator函数需要convert转换
 */
export default (app) => {
  const middleWares = [
    staticMiddleWares(),
    limitFlowMiddleWares()
  ]
  middleWares.forEach((middleware) => {
    app.use(middleware)
  })
}
