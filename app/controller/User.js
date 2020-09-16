import { UserModel } from './../db'

class User {
  async getUserList(ctx, next) {
    const userInfo = [
      {
        nickName: '秋风暮霞惋红曲',
        account: 'zdliuccit',
      }
    ]
    await new Promise((resolve => {
      setTimeout(() => {
        resolve()
      }, 2000)
    }))
    ctx.body = [userInfo]
  }
  
  async login(ctx) {
    const user = await UserModel.findUser()
    ctx.body = user
  }
  
  async signOut(ctx) {
  }
  
  async register(ctx) {
    const result = await UserModel.register()
    ctx.body = result
  }
}

export default new User()
