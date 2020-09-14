/**
 * @file limitFlow Node服务限制流量处理中间件
 * @desc 业务代码中的逻辑限流
 * @desc 常见的限流算法有：计数器、令牌桶、漏桶。这些都属于单机限流的范畴
 * @desc 另外为了限制某个资源被每个用户或者商户的访问次数，5s只能访问2次，或者一天只能调用1000次。这种需求，单机限流是无法实现的，这时就需要通过集群限流进行实现。
 * 如何实现？为了控制访问次数，肯定需要一个计数器，而且这个计数器只能保存在第三方服务，比如redis。
 */
import appConfig from './../../app.config'

const { enable, upperLimit, mode, rate } = appConfig.currentLimitedConfig

/**
 * 限制处理
 */
const limitHandle = (ctx) => {
  ctx.body = { data: null, status: false, message: '亲～人太多，被挤爆了！' }
}

/**
 * 令牌桶 Token bucket
 */
const TokenBucket = () => {
  let bucket = 0
  const callback = () => {
    setTimeout(() => {
      if (bucket < upperLimit) {
        bucket += 1
      }
      callback()
    }, 1000 / rate)
  }
  callback()
  return async (ctx, next) => {
    console.log('当前Token bucket  ', bucket)
    if (bucket <= 0) {
      console.log('Token bucket已消耗完  ', bucket)
      return limitHandle(ctx)
    }
    bucket -= 1;
    await next()
  }
}
/**
 * 漏桶 Leaky bucket
 * @desc 漏桶算法理解起来比较简单，可以粗略的认为就是注水漏水过程
 */
const LeakyBucket = () => {

}
/**
 * 计数器 Counter
 * @desc 弊端： 简单粗暴超过域值就拒绝请求，可能只是瞬时的请求量高，也会拒绝请求。
 */
const Counter = () => {
  let count = 0
  return async (ctx, next) => {
    if (enable) {
      console.log('当前Counter计数为  ', count)
      if (count > upperLimit) {
        console.log('计数器(Counter)达到上限，开始限流')
        return limitHandle(ctx)
      }
      count += 1
      await next()
      count -= 1
    } else {
      await next()
    }
  }
}

const limitFlow = [TokenBucket, LeakyBucket, Counter]

export default limitFlow[mode]
