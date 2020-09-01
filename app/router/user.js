import UserController from '../controller/User'
import Router from 'koa-router'

const router = new Router();

router.get('/list', UserController.getUserList);
router.get('/getUser', UserController.getUser);

export default router
