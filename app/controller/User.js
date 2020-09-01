import Base from './Base'

class User extends Base {
  constructor(props) {
    super(props)
    this.getUser = this.getUser.bind(this)
  }
  
  async getUserList(ctx, next) {
    ctx.body = '用户列表'
  }
  
  async getUser(ctx, next) {
    const userinfo = {
      nickName: '秋风暮霞惋红曲',
      account: 'zdliuccit',
    }
    ctx.session.userinfo = userinfo
    this.data.data = userinfo
    this.data.status = true
    ctx.body = this.data
  }
}

export default new User()
