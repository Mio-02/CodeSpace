// fs 读取文件
// promise + then / async + await ————解决方案



// 第一种：

// const fs = require('fs');

// function A() {
//     return new Promise((resolve, reject) => {
//         fs.readFile ('./a.txt', 'UTF-8', ((err, data) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(data);
//             resolve(data)
//         }))
//     })
// }

// function B() {
//     return new Promise((resolve, reject) => {
//         fs.readFile ('./b.txt', 'UTF-8', ((err, data2) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(data2);
//             resolve(data2)
//         }))
//     })
// }

// function C() {
//     return new Promise((resolve, reject) => {
//         fs.readFile ('./c.txt', 'UTF-8', ((err, data3) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(data3);
//             resolve(data3)
//         }))
//     })
// }

// async function readFileByPromise() {
//     await A()
//     await B()
//     await C()
// }

// readFileByPromise()



// 第二种：

// const fs = require('fs');

// function readFilePromise(str){
//     return  new Promise ((resolve, reject) => {
//         fs.readFile (str, 'utf-8', (err,data) => {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
  
// readFilePromise('./a.txt').then(data => {
//     console.log(data)
//     return readFilePromise('./b.txt')
// })
// .then((data) => {
//     console.log(data)
//     return readFilePromise('./c.txt')
// })
// .then((data) => {
//     console.log(data)
// })



// 第三种：

const fs = require('fs') // 引入fs模块

function readFileByPromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

(async function() {
    try {
        const f1 = await readFileByPromise('./a.txt')
        const f2 = await readFileByPromise('./b.txt')
        const f3 = await readFileByPromise('./c.txt')
        console.log(f1, f2, f3)
    } catch (e) {

    }
})()