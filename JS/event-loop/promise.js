function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步A完成');
            resolve()
        }, 1000)
    })
}

function B() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步B完成');
            resolve()
        }, 500)
    })
}

function C() {
    setTimeout(() => {
        console.log('异步C完成');
    }, 100)
}

A()
.then(() => { // .then 虽然会默认返回promise对象，但是当.then的回调有人为返回的promise对象时，.then默认的promise会失效
    return B()
})
.then(() => {
    C()
})

// 由于.then .then 一多起来看着不美观，所以更新了别的方法 --- async.js