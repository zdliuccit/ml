import { UserModel } from './../db'

class User {
  
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
