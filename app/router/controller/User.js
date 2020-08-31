/**
 *
 * @param router
 * @constructor
 */
const User = (router) => {
  /**
   * 用户列表
   */
  router.get('/user/list', async (ctx) => {
    console.log(ctx);
    ctx.session.userinfo = {
      nickName: '秋风暮霞惋红曲',
      account: 'zdliuccit',
    };
    ctx.body = '用户列表'
  })
  /**
   * 获取用户信息
   */
  router.get('/user/:id', async (ctx) => {
    ctx.body = '获取用户信息'
  })
  
  /**
   * 用户登陆
   */
  router.post('/user/login', async (ctx) => {
    ctx.body = '用户登陆'
  })
  
  /**
   * 用户注册
   */
  router.post('/user/register', async (ctx) => {
    ctx.body = '用户注册'
  })
}
module.exports = User
