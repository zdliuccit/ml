/**
 * 模块化处理router
 */
import Router from 'koa-router'
import user from './user'

const router = new Router()

// router.use('/user', user.routes(), user.allowedMethods())
router.get('/', async (ctx) => {
  console.log('')
  const userInfo = {
    nickName: '秋风暮霞惋红曲',
    account: 'zdliuccit',
  }
  ctx.session.userInfo = userInfo
  ctx.body = {
    message: '',
    status: false,
    data: userInfo
  }
})

export default router
