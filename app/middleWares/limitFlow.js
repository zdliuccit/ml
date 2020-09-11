/**
 * @file limitFlow
 * @decs Node服务限制流量处理中间件
 */

const option = {
  rate: 100, // 令牌加入桶的速度
  threshold: 2, // 桶的上限
}
export default () => {
  let bucket = 0
  const threshold = option.threshold
  return async (ctx, next) => {
    console.log('当前bucket数------>', bucket)
    if (bucket > 100) {
      return ctx.body = {
        data: null,
        status: false,
        message: '访问人数太多了，请稍后重试'
      }
    }
    bucket += 1
    console.log('bucket数 + 1 ------>当前', bucket)
    next()
    bucket -= 1
    console.log('bucket数 - 1 ------>当前', bucket)
  }
}
