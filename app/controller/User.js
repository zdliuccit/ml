import Base from './Base'

class User extends Base {
  constructor(props) {
    super(props)
    this.getUserList = this.getUserList.bind(this)
  }
  
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
    this.data.data = userInfo
    this.data.status = true
    ctx.body = this.data
  }
}

export default new User()
