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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步C完成');
            resolve()
        }, 100)
    })
}

// async function foo() {
//     await A()
//     await B()
//     await C()
// } // await就相当于.then但这种方法更美观

// foo()

async function foo() {
    await A() // await 会阻塞后续代码，将后续代码推入微任务队列
    console.log(1);
    await B()
    await C()
}

foo()