const router = require('koa-router')();
const User = require('./controller/User')

module.exports = function () {
  User(router)
  return router
}
