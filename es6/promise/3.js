function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            resolve() // 得手动确认代码执行成功，下面同理，否则不会接上then的c()
        }, 1000)
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            resolve()
        }, 1500)
    })
}

function c() {
    console.log('c');
}

Promise.all([a(), b()]).then(c)
// .then(c)
// 和
// .then(() => {
//     c()
// })
// 没什么区别

// all必须要接收到的所有的Promise状态都为resolve，then才会调用