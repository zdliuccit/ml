/**
 * @file limitFlow
 * @decs Node服务限制流量处理中间件
 */

const option = {
  rate: 100, // 令牌加入桶的速度
  threshold: 100, // 桶的上限
}
export default () => {
  return async (ctx, next) => {
    let bucket = 0
    const rate = option.rate
    const threshold = option.threshold
    
  }
}
