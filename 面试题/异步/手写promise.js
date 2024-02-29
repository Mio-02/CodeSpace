// class MyPromise {
//   constructor(executor) {

//     const resolve = () => {}

//     const reject = () => {}

//     executor(resolve, reject)
//   }
// }



// //或者不用class的语法，用es5的写法：
// function MyPromise(executor) {
//   function resolve() {

//   }

//   function reject() {

//   }

//   executor(resolve, reject)
// }



class MyPromise {
  constructor(executor) {
    this.state = 'pending' // promise的状态
    this.value = undefined // 接收resolve的参数
    this.reason = undefined // 接收reject的参数
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        // 把then中的回调触发掉
        this.onFulfilledCallbacks.forEach(cb => cb(value))
      }
    }

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'reject'
        this.reason = reason
        this.onRejectCallbacks.forEach(cb => cb(reason))
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // then要干的事就是把onFulfilled存起来，供resolve调用

  }
}

let p = new MyPromise((resolve, b) => {
  resolve('ok')
})

p.then(res => {
  console.log(res)
})

console.log(p);