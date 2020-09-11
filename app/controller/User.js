import Base from './Base'

class User extends Base {
  constructor(props) {
    super(props)
    this.getUser = this.getUser.bind(this)
  }
  
  async getUserList(ctx, next) {
    ctx.body = {
      data: '用户列表',
      code: 200,
      message: ''
    }
  }
  
  async getUser(ctx, next) {
    console.log('getUser')
    const userInfo = {
      nickName: '秋风暮霞惋红曲',
      account: 'zdliuccit',
    }
    ctx.session.userInfo = userInfo
    this.data.data = userInfo
    this.data.status = true
    ctx.body = this.data
  }
}

export default new User()
