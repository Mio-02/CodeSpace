// let count = 0

// function foo() {
//   console.log(count);
// }

// function bar() {
//   setTimeout(() => {
//     count = 1
//   }, 1000)
// }

// bar()
// foo()
// 此时打印的count还是0，因为setTimeout是异步执行的，此时count还没被赋值，所以此时count还是0



let count = 0

function foo() {
  console.log(count);
}

function bar(callback) {
  setTimeout(() => {
    count = 1
    callback()
  }, 1000)
}

bar(foo)
// 这样我们的输出就是1了