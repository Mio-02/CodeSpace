function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('张峰相亲了！');
            resolve('相亲成功')
        }, 2000)
    })
}

function marry() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('张峰结婚了！');
            resolve('战斗进行中')
        }, 1000)
    })
}

function baby() {
    setTimeout(() => {
        console.log('小峰出生啦！');
    }, 500)
}



// xq().then((a) => {
//     console.log(a);
//     marry().then((b) => {
//         console.log(b);
//         baby()
//     })
// })

// 官方给了更简化的写法：
xq()
.then((a) => {
    console.log(a);
    return marry()
    // 如果不写return，上下两个.then就形成了异步，所以顺序就会出问题，谁先执行完谁就出来了
})
.then((b) => {
    console.log(b);
    baby()
})