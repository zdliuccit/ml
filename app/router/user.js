import UserController from '../controller/User'
import Router from 'koa-router'

const User = new Router();

User.get('/list', UserController.getUserList);

export default User
