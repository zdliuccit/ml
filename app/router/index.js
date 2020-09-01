/**
 * 模块化处理router
 */
import Router from 'koa-router'
import user from './user'

const router = new Router()

router.use('/user', user.routes(), user.allowedMethods())
router.get('/', async (ctx) => {
  ctx.body = 'ml app test'
})

export default router
