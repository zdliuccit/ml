/**
 * 配置文件
 */
export default {
  appPort: 7878,
  db: {
    url: 'mongodb://localhost:27017/',
  },
  secret: 'zdliuccit',
  /**
   * 限流中间件配置
   * enable # 状态
   * mode # 限流三种算法 0:令牌桶(Token bucket)、1:漏桶(Leaky bucket)、2:计数器(Counter),默认 0.
   * rate # 令牌桶模式 令牌加入桶的速率
   * upperLimit # 上限
   * */
  currentLimitedConfig: {
    enable: true,
    mode: 0,
    rate: 100,
    upperLimit: 1000
  },
}
