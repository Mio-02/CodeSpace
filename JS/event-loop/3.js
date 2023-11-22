console.log('script start')
async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()
setTimeout(function () {
    console.log('setTimeout')
}, 0)
new Promise(resolve => {
    console.log('Promise')
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    })
console.log('script end')

// 如果是老版本的浏览器执行的过程看2.png
// 但浏览器给await开小灶，现在的V8引擎给await提了速，原本应该被推入微任务队列的await变成了同步代码立即执行了
// 所以3.js执行结果的打印顺序和2.png种标示的不同
// 这就是当代浏览器的事件循环机制