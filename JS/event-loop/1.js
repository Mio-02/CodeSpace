let a = 1
console.log(a);

setTimeout(() => {
    console.log(a);
}, 1000)

// let b = 2
// console.log(b);

for (let i = 0; i < 10000; i++) { // 假设运行耗时了1s

} // 如果是这样的话上面那个计时器就会两秒后才会出结果