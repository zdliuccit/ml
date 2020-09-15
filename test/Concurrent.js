const axios = require('axios')

// const httpUrl = 'http://localhost:7878/user/list'
const httpUrl = 'http://47.99.66.195:7676/user/list'
const heapStack = [] // // 堆栈

const Concurrent = (number) => {
  for (let i = 0; i < number; i++) {
    heapStack.push(() => axios.get(httpUrl))
  }
  heapStack.forEach((func, index) => {
    func().then(res => {
      console.log(`第${index}次接口请求成功`, res.data)
    })
  })
  // setTimeout(() => {
  //   Concurrent(number)
  // }, 1000)
}
Concurrent(200)
