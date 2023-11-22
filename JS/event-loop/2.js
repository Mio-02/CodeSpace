console.log('start');

setTimeout(() => {
    console.log('setTimeout');

    setTimeout(() => {
        console.log('inner');
    })

    console.log('end');

}, 1000)

new Promise((resolve, reject) => {
    console.log('Promise');
})

.then(() => {
    console.log('then1');
})

.then(() => {
    console.log('then2');
})

// 运行过程看1.png